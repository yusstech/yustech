
import React from "react";
import Testimonial from "@/components/Testimonial";

const FAQSection = () => {
  return (
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
                answer: "Project costs vary widely based on complexity, features, and timeline. After your $50 consultation, we'll provide a fixed-price quote with no surprises or hidden fees."
              },
              {
                question: "How long does a typical project take?",
                answer: "We'll provide a detailed timeline during your consultation."
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
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm animate-on-scroll hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-brand-purple">
                <h3 className="text-lg font-semibold text-brand-dark mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
