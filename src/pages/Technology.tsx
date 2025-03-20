
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { ArrowRight, Code, Globe, Layers, BarChart2, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Technology = () => {
  const services = [
    {
      icon: <Code size={40} className="text-focus-accent" />,
      title: "Tech Strategy & Innovation",
      description: "Help technology companies develop strategies for product innovation, market expansion, and sustainable competitive advantage."
    },
    {
      icon: <Globe size={40} className="text-focus-accent" />,
      title: "Go-to-Market Strategy",
      description: "Create effective go-to-market strategies including market segmentation, product positioning, and channel optimization."
    },
    {
      icon: <Layers size={40} className="text-focus-accent" />,
      title: "Product & Portfolio Strategy",
      description: "Optimize product portfolios to maximize growth and profitability, aligning with market opportunities and corporate objectives."
    },
    {
      icon: <BarChart2 size={40} className="text-focus-accent" />,
      title: "Growth & Scaling",
      description: "Support high-growth technology companies in scaling operations, entering new markets, and building sustainable business models."
    },
    {
      icon: <Users size={40} className="text-focus-accent" />,
      title: "Organizational Design",
      description: "Design organizational structures and talent strategies that support innovation, agility, and growth in technology companies."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero
          title="Technology"
          subtitle="Strategic consulting for technology companies and digital businesses"
          imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
        />

        {/* Overview Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="animate-slide-up">
                <h2 className="text-3xl md:text-4xl font-bold text-focus-blue mb-6">Navigating Disruption in Technology</h2>
                <p className="text-focus-muted mb-6">
                  In today's rapidly evolving technology landscape, companies face unprecedented opportunities and challenges—from disruptive innovations and changing business models to talent shortages and regulatory scrutiny.
                </p>
                <p className="text-focus-muted mb-6">
                  Our technology practice combines deep industry knowledge, strategic insight, and practical experience to help clients navigate these complexities and transform challenges into competitive advantage.
                </p>
                <p className="text-focus-muted">
                  We work with leading technology companies—from startups to global enterprises—to develop and implement strategies that drive innovation, growth, and sustainable value creation.
                </p>
              </div>
              <div className="relative h-[400px] animate-slide-up" style={{ animationDelay: "200ms" }}>
                <img 
                  src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                  alt="Technology consulting" 
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
                We offer specialized consulting services tailored to the unique challenges of technology companies.
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
                See how we've helped technology companies achieve strategic objectives and drive growth.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {[
                {
                  title: "Product Strategy Transformation",
                  client: "Enterprise Software Company",
                  description: "Developed new product strategy and roadmap, resulting in 40% revenue growth from new offerings within 18 months.",
                  image: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                },
                {
                  title: "Go-to-Market Optimization",
                  client: "SaaS Startup",
                  description: "Redesigned go-to-market approach for a B2B SaaS company, reducing customer acquisition costs by 30% and accelerating revenue growth.",
                  image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
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
              <h2 className="text-3xl md:text-4xl font-bold text-focus-blue mb-6">Our Technology Team</h2>
              <p className="text-focus-muted max-w-2xl mx-auto">
                Meet our experts with deep experience in the technology industry.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Robert Schneider",
                  position: "Head of Technology",
                  bio: "Robert has 15+ years of experience advising technology companies on strategy, growth, and operational excellence.",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80"
                },
                {
                  name: "Sophia Krause",
                  position: "Product Strategy Lead",
                  bio: "Sophia specializes in product strategy and innovation, helping tech companies develop successful product portfolios.",
                  image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=461&q=80"
                },
                {
                  name: "Alexander Richter",
                  position: "Tech Growth Lead",
                  bio: "Alexander focuses on scaling high-growth technology companies, with expertise in go-to-market strategy and international expansion.",
                  image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80"
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

export default Technology;
