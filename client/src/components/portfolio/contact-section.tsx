import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { portfolioData } from "@/lib/portfolio-data";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    mutation.mutate(data);
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
                    linkedin.com/in/dinesh-yaramada
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
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Name</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          className="bg-[var(--slate-medium)] border-[var(--slate-medium)] text-white focus:ring-[var(--accent-blue)] focus:border-[var(--accent-blue)]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Email</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          type="email"
                          className="bg-[var(--slate-medium)] border-[var(--slate-medium)] text-white focus:ring-[var(--accent-blue)] focus:border-[var(--accent-blue)]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Subject</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          className="bg-[var(--slate-medium)] border-[var(--slate-medium)] text-white focus:ring-[var(--accent-blue)] focus:border-[var(--accent-blue)]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field} 
                          rows={4}
                          className="bg-[var(--slate-medium)] border-[var(--slate-medium)] text-white focus:ring-[var(--accent-blue)] focus:border-[var(--accent-blue)] resize-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  disabled={mutation.isPending}
                  className="w-full bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  <Send className="mr-2 h-4 w-4" />
                  {mutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
