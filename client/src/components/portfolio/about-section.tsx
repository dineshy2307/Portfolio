import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, GraduationCap, Briefcase, University, Folder, FileBadge, PersonStanding } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex flex-col gap-4">
                <div className="glass-effect px-4 py-2 rounded-lg flex items-center">
                  <Briefcase className="text-[var(--accent-cyan)] mr-2 h-4 w-4" />
                  <span>4+ Years Experience</span>
                </div>
                <div className="glass-effect px-4 py-2 rounded-lg flex items-center">
                  <MapPin className="text-[var(--accent-blue)] mr-2 h-4 w-4" />
                  <span>Texas</span>
                </div>
                <div className="glass-effect px-4 py-2 rounded-lg flex items-center">
                  <FileBadge className="text-[var(--accent-blue)] mr-2 h-4 w-4" />
                  <span>F1 Visa/Work Authorization</span>
                </div>
                <div className="glass-effect px-4 py-2 rounded-lg flex items-center">
                  <GraduationCap className="text-[var(--accent-purple)] mr-2 h-4 w-4" />
                  <span>MS CompSci</span>
                  <span className="mx-2"></span>
                  <University className="text-[var(--accent-purple)] mr-2 h-4 w-4" />
                  <span>Texas Tech</span>
                </div>
                <div className="glass-effect px-4 py-2 rounded-lg flex items-center">
                  <GraduationCap className="text-[var(--accent-purple)] mr-2 h-4 w-4" />
                  <span>BTech CompSci</span>
                  <span className="mx-2"></span>
                  <University className="text-[var(--accent-purple)] mr-2 h-4 w-4" />
                  <span>CVR College</span>
                </div>
                <div className="glass-effect px-4 py-2 rounded-lg flex items-center">
                  <PersonStanding className="text-[var(--accent-blue)] mr-2 h-4 w-4" />
                  <span>Indian</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
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
            </motion.div> 
          </div>
      </div>
    </section>
  );
}
