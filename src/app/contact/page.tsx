import ContactForm from "../components/ContactForm";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
    return (
        <div>
            <Navbar />
            <main className="p-6">
                <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
                <div className="max-w-2xl">
                    <ContactForm />
                </div>
            </main>
            <Footer />
        </div>
    );
} 