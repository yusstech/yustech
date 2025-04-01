
import { Zap, Users, Target, Handshake } from "lucide-react";

export const userNeeds = [
  {
    persona: "Growth-Focused Business Leaders",
    painPoint: "Tired of websites that don't convert or apps that never launch?",
    challenge: "You need a digital presence that actively converts visitors into customers, not just looks pretty.",
    solution: {
      title: "Websites & Web Apps",
      description: "Custom responsive websites and powerful web applications built specifically to drive conversions.",
      icon: <Zap className="w-6 h-6" />,
      benefits: [
        "Increased conversion rates (avg. 35% improvement)",
        "Faster load times (under 2 seconds)",
        "Mobile-first responsive design",
        "SEO-optimized from the ground up"
      ],
      successMetric: "35% Higher Conversion Rate",
      callToAction: "Convert More Visitors"
    },
    socialProof: {
      quote: "The website exceeded our expectations and was delivered ahead of schedule.",
      name: "Alex Roberts",
      title: "Marketing Director",
      company: "GrowthBrand",
      project: "Company Website",
      impact: "127% increase in leads"
    }
  },
  {
    persona: "Time-Constrained Product Managers",
    painPoint: "Frustrated with mobile app developers who miss deadlines and go over budget?",
    challenge: "You need reliable development that delivers on time and within budget, without compromising quality.",
    solution: {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications that launch on schedule, every time.",
      icon: <Users className="w-6 h-6" />,
      benefits: [
        "Native performance for iOS & Android",
        "User engagement analytics built-in",
        "Smooth launch on app stores",
        "On-time delivery guarantee"
      ],
      successMetric: "Launch on Time, Every Time",
      callToAction: "Launch Your App On Schedule"
    },
    socialProof: {
      quote: "Their AI integration saved us 30+ hours of manual work every week. The ROI was almost immediate.",
      name: "Michael Chen",
      title: "Operations Director",
      company: "LogisticsPro",
      project: "AI Workflow Automation",
      impact: "300% ROI within 3 months"
    }
  },
  {
    persona: "Innovation Leaders",
    painPoint: "Struggling to implement AI solutions that deliver real business value?",
    challenge: "You need AI that actually solves business problems, not just buzzword technology that looks impressive.",
    solution: {
      title: "AI Integration",
      description: "Practical AI solutions focused on measurable ROI and real business outcomes.",
      icon: <Target className="w-6 h-6" />,
      benefits: [
        "Process automation (save 20+ hrs/week)",
        "Customer insight generation",
        "Personalized user experiences",
        "Data-driven decision making"
      ],
      successMetric: "2x Faster ROI Than Manual Processes",
      callToAction: "Automate & Scale with AI"
    },
    socialProof: {
      quote: "YusTech helped us implement AI that actually made sense for our business. No fluff, just results.",
      name: "Lisa Wang",
      title: "Innovation Lead",
      company: "RetailSmart",
      project: "Inventory AI",
      impact: "42% reduction in stockouts"
    }
  },
  {
    persona: "Technical Debt Bearers",
    painPoint: "Have a half-finished product that's burning money and not delivering value?",
    challenge: "You need to salvage your existing investment and turn it into a working product that delivers value.",
    solution: {
      title: "Project Rescue & Management",
      description: "We take over stalled projects, fix issues, and get your product back on track.",
      icon: <Handshake className="w-6 h-6" />,
      benefits: [
        "Comprehensive code audit & cleanup",
        "Rapid stabilization & deployment",
        "Performance optimization",
        "Clear project roadmap"
      ],
      successMetric: "6 Week Rescue & Launch",
      callToAction: "Rescue Your Project"
    },
    socialProof: {
      quote: "Our app was stuck in development hell for 9 months. YusTech rescued it and shipped a functional version in just 6 weeks.",
      name: "Thomas Wright",
      title: "Founder",
      company: "HealthTrack",
      project: "Mobile App Rescue",
      impact: "Product launched 70% faster"
    }
  }
];
