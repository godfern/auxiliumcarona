'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// Mock data - in a real app this would come from an API or CMS
const mockData = [
    {
        id: 1,
        type: 'event',
        title: 'Annual Sports Day',
        date: '2025-08-10',
        description: 'Join us for our annual sports day celebration with exciting competitions and activities. This year\'s event promises to be bigger and better than ever, featuring a wide range of sports including athletics, team sports, and individual competitions.',
        longDescription: `Our Annual Sports Day is one of the most anticipated events of the academic year, bringing together students, teachers, and parents in a celebration of athleticism, teamwork, and school spirit.

The day begins with an opening ceremony featuring a parade of all participating students, followed by the lighting of the sports torch. Throughout the day, students compete in various categories:

• Track and Field Events: 100m, 200m, 400m, 800m, long jump, high jump, shot put
• Team Sports: Football, basketball, volleyball, cricket
• Individual Sports: Badminton, table tennis, chess
• Fun Races: Sack race, three-legged race, wheelbarrow race

The event concludes with an awards ceremony where outstanding performers are recognized for their achievements. This year, we\'re also introducing new categories for adaptive sports to ensure inclusivity for all students.

Parents are encouraged to attend and cheer for their children. Food stalls and refreshments will be available throughout the day.`,
        thumbnail: '/images/school1.jpg',
        mainImage: '/images/school1.jpg',
        slug: 'annual-sports-day-2025',
        gallery: [
            '/images/school1.jpg',
            '/images/school2.jpg',
            '/images/school3.jpg',
            '/images/school4.jpg',
            '/images/staff.jpg',
            '/images/mother_general.jpg'
        ]
    },
    {
        id: 2,
        type: 'event',
        title: 'Science Fair Exhibition',
        date: '2025-09-15',
        description: 'Students showcase their innovative science projects and experiments.',
        longDescription: `The Science Fair Exhibition is a platform for students to demonstrate their scientific curiosity and creativity. This year\'s theme focuses on "Sustainable Solutions for Tomorrow\'s Challenges."

Students from grades 6-12 will present projects across various categories:

• Environmental Science: Renewable energy solutions, waste management, conservation projects
• Technology: Robotics, automation, smart home systems
• Biology: Plant growth experiments, animal behavior studies, health and nutrition
• Chemistry: Material science, chemical reactions, sustainable materials
• Physics: Energy conservation, motion studies, sound and light experiments

Each project will be evaluated by a panel of judges including science teachers, local scientists, and industry professionals. The top three projects in each category will receive special recognition and prizes.

The exhibition is open to the public and will feature interactive demonstrations, allowing visitors to engage with the projects and learn from our young scientists.`,
        thumbnail: '/images/school2.jpg',
        mainImage: '/images/school2.jpg',
        slug: 'science-fair-exhibition-2025',
        gallery: [
            '/images/school2.jpg',
            '/images/school3.jpg',
            '/images/school4.jpg',
            '/images/staff.jpg'
        ]
    },
    {
        id: 3,
        type: 'news',
        title: 'New Library Resources Available',
        date: '2025-07-20',
        description: 'We have added new digital resources and books to our library collection.',
        longDescription: `We are excited to announce a significant expansion of our library resources, made possible through generous donations and strategic investments in educational materials.

New Additions Include:

• Digital Learning Platforms: Access to premium online databases, e-books, and educational videos
• Physical Books: Over 500 new titles covering various subjects and reading levels
• Audio Books: A collection of 200+ audio books for students with different learning preferences
• Reference Materials: Updated encyclopedias, dictionaries, and subject-specific reference books
• Periodicals: Subscriptions to educational magazines and journals
• Multimedia Resources: DVDs, CDs, and interactive learning materials

The library staff has also implemented a new digital catalog system that makes it easier for students to search and reserve materials. Students can now access the library catalog from their devices and receive notifications about due dates and available materials.

These resources are available to all students and staff members. We encourage everyone to take advantage of these new materials to enhance their learning experience.`,
        thumbnail: '/images/school3.jpg',
        mainImage: '/images/school3.jpg',
        slug: 'new-library-resources-2025',
        gallery: [
            '/images/school3.jpg',
            '/images/school4.jpg',
            '/images/staff.jpg'
        ]
    },
    {
        id: 4,
        type: 'event',
        title: 'Parent-Teacher Conference',
        date: '2025-07-15',
        description: 'Annual meeting between parents and teachers to discuss student progress.',
        longDescription: `The Parent-Teacher Conference is an essential annual event that provides a platform for meaningful dialogue between parents and teachers about student development and academic progress.

This year's conference will focus on:

• Individual Student Progress: Detailed discussions about academic performance, strengths, and areas for improvement
• Learning Strategies: Sharing effective study methods and learning techniques tailored to each student
• Behavioral Development: Addressing social skills, classroom behavior, and character development
• Future Planning: Discussing academic goals, career aspirations, and preparation for upcoming challenges
• Support Systems: Identifying ways parents and teachers can work together to support student success

The conference will be conducted in a structured format with scheduled appointments to ensure each family receives adequate time for discussion. Teachers will have prepared progress reports and examples of student work to share with parents.

We encourage all parents to attend this important meeting to stay informed about their child's educational journey and to build stronger partnerships with our teaching staff.`,
        thumbnail: '/images/school4.jpg',
        mainImage: '/images/school4.jpg',
        slug: 'parent-teacher-conference-2025',
        gallery: [
            '/images/school4.jpg',
            '/images/staff.jpg',
            '/images/mother_general.jpg'
        ]
    }
];

export default function EventNewsDetailPage() {
    const params = useParams();
    const slug = params.slug as string;

    const [selectedImage, setSelectedImage] = useState(0);
    const [showGallery, setShowGallery] = useState(false);

    const item = mockData.find(data => data.slug === slug);

    if (!item) {
        return (
            <div>
                <Navbar />
                <main className="min-h-screen bg-gray-50 flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-gray-900 mb-4">Event/News Not Found</h1>
                        <p className="text-gray-600">The requested item could not be found.</p>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

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
        <div>
            <Navbar />
            <main className="min-h-screen bg-gray-50">
                {/* Header */}
                <section className="bg-white py-8">
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="flex items-center gap-3 mb-4">
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(item.type)}`}>
                                {item.type === 'event' ? 'Event' : 'News'}
                            </span>
                            <span className="text-gray-500 text-sm">{formatDate(item.date)}</span>
                        </div>
                        <h1 className="text-4xl font-bold text-gray-900 mb-6">{item.title}</h1>
                        <p className="text-xl text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                </section>

                {/* Main Content */}
                <section className="py-8">
                    <div className="max-w-4xl mx-auto px-6">
                        {/* Main Image */}
                        <div className="mb-8">
                            <div className="relative h-96 rounded-lg overflow-hidden">
                                <Image
                                    src={item.mainImage}
                                    alt={item.title}
                                    fill
                                    className="object-cover cursor-pointer"
                                    onClick={() => setShowGallery(true)}
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                                    <div className="bg-white bg-opacity-90 rounded-full p-3 opacity-0 hover:opacity-100 transition-opacity duration-300">
                                        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Long Description */}
                        <div className="prose prose-lg max-w-none mb-8">
                            <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                                {item.longDescription}
                            </div>
                        </div>

                        {/* Gallery Section */}
                        {item.gallery && item.gallery.length > 0 && (
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h3 className="font-semibold text-xl mb-6">Photo Gallery</h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                    {item.gallery.map((image, index) => (
                                        <div
                                            key={index}
                                            className="relative h-32 rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity group"
                                            onClick={() => {
                                                setSelectedImage(index);
                                                setShowGallery(true);
                                            }}
                                        >
                                            <Image
                                                src={image}
                                                alt={`${item.title} - Image ${index + 1}`}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                                                <div className="bg-white bg-opacity-90 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            </main>

            {/* Gallery Modal */}
            {showGallery && (
                <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
                    <div className="relative max-w-4xl w-full">
                        {/* Close Button */}
                        <button
                            onClick={() => setShowGallery(false)}
                            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Main Image */}
                        <div className="relative h-96 mb-4">
                            <Image
                                src={item.gallery[selectedImage]}
                                alt={`${item.title} - Image ${selectedImage + 1}`}
                                fill
                                className="object-contain"
                            />
                        </div>

                        {/* Thumbnail Navigation */}
                        <div className="flex gap-2 justify-center">
                            {item.gallery.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedImage(index)}
                                    className={`w-16 h-16 rounded overflow-hidden ${index === selectedImage ? 'ring-2 ring-blue-500' : ''
                                        }`}
                                >
                                    <Image
                                        src={image}
                                        alt={`Thumbnail ${index + 1}`}
                                        width={64}
                                        height={64}
                                        className="object-cover w-full h-full"
                                    />
                                </button>
                            ))}
                        </div>

                        {/* Navigation Arrows */}
                        <button
                            onClick={() => setSelectedImage((selectedImage - 1 + item.gallery.length) % item.gallery.length)}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={() => setSelectedImage((selectedImage + 1) % item.gallery.length)}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
} 