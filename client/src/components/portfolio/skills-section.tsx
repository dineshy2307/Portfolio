import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Server, Cloud, Database, Smartphone, Wrench } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code,
    color: "var(--accent-blue)",
    skills: portfolioData.skills.frontend,
  },
  {
    title: "Backend",
    icon: Server,
    color: "var(--accent-purple)",
    skills: portfolioData.skills.backend,
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "var(--accent-cyan)",
    skills: portfolioData.skills.cloud,
  },
  {
    title: "Database",
    icon: Database,
    color: "var(--accent-blue)",
    skills: portfolioData.skills.database,
  },
  {
    title: "Mobile",
    icon: Smartphone,
    color: "var(--accent-purple)",
    skills: portfolioData.skills.mobile,
  },
  {
    title: "Tools & Testing",
    icon: Wrench,
    color: "var(--accent-cyan)",
    skills: portfolioData.skills.tools,
  },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="skills" className="py-20 bg-[var(--dark-navy)]" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                className="glass-effect p-8 rounded-xl project-card"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-center mb-6">
                  <IconComponent 
                    className="mx-auto mb-4 h-12 w-12" 
                    style={{ color: category.color }}
                  />
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-[var(--slate-medium)] px-3 py-1 rounded-full text-sm transition-all duration-300 hover:bg-[var(--slate-light)] hover:text-[var(--dark-navy)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
