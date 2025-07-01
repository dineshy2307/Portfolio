import { Mail, Phone, Github } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { portfolioData } from "@/lib/portfolio-data";

export default function Footer() {
  return (
    <footer className="bg-[var(--slate-dark)] py-12 border-t border-[var(--slate-medium)]">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-[var(--accent-blue)] mb-4">
              {portfolioData.personal.name}
            </h3>
            <p className="text-gray-400 mb-6">{portfolioData.personal.title}</p>
            <div className="flex justify-center space-x-6">
              <a 
                href={`mailto:${portfolioData.personal.email}`} 
                className="text-gray-400 hover:text-[var(--accent-blue)] transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a 
                href={portfolioData.personal.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[var(--accent-blue)] transition-colors"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://github.com/dineshyaramada" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[var(--accent-blue)] transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href={`tel:${portfolioData.personal.phone}`} 
                className="text-gray-400 hover:text-[var(--accent-blue)] transition-colors"
              >
                <Phone className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="border-t border-[var(--slate-medium)] pt-8">
            <p className="text-gray-500">
              © 2024 {portfolioData.personal.name}. Built with passion using React, TypeScript, and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
