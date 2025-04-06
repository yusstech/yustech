import { CTAButton } from "@/components/ui/cta-button";

const CTASection = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 tech-pattern"></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to <span className="gradient-text">Transform</span> Your Vision?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Book your consultation now and get expert insights on turning your idea into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton className="text-lg">
              Book Free Strategy Call
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
