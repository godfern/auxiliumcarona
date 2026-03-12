'use client';

import { useState, useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EventNewsCard from '../components/EventNewsCard';
import type { EventNewsItem } from '@/lib/strapi';

const EVENTS_PER_PAGE = 9;

interface EventsNewsClientProps {
  events: EventNewsItem[];
  initialPage?: number;
}

export default function EventsNewsClient({ events, initialPage = 1 }: EventsNewsClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [filter, setFilter] = useState<'all' | 'event' | 'news'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = useMemo(
    () =>
      events.filter((item) => {
        const matchesFilter = filter === 'all' || item.type === filter;
        const matchesSearch =
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (item.description ?? '').toLowerCase().includes(searchTerm.toLowerCase());
        return matchesFilter && matchesSearch;
      }),
    [events, filter, searchTerm]
  );

  const totalPages = Math.max(1, Math.ceil(filteredData.length / EVENTS_PER_PAGE));
  const currentPage = Math.min(Math.max(1, initialPage), totalPages);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * EVENTS_PER_PAGE,
    currentPage * EVENTS_PER_PAGE
  );

  const goToPage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    if (page <= 1) params.delete('page');
    else params.set('page', String(page));
    const query = params.toString();
    router.push(query ? `/events-news?${query}` : '/events-news');
  };

  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold mb-4">Events & News</h1>
            <p className="text-xl opacity-90">Stay updated with the latest happenings at Auxilium, Carona</p>
          </div>
        </section>

        <section className="py-8 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
              <div className="flex bg-white rounded-lg shadow-sm border">
                <button
                  onClick={() => setFilter('all')}
                  className={`px-6 py-2 rounded-l-lg font-medium transition-colors ${
                    filter === 'all' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setFilter('event')}
                  className={`px-6 py-2 font-medium transition-colors ${
                    filter === 'event' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Events
                </button>
                <button
                  onClick={() => setFilter('news')}
                  className={`px-6 py-2 rounded-r-lg font-medium transition-colors ${
                    filter === 'news' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  News
                </button>
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Search events and news..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
                />
                <svg
                  className="absolute left-3 top-2.5 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            <p className="text-gray-600 mb-6">
              {filteredData.length > 0
                ? `Showing ${(currentPage - 1) * EVENTS_PER_PAGE + 1}–${Math.min(currentPage * EVENTS_PER_PAGE, filteredData.length)} of ${filteredData.length} items`
                : `Showing 0 of ${filteredData.length} items`}
              {filteredData.length !== events.length && events.length > 0 && ` (filtered from ${events.length})`}
            </p>

            {paginatedData.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {paginatedData.map((item) => (
                    <EventNewsCard key={item.id} item={item} />
                  ))}
                </div>

                {totalPages > 1 && (
                  <nav className="mt-10 flex flex-wrap items-center justify-center gap-2" aria-label="Pagination">
                    <button
                      onClick={() => goToPage(currentPage - 1)}
                      disabled={currentPage <= 1}
                      className="px-4 py-2 rounded-lg font-medium bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white transition-colors"
                    >
                      ← Previous
                    </button>
                    <div className="flex gap-1">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                        <button
                          key={p}
                          onClick={() => goToPage(p)}
                          className={`min-w-[2.5rem] px-3 py-2 rounded-lg font-medium transition-colors ${
                            p === currentPage
                              ? 'bg-blue-600 text-white'
                              : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          {p}
                        </button>
                      ))}
                    </div>
                    <button
                      onClick={() => goToPage(currentPage + 1)}
                      disabled={currentPage >= totalPages}
                      className="px-4 py-2 rounded-lg font-medium bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white transition-colors"
                    >
                      Next →
                    </button>
                  </nav>
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33"
                  />
                </svg>
                <h3 className="mt-2 text-sm font-medium text-gray-900">No results found</h3>
                <p className="mt-1 text-sm text-gray-500">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
