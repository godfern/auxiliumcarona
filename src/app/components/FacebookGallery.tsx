'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface FacebookPost {
    id: string;
    message?: string;
    picture?: string;
    link?: string;
    created_time: string;
    permalink_url?: string;
}

interface FacebookGalleryProps {
    pageId?: string;
    accessToken?: string;
    maxPosts?: number;
}

export default function FacebookGallery({
    pageId = "your-facebook-page-id",
    accessToken = "your-access-token",
    maxPosts = 6
}: FacebookGalleryProps) {
    const [posts, setPosts] = useState<FacebookPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Sample data for demonstration (replace with actual API call)
    const samplePosts: FacebookPost[] = [
        {
            id: "1",
            message: "Celebrating our students' achievements in the annual science fair! 🧪🔬",
            picture: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=500&h=300&fit=crop",
            link: "https://facebook.com/post1",
            created_time: "2024-01-15T10:00:00Z",
            permalink_url: "https://facebook.com/post1"
        },
        {
            id: "2",
            message: "Our school choir performed beautifully at the Christmas concert! 🎵",
            picture: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&h=300&fit=crop",
            link: "https://facebook.com/post2",
            created_time: "2024-01-10T15:30:00Z",
            permalink_url: "https://facebook.com/post2"
        },
        {
            id: "3",
            message: "Sports day was a huge success! Congratulations to all participants! 🏃‍♀️",
            picture: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=500&h=300&fit=crop",
            link: "https://facebook.com/post3",
            created_time: "2024-01-05T12:00:00Z",
            permalink_url: "https://facebook.com/post3"
        },
        {
            id: "4",
            message: "Our teachers participated in a professional development workshop 📚",
            picture: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop",
            link: "https://facebook.com/post4",
            created_time: "2024-01-01T09:00:00Z",
            permalink_url: "https://facebook.com/post4"
        },
        {
            id: "5",
            message: "Students showcasing their art projects at the annual exhibition 🎨",
            picture: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=500&h=300&fit=crop",
            link: "https://facebook.com/post5",
            created_time: "2023-12-28T14:00:00Z",
            permalink_url: "https://facebook.com/post5"
        },
        {
            id: "6",
            message: "Community service day - our students making a difference! ❤️",
            picture: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=500&h=300&fit=crop",
            link: "https://facebook.com/post6",
            created_time: "2023-12-25T11:00:00Z",
            permalink_url: "https://facebook.com/post6"
        }
    ];

    useEffect(() => {
        // Simulate API call with sample data
        const fetchFacebookPosts = async () => {
            try {
                setLoading(true);

                // In a real implementation, you would use Facebook Graph API:
                // const response = await fetch(
                //   `https://graph.facebook.com/v18.0/${pageId}/posts?fields=id,message,picture,link,created_time,permalink_url&access_token=${accessToken}&limit=${maxPosts}`
                // );
                // const data = await response.json();
                // setPosts(data.data);

                // For now, using sample data
                setTimeout(() => {
                    setPosts(samplePosts);
                    setLoading(false);
                }, 1000);

            } catch (err) {
                setError('Failed to load Facebook posts');
                setLoading(false);
            }
        };

        fetchFacebookPosts();
    }, [pageId, accessToken, maxPosts]);

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    if (loading) {
        return (
            <div className="py-12 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Latest from Facebook</h2>
                        <p className="text-gray-600">Loading our latest updates...</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden animate-pulse">
                                <div className="h-48 bg-gray-200"></div>
                                <div className="p-4">
                                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="py-12 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Latest from Facebook</h2>
                    <p className="text-red-600">{error}</p>
                    <p className="text-gray-600 mt-2">Please check your Facebook integration settings.</p>
                </div>
            </div>
        );
    }

    return (
        <section className="py-12 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Latest from Facebook</h2>
                    <p className="text-gray-600 mb-6">Stay connected with our school community</p>
                    <a
                        href="https://www.facebook.com/AuxiliumSchoolCarona"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                        Follow Us on Facebook
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((post) => (
                        <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                            {post.picture && (
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={post.picture}
                                        alt={post.message || "Facebook post"}
                                        width={400}
                                        height={300}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            )}

                            <div className="p-4">
                                {post.message && (
                                    <p className="text-gray-700 mb-3 line-clamp-3">
                                        {post.message}
                                    </p>
                                )}

                                <div className="flex items-center justify-between text-sm text-gray-500">
                                    <span>{formatDate(post.created_time)}</span>
                                    {post.permalink_url && (
                                        <a
                                            href={post.permalink_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:text-blue-800 font-medium"
                                        >
                                            View Post →
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 