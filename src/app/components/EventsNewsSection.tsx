import Link from 'next/link';
import EventNewsCard from './EventNewsCard';
import type { EventNewsItem } from '@/lib/strapi';

interface EventsNewsSectionProps {
  events: EventNewsItem[];
}

function sortByDateDesc(items: EventNewsItem[]): EventNewsItem[] {
  return [...items].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA;
  });
}

const MAX_LATEST_EVENTS = 6;

export default function EventsNewsSection({ events }: EventsNewsSectionProps) {
  const nonUpcoming = events.filter((e) => !e.isUpcoming);
  const latestEvents = sortByDateDesc(nonUpcoming.length > 0 ? nonUpcoming : events).slice(0, MAX_LATEST_EVENTS);
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

        {latestEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestEvents.map((item) => (
              <EventNewsCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <p className="text-gray-600">
            No events at the moment. Check that Strapi has published events and is reachable at{' '}
            <span className="font-mono text-sm">{process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}</span>.
            {process.env.NEXT_PUBLIC_STRAPI_URL?.includes('strapiapp.com') && (
              <span className="block mt-2 text-sm">
                Tip: On Vercel, add <code className="bg-gray-200 px-1 rounded">STRAPI_INSECURE_TLS=1</code> if you get connection errors.
              </span>
            )}
          </p>
        )}
      </div>
    </section>
  );
}
