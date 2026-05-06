import { Layout, Database, ChevronRight, BrainCircuit} from "lucide-react";


// ==========================================
// 4. Skills Component
// ==========================================
export default function Skills  () {
  return (
    <section id="skills" className="py-24">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Technical <span className="text-indigo-300">Skills</span></h2>
        <div className="h-px bg-white/10 flex-1"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Core Frontend */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:-translate-y-1 transition-transform duration-300">
          <div className="bg-white/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
            <Layout className="text-indigo-300" size={28} />
          </div>
          <h3 className="text-xl font-semibold mb-5">Core Frontend</h3>
          <ul className="space-y-4">
            {['React.js & Next.js', 'TypeScript & JavaScript', 'Redux & ReduxToolkit', 'Tailwind CSS & Bootstrap'].map((skill, sIdx) => (
              <li key={sIdx} className="flex items-center text-indigo-100/90 text-sm md:text-base">
                <ChevronRight size={16} className="text-indigo-400 mr-2 shrink-0" />
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Fundamentals & Tools */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:-translate-y-1 transition-transform duration-300">
          <div className="bg-white/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
            <Database className="text-indigo-300" size={28} />
          </div>
          <h3 className="text-xl font-semibold mb-5">Fundamentals & Tools</h3>
          <ul className="space-y-4">
            {['HTML5 & CSS3', 'Git, GitHub, GitLab', 'JSON & REST APIs', 'SSR & Component Arch'].map((skill, sIdx) => (
              <li key={sIdx} className="flex items-center text-indigo-100/90 text-sm md:text-base">
                <ChevronRight size={16} className="text-indigo-400 mr-2 shrink-0" />
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Backend & Soft Skills */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:-translate-y-1 transition-transform duration-300">
          <div className="bg-white/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
            <BrainCircuit className="text-indigo-300" size={28} />
          </div>
          <h3 className="text-xl font-semibold mb-5">Backend & Soft Skills</h3>
          <ul className="space-y-4">
            {['Python & Flask (Basics)', 'Problem-Solving', 'Continuous Learning', 'Teamwork & Mentoring'].map((skill, sIdx) => (
              <li key={sIdx} className="flex items-center text-indigo-100/90 text-sm md:text-base">
                <ChevronRight size={16} className="text-indigo-400 mr-2 shrink-0" />
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};