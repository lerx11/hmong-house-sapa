import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container-warm section">
        <h1 className="font-display text-4xl md:text-5xl text-ink">
          Hmong House Sapa
        </h1>
        <p className="mt-4 max-w-xl text-ink/70">
          Nature, Guides &amp; Cultural Tours — more sections coming soon.
        </p>
      </main>
    </>
  );
}
