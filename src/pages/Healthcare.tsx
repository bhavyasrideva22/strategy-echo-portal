
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { ArrowRight, Activity, Stethoscope, FileText, Truck, LineChart } from "lucide-react";
import { Link } from "react-router-dom";

const Healthcare = () => {
  const services = [
    {
      icon: <Activity size={40} className="text-focus-accent" />,
      title: "Provider Strategy",
      description: "Help hospitals and health systems develop strategies to enhance care quality, optimize operations, and adapt to value-based reimbursement models."
    },
    {
      icon: <Stethoscope size={40} className="text-focus-accent" />,
      title: "Clinical Transformation",
      description: "Support healthcare organizations in redesigning clinical workflows, implementing evidence-based practices, and improving patient outcomes."
    },
    {
      icon: <FileText size={40} className="text-focus-accent" />,
      title: "Payer & Regulatory",
      description: "Assist payers and providers in navigating complex regulatory environments and optimizing reimbursement strategies."
    },
    {
      icon: <Truck size={40} className="text-focus-accent" />,
      title: "Supply Chain Optimization",
      description: "Help healthcare organizations enhance supply chain efficiency, reduce costs, and ensure reliability of critical supplies."
    },
    {
      icon: <LineChart size={40} className="text-focus-accent" />,
      title: "Digital Health",
      description: "Guide organizations in leveraging digital technologies to enhance patient engagement, enable remote care, and drive operational efficiencies."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero
          title="Healthcare"
          subtitle="Strategic consulting for healthcare providers, payers, and life sciences companies"
          imageSrc="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
        />

        {/* Overview Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="animate-slide-up">
                <h2 className="text-3xl md:text-4xl font-bold text-focus-blue mb-6">Transforming Healthcare Delivery</h2>
                <p className="text-focus-muted mb-6">
                  Healthcare organizations face unprecedented challenges—from evolving payment models and rising costs to workforce shortages and increasing consumer expectations for convenient, high-quality care.
                </p>
                <p className="text-focus-muted mb-6">
                  Our healthcare practice combines clinical expertise, operational know-how, and strategic insight to help clients navigate these challenges and transform their organizations for sustainable success.
                </p>
                <p className="text-focus-muted">
                  We work with leading hospitals, health systems, payers, and life sciences companies to improve clinical outcomes, enhance operational efficiency, and deliver exceptional patient experiences.
                </p>
              </div>
              <div className="relative h-[400px] animate-slide-up" style={{ animationDelay: "200ms" }}>
                <img 
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1580&q=80" 
                  alt="Healthcare consulting" 
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
                We offer specialized consulting services tailored to the unique challenges of healthcare organizations.
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
                See how we've helped healthcare organizations improve outcomes and operational performance.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {[
                {
                  title: "Clinical Workflow Redesign",
                  client: "Academic Medical Center",
                  description: "Redesigned clinical workflows in emergency department, reducing patient wait times by 40% and improving physician satisfaction scores by 25%.",
                  image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                },
                {
                  title: "Value-Based Care Transformation",
                  client: "Regional Health System",
                  description: "Supported transition to value-based care models, resulting in 15% reduction in total cost of care while improving quality metrics across key service lines.",
                  image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
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
              <h2 className="text-3xl md:text-4xl font-bold text-focus-blue mb-6">Our Healthcare Team</h2>
              <p className="text-focus-muted max-w-2xl mx-auto">
                Meet our experts with deep experience in healthcare management and transformation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "David Hoffmann",
                  position: "Head of Healthcare",
                  bio: "David brings 18+ years of healthcare consulting experience, with expertise in health system strategy and performance improvement.",
                  image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80"
                },
                {
                  name: "Sarah Müller",
                  position: "Clinical Transformation Lead",
                  bio: "Dr. Müller combines clinical background as a physician with deep consulting expertise in clinical workflow redesign and quality improvement.",
                  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=388&q=80"
                },
                {
                  name: "Thomas Weber",
                  position: "Digital Health Lead",
                  bio: "Thomas specializes in digital health strategy and implementation, helping organizations leverage technology to enhance care delivery.",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
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

export default Healthcare;
