
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        subject: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative h-[50vh] min-h-[300px] w-full">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1474&q=80')` }}
          >
            <div className="absolute inset-0 bg-focus-blue bg-opacity-70"></div>
          </div>
          
          <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
            <div className="max-w-3xl animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Contact Us
              </h1>
              <p className="text-xl md:text-2xl text-white opacity-90 mb-8 max-w-2xl">
                Get in touch with our team to discuss how we can help your business grow.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              {/* Contact Information */}
              <div className="lg:col-span-1">
                <h2 className="text-2xl md:text-3xl font-bold text-focus-blue mb-8">Get In Touch</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <MapPin className="mr-4 h-6 w-6 text-focus-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-focus-blue mb-2">Visit Us</h3>
                      <p className="text-focus-muted">
                        Focus Strategy GmbH<br />
                        123 Business Street<br />
                        Frankfurt, Germany 60311
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="mr-4 h-6 w-6 text-focus-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-focus-blue mb-2">Call Us</h3>
                      <p className="text-focus-muted">
                        <a href="tel:+491234567890" className="hover:text-focus-accent transition-colors">
                          +49 123 456 7890
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="mr-4 h-6 w-6 text-focus-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-focus-blue mb-2">Email Us</h3>
                      <p className="text-focus-muted">
                        <a href="mailto:info@focusstrategy.de" className="hover:text-focus-accent transition-colors">
                          info@focusstrategy.de
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="mr-4 h-6 w-6 text-focus-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-focus-blue mb-2">Business Hours</h3>
                      <p className="text-focus-muted">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl md:text-3xl font-bold text-focus-blue mb-8">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-focus-blue font-medium mb-2">
                        Full Name*
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-focus-accent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-focus-blue font-medium mb-2">
                        Email Address*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-focus-accent"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-focus-blue font-medium mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-focus-accent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-focus-blue font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-focus-accent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-focus-blue font-medium mb-2">
                      Subject*
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-focus-accent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-focus-blue font-medium mb-2">
                      Message*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-focus-accent"
                    ></textarea>
                  </div>
                  
                  <div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-focus-accent hover:bg-blue-700 text-white px-8 py-3 rounded-md transition-colors duration-300"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-0">
          <div className="h-[400px] w-full bg-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.8842962912664!2d8.675247576905406!3d50.11092071181878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd0ee47bd23f7d%3A0xb8e6d7298ef33619!2sFrankfurt%20am%20Main%2C%20Germany!5e0!3m2!1sen!2sus!4v1711653844837!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Focus Strategy Office Location"
            ></iframe>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
