
import { ReactNode } from "react";

interface ServicesHeaderProps {
  children?: ReactNode;
}

const ServicesHeader = ({ children }: ServicesHeaderProps) => {
  return (
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
      {children}
    </div>
  );
};

export default ServicesHeader;
