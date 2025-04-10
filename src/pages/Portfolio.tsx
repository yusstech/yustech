import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

// Project data type
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  live?: string;
  features: string[];
  categories: string[];
  link?: string;
}

// Sample projects data
const projects: Project[] = [
  {
    id: 1,
    title: 'AI-Powered Trading Platform',
    description: 'A sophisticated trading platform using machine learning for market prediction and automated trading.',
    image: '/images/portfolio/kryl.png',
    tags: ['Fintech', 'AI/ML', 'Python', 'TensorFlow', 'AWS'],
    features: [],
    categories: ['Fintech', 'AI/ML', 'Python', 'TensorFlow', 'AWS'],
    link: 'https://www.kryll.io/'
  },
  {
    id: 2,
    title: 'GIG Logistics Platform',
    description: 'A comprehensive logistics and delivery management system with real-time tracking and route optimization.',
    image: '/images/portfolio/gig.png',
    tags: ['Logistics', 'React', 'Node.js', 'MongoDB', 'AWS'],
    features: [
      'Real-time package tracking',
      'Route optimization',
      'Driver management system',
      'Customer portal',
      'Analytics dashboard'
    ],
    categories: ['Logistics', 'React', 'Node.js', 'MongoDB', 'AWS'],
    link: 'https://giglogistics.com'
  },
  {
    id: 3,
    title: 'Blockchain Supply Chain',
    description: 'A decentralized supply chain management system using blockchain technology for transparency and security.',
    image: '/images/portfolio/t-mining.png',
    tags: ['Blockchain', 'Node.js', 'MongoDB', 'AWS'],
    features: [],
    categories: ['Blockchain', 'Node.js', 'MongoDB', 'AWS'],
    link: 'https://www.t-mining.be/'
  },
  {
    id: 4,
    title: 'Healthcare Analytics Dashboard',
    description: 'A comprehensive healthcare analytics platform with real-time patient monitoring and predictive analytics.',
    image: '/images/portfolio/healthcare-dashboard.jpg',
    tags: ['Healthcare', 'React', 'D3.js', 'HealthKit', 'Firebase'],
    features: [],
    categories: ['Healthcare', 'React', 'D3.js', 'HealthKit', 'Firebase'],
    link: 'https://example.com/healthcare-dashboard'
  },
  {
    id: 5,
    title: 'BeautyFindsNG',
    description: 'A premium e-commerce platform specializing in beauty and skincare products with advanced inventory management and secure payment processing.',
    image: '/images/portfolio/beautyfindsng.png',
    tags: ['E-commerce', 'React', 'Node.js', 'MongoDB', 'Stripe'],
    features: [
      'Secure payment processing',
      'Advanced inventory management',
      'User authentication',
      'Product reviews and ratings',
      'Wishlist functionality'
    ],
    categories: ['E-commerce', 'React', 'Node.js', 'MongoDB', 'Stripe'],
    link: 'https://beautyfindsng.com'
  },
  {
    id: 6,
    title: 'IoT Smart Home System',
    description: 'An integrated smart home system with IoT devices and mobile control interface.',
    image: '/images/portfolio/smart-home.jpg',
    tags: ['IoT', 'React Native', 'Firebase', 'AWS'],
    features: [],
    categories: ['IoT', 'React Native', 'Firebase', 'AWS'],
    link: 'https://example.com/smart-home'
  },
  {
    id: 7,
    title: 'AI Content Generator',
    description: 'An advanced content generation platform using natural language processing and machine learning.',
    image: '/images/portfolio/ai-content.jpg',
    tags: ['AI/ML', 'Python', 'TensorFlow', 'React', 'AWS'],
    features: [],
    categories: ['AI/ML', 'Python', 'TensorFlow', 'React', 'AWS'],
    link: 'https://example.com/ai-content'
  }
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  // Filter projects based on selected tag
  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter(project => project.tags.includes(activeFilter))
      );
    }
  }, [activeFilter]);

  // Get all unique tags
  const allTags = ["all", ...new Set(projects.flatMap(project => project.tags))];

  const categories = [
    'All',
    'Fintech',
    'E-commerce',
    'Blockchain',
    'AI/ML',
    'Healthcare',
    'IoT',
    'React',
    'Node.js',
    'MongoDB',
    'Stripe',
    'Python',
    'TensorFlow',
    'D3.js',
    'React Native',
    'Firebase',
    'HealthKit',
    'AWS'
  ];

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
          Our Portfolio
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Explore our collection of innovative projects that showcase our expertise in web development, 
          mobile apps, and AI integration.
        </p>
      </motion.div>

      {/* Filter Tags */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-2 mb-12"
      >
        {allTags.map(tag => (
          <Button
            key={tag}
            variant={activeFilter === tag ? "default" : "outline"}
            className={`rounded-full ${
              activeFilter === tag 
                ? "bg-brand-purple hover:bg-brand-purple/90" 
                : "border-brand-purple/30 text-white hover:bg-brand-purple/10"
            }`}
            onClick={() => setActiveFilter(tag)}
          >
            {tag.charAt(0).toUpperCase() + tag.slice(1)}
          </Button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-black/50 border border-brand-purple/30 hover:border-brand-purple/50 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map(tag => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="bg-black/50 border-brand-purple/30 text-brand-purple"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-brand-purple transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <Button
                  onClick={() => {
                    setSelectedProject(project);
                    setIsOpen(true);
                  }}
                  className="w-full bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90"
                >
                  View Details
                </Button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Project Details Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[800px] bg-black/90 border border-brand-purple/30">
          {selectedProject && (
            <div className="space-y-6">
              <div className="relative h-64 sm:h-80 rounded-lg overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map(tag => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="bg-black/50 border-brand-purple/30 text-brand-purple"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <h2 className="text-2xl font-bold text-white">
                  {selectedProject.title}
                </h2>
                
                <p className="text-gray-300">
                  {selectedProject.description}
                </p>
                
                <div className="space-y-2">
                  <h3 className="font-semibold text-white">Key Features:</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex gap-4 pt-4">
                  {selectedProject.github && (
                    <Button
                      variant="outline"
                      className="flex-1 border-brand-purple/30 text-white hover:bg-brand-purple/10"
                      onClick={() => window.open(selectedProject.github, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                  )}
                  {selectedProject.live && (
                    <Button
                      className="flex-1 bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90"
                      onClick={() => window.open(selectedProject.live, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Portfolio; 