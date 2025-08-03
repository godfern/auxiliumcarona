'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
    const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
    const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false);

    return (
        <nav className="bg-blue-800 text-white p-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <Link href="/" className="flex items-center space-x-3">
                        <div className="relative w-12 h-12">
                            <Image
                                src="/images/school-logo.png"
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
                                {/* <Link href="/about/manager-message" className="block px-4 py-2 hover:bg-blue-50 transition-colors">
                                    Manager's Message
                                </Link>
                                <Link href="/about/provincial-message" className="block px-4 py-2 hover:bg-blue-50 transition-colors">
                                    Provincial's Message
                                </Link> */}
                                <Link href="/about/team" className="block px-4 py-2 hover:bg-blue-50 transition-colors">
                                    Our Team (Staff & Management)
                                </Link>
                                <Link href="/about/achievements" className="block px-4 py-2 hover:bg-blue-50 transition-colors">
                                    Achievements
                                </Link>
                                <Link href="/about/student-council" className="block px-4 py-2 hover:bg-blue-50 transition-colors">
                                    Student Council
                                </Link>
                            </div>
                        </div>
                    </li>

                    <li><Link href="/gallery" className="hover:text-blue-200 transition-colors">Gallery</Link></li>

                    {/* Contact Us Dropdown */}
                    <li className="relative">
                        <div
                            className="group"
                            onMouseEnter={() => setIsContactDropdownOpen(true)}
                            onMouseLeave={() => setIsContactDropdownOpen(false)}
                        >
                            <button
                                onClick={() => setIsContactDropdownOpen(!isContactDropdownOpen)}
                                className="hover:text-blue-200 transition-colors flex items-center"
                            >
                                Contact Us
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Contact Us Dropdown Menu */}
                            <div
                                className={`absolute top-full left-0 w-64 bg-white text-gray-800 rounded-lg shadow-lg py-2 z-50 transition-all duration-200 ${isContactDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                                    }`}
                            >
                                <Link href="/contact/address" className="block px-4 py-2 hover:bg-blue-50 transition-colors">
                                    School Address with Map
                                </Link>
                                <Link href="/contact/phone-email" className="block px-4 py-2 hover:bg-blue-50 transition-colors">
                                    Phone & Email
                                </Link>
                                <Link href="/contact/office-hours" className="block px-4 py-2 hover:bg-blue-50 transition-colors">
                                    Office Hours
                                </Link>
                                <Link href="/contact/form" className="block px-4 py-2 hover:bg-blue-50 transition-colors">
                                    Contact Form
                                </Link>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
