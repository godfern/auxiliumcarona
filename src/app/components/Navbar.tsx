'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);

    useEffect(() => {
        const controlNavbar = () => {
            if (globalThis.window !== undefined) {
                const currentScrollY = globalThis.window.scrollY;

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
                } else {
                    // Scrolling up
                    setIsVisible(true);
                }

                setLastScrollY(currentScrollY);
            }
        };

        if (globalThis.window !== undefined) {
            globalThis.window.addEventListener('scroll', controlNavbar);

            // Cleanup function
            return () => {
                globalThis.window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);

    // Handle body scroll lock when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setIsMobileAboutOpen(false);
    };

    const toggleMobileAbout = () => {
        setIsMobileAboutOpen(!isMobileAboutOpen);
    };

    return (
        <nav className={`bg-blue-800 text-white p-4 fixed top-0 left-0 right-0 z-50 shadow-md transition-transform duration-300 ease-in-out ${isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'
            }`}>
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <Link href="/" className="flex items-center space-x-3" onClick={closeMobileMenu}>
                        <div className="relative w-12 h-12">
                            <Image
                                src="/images/school_logo.png"
                                alt="Auxilium Convent, Carona"
                                width={48}
                                height={48}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="block">
                            <h1 className="text-base sm:text-xl font-bold">Auxilium Convent</h1>
                            <p className="text-xs sm:text-sm text-blue-200">Carona</p>
                        </div>
                    </Link>
                </div>

                {/* Desktop Navigation Menu */}
                <ul className="hidden lg:flex gap-6 items-center">
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
                                aria-expanded={isAboutDropdownOpen}
                                aria-haspopup="true"
                            >
                                About Us
                                <svg className={`w-4 h-4 ml-1 transition-transform duration-200 ${isAboutDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* About Us Dropdown Menu */}
                            <div
                                role="menu"
                                className={`absolute top-full left-0 w-64 bg-white text-gray-800 rounded-lg shadow-lg py-2 z-50 transition-all duration-200 ${isAboutDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                                    }`}
                            >
                                <Link href="/about/vision-mission" className="block px-4 py-2 hover:bg-blue-50 transition-colors" role="menuitem">
                                    Vision & Mission
                                </Link>
                                <Link href="/about/history" className="block px-4 py-2 hover:bg-blue-50 transition-colors" role="menuitem">
                                    Our History
                                </Link>
                                <Link href="/about/leadership" className="block px-4 py-2 hover:bg-blue-50 transition-colors" role="menuitem">
                                    Leadership
                                </Link>
                                <Link href="/about/team" className="block px-4 py-2 hover:bg-blue-50 transition-colors" role="menuitem">
                                    Our Team (Staff & Management)
                                </Link>
                            </div>
                        </div>
                    </li>
                    <li><Link href="/events-news" className="hover:text-blue-200 transition-colors">Events & News</Link></li>
                    <li><Link href="/gallery" className="hover:text-blue-200 transition-colors">Gallery</Link></li>
                    <li><Link href="/contact" className="hover:text-blue-200 transition-colors">Contact</Link></li>
                </ul>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    className="lg:hidden flex items-center justify-center w-10 h-10 text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800 rounded relative z-[70]"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle mobile menu"
                    aria-expanded={isMobileMenuOpen}
                >
                    {isMobileMenuOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu Backdrop */}
            {isMobileMenuOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-[55]"
                    onClick={closeMobileMenu}
                    aria-hidden="true"
                />
            )}

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div
                    className="lg:hidden fixed left-0 right-0 bg-blue-800 overflow-y-auto z-[60]"
                    style={{
                        top: '73px',
                        bottom: '0',
                        height: 'calc(100vh - 73px)',
                        maxHeight: 'calc(100vh - 73px)'
                    }}
                    aria-label="Mobile menu"
                >
                    <div className="px-4 py-6 space-y-4">
                        <Link
                            href="/"
                            className="block py-3 px-4 text-white hover:bg-blue-700 rounded-lg transition-colors"
                            onClick={closeMobileMenu}
                        >
                            Home
                        </Link>

                        {/* Mobile About Us Dropdown */}
                        <div>
                            <button
                                onClick={toggleMobileAbout}
                                className="w-full flex items-center justify-between py-3 px-4 text-white hover:bg-blue-700 rounded-lg transition-colors"
                            >
                                <span>About Us</span>
                                <svg
                                    className={`w-5 h-5 transition-transform duration-200 ${isMobileAboutOpen ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Mobile About Us Submenu */}
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${isMobileAboutOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="bg-blue-900 rounded-lg py-2 space-y-1">
                                    <Link
                                        href="/about/vision-mission"
                                        className="block py-2 px-6 text-white hover:bg-blue-700 transition-colors"
                                        onClick={closeMobileMenu}
                                    >
                                        Vision & Mission
                                    </Link>
                                    <Link
                                        href="/about/history"
                                        className="block py-2 px-6 text-white hover:bg-blue-700 transition-colors"
                                        onClick={closeMobileMenu}
                                    >
                                        Our History
                                    </Link>
                                    <Link
                                        href="/about/leadership"
                                        className="block py-2 px-6 text-white hover:bg-blue-700 transition-colors"
                                        onClick={closeMobileMenu}
                                    >
                                        Leadership
                                    </Link>
                                    <Link
                                        href="/about/team"
                                        className="block py-2 px-6 text-white hover:bg-blue-700 transition-colors"
                                        onClick={closeMobileMenu}
                                    >
                                        Our Team (Staff & Management)
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <Link
                            href="/events-news"
                            className="block py-3 px-4 text-white hover:bg-blue-700 rounded-lg transition-colors"
                            onClick={closeMobileMenu}
                        >
                            Events & News
                        </Link>
                        <Link
                            href="/gallery"
                            className="block py-3 px-4 text-white hover:bg-blue-700 rounded-lg transition-colors"
                            onClick={closeMobileMenu}
                        >
                            Gallery
                        </Link>
                        <Link
                            href="/contact"
                            className="block py-3 px-4 text-white hover:bg-blue-700 rounded-lg transition-colors"
                            onClick={closeMobileMenu}
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
