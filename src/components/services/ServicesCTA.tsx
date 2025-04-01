
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesCTA = () => {
  return (
    <div className="mt-16 text-center animate-on-scroll">
      <h3 className="text-2xl font-bold mb-4">Ready to Overcome Your Challenges?</h3>
      <p className="text-gray-300 mb-8 max-w-xl mx-auto">
        Take the first step toward guaranteed product delivery with our $100 consultation.
      </p>
      <Button
        className="bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90 transition-all group px-8 py-6 text-lg"
      >
        Book Your Consultation
        <ArrowUpRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </Button>
    </div>
  );
};

export default ServicesCTA;
