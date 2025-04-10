import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";

const projects = [
  {
    name: "Kryll.io",
    description: "AI-Powered Trading Platform",
    link: "https://www.kryll.io/",
    category: "Fintech/AI"
  },
  {
    name: "GIG Logistics",
    description: "Logistics & Delivery Management",
    link: "https://giglogistics.com",
    category: "Logistics"
  }
];

const ClientProjects = () => {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">
          Featured Projects
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Explore our flagship projects that demonstrate our expertise in building scalable, innovative solutions.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="max-w-4xl mx-auto space-y-8">
        {projects.map((project, index) => (
          <motion.a
            key={project.name}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="block group"
          >
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-black/50 to-brand-purple/10 border border-brand-purple/30 hover:border-brand-purple/50 transition-all duration-300 p-8">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium text-brand-purple">{project.category}</span>
                    <ArrowRight className="w-4 h-4 text-brand-purple" />
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-brand-purple transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-gray-400 mt-2">
                    {project.description}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  className="text-brand-purple hover:text-white hover:bg-brand-purple/20"
                >
                  <ExternalLink className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Contact CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-center mt-16"
      >
        <p className="text-gray-400 mb-4">Interested in working together?</p>
        <Button
          className="bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90"
          onClick={() => window.open('https://wa.me/your-number', '_blank')}
        >
          Let's Chat on WhatsApp
        </Button>
      </motion.div>
    </div>
  );
};

export default ClientProjects; 