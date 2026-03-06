import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Gallery() {
    return (
        <div>
            <Navbar />
            <main className="p-6">
                <h1 className="text-3xl font-bold mb-6">Photo Gallery</h1>
                <div className="bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 py-16 flex flex-col items-center justify-center">
                    <p className="text-xl font-medium text-gray-600 mb-2">Coming Soon</p>
                    <p className="text-gray-500">We're working on bringing you our photo gallery. Check back later!</p>
                </div>
            </main>
            <Footer />
        </div>
    );
} 