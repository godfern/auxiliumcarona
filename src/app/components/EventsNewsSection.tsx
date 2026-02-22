import Link from 'next/link';
import EventNewsCard from './EventNewsCard';
import { fetchEvents, type EventNewsItem } from '@/lib/strapi';

export default async function EventsNewsSection() {
  let events: EventNewsItem[] = [];
  try {
    events = await fetchEvents();
  } catch (e) {
    console.error('Failed to load events from Strapi:', e);
  }

  return (
    <section className="px-6 py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Latest Events & News</h2>
          <Link
            href="/events-news"
            className="text-blue-600 hover:text-blue-800 font-semibold transition-colors"
          >
            View All →
          </Link>
        </div>

        {events.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((item) => (
              <EventNewsCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <p className="text-gray-600">
            No events at the moment. Make sure Strapi is running at{' '}
            {process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}.
          </p>
        )}
      </div>
    </section>
  );
}
