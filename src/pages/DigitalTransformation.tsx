
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, ChevronRight, Laptop, Server, Database, Cloud, Users, Lock } from "lucide-react";

const DigitalTransformation = () => {
  const digitalCapabilities = [
    {
      title: "Digital Strategy Development",
      description: "We help organizations develop a clear digital vision and roadmap aligned with business objectives.",
      icon: <Laptop className="h-12 w-12 text-focus-accent" />,
    },
    {
      title: "Technology Architecture",
      description: "We design scalable and resilient technology architectures that support digital transformation goals.",
      icon: <Server className="h-12 w-12 text-focus-accent" />,
    },
    {
      title: "Data & Analytics",
      description: "We help organizations harness the power of data to drive insights and informed decision-making.",
      icon: <Database className="h-12 w-12 text-focus-accent" />,
    },
    {
      title: "Cloud Transformation",
      description: "We guide organizations in adopting cloud technologies to increase agility and reduce costs.",
      icon: <Cloud className="h-12 w-12 text-focus-accent" />,
    },
    {
      title: "Customer Experience Design",
      description: "We create seamless digital experiences that meet customer needs and expectations.",
      icon: <Users className="h-12 w-12 text-focus-accent" />,
    },
    {
      title: "Cybersecurity",
      description: "We help organizations protect their digital assets and build resilience against cyber threats.",
      icon: <Lock className="h-12 w-12 text-focus-accent" />,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero 
          title="Digital Transformation"
          subtitle="Harness the power of digital technologies to drive growth and innovation"
          imageSrc="https://images.unsplash.com/photo-1560732488-7b5f4d74c565?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
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
                  Digital transformation is no longer optional—it's essential for organizations that want to remain competitive in today's rapidly evolving business landscape. Our digital transformation services help organizations reimagine their business models, operations, and customer experiences through the strategic application of digital technologies.
                </p>
                <p className="text-focus-muted mb-6">
                  We take a holistic approach to digital transformation, focusing not just on technology implementation but also on the organizational changes needed to fully capture the value of digital. Our experienced team works closely with clients to develop and execute transformation strategies that drive measurable business results.
                </p>
                <div className="space-y-4 mt-8">
                  {[
                    "Digital Strategy & Roadmap Development",
                    "Customer Experience Transformation",
                    "Process Digitization & Automation",
                    "Data-Driven Decision Making",
                    "Digital Operating Model Design"
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
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                  alt="Digital Transformation" 
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Digital Capabilities Section */}
        <section className="py-16 md:py-24 bg-focus-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-focus-blue mb-6">Our Digital Capabilities</h2>
              <p className="text-focus-muted max-w-2xl mx-auto">
                We offer a comprehensive suite of digital capabilities to help organizations navigate their transformation journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {digitalCapabilities.map((capability, index) => (
                <div 
                  key={index} 
                  className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-slide-up" 
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

        {/* Transformation Approach Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-focus-blue mb-6">Our Transformation Approach</h2>
              <p className="text-focus-muted max-w-2xl mx-auto">
                We follow a proven approach to help organizations successfully navigate their digital transformation journey.
              </p>
            </div>

            <Tabs defaultValue="discover" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="discover">Discover</TabsTrigger>
                <TabsTrigger value="design">Design</TabsTrigger>
                <TabsTrigger value="deliver">Deliver</TabsTrigger>
                <TabsTrigger value="scale">Scale</TabsTrigger>
              </TabsList>
              <TabsContent value="discover" className="bg-focus-light p-8 rounded-lg animate-fade-in">
                <h3 className="text-2xl font-semibold text-focus-blue mb-4">Discover</h3>
                <p className="text-focus-muted mb-6">
                  We begin by understanding your organization's current state, challenges, and aspirations. Our team conducts a comprehensive assessment of your digital maturity, technology landscape, and organizational capabilities.
                </p>
                <ul className="space-y-3">
                  {[
                    "Digital maturity assessment",
                    "Technology landscape review",
                    "Customer journey mapping",
                    "Stakeholder interviews",
                    "Opportunity identification"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-focus-accent flex-shrink-0 mt-0.5 mr-2" />
                      <span className="text-focus-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
              <TabsContent value="design" className="bg-focus-light p-8 rounded-lg animate-fade-in">
                <h3 className="text-2xl font-semibold text-focus-blue mb-4">Design</h3>
                <p className="text-focus-muted mb-6">
                  Based on insights gathered in the discovery phase, we design a comprehensive digital transformation strategy and roadmap tailored to your organization's specific needs and goals.
                </p>
                <ul className="space-y-3">
                  {[
                    "Digital vision and strategy development",
                    "Business case creation",
                    "Solution architecture design",
                    "Target operating model design",
                    "Implementation roadmap development"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-focus-accent flex-shrink-0 mt-0.5 mr-2" />
                      <span className="text-focus-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
              <TabsContent value="deliver" className="bg-focus-light p-8 rounded-lg animate-fade-in">
                <h3 className="text-2xl font-semibold text-focus-blue mb-4">Deliver</h3>
                <p className="text-focus-muted mb-6">
                  We help you execute your transformation strategy through a combination of quick wins and strategic initiatives, ensuring tangible progress while building momentum for larger changes.
                </p>
                <ul className="space-y-3">
                  {[
                    "Agile delivery management",
                    "Technology implementation",
                    "Process redesign and automation",
                    "Change management",
                    "Capability building"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-focus-accent flex-shrink-0 mt-0.5 mr-2" />
                      <span className="text-focus-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
              <TabsContent value="scale" className="bg-focus-light p-8 rounded-lg animate-fade-in">
                <h3 className="text-2xl font-semibold text-focus-blue mb-4">Scale</h3>
                <p className="text-focus-muted mb-6">
                  We help you scale successful digital initiatives across your organization, ensuring that transformation efforts deliver sustainable value and continue to evolve with changing business needs.
                </p>
                <ul className="space-y-3">
                  {[
                    "Performance measurement and optimization",
                    "Knowledge transfer and capability building",
                    "Continuous improvement processes",
                    "Innovation governance",
                    "Digital culture development"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-focus-accent flex-shrink-0 mt-0.5 mr-2" />
                      <span className="text-focus-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="py-16 md:py-24 bg-focus-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-focus-blue mb-6">Case Study</h2>
              <p className="text-focus-muted max-w-2xl mx-auto">
                See how our digital transformation services have helped organizations achieve their goals.
              </p>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-lg shadow-md">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-focus-blue mb-4">
                    Leading Retailer Transforms Customer Experience
                  </h3>
                  <p className="text-focus-muted mb-6">
                    A mid-sized retail chain with 200+ locations was struggling to adapt to changing customer expectations and digital competition. They needed to transform their customer experience while optimizing their operations.
                  </p>
                  <h4 className="text-lg font-semibold text-focus-blue mb-3">Our Approach</h4>
                  <ul className="space-y-3 mb-6">
                    {[
                      "Conducted comprehensive customer journey mapping across all channels",
                      "Developed an integrated omnichannel strategy",
                      "Designed and implemented a new e-commerce platform",
                      "Created a customer data platform to enable personalization",
                      "Streamlined supply chain operations through digital tools"
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
                      "35% increase in online sales within 12 months",
                      "22% improvement in customer satisfaction scores",
                      "15% reduction in fulfillment costs",
                      "28% increase in customer retention rate",
                      "Successful launch of mobile app with 250,000+ downloads in first quarter"
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
                    src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                    alt="Digital Transformation Case Study" 
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Digital Transformation?</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
              Contact us today to learn how our digital transformation services can help your organization thrive in the digital age.
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

export default DigitalTransformation;
