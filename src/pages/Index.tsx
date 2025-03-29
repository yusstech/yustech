import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ShippingProcess from "@/components/ShippingProcess";
import AnimatedText from "@/components/AnimatedText";

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
      <Services />
      
      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Results That <span className="gradient-text">Speak</span> For Themselves
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Don't just take our word for it. Hear from clients who've experienced the 
              difference our 100% ship guarantee makes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Testimonial
              quote="After two failed attempts with other developers, ProductShip delivered our e-commerce platform in half the time and exactly to spec. Revenue is up 215% since launch."
              name="Sarah Johnson"
              title="CEO"
              company="FashionMart"
              project="E-commerce Website"
              delay={100}
            />
            <Testimonial
              quote="Their AI integration saved us 30+ hours of manual work every week. The ROI was almost immediate and continues to compound."
              name="Michael Chen"
              title="Operations Director"
              company="LogisticsPro"
              project="AI Workflow Automation"
              delay={200}
            />
            <Testimonial
              quote="Our app was stuck in development hell for 9 months. ProductShip rescued it and shipped a fully functional version in just 6 weeks."
              name="Thomas Wright"
              title="Founder"
              company="HealthTrack"
              project="Mobile App Rescue"
              delay={300}
            />
          </div>
        </div>
      </section>
      
      {/* Process Section */}
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
              Our Process
            </AnimatedText>
            
            <AnimatedText variant="gradient" delay={100} className="text-3xl md:text-4xl font-bold mb-4">
              How We <span className="gradient-text">Ship</span> Your Product
            </AnimatedText>
            
            <AnimatedText delay={200} className="text-lg text-gray-400 max-w-2xl mx-auto">
              Our proven process ensures your product gets built, tested, and shipped on time, every time.
              No more missed deadlines or budget overruns.
            </AnimatedText>
          </div>

          <ShippingProcess />
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
      
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
