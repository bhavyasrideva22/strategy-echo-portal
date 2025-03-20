
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { ArrowRight, Box, Truck, Factory, LineChart, Recycle } from "lucide-react";
import { Link } from "react-router-dom";

const Manufacturing = () => {
  const services = [
    {
      icon: <Factory size={40} className="text-focus-accent" />,
      title: "Operational Excellence",
      description: "Optimize manufacturing operations, implement lean principles, and enhance overall equipment effectiveness to improve productivity and reduce costs."
    },
    {
      icon: <Truck size={40} className="text-focus-accent" />,
      title: "Supply Chain Transformation",
      description: "Design resilient, efficient supply chains that respond to market changes while optimizing inventory, logistics, and supplier management."
    },
    {
      icon: <Box size={40} className="text-focus-accent" />,
      title: "Product Development",
      description: "Accelerate innovation and time-to-market through improved product development processes and strategic portfolio management."
    },
    {
      icon: <LineChart size={40} className="text-focus-accent" />,
      title: "Industry 4.0 Strategy",
      description: "Develop and implement strategies to leverage digital technologies, automation, and data analytics in manufacturing operations."
    },
    {
      icon: <Recycle size={40} className="text-focus-accent" />,
      title: "Sustainability",
      description: "Create sustainable manufacturing practices that reduce environmental impact while driving operational efficiency and brand value."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero
          title="Manufacturing"
          subtitle="Strategic consulting for manufacturing companies in a changing world"
          imageSrc="https://images.unsplash.com/photo-1530939027401-ab4048c34f17?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
        />

        {/* Overview Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="animate-slide-up">
                <h2 className="text-3xl md:text-4xl font-bold text-focus-blue mb-6">Transforming Manufacturing for the Future</h2>
                <p className="text-focus-muted mb-6">
                  Manufacturing companies face unprecedented challenges and opportunities—from supply chain disruptions and talent shortages to digital transformation and sustainability imperatives.
                </p>
                <p className="text-focus-muted mb-6">
                  Our manufacturing practice combines deep industry knowledge, operational expertise, and strategic insight to help clients navigate these complexities and transform challenges into competitive advantage.
                </p>
                <p className="text-focus-muted">
                  We work with leading manufacturers across sectors to optimize operations, build resilient supply chains, accelerate innovation, and prepare for a sustainable, digital future.
                </p>
              </div>
              <div className="relative h-[400px] animate-slide-up" style={{ animationDelay: "200ms" }}>
                <img 
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                  alt="Manufacturing consulting" 
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
                We offer specialized consulting services tailored to the unique challenges of manufacturing companies.
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
                See how we've helped manufacturing companies transform operations and drive strategic growth.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {[
                {
                  title: "Supply Chain Resilience",
                  client: "Global Automotive Supplier",
                  description: "Redesigned supply chain network and processes, reducing lead times by 30% and improving on-time delivery performance to 98%.",
                  image: "https://images.unsplash.com/photo-1609709295948-17d77cb2a69b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1494&q=80"
                },
                {
                  title: "Digital Manufacturing Transformation",
                  client: "Industrial Equipment Manufacturer",
                  description: "Implemented Industry 4.0 technologies across manufacturing network, delivering 20% productivity improvement and 15% reduction in quality costs.",
                  image: "https://images.unsplash.com/photo-1565374790201-41e1844ba482?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80"
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
              <h2 className="text-3xl md:text-4xl font-bold text-focus-blue mb-6">Our Manufacturing Team</h2>
              <p className="text-focus-muted max-w-2xl mx-auto">
                Meet our experts with deep experience in manufacturing operations and strategy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Laura Klein",
                  position: "Head of Manufacturing",
                  bio: "Laura brings 20+ years of experience in manufacturing and operations, helping clients transform performance and build sustainable competitive advantage.",
                  image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80"
                },
                {
                  name: "Martin Schäfer",
                  position: "Supply Chain Lead",
                  bio: "Martin specializes in supply chain transformation, with deep expertise in network design, logistics optimization, and digital supply chain technologies.",
                  image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=370&q=80"
                },
                {
                  name: "Klara Fischer",
                  position: "Industry 4.0 Lead",
                  bio: "Klara focuses on digital manufacturing transformation, helping clients leverage IoT, automation, and analytics to drive operational excellence.",
                  image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
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

export default Manufacturing;
