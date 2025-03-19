
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  link: string;
  delay?: number;
}

const ServiceCard = ({ title, description, icon, link, delay = 0 }: ServiceCardProps) => {
  return (
    <div 
      className="bg-white p-8 shadow-md hover:shadow-lg transition-all duration-300 rounded-md flex flex-col h-full animate-slide-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      {icon && <div className="text-focus-accent mb-4">{icon}</div>}
      <h3 className="text-xl font-semibold text-focus-blue mb-4">{title}</h3>
      <p className="text-focus-muted mb-6 flex-grow">{description}</p>
      <Link
        to={link}
        className="inline-flex items-center text-focus-accent hover:underline mt-auto font-medium"
      >
        Learn more <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  );
};

export default ServiceCard;
