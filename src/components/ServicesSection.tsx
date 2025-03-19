
import { BarChart2, Globe, LineChart, Briefcase, AreaChart, ArrowUpRight } from "lucide-react";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  const services = [
    {
      title: "Strategy Consulting",
      description: "We help organizations develop and implement strategies that drive growth and create competitive advantage.",
      icon: <Briefcase size={36} />,
      link: "/strategy",
      delay: 0
    },
    {
      title: "Digital Transformation",
      description: "We guide companies through digital transformation to enhance customer experiences and optimize operations.",
      icon: <Globe size={36} />,
      link: "/digital",
      delay: 100
    },
    {
      title: "Performance Improvement",
      description: "We identify and implement operational improvements to enhance efficiency and reduce costs.",
      icon: <LineChart size={36} />,
      link: "/performance",
      delay: 200
    },
    {
      title: "Market Analysis",
      description: "We provide deep market insights to help you understand opportunities and make informed decisions.",
      icon: <BarChart2 size={36} />,
      link: "/market-analysis",
      delay: 300
    }
  ];

  return (
    <section className="py-20 bg-focus-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-focus-blue mb-4">Our Services</h2>
          <p className="text-focus-muted max-w-2xl mx-auto text-lg">
            We offer comprehensive consulting services to help businesses achieve their strategic goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={service.link}
              delay={service.delay}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="/services" 
            className="inline-flex items-center text-focus-accent hover:text-blue-700 font-medium text-lg transition-colors duration-200"
          >
            View all services <ArrowUpRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
