
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Briefcase, Globe, LineChart, BarChart2, TrendingUp, Users, Shield, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: <Briefcase size={36} />,
      title: "Strategy Consulting",
      description: "We develop comprehensive business strategies aligned with your goals, market position, and competitive landscape to create sustainable growth and competitive advantage.",
      link: "/strategy",
      delay: 0
    },
    {
      icon: <Globe size={36} />,
      title: "Digital Transformation",
      description: "We help organizations leverage digital technologies to enhance customer experiences, optimize operations, and create new business models in today's rapidly evolving digital landscape.",
      link: "/digital",
      delay: 100
    },
    {
      icon: <LineChart size={36} />,
      title: "Performance Improvement",
      description: "We identify opportunities to enhance operational efficiency, reduce costs, and improve organizational effectiveness through process optimization and capability building.",
      link: "/performance",
      delay: 200
    },
    {
      icon: <BarChart2 size={36} />,
      title: "Market Analysis",
      description: "We conduct in-depth market research and analysis to provide actionable insights on market trends, customer behaviors, competitive dynamics, and growth opportunities.",
      link: "/market-analysis",
      delay: 300
    },
    {
      icon: <TrendingUp size={36} />,
      title: "Mergers & Acquisitions",
      description: "We provide strategic guidance throughout the M&A process, from target identification and due diligence to post-merger integration and value creation.",
      link: "/mergers-acquisitions",
      delay: 400
    },
    {
      icon: <Users size={36} />,
      title: "Organizational Development",
      description: "We help organizations build the capabilities, leadership, and culture needed to execute strategy and drive sustainable performance improvement.",
      link: "/organizational-development",
      delay: 500
    },
    {
      icon: <Shield size={36} />,
      title: "Risk Management",
      description: "We help organizations identify, assess, and mitigate strategic, operational, and financial risks to protect value and ensure business continuity.",
      link: "/risk-management",
      delay: 600
    },
    {
      icon: <Search size={36} />,
      title: "Due Diligence",
      description: "We conduct thorough investigations of target companies to assess financial health, operational capabilities, and strategic fit before investment decisions.",
      link: "/due-diligence",
      delay: 700
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative h-[50vh] min-h-[300px] w-full">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')` }}
          >
            <div className="absolute inset-0 bg-focus-blue bg-opacity-70"></div>
          </div>
          
          <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
            <div className="max-w-3xl animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Our Services
              </h1>
              <p className="text-xl md:text-2xl text-white opacity-90 mb-8 max-w-2xl">
                Comprehensive consulting solutions tailored to your business needs
              </p>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-focus-blue mb-6">What We Offer</h2>
              <p className="text-focus-muted max-w-2xl mx-auto">
                We provide a wide range of consulting services to help businesses overcome challenges and achieve their goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="bg-white p-8 shadow-md rounded-lg transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 animate-slide-up"
                  style={{ animationDelay: `${service.delay}ms` }}
                >
                  <div className="text-focus-accent mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-focus-blue mb-4">{service.title}</h3>
                  <p className="text-focus-muted mb-6">{service.description}</p>
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-focus-accent hover:underline font-medium"
                  >
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-16 md:py-24 bg-focus-light">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 animate-slide-up">
                <h2 className="text-3xl md:text-4xl font-bold text-focus-blue mb-6">Our Approach</h2>
                <p className="text-focus-muted mb-6">
                  We believe that effective consulting is about more than just delivering recommendations—it's about partnering with clients to develop and implement practical solutions that create lasting value.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      step: "1. Diagnose",
                      description: "We begin by deeply understanding your business, industry, and specific challenges through rigorous analysis and stakeholder engagement."
                    },
                    {
                      step: "2. Design",
                      description: "We develop tailored strategies and solutions based on our diagnosis, leveraging our industry expertise and analytical capabilities."
                    },
                    {
                      step: "3. Deliver",
                      description: "We work alongside your team to implement solutions, ensuring knowledge transfer and building internal capabilities."
                    },
                    {
                      step: "4. Sustain",
                      description: "We help embed changes into your organization, establishing metrics and processes to sustain and build on results over time."
                    }
                  ].map((step, index) => (
                    <div key={index} className="flex">
                      <div className="mr-4 flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-focus-accent flex items-center justify-center text-white font-bold">
                          {index + 1}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-focus-blue mb-2">{step.step}</h3>
                        <p className="text-focus-muted">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-1 lg:order-2 relative h-[400px] animate-slide-up" style={{ animationDelay: "200ms" }}>
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                  alt="Our consulting approach" 
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
