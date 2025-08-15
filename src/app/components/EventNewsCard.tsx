import Link from 'next/link';
import Image from 'next/image';

interface EventNewsItem {
    id: number;
    type: 'event' | 'news';
    title: string;
    date: string;
    description: string;
    thumbnail: string;
    slug: string;
}

interface EventNewsCardProps {
    item: EventNewsItem;
}

export default function EventNewsCard({ item }: EventNewsCardProps) {
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const getTypeColor = (type: string) => {
        return type === 'event' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800';
    };

    return (
        <Link href={`/events-news/${item.slug}`} className="group">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                {/* Thumbnail */}
                <div className="relative h-48 overflow-hidden">
                    <Image
                        src={item.thumbnail}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Type badge */}
                    <div className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                        {item.type === 'event' ? 'Event' : 'News'}
                    </div>
                </div>

                {/* Content */}
                <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                        {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-3">
                        {formatDate(item.date)}
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed">
                        {item.description}
                    </p>

                    {/* CTA Button */}
                    <div className="mt-4">
                        <span className="inline-flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-800 transition-colors">
                            Read More
                            <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
} 