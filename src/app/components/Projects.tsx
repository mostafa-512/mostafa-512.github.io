import { ExternalLink } from 'lucide-react';
import Image from 'next/image';



// ==========================================
// 6. Projects Component
// ==========================================
export default function Projects() {

const EvoBadges = ['React.js', 'Vite', 'Flask', 'REST API', 'Gemini API', 'Streaming AI', 'Authentication', 'Component-Based']
const VitoBadges = ['React.js', 'Vite', 'OpenAI API', 'Gemini API', 'DeepSeek', 'Component-Based']
  return (
    <section id="projects" className="py-24">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Featured <span className="text-indigo-300">Projects</span></h2>
        <div className="h-px bg-white/10 flex-1"></div>
      </div>

      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-8 hover:bg-white/[0.07] transition-colors group">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/3 aspect-video bg-black/20 rounded-xl overflow-hidden border border-white/5 relative flex items-center justify-center">
            <Image
              src="/Vito.png"
              loading="eager"
              alt="Evo-Note Image"
              width={384}
              height={384}
              className="w-full h-full object-cover "
            />
          </div>
          <div className="w-full md:w-2/3 space-y-4">
            <div className="flex justify-between items-start">
              <h3 className="text-2xl font-semibold text-white">Vito-Ai-Chatbot</h3>
              <a href="https://vito-ai-chatbot-lake.vercel.app/" target="_blank" rel="noreferrer" className="text-indigo-300 hover:text-white transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10">
                <ExternalLink size={20} />
              </a>
            </div>
            <p className="text-indigo-100/80 leading-relaxed text-sm md:text-base">
              Developed an AI-Chatbot using React and Vite, supporting real-time streaming responses. Successfully integrated multiple AI providers including OpenAI, Gemini, and DeepSeek, all structured within a clean, scalable component-based architecture.
            </p>
            <div className="flex flex-wrap gap-2 pt-3">
              {VitoBadges.map((tech, i) => (
                <span key={i} className="text-xs font-medium px-3 py-1.5 bg-indigo-500/20 border border-indigo-400/30 rounded-full hover:bg-amber-50  hover:text-black transition-all cursor-pointer text-indigo-100 shadow-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-8 hover:bg-white/[0.07] transition-colors group mt-8">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/3 aspect-video bg-black/20 rounded-xl overflow-hidden border border-white/5 relative flex items-center justify-center">
            <Image
              src="/Evo.png"
              loading="eager"
              alt="Evo-Note Image"
              width={384}
              height={384}
              className="w-full h-full object-cover "
            />
          </div>
          <div className="w-full md:w-2/3 space-y-4">
            <div className="flex justify-between items-start">
              <h3 className="text-2xl font-semibold text-white">EvoNote – AI Project Ideation Assistan</h3>
              <a href="https://evo-note-iota.vercel.app/" target="_blank" rel="noreferrer" className="text-indigo-300 hover:text-white transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10">
                <ExternalLink size={20} />
              </a>
            </div>
            <p className="text-indigo-100/80 leading-relaxed text-sm md:text-base">Built a full-stack AI project ideation assistant using React, Vite, and Flask, featuring real-time streaming responses. Successfully integrated Google Gemini to structure development plans, all supported by secure authentication and a clean REST API architecture.</p>
            <div className="flex flex-wrap gap-2 pt-3">
              {EvoBadges.map((tech, i) => (
                <span key={i} className="text-xs font-medium px-3 py-1.5 bg-indigo-500/20 border border-indigo-400/30 rounded-full hover:bg-amber-50  hover:text-black transition-all cursor-pointer text-indigo-100 shadow-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};
