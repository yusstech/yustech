import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ShippingProcess from "@/components/ShippingProcess";
import AnimatedText from "@/components/AnimatedText";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const Index = () => {
  useEffect(() => {
    // Set up intersection observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
        }
      });
    }, { threshold: 0.1 });
    
    // Observe all elements with the animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      
      {/* Step 1: The Problem - Why Most Products Never Launch */}
      <section id="services" className="pt-20 relative">
        <div className="absolute inset-0 tech-pattern"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="inline-block mb-2 px-3 py-1 rounded-full border border-brand-purple/30 text-sm text-brand-purple">
              Step 1: The Problem
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Most Products <span className="gradient-text">Never Launch</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              <span className="block mb-2">• Frustrated with developers disappearing mid-project?</span>
              <span className="block mb-2">• Tired of spending months (or years) on something that never ships?</span>
              <span className="block mb-2">• Lost in technical complexity?</span>
              <span className="block mt-4 text-white font-semibold">🛑 The truth? Most startups fail not because of bad ideas, but because of bad execution.</span>
              <span className="block mt-4 text-brand-purple font-medium">✅ What if you had a team that guarantees your product gets built & launched—without delays?</span>
            </p>
          </div>

          {/* Featured testimonial */}
          <div className="mb-16">
            <Testimonial
              quote="After two failed attempts with other developers, YussTech delivered our e-commerce platform in half the time and exactly to spec. Revenue is up 215% since launch."
              name="Sarah Johnson"
              title="CEO"
              company="FashionMart"
              project="E-commerce Website"
              variant="featured"
            />
          </div>
          
          {/* Services grid - keep existing code with updated messaging */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                title: "Websites & Web Apps",
                description: "Custom responsive websites and powerful web applications built to convert visitors into customers.",
                features: ["Modern & responsive design", "SEO optimization", "Performance optimization", "Interactive features"],
                painPoint: "Tired of websites that don't convert or apps that never launch?",
                solution: "We deliver fully-functional, beautiful websites and web apps that actually get completed and generate results.",
                testimonial: {
                  quote: "The website exceeded our expectations and was delivered ahead of schedule.",
                  name: "Alex Roberts",
                  title: "Marketing Director",
                  company: "GrowthBrand",
                  project: "Company Website"
                }
              },
              {
                title: "Mobile Apps",
                description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
                features: ["iOS & Android development", "User-focused design", "Performance optimization", "Continuous support"],
                painPoint: "Frustrated with mobile app developers who miss deadlines and go over budget?",
                solution: "Our fixed timeline and budget guarantee ensures your mobile app launches on schedule, every time.",
                testimonial: {
                  quote: "Their AI integration saved us 30+ hours of manual work every week. The ROI was almost immediate.",
                  name: "Michael Chen",
                  title: "Operations Director",
                  company: "LogisticsPro",
                  project: "AI Workflow Automation"
                }
              },
              {
                title: "AI Integration",
                description: "Harness the power of artificial intelligence to automate processes and unlock new capabilities for your business.",
                features: ["Custom AI solutions", "Process automation", "Data analysis", "AI-powered features"],
                painPoint: "Struggling to implement AI solutions that deliver real business value?",
                solution: "We build practical AI implementations that solve real problems and create measurable ROI for your business.",
                testimonial: null
              },
              {
                title: "Project Rescue & Management",
                description: "We take over stalled projects, fix issues, and get your product back on track with professional management.",
                features: ["Code audit & refactoring", "Performance optimization", "Feature completion", "Ongoing maintenance"],
                painPoint: "Have a half-finished product that's burning money and not delivering value?",
                solution: "Our rescue team will evaluate, fix, and complete your project so you can finally launch and start seeing returns.",
                testimonial: {
                  quote: "Our app was stuck in development hell for 9 months. YusTech rescued it and shipped a functional version in just 6 weeks.",
                  name: "Thomas Wright",
                  title: "Founder",
                  company: "HealthTrack",
                  project: "Mobile App Rescue"
                }
              }
            ].map((service, index) => (
              <div key={index} className="space-y-6">
                <div 
                  className="glass rounded-lg service-card animate-on-scroll p-8 border border-brand-purple/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-2xl font-bold mb-3 text-white">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="mb-6 bg-brand-purple/10 p-4 rounded-lg border border-brand-purple/20">
                    <h4 className="font-semibold text-brand-purple mb-2">Pain Point:</h4>
                    <p className="italic text-gray-300">{service.painPoint}</p>
                  </div>
                  
                  <div className="mb-6 bg-brand-blue/10 p-4 rounded-lg border border-brand-blue/20">
                    <h4 className="font-semibold text-brand-blue mb-2">Our Solution:</h4>
                    <p className="text-gray-200">{service.solution}</p>
                  </div>
                  
                  <ul className="mb-6 space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-300">
                        <svg className="w-4 h-4 mr-2 text-brand-purple" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    className="w-full bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90 transition-all group px-4 py-2 rounded text-white font-medium flex items-center justify-center"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                    </svg>
                  </button>
                </div>
                
                {/* Testimonial below each service card if available */}
                {service.testimonial && (
                  <Testimonial
                    quote={service.testimonial.quote}
                    name={service.testimonial.name}
                    title={service.testimonial.title}
                    company={service.testimonial.company}
                    project={service.testimonial.project}
                    variant="compact"
                    delay={index * 100 + 200}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Step 2: The Solution - Our Proven Process */}
      <section id="process" className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0d0d0f]"></div>
        <div className="absolute inset-0 sweet-pattern opacity-10"></div>
        
        {/* Animated elements */}
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-brand-purple/5 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-brand-blue/5 blur-3xl"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 grid-pattern opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <AnimatedText className="inline-block mb-2 px-3 py-1 rounded-full border border-brand-purple/30 text-sm text-brand-purple">
              Step 2: The Solution
            </AnimatedText>
            
            <AnimatedText variant="gradient" delay={100} className="text-3xl md:text-4xl font-bold mb-4">
              Our Proven <span className="gradient-text">"Shipped Product"</span> Process
            </AnimatedText>
            
            <AnimatedText delay={200} className="text-lg text-gray-400 max-w-2xl mx-auto">
              At YussTech, we don't just build. We guarantee you a fully shipped product.
              No wasted time. No unreliable teams. Just results.
            </AnimatedText>
          </div>

          <div className="mb-16 grid md:grid-cols-2 gap-8">
            <Testimonial
              quote="The structured approach YussTech brings to development made the entire process transparent and stress-free. We always knew where we stood."
              name="Jennifer Lee"
              title="Product Manager"
              company="TechFusion"
              project="SaaS Platform"
              variant="simple"
              delay={100}
              className="md:col-span-1"
            />
            <Testimonial
              quote="Their process documentation and regular updates gave us confidence throughout the development cycle. No surprises at the end."
              name="David Miller"
              title="CTO"
              company="StartupNow"
              project="Marketplace App"
              variant="simple"
              delay={200}
              className="md:col-span-1"
            />
          </div>

          <ShippingProcess />
        </div>
      </section>
      
      {/* Step 3: Social Proof - Success Stories & Testimonials */}
      <section id="testimonials" className="py-20 relative bg-black/80">
        <div className="absolute inset-0 grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="inline-block mb-2 px-3 py-1 rounded-full border border-brand-purple/30 text-sm text-brand-purple">
              Step 3: Social Proof
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Real Clients. <span className="gradient-text">Real Results.</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Don't take our word for it. Here's what our clients say about working with us.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Testimonial
              quote="YussTech delivered our platform in 3 weeks—after other teams wasted months!"
              name="Robert Chen"
              title="Founder"
              company="HealthTech Solutions"
              project="Telehealth Platform"
              variant="default"
              delay={100}
            />
            <Testimonial
              quote="From idea to launch, they handled everything. Best decision we made."
              name="Amanda Lopez"
              title="COO"
              company="RetailConnect"
              project="Inventory System"
              variant="default"
              delay={200}
            />
            <Testimonial
              quote="Their team rescued our project when we were ready to give up. Now we're profitable."
              name="James Wilson"
              title="CEO"
              company="DataDrive"
              project="Analytics Dashboard"
              variant="default"
              delay={300}
            />
          </div>
        </div>
      </section>
      
      {/* Step 4: Offer - Your Custom Build Plan */}
      <section id="offer" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/10 to-brand-blue/10"></div>
        <div className="absolute inset-0 tech-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="inline-block mb-2 px-3 py-1 rounded-full border border-brand-purple/30 text-sm text-brand-purple">
              Step 4: Limited Offer
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your Custom <span className="gradient-text">Build Plan</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We only take on a few clients per month. Get clarity on your product & a strategy to launch—before you invest thousands.
            </p>
          </div>
          
          <div className="max-w-md mx-auto glass rounded-lg p-6 shadow-lg border border-brand-purple/30 animate-pulse-glow">
            <h3 className="text-xl font-bold mb-4 text-white">⚡ Limited Slots Available</h3>
            
            <form className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-4 py-2 rounded bg-muted/50 border border-brand-purple/30 focus:outline-none focus:ring-2 focus:ring-brand-purple text-white placeholder:text-gray-400"
                  required
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full px-4 py-2 rounded bg-muted/50 border border-brand-purple/30 focus:outline-none focus:ring-2 focus:ring-brand-purple text-white placeholder:text-gray-400"
                  required
                />
              </div>
              <div>
                <select 
                  className="w-full px-4 py-2 rounded bg-muted/50 border border-brand-purple/30 focus:outline-none focus:ring-2 focus:ring-brand-purple text-gray-300 placeholder:text-gray-400"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>Select Service</option>
                  <option value="website">Website/Web App</option>
                  <option value="mobile">Mobile App</option>
                  <option value="ai">AI Integration</option>
                  <option value="rescue">Project Rescue</option>
                </select>
              </div>
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90 transition-all group py-6"
              >
                Book Your Custom Plan Today
                <ArrowUpRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
            </form>
            
            <p className="mt-4 text-xs text-gray-400">
              By booking, you agree to our terms and conditions. The $100 fee is applied to your project if you decide to work with us.
            </p>
          </div>
        </div>
      </section>
      
      {/* Step 5: Existing Projects - Fix, Rebuild, or Scale */}
      <section id="rescue" className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0d0d0f]"></div>
        <div className="absolute inset-0 sweet-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="inline-block mb-2 px-3 py-1 rounded-full border border-brand-purple/30 text-sm text-brand-purple">
              Step 5: Rescue Services
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Fix, Rebuild, or <span className="gradient-text">Scale Your Product</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Already have a product but stuck? Let's get your product back on track.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="glass rounded-lg p-6 border border-brand-purple/20 animate-on-scroll">
              <h3 className="text-xl font-bold mb-3 text-white">Fix Broken Code</h3>
              <p className="text-gray-300 mb-4">We rescue failing projects with expert code review and repair services.</p>
              <Button className="w-full bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90">
                Rescue My Project
              </Button>
            </div>
            
            <div className="glass rounded-lg p-6 border border-brand-purple/20 animate-on-scroll" style={{ animationDelay: "0.1s" }}>
              <h3 className="text-xl font-bold mb-3 text-white">Rebuild & Scale</h3>
              <p className="text-gray-300 mb-4">Upgrade outdated or poorly built software with modern architecture.</p>
              <Button className="w-full bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90">
                Upgrade My Product
              </Button>
            </div>
            
            <div className="glass rounded-lg p-6 border border-brand-purple/20 animate-on-scroll" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-xl font-bold mb-3 text-white">Add Features & Automate</h3>
              <p className="text-gray-300 mb-4">Enhance your product with AI, integrations, and optimizations.</p>
              <Button className="w-full bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90">
                Enhance My Product
              </Button>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Testimonial
              quote="Our app was stuck in development hell for 9 months. YussTech rescued it and shipped a functional version in just 6 weeks."
              name="Thomas Wright"
              title="Founder"
              company="HealthTrack"
              project="Mobile App Rescue"
              variant="featured"
            />
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Get answers to common questions about our services and processes.
            </p>
          </div>

          {/* Client testimonial about the experience */}
          <div className="max-w-3xl mx-auto mb-12">
            <Testimonial
              quote="Working with YussTech was refreshingly straightforward. They answered all our questions directly and delivered exactly what they promised."
              name="Rebecca Wong"
              title="Operations Director"
              company="RetailGrowth"
              project="Inventory System"
              variant="default"
              delay={100}
            />
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "How does the 100% shipping guarantee work?",
                  answer: "Our guarantee means we commit to delivering your product on time and on budget. If we fail to meet the agreed timeline, we'll continue working at no additional cost until it's completed."
                },
                {
                  question: "How much does a typical project cost?",
                  answer: "Project costs vary widely based on complexity, features, and timeline. After your $100 consultation, we'll provide a fixed-price quote with no surprises or hidden fees."
                },
                {
                  question: "How long does a typical project take?",
                  answer: "Timelines depend on project scope. Simple websites might take 2-4 weeks, while complex applications can take 3-6 months. We'll provide a detailed timeline during your consultation."
                },
                {
                  question: "Can you work with my existing development team?",
                  answer: "Absolutely! We can complement your team's skills or take over completely. Our rescue services are specifically designed to integrate with your existing resources."
                },
                {
                  question: "What happens after my product launches?",
                  answer: "We offer ongoing maintenance and support packages to ensure your product continues to perform optimally. We can also implement new features and improvements as your business grows."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm animate-on-scroll hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                  <h3 className="text-lg font-semibold text-brand-dark mb-2">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Final CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 to-brand-blue/20"></div>
        <div className="absolute inset-0 tech-pattern opacity-10"></div>
        
        {/* Animated orbs */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-brand-purple/10 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 left-1/3 w-48 h-48 rounded-full bg-brand-blue/10 blur-3xl animate-float" style={{ animationDelay: "3s" }}></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">Final Call: While You Think, Others Are Launching</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-300">
            Your product could be live in weeks. Book a $100 consultation and let's make it happen.
          </p>
          
          <Button 
            className="bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90 transition-all group py-6 px-8 text-lg"
          >
            Get Your Custom Build Plan Now
            <ArrowUpRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
