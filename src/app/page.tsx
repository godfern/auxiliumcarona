import NewsTicker from "./components/NewsTicker";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import WelcomeSection from "./components/WelcomeSection";
// import FacebookGallery from "./components/FacebookGallery";
import EventsNewsSection from "./components/EventsNewsSection";

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

        {/* Upcoming News and Events Section */}
        <section className="px-6">
          <h2 className="text-xl font-semibold mb-4">Upcoming News and Events</h2>
          <NewsTicker />
        </section>

        {/* Latest Events & News Section */}
        <EventsNewsSection />

        {/* Facebook Gallery Section */}
        {/* <FacebookGallery /> */}


      </main>
      <Footer />
    </div>
  );
}
