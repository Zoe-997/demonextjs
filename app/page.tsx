import { Inter } from "@next/font/google";
import {  ResolvingMetadata  ,type Metadata} from 'next'


import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionOneRTL from "@/components/About/AboutSectionOneRTL";
import Services from "@/components/Services";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import LocationSystem from "@/components/LocationSystem";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import Logo3i from "../public/images/logo/logo3i.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Information - Intelliegent - Innovation",
  description: "3i được sáng lập với lý tưởng vận dụng sức sáng tạo của con người về măt công nghệ để phục vụ xã hội những sản phẩm và giải pháp mang tính trí tuệ và hiệu quả cao trong cuộc sống.",
};

export async function generateMetadata(
  parent: ResolvingMetadata
): Promise<Metadata> { 
  const previousImages = (await parent).openGraph?.images || []

  return {
    openGraph: {
      images: ['Logo3i.src', ...previousImages],
    },
  }
}

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <AboutSectionOne />
      <AboutSectionOneRTL />
      {/* <AboutSectionTwo /> */}
      <Services />
      <Features />
      <Video />
      <Brands />
      {/* <Testimonials /> */}
      <Pricing />
      <Blog />
      <Contact />
      <LocationSystem />
    </>
  );
}
