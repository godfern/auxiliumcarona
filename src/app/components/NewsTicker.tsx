"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface NewsItem {
    id: string;
    text: string;
    type: 'news' | 'event';
    slug?: string;
    date?: string;
}

const newsItems: NewsItem[] = [
    {
        id: "1",
        text: "Admissions open for 2025–26 batch!",
        type: "news"
    },
    {
        id: "2",
        text: "Annual Sports Day on August 10th.",
        type: "event",
        slug: "annual-sports-day-2025",
        date: "2025-08-10"
    },
    {
        id: "3",
        text: "Parent-Teacher Meeting on July 15th.",
        type: "event",
        slug: "parent-teacher-conference-2025",
        date: "2025-07-15"
    },
    {
        id: "4",
        text: "Science Fair Exhibition on September 15th.",
        type: "event",
        slug: "science-fair-exhibition-2025",
        date: "2025-09-15"
    },
    {
        id: "5",
        text: "New library resources now available for students.",
        type: "news"
    }
];

export default function NewsTicker() {
    const [index, setIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;

        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % newsItems.length);
        }, 4000);

        return () => clearInterval(timer);
    }, [isPaused]);

    const currentItem = newsItems[index];

    return (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg shadow-sm overflow-hidden">
            <div className="flex items-center justify-between p-4">
                {/* News Icon */}
                <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                        <div className={`w-3 h-3 rounded-full ${currentItem.type === 'event' ? 'bg-orange-500' : 'bg-blue-500'
                            }`}></div>
                    </div>

                    {/* News Text */}
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2">
                            <span className={`text-xs font-medium px-2 py-1 rounded-full ${currentItem.type === 'event'
                                    ? 'bg-orange-100 text-orange-800'
                                    : 'bg-blue-100 text-blue-800'
                                }`}>
                                {currentItem.type === 'event' ? 'Event' : 'News'}
                            </span>
                            {currentItem.date && (
                                <span className="text-xs text-gray-500">
                                    {new Date(currentItem.date).toLocaleDateString('en-US', {
                                        month: 'short',
                                        day: 'numeric'
                                    })}
                                </span>
                            )}
                        </div>
                        <p className="text-gray-800 font-medium mt-1 truncate">
                            {currentItem.text}
                        </p>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-2 ml-4">
                    {/* Pause/Play Button */}
                    <button
                        onClick={() => setIsPaused(!isPaused)}
                        className="p-2 text-gray-500 hover:text-gray-700 hover:bg-white rounded-full transition-colors"
                        title={isPaused ? "Play ticker" : "Pause ticker"}
                    >
                        {isPaused ? (
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        ) : (
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                            </svg>
                        )}
                    </button>

                    {/* View Details Button for Events */}
                    {currentItem.type === 'event' && currentItem.slug && (
                        <Link
                            href={`/events-news/${currentItem.slug}`}
                            className="inline-flex items-center px-3 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
                        >
                            View Details
                            <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    )}

                    {/* Navigation Dots */}
                    <div className="flex space-x-1 ml-2">
                        {newsItems.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setIndex(i)}
                                className={`w-2 h-2 rounded-full transition-colors ${i === index ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
