import { BulkOrders } from "@/components/sections/BulkOrders";
import { Contact } from "@/components/sections/Contact";
import { DesignIdeas } from "@/components/sections/DesignIdeas";
import { Faq } from "@/components/sections/Faq";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Perks } from "@/components/sections/Perks";
import { Reviews } from "@/components/sections/Reviews";
import { StoreFinder } from "@/components/sections/StoreFinder";
import { ChatButton } from "@/components/site/ChatButton";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ScrollReveal direction="up">
          <StoreFinder />
        </ScrollReveal>
        {/* Perks has its own internal staggered reveals */}
        <Perks />
        <ScrollReveal direction="left">
          <HowItWorks />
        </ScrollReveal>
        <ScrollReveal direction="scale">
          <BulkOrders />
        </ScrollReveal>
        {/* Reviews has its own internal staggered reveals */}
        <Reviews />
        <ScrollReveal direction="blur">
          <DesignIdeas />
        </ScrollReveal>
        <ScrollReveal direction="up">
          <Faq />
        </ScrollReveal>
        <ScrollReveal direction="right">
          <Contact />
        </ScrollReveal>
      </main>
      <Footer />
      <ChatButton />
    </>
  );
}
