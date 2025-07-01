import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, GraduationCap, Briefcase } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skillBars = [
    { name: "Full Stack Development", percentage: 95 },
    { name: "Backend Development", percentage: 90 },
    { name: "Cloud & DevOps", percentage: 85 },
    { name: "Mobile Development", percentage: 80 },
  ];

  return (
    <section id="about" className="py-20 bg-[var(--slate-dark)]" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-[var(--accent-blue)]">Who I Am</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {portfolioData.personal.summary}
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              With over 4 years of professional experience at companies like Quext and HummingWave, I've contributed to projects 
              that have served millions of users and generated significant business value.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              I'm passionate about solving complex problems through technology and creating meaningful impact while fostering 
              collaboration and creativity in cross-functional teams.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="glass-effect px-4 py-2 rounded-lg flex items-center">
                <MapPin className="text-[var(--accent-blue)] mr-2 h-4 w-4" />
                <span>Lubbock, Texas</span>
              </div>
              <div className="glass-effect px-4 py-2 rounded-lg flex items-center">
                <GraduationCap className="text-[var(--accent-purple)] mr-2 h-4 w-4" />
                <span>MS Computer Science</span>
              </div>
              <div className="glass-effect px-4 py-2 rounded-lg flex items-center">
                <Briefcase className="text-[var(--accent-cyan)] mr-2 h-4 w-4" />
                <span>4+ Years Experience</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="glass-effect p-8 rounded-xl">
              <h4 className="text-xl font-bold mb-6 text-center">Quick Stats</h4>
              <div className="space-y-6">
                {skillBars.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span>{skill.name}</span>
                      <span>{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-[var(--slate-medium)] rounded-full h-2">
                      <motion.div
                        className="skill-bar bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.percentage}%` } : { width: 0 }}
                        transition={{ duration: 1.5, delay: 0.5 + index * 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
