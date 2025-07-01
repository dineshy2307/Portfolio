import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";

export default function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-20 bg-[var(--slate-dark)]" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Education & Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Education */}
          <motion.div
            className="glass-effect p-8 rounded-xl"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-[var(--accent-blue)] flex items-center">
              <GraduationCap className="mr-3 h-6 w-6" />
              Education
            </h3>
            <div className="space-y-6">
              {portfolioData.education.map((edu, index) => (
                <div key={index} className={`border-l-4 pl-4 ${index === 0 ? 'border-[var(--accent-blue)]' : 'border-[var(--accent-purple)]'}`}>
                  <h4 className="font-bold text-lg">{edu.degree}</h4>
                  <p className={index === 0 ? 'text-[var(--accent-blue)]' : 'text-[var(--accent-purple)]'}>
                    {edu.school}
                  </p>
                  <p className="text-gray-400 text-sm">{edu.period} | GPA: {edu.gpa}</p>
                  <p className="text-gray-300 text-sm mt-2">
                    {edu.coursework.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            className="glass-effect p-8 rounded-xl"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-[var(--accent-purple)] flex items-center">
              <Award className="mr-3 h-6 w-6" />
              Certifications
            </h3>
            <div className="space-y-4">
              {portfolioData.certifications.map((cert, index) => {
                const certIcons = ['layers', 'python', 'robot', 'google', 'file-text'];
                const certColors = ['var(--accent-blue)', 'var(--accent-purple)', 'var(--accent-cyan)', 'var(--accent-blue)', 'var(--accent-purple)'];
                
                return (
                  <motion.div
                    key={index}
                    className="flex items-center p-3 bg-[var(--slate-medium)]/30 rounded-lg transition-all duration-300 hover:bg-[var(--slate-medium)]/50"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  >
                    <i 
                      className={`fas fa-${certIcons[index % certIcons.length]} mr-3`}
                      style={{ color: certColors[index % certColors.length] }}
                    />
                    <span>{cert}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
