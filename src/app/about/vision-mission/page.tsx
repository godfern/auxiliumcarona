import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";

export default function VisionMissionPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <main className="py-12">
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
                    <div className="max-w-6xl mx-auto px-6 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Vision & Mission
                        </h1>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                            The educative community consisting of parents, teachers, pupils and management, work together for the ‘holistic’ development of the pupil in a family atmosphere.
                        </p>
                    </div>
                </section>

                {/* Vision Section */}
                <section className="py-16">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                {/* <div className="bg-blue-100 w-24 h-24 rounded-full flex items-center justify-center mb-6 overflow-hidden">
                                    <Image
                                        src="/images/don-bosco.jpg"
                                        alt="St. John Bosco"
                                        width={96}
                                        height={96}
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                </div> */}
                                <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Vision</h2>
                                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                    The School follows the educative system of Don Bosco based on reason, religion,
                                    and loving-kindness, where the pupil is the protagonist of her/his own formation.
                                </p>
                                <p className="text-lg text-gray-600 leading-relaxed mb-6">It is committed to the development of the whole person, since in Christ,
                                    the perfect person, all human values and their fulfillment and unity.
                                    Herein lies specifically the character of the school.
                                    Its duty to cultivate human values is its legitimate right in accordance with
                                    its particular mission to serve all people.</p>
                                {/* <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                                        <p className="text-gray-600">Excellence in academic achievement and personal growth</p>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                                        <p className="text-gray-600">Character formation based on moral and ethical values</p>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                                        <p className="text-gray-600">Innovation in teaching and learning methodologies</p>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                                        <p className="text-gray-600">Global perspective and cultural awareness</p>
                                    </div>
                                </div> */}
                            </div>

                            <div className="bg-white rounded-lg shadow-lg p-8">
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">Vision Statement</h3>
                                <blockquote className="text-gray-600 italic text-lg leading-relaxed border-l-4 border-blue-600 pl-6">
                                    <div className="bg-blue-100 w-56 h-56 rounded-full flex items-center justify-center mb-6 overflow-hidden">
                                        <Image
                                            src="/images/don-bosco.jpg"
                                            alt="St. John Bosco"
                                            width={224}
                                            height={224}
                                            className="w-full h-full object-cover rounded-full"
                                        />
                                    </div>
                                    "Education is a matter of the heart, of which God alone is the master."
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission Section */}
                <section className="py-16 bg-white">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="order-2 lg:order-1">
                                <div className="bg-white rounded-lg shadow-lg p-8">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Mission Statement</h3>
                                    <blockquote className="text-gray-600 italic text-lg leading-relaxed border-l-4 border-blue-600 pl-6">
                                        <div className="bg-blue-100 w-56 h-56 rounded-full flex items-center justify-center mb-6 overflow-hidden">
                                            <Image
                                                src="/images/mary-mazerello.jpg"
                                                alt="St. Mary Mazerello"
                                                width={224}
                                                height={224}
                                                className="w-full h-full object-cover rounded-full"
                                            />
                                        </div>
                                        "We will open a needle work class for the young girls of the village and we will teach them to sew,
                                        but our principle aim will be to teach them to know God, to make them good, and save them from many dangers.
                                        From this moment, our every stitch be an act of Love for God."
                                    </blockquote>
                                </div>
                            </div>

                            <div className="order-1 lg:order-2">
                                {/* <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div> */}
                                <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
                                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                    We envisage our pupils to become intellectually enlightened, morally upright,
                                    spiritually oriented, emotionally balanced, socially committed, patriotic and
                                    accomplished – in a word integrally developed young women and men who will be agents of social
                                    transformation in today’s India for a better tomorrow.
                                </p>
                                {/* <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                                        <p className="text-gray-600">Deliver high-quality academic programs and curriculum</p>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                                        <p className="text-gray-600">Foster spiritual and moral development</p>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                                        <p className="text-gray-600">Encourage creativity, critical thinking, and innovation</p>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                                        <p className="text-gray-600">Build strong partnerships with families and community</p>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Values Section */}
                <section className="py-16">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Core Values</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                The fundamental principles that guide our actions and shape our school culture.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">Excellence</h3>
                                <p className="text-gray-600">Striving for the highest standards in all aspects of education and personal development.</p>
                            </div>

                            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">Respect</h3>
                                <p className="text-gray-600">Valuing diversity, treating others with dignity, and fostering mutual understanding.</p>
                            </div>

                            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">Innovation</h3>
                                <p className="text-gray-600">Embracing new ideas, creative thinking, and continuous improvement in education.</p>
                            </div>

                            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">Compassion</h3>
                                <p className="text-gray-600">Showing empathy, kindness, and care for others in our school community and beyond.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                {/* <section className="py-16 bg-blue-600 text-white">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold mb-6">Join Us in Our Mission</h2>
                        <p className="text-xl mb-8">
                            Be part of a community that values excellence, character, and innovation in education.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                                Apply Now
                            </button>
                            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                                Learn More
                            </button>
                        </div>
                    </div>
                </section> */}
            </main>

            <Footer />
        </div>
    );
} 