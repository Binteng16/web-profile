import Image from "next/image";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { HeroBanner } from "@/components/HeroBanner";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { ProjectBanner } from "@/components/ProjectBanner";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-[#041421]">
      <div className="mx-auto max-w-screen-2xl">
        <div className="">
          <Navbar/>
          <HeroBanner/>
          <About/>
          <ProjectBanner/>
          <Footer/>
        </div>
      </div>
    </div>
  );
}
