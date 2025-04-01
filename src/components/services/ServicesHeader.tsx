
import { ReactNode } from "react";

interface ServicesHeaderProps {
  children?: ReactNode;
}

const ServicesHeader = ({ children }: ServicesHeaderProps) => {
  return (
    <div className="text-center mb-16 animate-on-scroll">
      <div className="inline-block mb-2 px-3 py-1 rounded-full border border-brand-purple/30 text-sm text-brand-purple">
        Solutions For You
      </div>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        <span className="gradient-text">Your Challenges</span>, Our Solutions
      </h2>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto">
        We match our services to the specific challenges you're facing to ensure your product gets shipped with confidence.
      </p>
      {children}
    </div>
  );
};

export default ServicesHeader;
