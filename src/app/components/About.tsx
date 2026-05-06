
import {GraduationCap} from "lucide-react";


// ==========================================
// 3. About Component
// ==========================================
export default function About  ()  {
  return (
    <section id="about" className="py-24">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">About <span className="text-indigo-300">Me</span></h2>
        <div className="h-px bg-white/10 flex-1"></div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10">
          <p className="text-lg text-indigo-100/90 leading-relaxed mb-6">
            I'm a Front-end Developer with a passion for continuous learning and problem-solving. I always love learning new technologies and discovering anything that has a simple relation to tech.
          </p>
          <p className="text-lg text-indigo-100/90 leading-relaxed mb-6">
            My goal is to grow in my career to become a Full-Stack Developer, Team Lead, and Mentor. I have strong experience in building responsive and user-friendly interfaces, focusing on clean, component-based architecture and performance optimization.
          </p>
          <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/5">
            <div className="bg-white/10 p-3 rounded-full text-indigo-200">
              <GraduationCap size={28} />
            </div>
            <div>
              <h4 className="text-xl font-semibold">Education</h4>
              <p className="text-indigo-200/80">Licentiate Degree in Islamic and Arabic Studies</p>
              <p className="text-sm text-indigo-300">Al-Azhar University (Exp. 2028)</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
           <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
              <h4 className="text-4xl font-bold text-white mb-2">B2</h4>
              <p className="text-indigo-200/80 text-sm">English Level</p>
           </div>
           <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
              <h4 className="text-4xl font-bold text-white mb-2">Native</h4>
              <p className="text-indigo-200/80 text-sm">Arabic Language</p>
           </div>
           <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors flex-1 flex flex-col justify-center">
              <h4 className="text-2xl font-bold text-indigo-300 mb-2">Top Skills</h4>
              <p className="text-sm text-indigo-200/80 leading-relaxed">Server-Side Rendering (SSR)<br/>Component-Based Architecture<br/>Data Fetching</p>
           </div>
        </div>
      </div>
    </section>
  );
};
