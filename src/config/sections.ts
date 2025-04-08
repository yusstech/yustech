import { lazy } from 'react';

// Lazy load all sections
const Hero = lazy(() => import('@/components/Hero'));
const ProblemSection = lazy(() => import('@/components/sections/ProblemSection'));
const SolutionSection = lazy(() => import('@/components/sections/SolutionSection'));
const SocialProofSection = lazy(() => import('@/components/sections/SocialProofSection'));
const OfferSection = lazy(() => import('@/components/sections/OfferSection'));
const RescueSection = lazy(() => import('@/components/sections/RescueSection'));
const FAQSection = lazy(() => import('@/components/sections/FAQSection'));
const FinalCTASection = lazy(() => import('@/components/sections/FinalCTASection'));

export interface Section {
  id: string;
  Component: React.LazyExoticComponent<() => JSX.Element>;
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