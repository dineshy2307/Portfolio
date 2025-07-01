import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, PaintBucket, Calendar, Bot } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projectIcons = [PaintBucket, Calendar, Bot];
  const projectColors = ["var(--accent-blue)", "var(--accent-purple)", "var(--accent-cyan)"];

  return (
    <section id="projects" className="py-20 bg-[var(--dark-navy)]" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {portfolioData.projects.map((project, index) => {
            const IconComponent = projectIcons[index];
            const color = projectColors[index];
            
            return (
              <motion.div
                key={index}
                className={`glass-effect p-8 rounded-xl project-card ${index === 2 ? 'lg:col-span-2' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {index === 2 ? (
                  // Special layout for RAG GenAI Agent
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <IconComponent 
                        className="mb-4 h-12 w-12" 
                        style={{ color }}
                      />
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-300 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-full text-sm"
                            style={{ 
                              backgroundColor: `${color}20`, 
                              color: color 
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="bg-[var(--slate-medium)]/30 rounded-lg p-6">
                      <div className="text-center mb-4">
                        <div className="text-3xl font-bold" style={{ color }}>
                          {project.impact?.savings}
                        </div>
                        <div className="text-sm text-gray-400">Average Savings</div>
                      </div>
                      <div className="text-center mb-4">
                        <div className="text-2xl font-bold text-[var(--accent-blue)]">
                          {project.impact?.properties}
                        </div>
                        <div className="text-sm text-gray-400">Properties Served</div>
                      </div>
                      <div className="text-sm text-gray-300">
                        <strong>Impact:</strong> {project.impact?.description}
                      </div>
                    </div>
                  </div>
                ) : (
                  // Standard layout for other projects
                  <div className="mb-6">
                    <IconComponent 
                      className="mb-4 h-12 w-12" 
                      style={{ color }}
                    />
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full text-sm"
                          style={{ 
                            backgroundColor: `${color}20`, 
                            color: color 
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4 mb-6">
                      <button className="transition-colors" style={{ color }}>
                        <Github className="h-5 w-5" />
                      </button>
                      <button className="transition-colors" style={{ color }}>
                        <ExternalLink className="h-5 w-5" />
                      </button>
                    </div>
                    <div className="bg-[var(--slate-medium)]/30 rounded-lg p-4">
                      <div className="text-sm text-gray-400">Key Features:</div>
                      <ul className="text-sm text-gray-300 mt-2 space-y-1">
                        {project.features?.map((feature, featureIndex) => (
                          <li key={featureIndex}>• {feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
