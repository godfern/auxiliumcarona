const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

/** When set (e.g. "1" or "true"), skip TLS verification for Strapi requests (dev only; fixes self-signed cert errors). */
const INSECURE_TLS = process.env.STRAPI_INSECURE_TLS === '1' || process.env.STRAPI_INSECURE_TLS === 'true';

async function strapiFetch(url: string): Promise<Response> {
  if (!INSECURE_TLS || !url.startsWith('https://')) {
    return fetch(url, { next: { revalidate: 60 } });
  }
  const { get } = await import('https');
  return new Promise((resolve, reject) => {
    const req = get(url, { rejectUnauthorized: false }, (res) => {
      const chunks: Buffer[] = [];
      res.on('data', (chunk) => chunks.push(chunk));
      res.on('end', () => {
        const body = Buffer.concat(chunks as unknown as Uint8Array[]).toString('utf8');
        resolve(
          new Response(body, {
            status: res.statusCode ?? 500,
            statusText: res.statusMessage ?? '',
            headers: new Headers(res.headers as HeadersInit),
          })
        );
      });
    });
    req.on('error', reject);
    req.end();
  });
}

/** App-facing event type used by components */
export interface EventNewsItem {
  id: number;
  type: 'event' | 'news';
  title: string;
  date: string;
  description?: string;
  thumbnail: string;
  slug: string;
  subTitle?: string;
}

/** Extended for detail page */
export interface EventNewsDetailItem extends EventNewsItem {
  subTitle?: string;
  longDescription?: string;
  mainImage?: string;
  gallery?: string[];
}

/** Strapi media format (populate=*) */
interface StrapiMedia {
  data: {
    attributes: {
      url: string;
      formats?: {
        thumbnail?: { url: string };
        small?: { url: string };
        medium?: { url: string };
        large?: { url: string };
      };
    };
  } | null;
}

interface StrapiMediaList {
  data: Array<{ attributes: { url: string } }>;
}

/** Raw Strapi event attributes from API */
interface StrapiEventAttributes {
  title?: string;
  Title?: string;
  slug?: string | null;
  subTitle?: string;
  date?: string;
  eventDate?: string;
  description?: string;
  longDescription?: string;
  thumbnail?: StrapiMedia;
  mainImage?: StrapiMedia;
  images?: { imagesUrl1?: string; imagesUrl2?: string };
  gallery?: StrapiMediaList | Array<{ url?: string; formats?: { thumbnail?: { url: string } } }>;
  type?: 'event' | 'news';
  createdAt?: string;
  publishedAt?: string;
}

interface StrapiEventEntry {
  id: number;
  documentId?: string;
  attributes?: StrapiEventAttributes;
  /** Strapi v5 flat response: fields at top level */
  title?: string;
  Title?: string;
  slug?: string | null;
  subTitle?: string;
  date?: string;
  eventDate?: string;
  description?: string;
  longDescription?: string;
  thumbnail?: StrapiMedia | { url?: string };
  mainImage?: StrapiMedia | { url?: string };
  images?: { imagesUrl1?: string; imagesUrl2?: string };
  gallery?: StrapiMediaList | Array<{ url?: string; attributes?: { url?: string }; formats?: { thumbnail?: { url: string } } }>;
  type?: 'event' | 'news';
  createdAt?: string;
  publishedAt?: string;
}

interface StrapiEventsResponse {
  data: StrapiEventEntry[];
  meta?: { pagination?: { page: number; pageCount: number; total: number } };
}

function imageUrl(path: string | undefined): string {
  if (!path) return '/images/school1.jpg';
  if (path.startsWith('http')) return path;
  return `${STRAPI_URL}${path}`;
}

/** Get URL from various Strapi shapes: v4 media, v5 .url, or images.imagesUrl1 */
function getMediaUrl(media: StrapiEventEntry['thumbnail'] | undefined): string {
  if (!media) return '/images/school1.jpg';
  const v4 = media as StrapiMedia;
  if (v4?.data?.attributes?.url) return imageUrl(v4.data.attributes.url);
  const v5 = media as { url?: string };
  if (typeof v5?.url === 'string') return imageUrl(v5.url);
  return '/images/school1.jpg';
}

/** Get thumbnail/main image from entry (images.imagesUrl1 or thumbnail or first gallery) */
function getEntryImageUrl(entry: StrapiEventEntry, a: StrapiEventAttributes & Record<string, unknown>): string {
  const images = (a.images ?? (entry as StrapiEventEntry).images) as { imagesUrl1?: string; imagesUrl2?: string } | undefined;
  if (typeof images?.imagesUrl1 === 'string') return imageUrl(images.imagesUrl1);
  const thumb = getMediaUrl(a.thumbnail ?? (entry as StrapiEventEntry).thumbnail);
  if (thumb !== '/images/school1.jpg') return thumb;
  const urls = getGalleryUrls(a.gallery ?? (entry as StrapiEventEntry).gallery);
  return urls[0] ?? '/images/school1.jpg';
}

function getGalleryUrls(
  mediaList: StrapiEventEntry['gallery'] | undefined
): string[] {
  if (!mediaList) return [];
  const v4 = mediaList as StrapiMediaList;
  if (Array.isArray(v4?.data)) {
    return v4.data.map((item) => imageUrl(item.attributes?.url)).filter(Boolean);
  }
  const arr = mediaList as Array<{ url?: string; attributes?: { url?: string }; formats?: { thumbnail?: { url: string } } }>;
  if (Array.isArray(arr)) {
    return arr
      .map((item) => item?.url ?? item?.attributes?.url ?? item?.formats?.thumbnail?.url)
      .filter((u): u is string => Boolean(u))
      .map((u) => imageUrl(u));
  }
  return [];
}

/** Normalise entry to a single attributes-like object (v4 has entry.attributes, v5 is flat) */
function getAttrs(entry: StrapiEventEntry): StrapiEventAttributes & Record<string, unknown> {
  const a = entry.attributes ?? entry;
  return a as StrapiEventAttributes & Record<string, unknown>;
}

function mapStrapiEventToItem(entry: StrapiEventEntry): EventNewsItem {
  const a = getAttrs(entry);
  const date =
    (a as Record<string, unknown>).eventDate ||
    a.date ||
    a.publishedAt ||
    a.createdAt ||
    new Date().toISOString();
  const title = (a as Record<string, unknown>).Title ?? a.title ?? '';
  const slug =
    (a.slug != null && a.slug !== '') ? String(a.slug) : (entry.documentId ?? String(entry.id));
  return {
    id: entry.id,
    type: (a.type as 'event' | 'news') || 'event',
    title: String(title),
    date: String(date),
    description: a.description ?? '',
    thumbnail: getEntryImageUrl(entry, a),
    slug,
    subTitle: a.subTitle ?? undefined,
  };
}

function mapStrapiEventToDetail(entry: StrapiEventEntry): EventNewsDetailItem {
  const item = mapStrapiEventToItem(entry);
  const a = getAttrs(entry);
  // Prefer images.imagesUrl1 (first image) for main/hero image, then Strapi mainImage media, then thumbnail
  const firstImage = getEntryImageUrl(entry, a);
  const mainImage =
    firstImage !== '/images/school1.jpg'
      ? firstImage
      : getMediaUrl(a.mainImage ?? (entry as StrapiEventEntry).mainImage) || item.thumbnail;
  return {
    ...item,
    subTitle: a.subTitle ?? undefined,
    longDescription: a.longDescription ?? undefined,
    mainImage,
    gallery: getGalleryUrls(a.gallery ?? (entry as StrapiEventEntry).gallery),
  };
}

/** Fetch all events from Strapi (populate=* for images) */
export async function fetchEvents(): Promise<EventNewsItem[]> {
  const url = `${STRAPI_URL}/api/events?populate=*`;
  const res = await strapiFetch(url);
  if (!res.ok) {
    throw new Error(`Strapi events failed: ${res.status} ${res.statusText}`);
  }
  const json: StrapiEventsResponse = await res.json();
  if (!Array.isArray(json.data)) return [];
  return json.data.filter((e): e is StrapiEventEntry => e != null && typeof e.id !== 'undefined').map(mapStrapiEventToItem);
}

/** Fetch a single event by slug or documentId (when slug is null in API) */
export async function fetchEventBySlug(slug: string): Promise<EventNewsDetailItem | null> {
  const encoded = encodeURIComponent(slug);
  let url = `${STRAPI_URL}/api/events?filters[slug][$eq]=${encoded}&populate=*`;
  let res = await strapiFetch(url);
  if (!res.ok) throw new Error(`Strapi event failed: ${res.status} ${res.statusText}`);
  let json: StrapiEventsResponse = await res.json();
  let entry = json.data?.[0];
  if (!entry && /^[a-z0-9]+$/i.test(slug) && slug.length >= 20) {
    url = `${STRAPI_URL}/api/events?filters[documentId][$eq]=${encoded}&populate=*`;
    res = await strapiFetch(url);
    if (res.ok) {
      json = await res.json();
      entry = json.data?.[0];
    }
  }
  if (!entry) return null;
  return mapStrapiEventToDetail(entry);
}

/** Base URL for Strapi media (for next/image src) */
export function getStrapiMediaUrl(path: string | undefined): string {
  return path ? imageUrl(path) : '/images/school1.jpg';
}
