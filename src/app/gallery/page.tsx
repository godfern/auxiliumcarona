import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Gallery() {
    return (
        <div>
            <Navbar />
            <main className="p-6">
                <h1 className="text-3xl font-bold mb-6">Photo Gallery</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                        <p className="text-gray-500">Photo 1</p>
                    </div>
                    <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                        <p className="text-gray-500">Photo 2</p>
                    </div>
                    <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                        <p className="text-gray-500">Photo 3</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
} 