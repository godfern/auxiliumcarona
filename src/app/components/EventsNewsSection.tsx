import Link from 'next/link';
import EventNewsCard from './EventNewsCard';

interface EventNewsItem {
    id: number;
    type: 'event' | 'news';
    title: string;
    date: string;
    description: string;
    thumbnail: string;
    slug: string;
}

// Mock data - in a real app this would come from an API or CMS
const mockEvents: EventNewsItem[] = [
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
    }
];

export default function EventsNewsSection() {
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {mockEvents.map((item) => (
                        <EventNewsCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
} 