import { ArrowUpRight } from "lucide-react";
import { CTAButton } from "@/components/ui/cta-button";

const ServicesCTA = () => {
  return (
    <div className="mt-16 text-center animate-on-scroll">
      <h3 className="text-2xl font-bold mb-4">Still waiting? While you think, others are launching.</h3>
      <p className="text-gray-300 mb-8 max-w-xl mx-auto">
        Your product could be live in weeks. Let's make it happen with our $50 consultation.
      </p>
      <CTAButton className="transition-all group px-8 py-6 text-lg">
        Get Your Custom Build Plan Now
        <ArrowUpRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </CTAButton>
    </div>
  );
};

export default ServicesCTA;
