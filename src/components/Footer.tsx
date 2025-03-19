
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-focus-blue text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-6">Focus Strategy</h3>
            <p className="text-gray-300 mb-6">
              Delivering strategic insights and solutions to help businesses navigate complex challenges and achieve sustainable growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Industries
                </Link>
              </li>
              <li>
                <Link to="/insights" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Insights
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/strategy" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Strategy Consulting
                </Link>
              </li>
              <li>
                <Link to="/digital" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Digital Transformation
                </Link>
              </li>
              <li>
                <Link to="/performance" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Performance Improvement
                </Link>
              </li>
              <li>
                <Link to="/market-analysis" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Market Analysis
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-focus-accent flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  123 Business Street<br />
                  Frankfurt, Germany 60311
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-focus-accent flex-shrink-0" />
                <a href="tel:+491234567890" className="text-gray-300 hover:text-white transition-colors duration-200">
                  +49 123 456 7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-focus-accent flex-shrink-0" />
                <a href="mailto:info@focusstrategy.de" className="text-gray-300 hover:text-white transition-colors duration-200">
                  info@focusstrategy.de
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-gray-400 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {currentYear} Focus Strategy. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="/legal" className="hover:text-white transition-colors duration-200">
                Legal Notice
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
