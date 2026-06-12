// components/Hero.jsx
import Link from 'next/link';
import Image from 'next/image';
import { Download, Send, Code2 } from 'lucide-react';

// ==========================================
// 2. Hero Component
// ==========================================
export default function Hero() {
  return (
    <section id="home" className="min-h-[80vh] flex flex-col md:flex-row items-center justify-between gap-12 pt-10">
      <div className="flex-1 text-center md:text-left space-y-6">
        <h2 className="text-indigo-200 font-medium tracking-wide text-lg flex items-center justify-center md:justify-start gap-2">
          <Code2 size={24} className="text-indigo-300" /> Welcome to my portfolio
        </h2>
        <h1 className="text-4xl md:text-6xl md:leading-[1.2] font-bold">
          Hi, I&#39;m <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-indigo-300">
            Mostafa Abdalraheem
          </span>
        </h1>
        <h3 className="text-2xl md:text-3xl font-medium text-indigo-100/90">
          Front-end Developer <span className="text-indigo-300 px-2">|</span> React.js <span className="text-indigo-300 px-2">|</span> Next.js
        </h3>
        <p className="text-indigo-100/80 max-w-lg mx-auto md:mx-0 leading-relaxed text-lg">
          I build interactive, responsive, and high-performance web applications. Programming is my life, and I love discovering everything related to tech.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
          <a href="/Mostafa_Abdalraheem.pdf" download className="flex items-center gap-2 bg-white text-[#14005c] px-8 py-3 rounded-full font-bold hover:bg-indigo-50 transition-all hover:-translate-y-1 w-full sm:w-auto justify-center shadow-lg shadow-black/10">
            <Download size={20} />
            Download CV
          </a>
          <Link href="#contact" className="flex items-center gap-2 border border-white/30 text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-all hover:-translate-y-1 w-full sm:w-auto justify-center">
            <Send size={20} />
            Contact Me
          </Link>
        </div>

        <div className="flex items-center justify-center md:justify-start gap-6 pt-6">
          <a href="https://github.com/mostafa-512" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white transition-colors">

          </a>
          <a href="https://www.linkedin.com/in/mostafa-abdalraheem" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white transition-colors">
          </a>
        </div>
      </div>

      <div className="flex-1 flex justify-center md:justify-end relative mt-10 md:mt-0">
        <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full scale-75"></div>
        <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-tr from-white/20 to-white/5 shadow-xl">
          <div className="w-full h-full rounded-full overflow-hidden border border-white/20 bg-[#1a0b3f]">
            {/* Note: In Next.js, replace <img> with <Image src="..." fill /> */}
            <Image
              src="/IMG.JPG"
              loading="eager"
              alt="Mostafa Abdalraheem"
              width={384}
              height={384}
              className="w-full h-full object-cover rounded-full"
            />  
          </div>
        </div>
      </div>
    </section>
  );
};