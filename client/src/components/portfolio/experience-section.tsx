import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { portfolioData } from "@/lib/portfolio-data";

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const getCompanyInitial = (company: string) => {
    return company.charAt(0).toUpperCase();
  };

  const getCompanyColor = (index: number) => {
    const colors = ["var(--accent-blue)", "var(--accent-purple)", "var(--accent-cyan)"];
    return colors[index % colors.length];
  };

  return (
    <section id="experience" className="py-20 bg-[var(--slate-dark)]" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-[var(--accent-blue)] to-[var(--accent-purple)]"></div>
            
            {portfolioData.experience.map((exp, index) => (
              <motion.div
                key={index}
                className="relative mb-16"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="flex items-center mb-4">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl md:absolute md:left-1/2 md:transform md:-translate-x-1/2"
                    style={{ backgroundColor: getCompanyColor(index) }}
                  >
                    {getCompanyInitial(exp.company)}
                  </div>
                </div>
                
                <div className={`ml-24 md:ml-0 ${index % 2 === 0 ? 'md:w-1/2 md:pr-8' : 'md:w-1/2 md:ml-auto md:pl-8'}`}>
                  <div className="glass-effect p-6 rounded-xl">
                    <div 
                      className="text-sm font-semibold mb-2"
                      style={{ color: getCompanyColor(index) }}
                    >
                      {exp.period}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{exp.role}</h3>
                    <h4 
                      className="font-semibold mb-4"
                      style={{ color: getCompanyColor(index) }}
                    >
                      {exp.company}
                    </h4>
                    <ul className="space-y-2 text-gray-300">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-sm">
                          • {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
