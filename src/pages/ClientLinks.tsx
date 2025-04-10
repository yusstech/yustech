import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const strategicPartners = [
  {
    name: "Kryll.io",
    url: "https://www.kryll.io/"
  },
  {
    name: "T.MINING Blockchain Logistics",
    url: "https://www.t-mining.be/"
  },
  {
    name: "GIG Logistics",
    url: "https://giglogistics.com"
  },
  {
    name: "Central Bank of Nigeria",
    url: "https://www.cbn.gov.ng/"
  },
  {
    name: "DHL",
    url: "https://www.dhl.com/global-en/home.html"
  },
  {
    name: "Shell Nigeria",
    url: "https://www.shell.com.ng/"
  }
];

const enterprisePartners = [
  {
    name: "HDSKIN",
    url: "https://hdskinshop.com"
  },
  {
    name: "BeautyFindsNG",
    url: "https://beautyfindsng.com"
  }
];

export default function ClientLinks() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-12 text-center">Our Network</h1>
        
        {/* Strategic Partners Section */}
        <div className="mb-16">
          <h2 className="text-xl font-semibold mb-6 text-center text-brand-purple">Strategic Partners</h2>
          <div className="space-y-4">
            {strategicPartners.map((client, index) => (
              <motion.a
                key={client.name}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <span className="text-lg">{client.name}</span>
                <ExternalLink className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Enterprise Partners Section */}
        <div>
          <h2 className="text-xl font-semibold mb-6 text-center text-brand-blue">Enterprise Partners</h2>
          <div className="space-y-4">
            {enterprisePartners.map((client, index) => (
              <motion.a
                key={client.name}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <span className="text-lg">{client.name}</span>
                <ExternalLink className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 