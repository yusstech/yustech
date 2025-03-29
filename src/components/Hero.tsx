
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/10 to-brand-blue/5 z-0"></div>
      
      <div className="container mx-auto px-4 pt-20 pb-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            We <span className="gradient-text">Ship Your Product</span> While You Focus On Your Business
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 mb-10">
            Our 100% shipping guarantee means your product gets built and delivered on time. 
            No delays, no excuses, just results that drive your business forward.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              size="lg"
              className="bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90 transition-opacity text-base py-6 px-8"
            >
              Book Your $100 Consultation
            </Button>
            <Button
              variant="outline"
              size="lg" 
              className="border-brand-purple text-brand-purple hover:bg-brand-purple/5 text-base py-6 px-8"
            >
              See Our Work
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <p className="text-3xl font-bold text-brand-purple">100%</p>
              <p className="text-sm text-gray-600">Ship Rate</p>
            </div>
            <div className="p-4">
              <p className="text-3xl font-bold text-brand-purple">50+</p>
              <p className="text-sm text-gray-600">Projects Shipped</p>
            </div>
            <div className="p-4">
              <p className="text-3xl font-bold text-brand-purple">92%</p>
              <p className="text-sm text-gray-600">Client Retention</p>
            </div>
            <div className="p-4">
              <p className="text-3xl font-bold text-brand-purple">24/7</p>
              <p className="text-sm text-gray-600">Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
