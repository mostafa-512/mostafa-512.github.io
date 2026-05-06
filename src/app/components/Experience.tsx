// ==========================================
// 5. Experience Component
// ==========================================

interface Job {
  role: string;
  company: string;
  period: string;
  desc: string;
}


export default function Experience() {
  const jobs: Job[] = [
    { 
      role: 'Leader of Front-End Track', 
      company: 'MSP Tech Club - Al Azhar University', 
      period: 'March 2026 - Present', 
      desc: "Stepped into the role of Lead Front-end Instructor. Main focus is to simplify front-end concepts, guide students through hands-on projects, and help them build a solid foundation in web development. Fostering a collaborative learning environment for aspiring developers." 
    },
    { 
      role: 'Front-End Instructor (Volunteer)', 
      company: 'MSP Tech Club - Al Azhar University', 
      period: 'November 2025 - Present', 
      desc: 'Delivered sessions and workshops on HTML, CSS, JavaScript, and React. Helped students understand core web development concepts, build practical projects, and prepare for internships. Supported students with assignments and career guidance.' 
    }
  ];

  return (
    <section id="experience" className="py-24">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Work <span className="text-indigo-300">Experience</span></h2>
        <div className="h-px bg-white/10 flex-1"></div>
      </div>

      <div className="space-y-10 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[1px] before:bg-white/20">
        {jobs.map((job: Job, idx: number) => (
          <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-[3px] border-[#14005c] bg-indigo-300 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="flex flex-col xl:flex-row xl:items-center justify-between mb-2 gap-2">
                <h3 className="text-xl font-semibold text-white">{job.role}</h3>
                <span className="text-indigo-300 text-sm xl:text-right whitespace-nowrap">{job.period}</span>
              </div>
              <h4 className="text-base text-indigo-200/80 mb-4">{job.company}</h4>
              <p className="text-indigo-100/80 leading-relaxed text-sm md:text-base">
                {job.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
