import NewsTicker from "./components/NewsTicker";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import WelcomeSection from "./components/WelcomeSection";
// import FacebookGallery from "./components/FacebookGallery";
import EventsNewsSection from "./components/EventsNewsSection";
import { fetchEvents, fetchCarousels } from "@/lib/strapi";

export default async function Home() {
  let events: Awaited<ReturnType<typeof fetchEvents>> = [];
  let carouselItems: Awaited<ReturnType<typeof fetchCarousels>> = [];
  try {
    events = await fetchEvents();
  } catch (e) {
    console.error("Failed to load events from Strapi:", e);
  }
  try {
    carouselItems = await fetchCarousels();
  } catch (e) {
    console.error("Failed to load carousel from Strapi:", e);
  }

  return (
    <div>
      <Navbar />
      <main className="space-y-8">
        {/* Hero Carousel Section */}
        <section className="px-6 py-8">
          <Carousel items={carouselItems} />
        </section>

        {/* Welcome Section */}
        <WelcomeSection />

        {/* Upcoming News and Events Section */}
        <section className="px-6">
          <h2 className="text-xl font-semibold mb-4">Upcoming News and Events</h2>
          <NewsTicker />
        </section>

        {/* Latest Events & News Section */}
        <EventsNewsSection events={events} />

        {/* Facebook Gallery Section */}
        {/* <FacebookGallery /> */}


      </main>
      <Footer />
    </div>
  );
}
