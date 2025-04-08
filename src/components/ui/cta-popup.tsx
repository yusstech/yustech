import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import { toast } from "@/components/ui/use-toast";

interface CTAPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const CTAPopup = ({ isOpen, onClose }: CTAPopupProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  // Initialize EmailJS when component mounts
  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    // Log environment variables for debugging
    console.log('EmailJS Configuration:', {
      publicKey: publicKey ? 'Present' : 'Missing',
      serviceId: serviceId ? 'Present' : 'Missing',
      templateId: templateId ? 'Present' : 'Missing',
      env: import.meta.env.MODE
    });

    if (!publicKey || !serviceId || !templateId) {
      console.error('EmailJS configuration is incomplete:', {
        publicKey: !!publicKey,
        serviceId: !!serviceId,
        templateId: !!templateId
      });
      return;
    }

    try {
      emailjs.init(publicKey);
      console.log('EmailJS initialized successfully');
    } catch (error) {
      console.error('Failed to initialize EmailJS:', error);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (value: string) => {
    setFormData(prev => ({ ...prev, service: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setIsSubmitting(true);

      // Validate required fields
      if (!formData.name || !formData.email || !formData.service) {
        throw new Error("Please fill in all required fields");
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error("Please enter a valid email address");
      }

      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

      if (!serviceId || !templateId) {
        console.error('Missing EmailJS configuration:', {
          serviceId: !!serviceId,
          templateId: !!templateId
        });
        throw new Error("Email service configuration is missing. Please contact support.");
      }

      // Send email using EmailJS
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          service_interest: formData.service,
          message: formData.message,
          to_name: 'YussTech Team',
          timestamp: new Date().toISOString(),
        }
      );

      if (result.status === 200) {
        // Show success message
        toast({
          title: "Success!",
          description: "Thank you for your interest. We'll be in touch soon!",
        });

        // Open Calendly in new tab
        window.open('https://calendly.com/yusstechh/30min', '_blank');

        // Reset form
        setFormData({
          name: "",
          email: "",
          service: "",
          message: "",
        });

        // Close popup
        onClose();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-black/90 border border-brand-purple/30">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">Let's Build Your Vision</DialogTitle>
          <DialogDescription className="text-gray-300">
            Fill in your details and we'll schedule a consultation to discuss your project.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-300">Name *</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-black/50 border-brand-purple/30 text-white"
              required
              minLength={2}
              maxLength={100}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-300">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-black/50 border-brand-purple/30 text-white"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="service" className="text-gray-300">Service Interest *</Label>
            <Select value={formData.service} onValueChange={handleServiceChange}>
              <SelectTrigger className="bg-black/50 border-brand-purple/30 text-white">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent className="bg-black/90 border-brand-purple/30">
                <SelectItem value="web">Web Development</SelectItem>
                <SelectItem value="mobile">Mobile App Development</SelectItem>
                <SelectItem value="ai">AI Integration</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message" className="text-gray-300">Additional Information</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="bg-black/50 border-brand-purple/30 text-white min-h-[100px]"
              placeholder="Tell us more about your project, timeline, or any specific requirements..."
              maxLength={1000}
            />
          </div>
          
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Schedule Consultation"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CTAPopup; 