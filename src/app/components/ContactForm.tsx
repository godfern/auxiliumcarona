// components/ContactForm.tsx
export default function ContactForm() {
    return (
        <form className="space-y-4 max-w-xl">
            <input type="text" placeholder="Your Name" className="w-full border p-2 rounded" />
            <input type="email" placeholder="Your Email" className="w-full border p-2 rounded" />
            <textarea placeholder="Your Message" className="w-full border p-2 rounded" rows={5}></textarea>
            <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded">Submit</button>
        </form>
    );
}
