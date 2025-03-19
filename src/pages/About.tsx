
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative h-[50vh] min-h-[300px] w-full">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')` }}
          >
            <div className="absolute inset-0 bg-focus-blue bg-opacity-70"></div>
          </div>
          
          <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
            <div className="max-w-3xl animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                About Us
              </h1>
              <p className="text-xl md:text-2xl text-white opacity-90 mb-8 max-w-2xl">
                A passionate team of strategic consultants dedicated to your business growth.
              </p>
            </div>
          </div>
        </div>

        {/* About Content */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="animate-slide-up">
                <h2 className="text-3xl md:text-4xl font-bold text-focus-blue mb-6">Our Story</h2>
                <p className="text-focus-muted mb-6">
                  Focus Strategy was founded in 2003 with a clear mission: to help businesses navigate complex markets and achieve sustainable growth. What began as a small team of experienced consultants has grown into a global consultancy with expertise across industries.
                </p>
                <p className="text-focus-muted mb-6">
                  For over 20 years, we've partnered with Fortune 500 companies, mid-sized businesses, and innovative startups to develop and implement strategies that create lasting value and competitive advantage.
                </p>
                <p className="text-focus-muted">
                  Our approach combines deep industry knowledge, analytical rigor, and creative thinking to deliver practical solutions that drive measurable results.
                </p>
              </div>
              <div className="relative h-[400px] animate-slide-up" style={{ animationDelay: "200ms" }}>
                <img 
                  src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                  alt="Focus Strategy team" 
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-focus-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-focus-blue mb-6">Our Values</h2>
              <p className="text-focus-muted max-w-2xl mx-auto">
                The principles that guide our work and relationships with clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Excellence",
                  description: "We strive for excellence in every project, delivering high-quality work that exceeds expectations.",
                  delay: 0
                },
                {
                  title: "Integrity",
                  description: "We act with honesty and transparency, building trust through ethical business practices.",
                  delay: 100
                },
                {
                  title: "Collaboration",
                  description: "We believe in the power of teamwork and partnership with our clients to achieve the best results.",
                  delay: 200
                },
                {
                  title: "Innovation",
                  description: "We embrace creativity and new ideas to solve complex problems and drive continuous improvement.",
                  delay: 300
                },
                {
                  title: "Impact",
                  description: "We focus on delivering measurable outcomes that create lasting value for our clients.",
                  delay: 400
                },
                {
                  title: "Empowerment",
                  description: "We empower our clients and our team to reach their full potential through knowledge and skill development.",
                  delay: 500
                }
              ].map((value, index) => (
                <div 
                  key={index} 
                  className="bg-white p-8 rounded-lg shadow-md animate-slide-up" 
                  style={{ animationDelay: `${value.delay}ms` }}
                >
                  <h3 className="text-xl font-semibold text-focus-blue mb-4">{value.title}</h3>
                  <p className="text-focus-muted">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-focus-blue mb-6">Our Leadership Team</h2>
              <p className="text-focus-muted max-w-2xl mx-auto">
                Meet the experienced professionals leading our organization.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Müller",
                  position: "Chief Executive Officer",
                  bio: "With over 25 years of consulting experience, Sarah leads our global team with strategic vision and operational excellence.",
                  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=388&q=80",
                  delay: 0
                },
                {
                  name: "Michael Weber",
                  position: "Chief Strategy Officer",
                  bio: "Michael brings extensive industry knowledge and analytical expertise to guide our clients through strategic transformations.",
                  image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80",
                  delay: 100
                },
                {
                  name: "Anna Schmidt",
                  position: "Chief Operating Officer",
                  bio: "Anna oversees our global operations, ensuring efficient delivery of client engagements and internal excellence.",
                  image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=461&q=80",
                  delay: 200
                },
                {
                  name: "Thomas Becker",
                  position: "Head of Digital Transformation",
                  bio: "Thomas leads our digital practice, helping clients leverage technology to drive innovation and growth.",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
                  delay: 300
                },
                {
                  name: "Julia Fischer",
                  position: "Head of Financial Services",
                  bio: "Julia specializes in strategic consulting for banking and insurance clients, with deep expertise in regulatory changes.",
                  image: "https://images.unsplash.com/photo-1598550880863-4e8aa3d0edb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80",
                  delay: 400
                },
                {
                  name: "David Hoffmann",
                  position: "Head of Healthcare",
                  bio: "David helps healthcare organizations navigate industry disruption and implement sustainable growth strategies.",
                  image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80",
                  delay: 500
                }
              ].map((member, index) => (
                <div 
                  key={index} 
                  className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 animate-slide-up"
                  style={{ animationDelay: `${member.delay}ms` }}
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

export default About;
