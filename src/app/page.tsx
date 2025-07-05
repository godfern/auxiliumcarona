import NewsTicker from "./components/NewsTicker";
import EventCard from "./components/EventCard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="p-6 space-y-8">
        <section>
          <h1 className="text-3xl font-bold">Welcome to Our School</h1>
          <p className="text-gray-600">Empowering young minds for a brighter future.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Latest News</h2>
          <NewsTicker />
        </section>

        <section>
          <h2 className="text-xl font-semibold">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <EventCard />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
