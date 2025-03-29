
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-purple to-brand-blue text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Ship Your Product?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
          Book a $100 consultation and let's discuss how we can bring your vision to life with our 100% ship guarantee.
        </p>
        
        <div className="max-w-md mx-auto bg-white rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-4 text-gray-800">Schedule Your Consultation</h3>
          
          <form className="space-y-4">
            <div>
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-purple"
                required
              />
            </div>
            <div>
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-purple"
                required
              />
            </div>
            <div>
              <select 
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-purple text-gray-700"
                defaultValue=""
                required
              >
                <option value="" disabled>Select Service</option>
                <option value="website">Website/Web App</option>
                <option value="mobile">Mobile App</option>
                <option value="ai">AI Integration</option>
                <option value="rescue">Project Rescue</option>
              </select>
            </div>
            <Button 
              type="submit"
              className="w-full bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90 transition-opacity"
            >
              Book Now - $100
            </Button>
          </form>
          
          <p className="mt-4 text-xs text-gray-600">
            By booking, you agree to our terms and conditions. The $100 fee is applied to your project if you decide to work with us.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
