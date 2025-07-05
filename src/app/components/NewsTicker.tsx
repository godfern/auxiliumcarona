"use client";

import { useEffect, useState } from "react";

const newsItems = [
    "Admissions open for 2025–26 batch!",
    "Annual Sports Day on August 10th.",
    "Parent-Teacher Meeting on July 15th.",
];

export default function NewsTicker() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % newsItems.length);
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-yellow-100 text-yellow-800 p-2 rounded shadow">
            <p className="animate-marquee">{newsItems[index]}</p>
        </div>
    );
}
