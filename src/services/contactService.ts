
import { toast } from "@/components/ui/use-toast";

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  subject: string;
  message: string;
}

export const submitContactForm = async (formData: ContactFormData): Promise<boolean> => {
  try {
    // In a real application, this would be a fetch call to your API
    // For example:
    // const response = await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formData),
    // });
    //
    // if (!response.ok) {
    //   throw new Error('Failed to submit form');
    // }
    
    // Simulating API call with a timeout
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Log the form data to console (for development purposes)
    console.log('Form submitted with data:', formData);
    
    // For demonstration purposes, we'll always return success
    return true;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return false;
  }
};

// This function could be expanded to include validation logic if needed
export const validateContactForm = (formData: ContactFormData): boolean => {
  if (!formData.name || !formData.email || !formData.subject || !formData.message) {
    return false;
  }
  
  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    return false;
  }
  
  return true;
};
