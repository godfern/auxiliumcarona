import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
    return (
        <div>
            <Navbar />
            <main className="p-6">
                <h1 className="text-3xl font-bold mb-6">About Us</h1>
                <div className="max-w-4xl space-y-6">
                    <section>
                        <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
                        <p className="text-gray-700 leading-relaxed">
                            We are committed to providing quality education that empowers students
                            to become confident, creative, and responsible global citizens. Our
                            holistic approach focuses on academic excellence, character development,
                            and practical skills.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
                        <p className="text-gray-700 leading-relaxed">
                            To be a leading educational institution that nurtures innovation,
                            fosters critical thinking, and prepares students for the challenges
                            of tomorrow's world.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-3">Our Values</h2>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>Excellence in education and character</li>
                            <li>Respect for diversity and inclusion</li>
                            <li>Innovation and creativity</li>
                            <li>Integrity and ethical behavior</li>
                            <li>Community engagement and service</li>
                        </ul>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
} 