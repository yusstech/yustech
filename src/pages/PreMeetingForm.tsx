import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Loader2 } from "lucide-react";

const PreMeetingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    projectDescription: '',
    technicalRequirements: '',
    targetUsers: '',
    competitors: '',
    additionalNotes: '',
    hasDomain: false,
    hasHosting: false,
    hasDesign: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const templateParams = {
        ...formData,
        to_name: 'YusTech Team',
        from_name: formData.name,
        reply_to: formData.email
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        projectDescription: '',
        technicalRequirements: '',
        targetUsers: '',
        competitors: '',
        additionalNotes: '',
        hasDomain: false,
        hasHosting: false,
        hasDesign: false
      });
    } catch (err) {
      setError('Failed to submit form. Please try again.');
      console.error('Error sending email:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">
            PrepForm
          </h1>
          <p className="text-gray-400">
            Help us prepare for our meeting by providing some details about your project.
          </p>
        </motion.div>

        {isSuccess ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center p-8 bg-white/5 rounded-xl"
          >
            <h2 className="text-2xl font-bold text-brand-purple mb-4">Thank You!</h2>
            <p className="text-gray-300">
              Your information has been received. We'll review it before our meeting.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name *</label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-white/5 border-white/10"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email Address *</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-white/5 border-white/10"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Company Name</label>
                <Input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-white/5 border-white/10"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Project Type *</label>
                <Select
                  value={formData.projectType}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, projectType: value }))}
                >
                  <SelectTrigger className="bg-white/5 border-white/10">
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="web">Web Application</SelectItem>
                    <SelectItem value="mobile">Mobile Application</SelectItem>
                    <SelectItem value="ecommerce">E-commerce Platform</SelectItem>
                    <SelectItem value="api">API Development</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Project Description *</label>
                <Textarea
                  name="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleChange}
                  required
                  className="bg-white/5 border-white/10 min-h-[120px]"
                  placeholder="Describe your project goals, features, and requirements..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Technical Requirements</label>
                <Textarea
                  name="technicalRequirements"
                  value={formData.technicalRequirements}
                  onChange={handleChange}
                  className="bg-white/5 border-white/10 min-h-[100px]"
                  placeholder="Any specific technologies, integrations, or technical constraints..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Target Users</label>
                  <Input
                    type="text"
                    name="targetUsers"
                    value={formData.targetUsers}
                    onChange={handleChange}
                    className="bg-white/5 border-white/10"
                    placeholder="Who will use your product?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Competitors</label>
                  <Input
                    type="text"
                    name="competitors"
                    value={formData.competitors}
                    onChange={handleChange}
                    className="bg-white/5 border-white/10"
                    placeholder="Similar products in the market"
                  />
                </div>
              </div>
            </div>

            {/* Project Resources */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Project Resources</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="hasDomain"
                    checked={formData.hasDomain}
                    onCheckedChange={(checked) => handleCheckboxChange('hasDomain', checked as boolean)}
                  />
                  <label htmlFor="hasDomain" className="text-sm">
                    I have a domain name
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="hasHosting"
                    checked={formData.hasHosting}
                    onCheckedChange={(checked) => handleCheckboxChange('hasHosting', checked as boolean)}
                  />
                  <label htmlFor="hasHosting" className="text-sm">
                    I have hosting set up
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="hasDesign"
                    checked={formData.hasDesign}
                    onCheckedChange={(checked) => handleCheckboxChange('hasDesign', checked as boolean)}
                  />
                  <label htmlFor="hasDesign" className="text-sm">
                    I have design assets ready
                  </label>
                </div>
              </div>
            </div>

            {/* Additional Notes */}
            <div>
              <label className="block text-sm font-medium mb-2">Additional Notes</label>
              <Textarea
                name="additionalNotes"
                value={formData.additionalNotes}
                onChange={handleChange}
                className="bg-white/5 border-white/10 min-h-[100px]"
                placeholder="Any other information you'd like to share..."
              />
            </div>

            {error && (
              <div className="text-red-500 text-sm text-center">{error}</div>
            )}

            <div className="flex justify-center">
              <Button
                type="submit"
                className="bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90 min-w-[200px]"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Submit Questionnaire'
                )}
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default PreMeetingForm; 