// components/Navbar.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
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
                <ul className="flex gap-6">
                    <li><Link href="/" className="hover:text-blue-200 transition-colors">Home</Link></li>
                    <li><Link href="/about" className="hover:text-blue-200 transition-colors">About Us</Link></li>
                    <li><Link href="/gallery" className="hover:text-blue-200 transition-colors">Gallery</Link></li>
                    <li><Link href="/contact" className="hover:text-blue-200 transition-colors">Contact Us</Link></li>
                </ul>
            </div>
        </nav>
    );
}
