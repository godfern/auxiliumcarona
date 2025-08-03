import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";

export default function HistoryPage() {
    const timelineEvents = [
        {
            year: "1960",
            title: "Foundation of the School",
            description: "Auxilium Convent, Carona was established by the Salesian Sisters of Don Bosco, marking the beginning of a new era in education in the region.",
            image: "/images/history-1960.jpg"
        },
        {
            year: "1965",
            title: "First Graduation Ceremony",
            description: "The school celebrated its first batch of graduates, establishing a tradition of academic excellence and character formation.",
            image: "/images/history-1965.jpg"
        },
        {
            year: "1975",
            title: "Expansion of Facilities",
            description: "New classrooms and laboratories were added to accommodate the growing student population and enhance the learning environment.",
            image: "/images/history-1975.jpg"
        },
        {
            year: "1985",
            title: "Introduction of Higher Secondary",
            description: "The school expanded its curriculum to include higher secondary education, providing complete educational pathway for students.",
            image: "/images/history-1985.jpg"
        },
        {
            year: "1995",
            title: "Golden Jubilee Celebrations",
            description: "The school celebrated 35 years of educational service with grand celebrations, honoring the legacy of Don Bosco's educational mission.",
            image: "/images/history-1995.jpg"
        },
        {
            year: "2005",
            title: "Modernization and Technology",
            description: "Computer labs and modern teaching aids were introduced, integrating technology into the educational curriculum.",
            image: "/images/history-2005.jpg"
        },
        {
            year: "2015",
            title: "Diamond Jubilee",
            description: "55 years of excellence in education were celebrated, reaffirming the school's commitment to holistic development.",
            image: "/images/history-2015.jpg"
        },
        {
            year: "2023",
            title: "Present Day",
            description: "Continuing the legacy of excellence, the school remains committed to providing quality education based on the Salesian values of reason, religion, and loving-kindness.",
            image: "/images/history-2023.jpg"
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
                            Our History
                        </h1>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                            A journey of faith, education, and service spanning over six decades of excellence.
                        </p>
                    </div>
                </section>

                {/* Introduction Section */}
                <section className="py-16">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-800 mb-6">A Legacy of Excellence</h2>
                                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                    Auxilium Convent, Carona was founded in 1960 by the Salesian Sisters of Don Bosco,
                                    inspired by the educational vision of St. John Bosco and St. Mary Mazzarello.
                                    What began as a small educational institution has grown into a beacon of academic
                                    excellence and character formation.
                                </p>
                                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                    Over the decades, our school has remained steadfast in its commitment to the
                                    Salesian educational system based on reason, religion, and loving-kindness.
                                    We have nurtured thousands of students, preparing them not just for academic
                                    success, but for life itself.
                                </p>
                                <div className="bg-blue-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold text-blue-800 mb-3">Our Founding Principles</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-start space-x-2">
                                            <span className="text-blue-600 font-bold">•</span>
                                            <span>Education based on Christian values and Salesian spirituality</span>
                                        </li>
                                        <li className="flex items-start space-x-2">
                                            <span className="text-blue-600 font-bold">•</span>
                                            <span>Holistic development of mind, body, and spirit</span>
                                        </li>
                                        <li className="flex items-start space-x-2">
                                            <span className="text-blue-600 font-bold">•</span>
                                            <span>Family atmosphere fostering love and care</span>
                                        </li>
                                        <li className="flex items-start space-x-2">
                                            <span className="text-blue-600 font-bold">•</span>
                                            <span>Commitment to social transformation through education</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg shadow-lg p-8">
                                <div className="text-center mb-6">
                                    <div className="bg-blue-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800">Established in 1960</h3>
                                    <p className="text-blue-600 font-semibold">Over 60 Years of Excellence</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600">Students Educated</span>
                                        <span className="font-bold text-gray-800">10,000+</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600">Years of Service</span>
                                        <span className="font-bold text-gray-800">60+</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600">Generations Served</span>
                                        <span className="font-bold text-gray-800">3+</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600">Awards & Recognition</span>
                                        <span className="font-bold text-gray-800">50+</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Timeline Section */}
                <section className="py-16 bg-white">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Journey Through Time</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Key milestones and achievements that have shaped our school's history and legacy.
                            </p>
                        </div>
                        <div className="relative">
                            {/* Timeline Line */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-200 h-full"></div>
                            {/* Timeline Events */}
                            <div className="space-y-12">
                                {timelineEvents.map((event, index) => (
                                    <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                                        {/* Timeline Dot */}
                                        <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                                        {/* Content */}
                                        <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                                            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600">
                                                <div className="text-2xl font-bold text-blue-600 mb-2">{event.year}</div>
                                                <h3 className="text-xl font-semibold text-gray-800 mb-3">{event.title}</h3>
                                                <p className="text-gray-600 leading-relaxed">{event.description}</p>
                                            </div>
                                        </div>
                                        {/* Image */}
                                        <div className={`w-5/12 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
                                            <div className="bg-gray-200 rounded-lg overflow-hidden h-48">
                                                <Image
                                                    src={event.image}
                                                    alt={`${event.title} - ${event.year}`}
                                                    width={400}
                                                    height={200}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Founders Section */}
                <section className="py-16">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Founders</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                The visionary saints who inspired our educational mission and continue to guide our path.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                                <div className="bg-blue-100 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6 overflow-hidden">
                                    <Image
                                        src="/images/don-bosco.jpg"
                                        alt="St. John Bosco"
                                        width={128}
                                        height={128}
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-3">St. John Bosco</h3>
                                <p className="text-blue-600 font-semibold mb-4">Founder of the Salesian Society</p>
                                <p className="text-gray-600 leading-relaxed">
                                    "Education is a matter of the heart, of which God alone is the master."
                                    Don Bosco's educational system based on reason, religion, and loving-kindness
                                    continues to inspire our approach to education.
                                </p>
                            </div>
                            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                                <div className="bg-blue-100 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6 overflow-hidden">
                                    <Image
                                        src="/images/mary-mazerello.jpg"
                                        alt="St. Mary Mazzarello"
                                        width={128}
                                        height={128}
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-3">St. Mary Mazzarello</h3>
                                <p className="text-blue-600 font-semibold mb-4">Co-Foundress of the Salesian Sisters</p>
                                <p className="text-gray-600 leading-relaxed">
                                    "We will open a needle work class for the young girls of the village and we will teach them to sew,
                                    but our principle aim will be to teach them to know God, to make them good, and save them from many dangers."
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Legacy Section */}
                <section className="py-16 bg-blue-600 text-white">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold mb-6">Our Legacy Continues</h2>
                        <p className="text-xl mb-8">
                            As we look back on our rich history, we remain committed to the values and principles
                            that have guided us for over six decades. Our journey continues with renewed dedication
                            to excellence in education and character formation.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                            <div>
                                <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Academic Excellence</h3>
                                <p className="text-blue-100">
                                    Maintaining high standards of education and continuous improvement in teaching methodologies.
                                </p>
                            </div>
                            <div>
                                <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Character Formation</h3>
                                <p className="text-blue-100">
                                    Nurturing moral values, spiritual growth, and social responsibility in every student.
                                </p>
                            </div>
                            <div>
                                <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Community Service</h3>
                                <p className="text-blue-100">
                                    Continuing the mission of serving society through education and social transformation.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
} 