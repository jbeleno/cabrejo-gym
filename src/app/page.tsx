import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Programs } from "@/components/programs";
import { Trainers } from "@/components/trainers";
import { Infrastructure } from "@/components/infrastructure";
import { Pricing } from "@/components/pricing";
import { FAQ } from "@/components/faq";
import { Location } from "@/components/location";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Programs />
      <Trainers />
      <Infrastructure />
      <Pricing />
      <FAQ />
      <Location />
      <Contact />
      <Footer />
    </>
  );
}
