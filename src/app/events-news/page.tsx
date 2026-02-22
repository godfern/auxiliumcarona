import { fetchEvents } from '@/lib/strapi';
import EventsNewsClient from './EventsNewsClient';

export default async function EventsNewsPage() {
  let events: Awaited<ReturnType<typeof fetchEvents>> = [];
  try {
    events = await fetchEvents();
  } catch (e) {
    console.error('Failed to load events:', e);
  }

  return <EventsNewsClient events={events} />;
}
