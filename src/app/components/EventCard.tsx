export default function EventCard() {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md border">
            <h3 className="font-semibold text-lg mb-2">Annual Sports Day</h3>
            <p className="text-gray-600 text-sm mb-2">August 10th, 2025</p>
            <p className="text-gray-700">
                Join us for our annual sports day celebration with exciting competitions and activities.
            </p>
            <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                Learn More
            </button>
        </div>
    );
} 