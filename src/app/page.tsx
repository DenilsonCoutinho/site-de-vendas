"use client"
// app/page.tsx
import Hero from "./components/hero";
import ProvocativeSection from "./components/ProvocativeSection";
import TestimonialsSection from "./components/TestimonialsSection";
import PortfolioCarousel from "./components/portfolioCarousel";
import GoogleReviews from "./components/googleReviews";
import AggressiveCopy from "./components/aggressiveCopy";
import WhatsappTestimonials from "./components/whatsappTestimonials";
import ContactForm from "./components/contactForm";
import FAQ from "./components/faq";
import Examples from "./components/examples";

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      <Hero />
      <PortfolioCarousel  title="Nosso Portfólio"
        subtitle="Veja alguns dos sites incríveis que já criamos para nossos clientes"
      />
      <ProvocativeSection />
      <Examples/>
      <TestimonialsSection/>
      {/* <WhatsappTestimonials /> */}
      {/* <ContactForm /> */}
      {/* <FAQ /> */}
    </main>
  );
}