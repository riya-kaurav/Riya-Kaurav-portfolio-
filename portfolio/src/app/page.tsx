import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Work from "@/components/sections/Work";
import Blog from "@/components/sections/Blog";
// import OpenSource from "@/components/sections/OpenSource";
import Skills from "@/components/sections/Skills";
import CustomCursor from "@/components/ui/CustomCursor";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
         <Work />
        <About />
        <Experience />
        <Skills />
        <Blog />
        {/* <OpenSource /> */}
      </main>
      <Footer />
    </>
  );
}
