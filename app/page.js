import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ToursSection from "@/components/ToursSection";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <About />
        <ToursSection />
        <Gallery />
        <Reviews />
        <Contact />
      </main>
    </>
  );
}
