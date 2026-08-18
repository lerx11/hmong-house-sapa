import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ToursSection from "@/components/ToursSection";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <About />
        <ToursSection />
      </main>
    </>
  );
}
