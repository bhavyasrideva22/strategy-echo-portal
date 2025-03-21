
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
    console.log('Form submitted successfully with data:', formData);
    
    // Show success toast notification
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you as soon as possible.",
      variant: "default",
    });
    
    // For demonstration purposes, we'll always return success
    return true;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    
    // Show error toast notification
    toast({
      title: "Form submission failed",
      description: "There was an error sending your message. Please try again.",
      variant: "destructive",
    });
    
    return false;
  }
};

// Validate the contact form data
export const validateContactForm = (formData: ContactFormData): { valid: boolean; errors: Record<string, string> } => {
  const errors: Record<string, string> = {};
  
  // Check required fields
  if (!formData.name || formData.name.trim() === '') {
    errors.name = 'Name is required';
  } else if (formData.name.length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }
  
  if (!formData.email || formData.email.trim() === '') {
    errors.email = 'Email is required';
  } else {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
  }
  
  if (!formData.subject || formData.subject.trim() === '') {
    errors.subject = 'Subject is required';
  } else if (formData.subject.length < 3) {
    errors.subject = 'Subject must be at least 3 characters';
  }
  
  if (!formData.message || formData.message.trim() === '') {
    errors.message = 'Message is required';
  } else if (formData.message.length < 10) {
    errors.message = 'Message must be at least 10 characters';
  }
  
  // Phone validation (optional field)
  if (formData.phone && formData.phone.trim() !== '') {
    // Simple phone validation
    const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    if (!phoneRegex.test(formData.phone)) {
      errors.phone = 'Please enter a valid phone number';
    }
  }
  
  return {
    valid: Object.keys(errors).length === 0,
    errors
  };
};
