
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { ArrowRight, CheckCircle, BarChart2, TrendingUp, Target, Compass } from "lucide-react";
import { Link } from "react-router-dom";

const StrategyConsulting = () => {
  const capabilities = [
    {
      icon: <BarChart2 size={48} className="text-focus-accent" />,
      title: "Market Assessment",
      description: "Comprehensive analysis of market dynamics, customer needs, and competitive landscape to identify opportunities and threats."
    },
    {
      icon: <TrendingUp size={48} className="text-focus-accent" />,
      title: "Growth Strategy",
      description: "Development of strategic roadmaps for sustainable growth through organic expansion, M&A, or new business models."
    },
    {
      icon: <Target size={48} className="text-focus-accent" />,
      title: "Strategic Planning",
      description: "Structured approach to defining long-term vision, objectives, and action plans aligned with organizational capabilities."
    },
    {
      icon: <Compass size={48} className="text-focus-accent" />,
      title: "Portfolio Strategy",
      description: "Optimization of business portfolio to maximize value creation and align with corporate strategy and market opportunities."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero
          title="Strategy Consulting"
          subtitle="Develop and implement strategies that drive sustainable competitive advantage"
          imageSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
        />

        {/* Overview Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="animate-slide-up">
                <h2 className="text-3xl md:text-4xl font-bold text-focus-blue mb-6">Strategic Vision, Practical Results</h2>
                <p className="text-focus-muted mb-6">
                  At Focus Strategy, we help organizations develop and implement winning strategies that create lasting competitive advantage and drive sustainable growth.
                </p>
                <p className="text-focus-muted mb-6">
                  Our approach combines deep industry knowledge, rigorous analysis, and creative thinking to help clients navigate complex challenges and capitalize on emerging opportunities.
                </p>
                <p className="text-focus-muted">
                  We partner with leaders at all levels of the organization to build alignment, develop capabilities, and drive execution—ensuring that strategy translates into measurable results.
                </p>
              </div>
              <div className="relative h-[400px] animate-slide-up" style={{ animationDelay: "200ms" }}>
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                  alt="Strategy consulting" 
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-16 md:py-24 bg-focus-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-focus-blue mb-6">Our Capabilities</h2>
              <p className="text-focus-muted max-w-2xl mx-auto">
                We offer a comprehensive suite of strategy consulting services to address your most critical business challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {capabilities.map((capability, index) => (
                <div 
                  key={index} 
                  className="bg-white p-8 rounded-lg shadow-md animate-slide-up" 
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-6">{capability.icon}</div>
                  <h3 className="text-xl font-semibold text-focus-blue mb-4">{capability.title}</h3>
                  <p className="text-focus-muted">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-focus-blue mb-6">Our Approach</h2>
              <p className="text-focus-muted max-w-2xl mx-auto">
                We follow a proven methodology that balances analytical rigor with creative thinking to develop strategies that deliver results.
              </p>
            </div>

            <div className="space-y-12">
              {[
                {
                  step: "1",
                  title: "Understand",
                  description: "We begin by developing a deep understanding of your business, industry, and strategic challenges through data analysis and stakeholder interviews."
                },
                {
                  step: "2",
                  title: "Analyze",
                  description: "We conduct rigorous analysis of market trends, competitive dynamics, and internal capabilities to identify opportunities and constraints."
                },
                {
                  step: "3",
                  title: "Develop",
                  description: "We collaborate with your team to develop strategic options and evaluate them against key criteria such as impact, feasibility, and risk."
                },
                {
                  step: "4",
                  title: "Implement",
                  description: "We support the implementation of chosen strategies through detailed planning, capability building, and change management."
                }
              ].map((step, index) => (
                <div key={index} className="flex flex-col md:flex-row items-start gap-6 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-focus-blue flex items-center justify-center text-white text-2xl font-bold">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-focus-blue mb-2">{step.title}</h3>
                    <p className="text-focus-muted">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-16 md:py-24 bg-focus-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-focus-blue mb-6">Success Stories</h2>
              <p className="text-focus-muted max-w-2xl mx-auto">
                See how our strategy consulting has helped organizations achieve their business objectives.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Market Entry Strategy",
                  industry: "Technology",
                  description: "Helped a global technology company enter a new market segment, resulting in 30% revenue growth within two years.",
                  image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                },
                {
                  title: "Post-Merger Integration",
                  industry: "Financial Services",
                  description: "Supported a major bank in integrating an acquired institution, delivering $50M in synergies ahead of schedule.",
                  image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
                },
                {
                  title: "Growth Strategy",
                  industry: "Healthcare",
                  description: "Developed a five-year growth strategy for a healthcare provider, resulting in 40% increase in market share.",
                  image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                }
              ].map((caseStudy, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg overflow-hidden shadow-md animate-slide-up" 
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={caseStudy.image} 
                      alt={caseStudy.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-focus-accent text-sm font-medium mb-2">{caseStudy.industry}</div>
                    <h3 className="text-xl font-semibold text-focus-blue mb-3">{caseStudy.title}</h3>
                    <p className="text-focus-muted mb-4">{caseStudy.description}</p>
                    <Link
                      to="/insights"
                      className="inline-flex items-center text-focus-accent hover:underline font-medium"
                    >
                      Read more <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
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

export default StrategyConsulting;
