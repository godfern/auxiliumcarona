import Link from 'next/link';
import EventNewsCard from './EventNewsCard';
import type { EventNewsItem } from '@/lib/strapi';

interface UpcomingEventsNewsSectionProps {
  events: EventNewsItem[];
}

function sortByDateAsc(items: EventNewsItem[]): EventNewsItem[] {
  return [...items].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateA - dateB;
  });
}

export default function UpcomingEventsNewsSection({ events }: UpcomingEventsNewsSectionProps) {
  const upcomingEvents = sortByDateAsc(events);
  return (
    <section className="px-6 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Upcoming News and Events</h2>
          <Link
            href="/events-news"
            className="text-blue-600 hover:text-blue-800 font-semibold transition-colors"
          >
            View All →
          </Link>
        </div>

        {upcomingEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((item) => (
              <EventNewsCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <p className="text-gray-600">
            No upcoming events at the moment.
          </p>
        )}
      </div>
    </section>
  );
}
