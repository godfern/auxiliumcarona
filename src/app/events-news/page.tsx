'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EventNewsCard from '../components/EventNewsCard';

// Extended mock data with more items
const mockData = [
    {
        id: 1,
        type: 'event',
        title: 'Annual Sports Day',
        date: '2025-08-10',
        description: 'Join us for our annual sports day celebration with exciting competitions and activities.',
        thumbnail: '/images/school1.jpg',
        slug: 'annual-sports-day-2025'
    },
    {
        id: 2,
        type: 'event',
        title: 'Science Fair Exhibition',
        date: '2025-09-15',
        description: 'Students showcase their innovative science projects and experiments.',
        thumbnail: '/images/school2.jpg',
        slug: 'science-fair-exhibition-2025'
    },
    {
        id: 3,
        type: 'news',
        title: 'New Library Resources Available',
        date: '2025-07-20',
        description: 'We have added new digital resources and books to our library collection.',
        thumbnail: '/images/school3.jpg',
        slug: 'new-library-resources-2025'
    },
    {
        id: 4,
        type: 'event',
        title: 'Parent-Teacher Conference',
        date: '2025-07-15',
        description: 'Annual meeting between parents and teachers to discuss student progress.',
        thumbnail: '/images/school4.jpg',
        slug: 'parent-teacher-conference-2025'
    },
    {
        id: 5,
        type: 'news',
        title: 'Student Achievement Awards',
        date: '2025-07-15',
        description: 'Congratulations to our outstanding students who received special recognition.',
        thumbnail: '/images/staff.jpg',
        slug: 'student-achievement-awards-2025'
    },
    {
        id: 6,
        type: 'event',
        title: 'Cultural Festival',
        date: '2025-11-20',
        description: 'Celebrate diversity through music, dance, and cultural performances.',
        thumbnail: '/images/mother_general.jpg',
        slug: 'cultural-festival-2025'
    },
    {
        id: 7,
        type: 'news',
        title: 'Technology Integration Success',
        date: '2025-06-30',
        description: 'Our new digital learning platform has shown remarkable improvement in student engagement.',
        thumbnail: '/images/principal.jpg',
        slug: 'technology-integration-success-2025'
    },
    {
        id: 8,
        type: 'event',
        title: 'Art Exhibition',
        date: '2025-12-05',
        description: 'Showcasing student artwork and creative projects from the entire academic year.',
        thumbnail: '/images/manager.jpg',
        slug: 'art-exhibition-2025'
    },
    {
        id: 9,
        type: 'news',
        title: 'Community Service Initiative',
        date: '2025-06-15',
        description: 'Students participated in various community service activities across the city.',
        thumbnail: '/images/don-bosco.jpg',
        slug: 'community-service-initiative-2025'
    }
];

export default function EventsNewsPage() {
    const [filter, setFilter] = useState<'all' | 'event' | 'news'>('all');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredData = mockData.filter(item => {
        const matchesFilter = filter === 'all' || item.type === filter;
        const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    return (
        <div>
            <Navbar />
            <main className="min-h-screen bg-gray-50">
                {/* Header */}
                <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <h1 className="text-4xl font-bold mb-4">Events & News</h1>
                        <p className="text-xl opacity-90">Stay updated with the latest happenings at Auxilium, Carona</p>
                    </div>
                </section>

                {/* Filters and Search */}
                <section className="py-8 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
                            {/* Filter Tabs */}
                            <div className="flex bg-white rounded-lg shadow-sm border">
                                <button
                                    onClick={() => setFilter('all')}
                                    className={`px-6 py-2 rounded-l-lg font-medium transition-colors ${filter === 'all'
                                        ? 'bg-blue-600 text-white'
                                        : 'text-gray-600 hover:text-gray-900'
                                        }`}
                                >
                                    All
                                </button>
                                <button
                                    onClick={() => setFilter('event')}
                                    className={`px-6 py-2 font-medium transition-colors ${filter === 'event'
                                        ? 'bg-blue-600 text-white'
                                        : 'text-gray-600 hover:text-gray-900'
                                        }`}
                                >
                                    Events
                                </button>
                                <button
                                    onClick={() => setFilter('news')}
                                    className={`px-6 py-2 rounded-r-lg font-medium transition-colors ${filter === 'news'
                                        ? 'bg-blue-600 text-white'
                                        : 'text-gray-600 hover:text-gray-900'
                                        }`}
                                >
                                    News
                                </button>
                            </div>

                            {/* Search */}
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search events and news..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
                                />
                                <svg className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>

                        {/* Results Count */}
                        <p className="text-gray-600 mb-6">
                            Showing {filteredData.length} of {mockData.length} items
                        </p>

                        {/* Grid */}
                        {filteredData.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredData.map((item) => (
                                    <EventNewsCard key={item.id} item={item} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12">
                                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
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