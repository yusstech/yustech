
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
        <span className="block mb-4">You're tired of delays, unreliable developers, and projects that never ship.</span>
        <span className="block mb-4">We are your technical partners—we take your idea and build it to launch so you can focus on growing your business.</span>
        <span className="block mb-4">Web & Mobile Apps</span>
        <span className="block mb-4">AI Automation & AI Integration</span>
        <span className="block text-brand-purple font-medium">100% Execution. No Excuses.</span>
      </p>
      {children}
    </div>
  );
};

export default ServicesHeader;
