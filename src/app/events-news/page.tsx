import { Suspense } from 'react';
import { fetchEvents } from '@/lib/strapi';
import EventsNewsClient from './EventsNewsClient';

export const revalidate = 30;

interface PageProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function EventsNewsPage({ searchParams }: PageProps) {
  let events: Awaited<ReturnType<typeof fetchEvents>> = [];
  try {
    events = await fetchEvents();
  } catch (e) {
    console.error('Failed to load events:', e);
  }

  const { page } = await searchParams;
  const currentPage = Math.max(1, Number.parseInt(String(page ?? '1'), 10) || 1);

  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50" />}>
      <EventsNewsClient events={events} initialPage={currentPage} />
    </Suspense>
  );
}
