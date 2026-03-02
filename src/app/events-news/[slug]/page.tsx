import type { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { fetchEventBySlug } from '@/lib/strapi';
import EventNewsDetailClient from './EventNewsDetailClient';

export const dynamic = 'force-dynamic';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://auxiliumcarona.org';

/** Make image URL absolute for Open Graph (Facebook, etc.) */
function absoluteImageUrl(url: string | undefined): string | undefined {
  if (!url) return undefined;
  if (url.startsWith('http')) return url;
  return url.startsWith('/') ? `${siteUrl}${url}` : url;
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    const item = await fetchEventBySlug(slug);
    if (!item?.title) return { title: 'Event / News' };

    const title = item.title;
    const description =
      typeof item.description === 'string'
        ? item.description.replace(/<[^>]*>/g, '').slice(0, 200)
        : item.subTitle ?? undefined;
    const imageUrl = absoluteImageUrl(item.eventMainImage || item.thumbnail);
    const pageUrl = `${siteUrl}/events-news/${encodeURIComponent(slug)}`;

    return {
      title,
      description: description ?? undefined,
      openGraph: {
        title,
        description: description ?? undefined,
        url: pageUrl,
        type: 'article',
        images: imageUrl ? [{ url: imageUrl, width: 1200, height: 630 }] : undefined,
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description: description ?? undefined,
        images: imageUrl ? [imageUrl] : undefined,
      },
    };
  } catch {
    return { title: 'Event / News' };
  }
}

export default async function EventNewsDetailPage({ params }: PageProps) {
  const { slug } = await params;
  let item = null;
  try {
    item = await fetchEventBySlug(slug);
  } catch (e) {
    console.error('Failed to load event:', e);
  }

  if (!item) {
    return (
      <div>
        <Navbar />
        <main className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Event/News Not Found</h1>
            <p className="text-gray-600">The requested item could not be found.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return <EventNewsDetailClient item={item} />;
}
