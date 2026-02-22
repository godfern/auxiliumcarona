import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { fetchEventBySlug } from '@/lib/strapi';
import EventNewsDetailClient from './EventNewsDetailClient';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  try {
    const item = await fetchEventBySlug(slug);
    if (item?.title) {
      return { title: item.title };
    }
  } catch {
    // ignore
  }
  return { title: 'Event / News' };
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
