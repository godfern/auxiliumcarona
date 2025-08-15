import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* School Info & Logo */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center mb-4">
                            <Image
                                src="/images/school_logo.png"
                                alt="Auxilium School Logo"
                                width={50}
                                height={50}
                                className="mr-3"
                            />
                            <div>
                                <h3 className="text-white font-bold text-lg">Auxilium</h3>
                                <p className="text-sm text-gray-400">Carona</p>
                            </div>
                        </div>
                        <p className="text-sm leading-relaxed mb-4">
                            Empowering students with quality education and values since our establishment.
                            Building character, fostering excellence, and nurturing future leaders.
                        </p>
                        <div className="text-sm">
                            <p className="mb-1">📍 Carona, Goa, India</p>
                            <p className="mb-1">📞 +91 832-XXX-XXXX</p>
                            <p className="mb-1">✉️ info@auxiliumcarona.edu.in</p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-gray-300 hover:text-white transition-colors text-sm">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/events-news" className="text-gray-300 hover:text-white transition-colors text-sm">
                                    Events & News
                                </Link>
                            </li>
                            <li>
                                <Link href="/gallery" className="text-gray-300 hover:text-white transition-colors text-sm">
                                    Gallery
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Important Links */}
                    <div>
                        <h4 className="text-white font-semibold text-lg mb-4">Important Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/admissions" className="text-gray-300 hover:text-white transition-colors text-sm">
                                    Admissions
                                </Link>
                            </li>
                            <li>
                                <Link href="/academics" className="text-gray-300 hover:text-white transition-colors text-sm">
                                    Academics
                                </Link>
                            </li>
                            <li>
                                <Link href="/facilities" className="text-gray-300 hover:text-white transition-colors text-sm">
                                    Facilities
                                </Link>
                            </li>
                            <li>
                                <Link href="/activities" className="text-gray-300 hover:text-white transition-colors text-sm">
                                    Activities
                                </Link>
                            </li>
                            <li>
                                <Link href="/parent-portal" className="text-gray-300 hover:text-white transition-colors text-sm">
                                    Parent Portal
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media & Contact */}
                    <div>
                        <h4 className="text-white font-semibold text-lg mb-4">Connect With Us</h4>
                        <div className="space-y-3">
                            {/* Social Media Links */}
                            <div className="flex space-x-3">
                                <a
                                    href="https://www.facebook.com/AuxiliumSchoolCarona"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                                    title="Follow us on Facebook"
                                >
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://www.instagram.com/auxiliumschoolcarona/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-colors"
                                    title="Follow us on Instagram"
                                >
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://www.youtube.com/@auxiliumschoolcarona1837"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
                                    title="Subscribe to our YouTube channel"
                                >
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                    </svg>
                                </a>
                            </div>

                            {/* Newsletter Signup */}
                            {/* <div className="mt-4">
                                <p className="text-sm text-gray-400 mb-2">Stay updated with our newsletter</p>
                                <div className="flex">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-md text-sm focus:outline-none focus:border-blue-500"
                                    />
                                    <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-r-md hover:bg-blue-700 transition-colors">
                                        Subscribe
                                    </button>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-sm text-gray-400 mb-2 md:mb-0">
                            © {new Date().getFullYear()} Auxilium, Carona. All rights reserved.
                        </div>
                        <div className="flex space-x-6 text-sm">
                            {/* <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
                                Terms of Service
                            </Link> */}
                            <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors">
                                Sitemap
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
