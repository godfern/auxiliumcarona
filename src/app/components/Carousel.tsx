'use client';

import { useState, useEffect } from 'react';

interface CarouselItem {
    id: number;
    title: string;
    description: string;
    image: string;
}

const carouselItems: CarouselItem[] = [
    {
        id: 1,
        title: "Welcome to Our School",
        description: "Empowering young minds for a brighter future through quality education and innovative learning.",
        image: "/images/school1.jpg"
    },
    {
        id: 2,
        title: "Excellence in Education",
        description: "Our dedicated teachers and staff work together to provide the best learning experience for every student.",
        image: "/images/school2.jpg"
    },
    {
        id: 3,
        title: "State-of-the-Art Facilities",
        description: "Modern classrooms, science labs, and sports facilities to support comprehensive development.",
        image: "/images/school3.jpg"
    },
    {
        id: 4,
        title: "Community and Growth",
        description: "Building strong relationships and fostering personal growth in a supportive environment.",
        image: "/images/school4.jpg"
    }
];

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="relative w-full h-[500px] overflow-hidden rounded-lg shadow-lg">
            {/* Carousel Container */}
            <div
                className="flex transition-transform duration-500 ease-in-out h-full"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {carouselItems.map((item) => (
                    <div key={item.id} className="relative w-full h-full flex-shrink-0">
                        {/* Background Image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${item.image})` }}
                        >
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 flex items-center justify-center h-full text-white">
                            <div className="text-center max-w-4xl mx-auto px-6">
                                <h2 className="text-4xl md:text-6xl font-bold mb-4">
                                    {item.title}
                                </h2>
                                <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                aria-label="Previous slide"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                aria-label="Next slide"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {carouselItems.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentIndex
                            ? 'bg-white scale-125'
                            : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Auto-play Toggle */}
            <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="absolute top-4 right-4 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium transition-all duration-200"
                aria-label={isAutoPlaying ? 'Pause auto-play' : 'Start auto-play'}
            >
                {isAutoPlaying ? '⏸️ Pause' : '▶️ Play'}
            </button>
        </div>
    );
} 