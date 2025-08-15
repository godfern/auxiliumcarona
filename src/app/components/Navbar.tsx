'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
    const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const controlNavbar = () => {
            if (typeof window !== 'undefined') {
                const currentScrollY = window.scrollY;

                // Show navbar when at top of page
                if (currentScrollY < 10) {
                    setIsVisible(true);
                }
                // Hide when scrolling down, show when scrolling up
                else if (currentScrollY > lastScrollY) {
                    // Scrolling down
                    setIsVisible(false);
                    // Close any open dropdowns when hiding
                    setIsAboutDropdownOpen(false);
                    setIsContactDropdownOpen(false);
                } else {
                    // Scrolling up
                    setIsVisible(true);
                }

                setLastScrollY(currentScrollY);
            }
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            // Cleanup function
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);

    return (
        <nav className={`bg-blue-800 text-white p-4 fixed top-0 left-0 right-0 z-50 shadow-md transition-transform duration-300 ease-in-out ${isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'
            }`}>
            <div className="mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <Link href="/" className="flex items-center space-x-3">
                        <div className="relative w-12 h-12">
                            <Image
                                src="/images/school_logo.png"
                                alt="Auxilium Convent, Carona"
                                width={48}
                                height={48}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="hidden md:block">
                            <h1 className="text-xl font-bold">Auxilium Convent</h1>
                            <p className="text-sm text-blue-200">Carona</p>
                        </div>
                    </Link>
                </div>

                {/* Navigation Menu */}
                <ul className="flex gap-6 items-center">
                    <li><Link href="/" className="hover:text-blue-200 transition-colors">Home</Link></li>

                    {/* About Us Dropdown */}
                    <li className="relative">
                        <div
                            className="group"
                            onMouseEnter={() => setIsAboutDropdownOpen(true)}
                            onMouseLeave={() => setIsAboutDropdownOpen(false)}
                        >
                            <button
                                onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                                className="hover:text-blue-200 transition-colors flex items-center"
                            >
                                About Us
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* About Us Dropdown Menu */}
                            <div
                                className={`absolute top-full left-0 w-64 bg-white text-gray-800 rounded-lg shadow-lg py-2 z-50 transition-all duration-200 ${isAboutDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                                    }`}
                            >
                                <Link href="/about/vision-mission" className="block px-4 py-2 hover:bg-blue-50 transition-colors">
                                    Vision & Mission
                                </Link>
                                <Link href="/about/history" className="block px-4 py-2 hover:bg-blue-50 transition-colors">
                                    Our History
                                </Link>
                                <Link href="/about/leadership" className="block px-4 py-2 hover:bg-blue-50 transition-colors">
                                    Leadership
                                </Link>
                                <Link href="/about/team" className="block px-4 py-2 hover:bg-blue-50 transition-colors">
                                    Our Team (Staff & Management)
                                </Link>
                                {/* <Link href="/about/achievements" className="block px-4 py-2 hover:bg-blue-50 transition-colors">
                                    Achievements
                                </Link>
                                <Link href="/about/student-council" className="block px-4 py-2 hover:bg-blue-50 transition-colors">
                                    Student Council
                                </Link> */}
                            </div>
                        </div>
                    </li>
                    <li><Link href="/events-news" className="hover:text-blue-200 transition-colors">Events & News</Link></li>
                    <li><Link href="/gallery" className="hover:text-blue-200 transition-colors">Gallery</Link></li>
                    <li><Link href="/contact" className="hover:text-blue-200 transition-colors">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
}
