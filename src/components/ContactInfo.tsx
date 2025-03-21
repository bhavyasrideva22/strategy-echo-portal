
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactInfo = () => {
  return (
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
  );
};

export default ContactInfo;
