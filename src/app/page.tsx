import Header from "@/app/components/Header"
import Experience from "@/app/components/Experience";
import Hero from '@/app/components/Hero';
import About from '@/app/components/About';
import Skills from "@/app/components/Skills"
import Contact from "@/app/components/Contact";
import Projects from '@/app/components/Projects';
import Footer from "@/app/components/Footer"


export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#14005c] to-[#2a0066] text-white font-sans selection:bg-indigo-300 selection:text-[#14005c] scroll-smooth overflow-x-hidden">
      <Header />
      <main className="container mx-auto px-6 pt-32 pb-20 max-w-6xl">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}