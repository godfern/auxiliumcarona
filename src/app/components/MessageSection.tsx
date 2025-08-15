import Image from 'next/image';

interface MessageProps {
    name: string;
    title: string;
    message: string;
    photo: string;
    isReversed?: boolean;
}

function MessageCard({ name, title, message, photo, isReversed = false }: MessageProps) {
    return (
        <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 mb-8">
            <div className={`flex flex-col lg:flex-row items-center gap-8 ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                {/* Photo */}
                <div className="relative w-40 h-40 lg:w-48 lg:h-48 flex-shrink-0">
                    <div className="w-full h-full rounded-full overflow-hidden border-4 border-blue-100">
                        <Image
                            src={photo}
                            alt={`${name} - ${title}`}
                            width={192}
                            height={192}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{name}</h3>
                    <p className="text-blue-600 font-semibold text-lg mb-4">{title}</p>
                    <p className="text-gray-600 leading-relaxed text-base">{message}</p>
                </div>
            </div>
        </div>
    );
}

export default function MessageSection() {
    const messages = [
        {
            name: "Sr. Lavita Sequira",
            title: "Principal",
            message: "Welcome to our school community! As Principal, I am committed to fostering an environment where every student can thrive academically, socially, and emotionally. Our dedicated staff works tirelessly to provide innovative learning experiences that prepare students for the challenges of tomorrow. Together, we build a foundation for lifelong success.",
            photo: "/images/sr_lavita.png"
        },
        {
            name: "Sr. Antonette Desouza",
            title: "School Manager",
            message: "Our school management team is dedicated to creating an optimal learning environment where excellence is the standard. We focus on maintaining high academic standards while ensuring our facilities and resources support the best possible educational experience for all our students and staff.",
            photo: "/images/manager.jpg"
        },
        {
            name: "Sr. Provincial",
            title: "Provincial Education Director",
            message: "It gives me great pleasure to support this outstanding educational institution. The commitment to academic excellence and character development demonstrated here serves as a model for schools across our province. We are proud to partner with such a forward-thinking educational community.",
            photo: "/images/provincial.jpg"
        }
    ];

    return (
        <section className="py-12 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Principal's Message
                    </h2>
                    <p className="text-xl text-blue-600 font-semibold mb-4">
                        Sr. Lavita Sequira
                    </p>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Hear from our school leadership about their vision for education and commitment to student success.
                    </p>
                </div>

                <div className="space-y-8">
                    {messages.map((message, index) => (
                        <MessageCard
                            key={index}
                            name={message.name}
                            title={message.title}
                            message={message.message}
                            photo={message.photo}
                            isReversed={false} // All photos on the left
                        />
                    ))}
                </div>
            </div>
        </section>
    );
} 