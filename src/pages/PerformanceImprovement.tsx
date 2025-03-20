
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Check, ChevronRight, BarChart2, TrendingUp, PieChart, Scissors, LineChart, Target } from "lucide-react";

const PerformanceImprovement = () => {
  const performanceAreas = [
    {
      title: "Operational Excellence",
      description: "We help organizations streamline processes, eliminate waste, and optimize resource utilization to improve operational efficiency.",
      icon: <BarChart2 className="h-12 w-12 text-focus-accent" />,
    },
    {
      title: "Revenue Enhancement",
      description: "We identify and implement opportunities to grow revenue through pricing optimization, sales effectiveness, and customer retention.",
      icon: <TrendingUp className="h-12 w-12 text-focus-accent" />,
    },
    {
      title: "Profitability Improvement",
      description: "We analyze cost structures and implement targeted initiatives to improve margins and overall financial performance.",
      icon: <PieChart className="h-12 w-12 text-focus-accent" />,
    },
    {
      title: "Cost Optimization",
      description: "We develop strategies to reduce costs while maintaining or improving quality and customer satisfaction.",
      icon: <Scissors className="h-12 w-12 text-focus-accent" />,
    },
    {
      title: "Performance Management",
      description: "We design and implement performance management systems that drive accountability and continuous improvement.",
      icon: <LineChart className="h-12 w-12 text-focus-accent" />,
    },
    {
      title: "Strategic Alignment",
      description: "We ensure that improvement initiatives are aligned with strategic objectives and deliver sustainable value.",
      icon: <Target className="h-12 w-12 text-focus-accent" />,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero 
          title="Performance Improvement"
          subtitle="Enhance operational efficiency and financial performance to achieve sustainable growth"
          imageSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
          buttonText="Contact Us"
          buttonLink="/contact"
        />

        {/* Overview Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="animate-slide-up">
                <h2 className="text-3xl md:text-4xl font-bold text-focus-blue mb-6">Overview</h2>
                <p className="text-focus-muted mb-6">
                  In today's competitive business environment, organizations must continuously improve their performance to stay ahead. Our performance improvement services help organizations identify and address opportunities to enhance operational efficiency, reduce costs, and improve financial results.
                </p>
                <p className="text-focus-muted mb-6">
                  We take a data-driven approach to performance improvement, using advanced analytics to identify root causes of performance issues and develop targeted solutions. Our experienced team works closely with clients to implement practical improvements that deliver measurable results and build capabilities for sustainable performance excellence.
                </p>
                <div className="space-y-4 mt-8">
                  {[
                    "Process Optimization",
                    "Cost Reduction",
                    "Organizational Effectiveness",
                    "Supply Chain Optimization",
                    "Performance Management Systems"
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
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                  alt="Performance Improvement" 
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Performance Areas Section */}
        <section className="py-16 md:py-24 bg-focus-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-focus-blue mb-6">Performance Improvement Areas</h2>
              <p className="text-focus-muted max-w-2xl mx-auto">
                We offer a comprehensive approach to performance improvement across key business areas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {performanceAreas.map((area, index) => (
                <div 
                  key={index} 
                  className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-slide-up" 
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-6">{area.icon}</div>
                  <h3 className="text-xl font-semibold text-focus-blue mb-4">{area.title}</h3>
                  <p className="text-focus-muted">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-focus-blue mb-6">Our Methodology</h2>
              <p className="text-focus-muted max-w-2xl mx-auto">
                We follow a proven methodology to deliver sustainable performance improvements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Diagnostics",
                  description: "We conduct a comprehensive assessment of current performance, identifying improvement opportunities and quantifying potential benefits.",
                  delay: 0
                },
                {
                  step: "2",
                  title: "Solution Design",
                  description: "We develop detailed solutions for identified improvement opportunities, including process changes, organizational adjustments, and technology enhancements.",
                  delay: 100
                },
                {
                  step: "3",
                  title: "Implementation Planning",
                  description: "We create detailed implementation plans with clear timelines, responsibilities, and performance metrics.",
                  delay: 200
                },
                {
                  step: "4",
                  title: "Change Management",
                  description: "We develop change management strategies to ensure successful adoption of new processes and behaviors.",
                  delay: 300
                },
                {
                  step: "5",
                  title: "Implementation Support",
                  description: "We provide hands-on support during implementation, helping to overcome challenges and make necessary adjustments.",
                  delay: 400
                },
                {
                  step: "6",
                  title: "Performance Monitoring",
                  description: "We establish systems to track and measure performance improvements, ensuring sustained results over time.",
                  delay: 500
                }
              ].map((step, index) => (
                <div 
                  key={index} 
                  className="bg-focus-light p-8 rounded-lg shadow-md animate-slide-up" 
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
        <section className="py-16 md:py-24 bg-focus-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-focus-blue mb-6">Case Study</h2>
              <p className="text-focus-muted max-w-2xl mx-auto">
                See how our performance improvement services have helped organizations achieve their goals.
              </p>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-lg shadow-md">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-focus-blue mb-4">
                    Global Manufacturer Transforms Supply Chain
                  </h3>
                  <p className="text-focus-muted mb-6">
                    A leading manufacturing company was experiencing rising costs, inventory challenges, and declining customer satisfaction due to supply chain inefficiencies. They needed to transform their supply chain operations to improve performance and competitiveness.
                  </p>
                  <h4 className="text-lg font-semibold text-focus-blue mb-3">Our Approach</h4>
                  <ul className="space-y-3 mb-6">
                    {[
                      "Conducted end-to-end supply chain assessment",
                      "Identified key improvement opportunities across planning, procurement, and logistics",
                      "Redesigned core processes to eliminate waste and improve flow",
                      "Implemented advanced planning tools and performance dashboards",
                      "Developed capability building program for supply chain teams"
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
                      "18% reduction in total supply chain costs",
                      "25% improvement in on-time delivery performance",
                      "30% reduction in inventory levels",
                      "40% decrease in lead times",
                      "15% improvement in customer satisfaction scores"
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
                    src="https://images.unsplash.com/photo-1633876841598-63691fbb491c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                    alt="Performance Improvement Case Study" 
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Improve Your Performance?</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
              Contact us today to learn how our performance improvement services can help your organization achieve its full potential.
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

export default PerformanceImprovement;
