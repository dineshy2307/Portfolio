import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { portfolioData } from "@/lib/portfolio-data";
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    emailjs.sendForm(
      'service_6snkxcx',
      'template_4jmt75b',
      form,
      'vNtfEAH5ZJ-s8oy4I'
    )
    .then(
      () => {
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
          variant: "success"
        });
        form.reset();
      },
      (error) => {
        toast({
          title: "Failed to send message",
          description: error.text || "Please try again later.",
          variant: "destructive"
        });
      }
    );
  };

  return (
    <section id="contact" className="py-20 bg-[var(--dark-navy)]" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's connect and discuss how we can work together!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-effect p-6 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-[var(--accent-blue)]">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="text-[var(--accent-blue)] text-xl w-8 mr-3" />
                  <a 
                    href={`mailto:${portfolioData.personal.email}`} 
                    className="text-gray-300 hover:text-[var(--accent-blue)] transition-colors"
                  >
                    {portfolioData.personal.email}
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="text-[var(--accent-purple)] text-xl w-8 mr-3" />
                  <a 
                    href={`tel:${portfolioData.personal.phone}`} 
                    className="text-gray-300 hover:text-[var(--accent-purple)] transition-colors"
                  >
                    {portfolioData.personal.phone}
                  </a>
                </div>
                <div className="flex items-center">
                  <FaLinkedin className="text-[var(--accent-cyan)] text-xl w-8 mr-3" />
                  <a 
                    href={portfolioData.personal.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-[var(--accent-cyan)] transition-colors"
                  >
                    linkedin.com/in/dineshyaramada
                  </a>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-[var(--accent-blue)] text-xl w-8 mr-3" />
                  <span className="text-gray-300">{portfolioData.personal.location}</span>
                </div>
              </div>
            </div>
            
            <div className="glass-effect p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-[var(--accent-purple)]">Let's Connect</h3>
              <p className="text-gray-300 mb-6">
                Available for full-time SDE roles and exciting freelance projects. 
                I'm particularly interested in opportunities involving:
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Full Stack Development</li>
                <li>• AI/ML Integration</li>
                <li>• Cloud Architecture</li>
                <li>• Mobile Applications</li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="glass-effect p-8 rounded-xl"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-[var(--accent-blue)]">Send a Message</h3>
            <form onSubmit={sendEmail} className="glass-effect p-8 rounded-xl space-y-6 max-w-xl mx-auto">
              <div>
                <label className="block text-gray-300 mb-2" htmlFor="name">Name</label>
                <input
                  className="w-full px-4 py-2 rounded-md bg-[var(--slate-medium)] text-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--accent-blue)]"
                  type="text"
                  id="name"
                  name="name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2" htmlFor="email">Email</label>
                <input
                  className="w-full px-4 py-2 rounded-md bg-[var(--slate-medium)] text-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--accent-blue)]"
                  type="email"
                  id="email"
                  name="email"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2" htmlFor="message">Message</label>
                <textarea
                  className="w-full px-4 py-2 rounded-md bg-[var(--slate-medium)] text-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--accent-blue)]"
                  id="message"
                  name="message"
                  rows={5}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[var(--accent-blue)] text-white font-semibold py-2 px-4 rounded-md hover:bg-[var(--accent-purple)] transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
