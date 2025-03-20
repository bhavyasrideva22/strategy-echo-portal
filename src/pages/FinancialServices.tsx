
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { ArrowRight, Building, TrendingUp, Shield, BarChart2, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";

const FinancialServices = () => {
  const services = [
    {
      icon: <Building size={40} className="text-focus-accent" />,
      title: "Banking Transformation",
      description: "Help banks reimagine their business models, optimize operations, and enhance digital capabilities to meet evolving customer needs and regulatory requirements."
    },
    {
      icon: <TrendingUp size={40} className="text-focus-accent" />,
      title: "Investment Strategy",
      description: "Assist investment firms in developing and implementing strategies to maximize returns, optimize portfolio performance, and navigate market volatility."
    },
    {
      icon: <Shield size={40} className="text-focus-accent" />,
      title: "Risk & Compliance",
      description: "Support financial institutions in building robust risk management frameworks and ensuring compliance with complex regulatory requirements."
    },
    {
      icon: <BarChart2 size={40} className="text-focus-accent" />,
      title: "Insurance Innovation",
      description: "Help insurers leverage data analytics, digital technologies, and innovative business models to enhance customer experience and improve operational efficiency."
    },
    {
      icon: <RefreshCw size={40} className="text-focus-accent" />,
      title: "Payments Modernization",
      description: "Guide payment service providers in modernizing infrastructure, adopting new technologies, and creating seamless payment experiences."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero
          title="Financial Services"
          subtitle="Strategic consulting for banks, insurers, and investment firms"
          imageSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
        />

        {/* Overview Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="animate-slide-up">
                <h2 className="text-3xl md:text-4xl font-bold text-focus-blue mb-6">Navigating Complexity in Financial Services</h2>
                <p className="text-focus-muted mb-6">
                  In today's rapidly evolving financial landscape, institutions face unprecedented challenges—from digital disruption and changing customer expectations to complex regulations and new competitive threats.
                </p>
                <p className="text-focus-muted mb-6">
                  Our financial services team combines deep industry knowledge, analytical expertise, and practical experience to help clients navigate these complexities and transform challenges into opportunities.
                </p>
                <p className="text-focus-muted">
                  We work with leading banks, insurers, asset managers, and payment providers to develop and implement strategies that drive sustainable growth, operational excellence, and customer-centric innovation.
                </p>
              </div>
              <div className="relative h-[400px] animate-slide-up" style={{ animationDelay: "200ms" }}>
                <img 
                  src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                  alt="Financial services consulting" 
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24 bg-focus-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-focus-blue mb-6">Our Services</h2>
              <p className="text-focus-muted max-w-2xl mx-auto">
                We offer specialized consulting services tailored to the unique challenges of financial institutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="bg-white p-8 rounded-lg shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 animate-slide-up" 
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-focus-blue mb-4">{service.title}</h3>
                  <p className="text-focus-muted mb-6">{service.description}</p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-focus-accent hover:underline font-medium"
                  >
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-focus-blue mb-6">Case Studies</h2>
              <p className="text-focus-muted max-w-2xl mx-auto">
                See how we've helped financial institutions transform their businesses and achieve their strategic objectives.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {[
                {
                  title: "Digital Banking Transformation",
                  client: "Leading European Retail Bank",
                  description: "Helped a major European bank transform its digital banking platform, resulting in a 35% increase in digital transactions and 25% improvement in customer satisfaction scores.",
                  image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                },
                {
                  title: "Post-Merger Integration",
                  client: "Global Asset Manager",
                  description: "Supported the integration of two asset management firms, delivering $75M in annual cost synergies while preserving key client relationships and investment capabilities.",
                  image: "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1476&q=80"
                }
              ].map((caseStudy, index) => (
                <div 
                  key={index} 
                  className="flex flex-col md:flex-row gap-8 bg-white border border-gray-100 rounded-lg overflow-hidden shadow-md animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="md:w-2/5 h-60 md:h-auto overflow-hidden">
                    <img 
                      src={caseStudy.image} 
                      alt={caseStudy.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-3/5">
                    <div className="text-focus-accent text-sm font-medium mb-2">{caseStudy.client}</div>
                    <h3 className="text-xl font-semibold text-focus-blue mb-3">{caseStudy.title}</h3>
                    <p className="text-focus-muted mb-4">{caseStudy.description}</p>
                    <Link
                      to="/insights"
                      className="inline-flex items-center text-focus-accent hover:underline font-medium"
                    >
                      Read full case study <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24 bg-focus-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-focus-blue mb-6">Our Financial Services Team</h2>
              <p className="text-focus-muted max-w-2xl mx-auto">
                Meet our experts with deep experience in the financial services industry.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Julia Fischer",
                  position: "Head of Financial Services",
                  bio: "Julia brings 20+ years of experience in banking and asset management consulting, leading transformational initiatives for global financial institutions.",
                  image: "https://images.unsplash.com/photo-1598550880863-4e8aa3d0edb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80"
                },
                {
                  name: "Markus Bauer",
                  position: "Banking & Payments Lead",
                  bio: "Markus specializes in retail banking transformation and payments innovation, with deep expertise in digital strategy and customer experience.",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80"
                },
                {
                  name: "Elena Wagner",
                  position: "Insurance & Risk Lead",
                  bio: "Elena focuses on insurance strategy and risk management, helping clients navigate regulatory complexity and leverage data for competitive advantage.",
                  image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80"
                }
              ].map((member, index) => (
                <div 
                  key={index} 
                  className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-focus-blue mb-1">{member.name}</h3>
                    <p className="text-focus-accent mb-4 font-medium">{member.position}</p>
                    <p className="text-focus-muted">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FinancialServices;
