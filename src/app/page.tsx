import NewsTicker from "./components/NewsTicker";
import EventCard from "./components/EventCard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import MessageSection from "./components/MessageSection";
import WelcomeSection from "./components/WelcomeSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="space-y-8">
        {/* Hero Carousel Section */}
        <section className="px-6 py-8">
          <Carousel />
        </section>

        {/* Welcome Section */}
        <WelcomeSection />

        {/* Leadership Messages Section */}
        <MessageSection />

        {/* News Section */}
        {/* <section className="px-6">
          <h2 className="text-xl font-semibold mb-4">Latest News</h2>
          <NewsTicker />
        </section> */}

        {/* Events Section */}
        {/* <section className="px-6 pb-8">
          <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <EventCard />
          </div>
        </section> */}
      </main>
      <Footer />
    </div>
  );
}
