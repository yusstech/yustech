
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Services />
      
      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
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
            />
            <Testimonial
              quote="Their AI integration saved us 30+ hours of manual work every week. The ROI was almost immediate and continues to compound."
              name="Michael Chen"
              title="Operations Director"
              company="LogisticsPro"
              project="AI Workflow Automation"
            />
            <Testimonial
              quote="Our app was stuck in development hell for 9 months. ProductShip rescued it and shipped a fully functional version in just 6 weeks."
              name="Thomas Wright"
              title="Founder"
              company="HealthTrack"
              project="Mobile App Rescue"
            />
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section id="process" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How We <span className="gradient-text">Ship</span> Your Product
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Our proven process ensures your product gets built, tested, and shipped on time, every time.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-5 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-brand-purple/20"></div>
              
              {/* Step 1 */}
              <div className="relative mb-12">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-8 md:text-right order-2 md:order-1 mt-4 md:mt-0">
                    <h3 className="text-xl font-bold text-brand-purple mb-2">1. Discovery & Strategy</h3>
                    <p className="text-gray-700">
                      We start with a $100 consultation to understand your vision, goals, and requirements. 
                      Then we develop a strategic roadmap with clear milestones.
                    </p>
                  </div>
                  <div className="z-10 flex items-center justify-center w-10 h-10 bg-brand-purple rounded-full order-1 md:order-2 relative md:left-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="relative mb-12">
                <div className="flex flex-col md:flex-row-reverse items-center">
                  <div className="flex-1 md:pl-8 mt-4 md:mt-0 order-2">
                    <h3 className="text-xl font-bold text-brand-purple mb-2">2. Design & Planning</h3>
                    <p className="text-gray-700">
                      Our designers create prototypes while our engineers plan the technical architecture. 
                      You approve each step before we move forward.
                    </p>
                  </div>
                  <div className="z-10 flex items-center justify-center w-10 h-10 bg-brand-purple rounded-full order-1 relative md:right-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="relative mb-12">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-8 md:text-right order-2 md:order-1 mt-4 md:mt-0">
                    <h3 className="text-xl font-bold text-brand-purple mb-2">3. Development & Testing</h3>
                    <p className="text-gray-700">
                      Our developers build your product in short, focused sprints with regular demos. 
                      Rigorous testing ensures everything works flawlessly.
                    </p>
                  </div>
                  <div className="z-10 flex items-center justify-center w-10 h-10 bg-brand-purple rounded-full order-1 md:order-2 relative md:left-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="relative">
                <div className="flex flex-col md:flex-row-reverse items-center">
                  <div className="flex-1 md:pl-8 mt-4 md:mt-0 order-2">
                    <h3 className="text-xl font-bold text-brand-purple mb-2">4. Launch & Support</h3>
                    <p className="text-gray-700">
                      We handle deployment and launch, then provide ongoing support to ensure your 
                      product continues to perform optimally.
                    </p>
                  </div>
                  <div className="z-10 flex items-center justify-center w-10 h-10 bg-brand-purple rounded-full order-1 relative md:right-0">
                    <span className="text-white font-bold">4</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Get answers to common questions about our services and processes.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-brand-dark mb-2">How does the 100% shipping guarantee work?</h3>
                <p className="text-gray-700">
                  Our guarantee means we commit to delivering your product on time and on budget. If we fail to meet the agreed timeline, we'll continue working at no additional cost until it's completed.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-brand-dark mb-2">How much does a typical project cost?</h3>
                <p className="text-gray-700">
                  Project costs vary widely based on complexity, features, and timeline. After your $100 consultation, we'll provide a fixed-price quote with no surprises or hidden fees.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-brand-dark mb-2">How long does a typical project take?</h3>
                <p className="text-gray-700">
                  Timelines depend on project scope. Simple websites might take 2-4 weeks, while complex applications can take 3-6 months. We'll provide a detailed timeline during your consultation.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-brand-dark mb-2">Can you work with my existing development team?</h3>
                <p className="text-gray-700">
                  Absolutely! We can complement your team's skills or take over completely. Our rescue services are specifically designed to integrate with your existing resources.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-brand-dark mb-2">What happens after my product launches?</h3>
                <p className="text-gray-700">
                  We offer ongoing maintenance and support packages to ensure your product continues to perform optimally. We can also implement new features and improvements as your business grows.
                </p>
              </div>
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
