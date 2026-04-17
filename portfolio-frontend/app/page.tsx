import Navbar from "@/components/ui/Navbar";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/ui/Footer";
import { getJourney, getSkills } from "@/lib/api/apiHelperFunction";

export default async function Home() {
  const skills = await getSkills();
  console.log("Fetched skills:", skills);
  const journey = await getJourney();
  console.log("Fetched journey:", journey);
  return (
    <main className="relative">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Skills skills={skills} />
      <Projects />
      <Experience journey={journey} />
      <Contact />
      <Footer />
    </main>
  );
}
