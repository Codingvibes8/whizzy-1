import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Paths from "@/components/Paths";
import DemoStores from "@/components/DemoStores";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Comparison from "@/components/Comparison";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Paths />
        <DemoStores />
        <Services />
        <Process />
        <Comparison />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
