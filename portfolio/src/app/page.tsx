
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
// import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import CustomCursor from "@/components/ui/CustomCursor";
import Experience from "@/components/sections/Experience";
import Blog from "@/components/sections/Blog";

export default function Home() {
  return (
    <>
      <CustomCursor />
     
      <main>
        <Hero />
         <Projects /> 
        <About />
        <Experience />
        <Blog/>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
