import Hero from "../components/Hero";
import ProblemSection from "../components/sections/ProblemSection";
import SolutionSection from "../components/sections/SolutionSection";
import SocialProofSection from "../components/sections/SocialProofSection";
import OfferSection from "../components/sections/OfferSection";
import RescueSection from "../components/sections/RescueSection";
import FAQSection from "../components/sections/FAQSection";
import FinalCTASection from "../components/sections/FinalCTASection";

export interface Section {
  id: string;
  Component: React.ComponentType;
  priority?: 'high' | 'low';
}

export const sections: Section[] = [
  {
    id: 'hero',
    Component: Hero,
    priority: 'high'
  },
  {
    id: 'problem',
    Component: ProblemSection,
    priority: 'high'
  },
  {
    id: 'solution',
    Component: SolutionSection,
    priority: 'high'
  },
  {
    id: 'social-proof',
    Component: SocialProofSection
  },
  {
    id: 'offer',
    Component: OfferSection
  },
  {
    id: 'rescue',
    Component: RescueSection
  },
  {
    id: 'faq',
    Component: FAQSection
  },
  {
    id: 'final-cta',
    Component: FinalCTASection
  }
]; 