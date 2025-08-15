import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";

export default function LeadershipPage() {
    const leadership = [
        {
            name: "Sr. Lavita Sequira",
            title: "Principal",
            message: "Welcome to our school community! As Principal, I am committed to fostering an environment where every student can thrive academically, socially, and emotionally. Our dedicated staff works tirelessly to provide innovative learning experiences that prepare students for the challenges of tomorrow. Together, we build a foundation for lifelong success.",
            photo: "/images/sr_lavita.jpg",
            quote: "Education is a matter of the heart, of which God alone is the master."
        },
        {
            name: "Sr. Antonette Desouza",
            title: "School Manager",
            message: "Our school management team is dedicated to creating an optimal learning environment where excellence is the standard. We focus on maintaining high academic standards while ensuring our facilities and resources support the best possible educational experience for all our students and staff.",
            photo: "/images/sr_antonette.png",
            quote: "Excellence in education is not just about academic achievement, but about building character and fostering a love for learning."
        },
        {
            name: "Sr Meenakshi D’Silva",
            title: "Our Provincial",
            message: "Sr. Meenakshi D’Silva is the leader of the Salesian Sisters in our Mumbai Province, which includes Goa, Gujarat, Karnataka, and Maharashtra. She is the 8th Provincial and has spent many years helping children and young people through education. She has taken care of many important jobs, like looking after the Province’s needs, leading communities, working with youth, and guiding other Sisters. Sister Meenakshi loves nature and teaching, and she encourages everyone to care for the Earth and to learn with joy",
            photo: "/images/sr_provincial.png",
            quote: "We will open a needle work class for the young girls of the village and we will teach them to sew, but our principle aim will be to teach them to know God, to make them good, and save them from many dangers."
        },
        {
            name: "Mother Chiara Cazzuola",
            title: "Our Mother General",
            message: "Mother Chiara Cazzuola is the leader of the Salesian Sisters all over the world. She is the 10th person to take the place of St. Mary Mazzarello in guiding our big Salesian family.She loves young people very much and works hard to help them grow happy, kind, and strong in faith.Mother Chiara is cheerful, friendly, and always ready to work together with others",
            photo: "/images/mother_general.jpg",
            quote: "I trust the Lord and I entrust myself to Mary Help of Christians. For this, I say YES!"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <main className="py-12">
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
                    <div className="max-w-6xl mx-auto px-6 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            School Leadership
                        </h1>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                            Meet our dedicated leaders who guide our educational mission with wisdom, compassion, and vision.
                        </p>
                    </div>
                </section>

                {/* Leadership Messages Section */}
                <section className="py-16">
                    <div className="max-w-6xl mx-auto px-6">
                        {/* <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">
                                Leadership Messages
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Hear from our school leadership about their vision for education and commitment to student success.
                            </p>
                        </div> */}

                        <div className="space-y-16">
                            {leadership.map((leader, index) => (
                                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                                        {/* Photo */}
                                        <div className="lg:col-span-1 flex justify-center">
                                            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-blue-100">
                                                <Image
                                                    src={leader.photo}
                                                    alt={`${leader.name} - ${leader.title}`}
                                                    width={256}
                                                    height={256}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="lg:col-span-2">
                                            <div className="text-center lg:text-left">
                                                <h3 className="text-3xl font-bold text-gray-800 mb-2">{leader.name}</h3>
                                                <p className="text-xl text-blue-600 font-semibold mb-6">{leader.title}</p>

                                                {/* Quote */}
                                                <blockquote className="text-lg text-gray-600 italic mb-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                                                    "{leader.quote}"
                                                </blockquote>

                                                {/* Message */}
                                                <p className="text-gray-700 leading-relaxed text-lg">
                                                    {leader.message}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Leadership Philosophy Section */}
                {/* <section className="py-16 bg-white">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Leadership Philosophy</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Guided by the Salesian educational system, our leadership team embodies the values of reason, religion, and loving-kindness.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">Reason</h3>
                                <p className="text-gray-600">
                                    We believe in fostering critical thinking, intellectual curiosity, and rational decision-making in all aspects of education.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">Religion</h3>
                                <p className="text-gray-600">
                                    We nurture spiritual growth, moral values, and a deep sense of purpose grounded in faith and Christian principles.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">Loving-Kindness</h3>
                                <p className="text-gray-600">
                                    We create a family atmosphere where every student feels loved, valued, and supported in their journey of growth.
                                </p>
                            </div>
                        </div>
                    </div>
                </section> */}

                {/* Call to Action */}
                {/* <section className="py-16 bg-blue-600 text-white">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold mb-6">Join Our School Community</h2>
                        <p className="text-xl mb-8">
                            Experience the difference that dedicated leadership and a values-based education can make in your child's life.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                                Apply Now
                            </button>
                            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                                Schedule a Visit
                            </button>
                        </div>
                    </div>
                </section> */}
            </main>

            <Footer />
        </div>
    );
} 