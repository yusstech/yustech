
import { ReactNode } from "react";

interface ServicesHeaderProps {
  children?: ReactNode;
}

const ServicesHeader = ({ children }: ServicesHeaderProps) => {
  return (
    <div className="text-center mb-16 animate-on-scroll">
      <div className="inline-block mb-2 px-3 py-1 rounded-full border border-brand-purple/30 text-sm text-brand-purple">
        The Problem
      </div>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Why Most Products <span className="gradient-text">Never Launch</span>
      </h2>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto">
        Most startups fail not because of bad ideas, but because of bad execution. 
        What if you had a team that guarantees your product gets built & launched—without delays?
      </p>
      {children}
    </div>
  );
};

export default ServicesHeader;
