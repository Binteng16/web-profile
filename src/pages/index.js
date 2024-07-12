import Image from "next/image";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { HeroBanner } from "@/components/HeroBanner";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-[#041421] w-screen h-screen overflow-x-hidden">
      <Navbar/>
      <HeroBanner/>
      <About/>
      <Footer/>
    </div>
  );
}
