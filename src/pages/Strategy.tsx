
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, ChevronRight } from "lucide-react";

const Strategy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative h-[50vh] min-h-[300px] w-full">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')` }}
          >
            <div className="absolute inset-0 bg-focus-blue bg-opacity-70"></div>
          </div>
          
          <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
            <div className="max-w-3xl animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Strategy Consulting
              </h1>
              <p className="text-xl md:text-2xl text-white opacity-90 mb-8 max-w-2xl">
                Develop and implement strategies that create lasting value and competitive advantage
              </p>
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="animate-slide-up">
                <h2 className="text-3xl md:text-4xl font-bold text-focus-blue mb-6">Overview</h2>
                <p className="text-focus-muted mb-6">
                  In today's rapidly changing business environment, having a clear and effective strategy is more important than ever. Our strategy consulting services help organizations develop robust strategies that align with their goals, market position, and competitive landscape.
                </p>
                <p className="text-focus-muted mb-6">
                  We work closely with leadership teams to identify growth opportunities, optimize resource allocation, and build sustainable competitive advantages. Our approach combines rigorous analysis with creative thinking to develop strategies that are both innovative and practical.
                </p>
                <div className="space-y-4 mt-8">
                  {[
                    "Corporate Strategy Development",
                    "Market Entry and Expansion Strategies",
                    "Competitive Positioning",
                    "Growth Strategy",
                    "Business Model Innovation"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-focus-accent flex-shrink-0 mt-1 mr-3" />
                      <span className="text-focus-muted">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-[400px] animate-slide-up" style={{ animationDelay: "200ms" }}>
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                  alt="Strategy Consulting" 
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="py-16 md:py-24 bg-focus-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-focus-blue mb-6">Our Methodology</h2>
              <p className="text-focus-muted max-w-2xl mx-auto">
                We follow a proven methodology to develop and implement strategies that drive measurable results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Strategic Assessment",
                  description: "We conduct a comprehensive assessment of your current position, including market analysis, competitive positioning, and internal capabilities.",
                  delay: 0
                },
                {
                  step: "2",
                  title: "Strategy Development",
                  description: "We work with your team to develop a clear strategy that addresses your challenges and capitalizes on opportunities for growth and value creation.",
                  delay: 100
                },
                {
                  step: "3",
                  title: "Implementation Planning",
                  description: "We create detailed implementation plans that translate strategy into action, with clear milestones, responsibilities, and performance metrics.",
                  delay: 200
                },
                {
                  step: "4",
                  title: "Execution Support",
                  description: "We provide hands-on support throughout the implementation process, helping your team overcome challenges and adapt to changing conditions.",
                  delay: 300
                },
                {
                  step: "5",
                  title: "Performance Monitoring",
                  description: "We establish systems to track and measure performance against strategic objectives, ensuring accountability and enabling course corrections.",
                  delay: 400
                },
                {
                  step: "6",
                  title: "Strategy Refinement",
                  description: "We continuously refine the strategy based on implementation feedback and changing market conditions, ensuring ongoing relevance and effectiveness.",
                  delay: 500
                }
              ].map((step, index) => (
                <div 
                  key={index} 
                  className="bg-white p-8 rounded-lg shadow-md animate-slide-up" 
                  style={{ animationDelay: `${step.delay}ms` }}
                >
                  <div className="w-12 h-12 rounded-full bg-focus-accent flex items-center justify-center text-white font-bold mb-6">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-focus-blue mb-4">{step.title}</h3>
                  <p className="text-focus-muted">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-focus-blue mb-6">Case Study</h2>
              <p className="text-focus-muted max-w-2xl mx-auto">
                See how our strategy consulting services have helped organizations achieve their goals.
              </p>
            </div>

            <div className="bg-focus-light p-8 md:p-12 rounded-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-focus-blue mb-4">
                    Global Manufacturer Enters New Markets
                  </h3>
                  <p className="text-focus-muted mb-6">
                    A leading manufacturing company sought to expand into new markets to drive growth and diversify revenue streams. They faced challenges in identifying the most attractive markets and developing an effective entry strategy.
                  </p>
                  <h4 className="text-lg font-semibold text-focus-blue mb-3">Our Approach</h4>
                  <ul className="space-y-3 mb-6">
                    {[
                      "Conducted comprehensive market assessment across 15 potential markets",
                      "Analyzed competitive landscape and entry barriers",
                      "Evaluated internal capabilities and resource requirements",
                      "Developed prioritized market entry roadmap",
                      "Created detailed implementation plans for priority markets"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-focus-accent flex-shrink-0 mt-0.5 mr-2" />
                        <span className="text-focus-muted">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <h4 className="text-lg font-semibold text-focus-blue mb-3">Results</h4>
                  <ul className="space-y-3">
                    {[
                      "Successful entry into 3 new markets within 18 months",
                      "20% increase in overall revenue within 2 years",
                      "Established market leadership position in key growth market",
                      "Reduced dependency on primary market from 80% to 60% of revenue"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-focus-accent flex-shrink-0 mt-0.5 mr-2" />
                        <span className="text-focus-muted">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative h-[300px] lg:h-[400px]">
                  <img 
                    src="https://images.unsplash.com/photo-1454789548928-9efd52dc4031?ixlib=rb-4.0.3&auto=format&fit=crop&w=1480&q=80" 
                    alt="Strategy Case Study" 
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-focus-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Develop Your Strategy?</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
              Contact us today to learn how our strategy consulting services can help your organization achieve its goals.
            </p>
            <Button
              asChild
              className="bg-white text-focus-blue hover:bg-gray-100 px-8 py-3 text-lg rounded-md transition-colors duration-300"
            >
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Strategy;
