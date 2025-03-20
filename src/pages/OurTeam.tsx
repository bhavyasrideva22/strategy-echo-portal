
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";

const OurTeam = () => {
  const { toast } = useToast();
  
  const seniorLeadership = [
    {
      name: "Sarah Müller",
      position: "Chief Executive Officer",
      bio: "With over 25 years of consulting experience, Sarah leads our global team with strategic vision and operational excellence.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=388&q=80",
    },
    {
      name: "Michael Weber",
      position: "Chief Strategy Officer",
      bio: "Michael brings extensive industry knowledge and analytical expertise to guide our clients through strategic transformations.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80",
    },
    {
      name: "Anna Schmidt",
      position: "Chief Operating Officer",
      bio: "Anna oversees our global operations, ensuring efficient delivery of client engagements and internal excellence.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=461&q=80",
    }
  ];
  
  const practiceLeaders = [
    {
      name: "Thomas Becker",
      position: "Head of Digital Transformation",
      bio: "Thomas leads our digital practice, helping clients leverage technology to drive innovation and growth.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
    {
      name: "Julia Fischer",
      position: "Head of Financial Services",
      bio: "Julia specializes in strategic consulting for banking and insurance clients, with deep expertise in regulatory changes.",
      image: "https://images.unsplash.com/photo-1598550880863-4e8aa3d0edb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80",
    },
    {
      name: "David Hoffmann",
      position: "Head of Healthcare",
      bio: "David helps healthcare organizations navigate industry disruption and implement sustainable growth strategies.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80",
    },
    {
      name: "Laura Klein",
      position: "Head of Manufacturing",
      bio: "Laura specializes in operational excellence and supply chain optimization for manufacturing clients globally.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80",
    },
    {
      name: "Robert Schneider",
      position: "Head of Technology",
      bio: "Robert advises technology companies on growth strategies, product innovation, and go-to-market approaches.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80",
    },
    {
      name: "Christine Wagner",
      position: "Head of Strategy Consulting",
      bio: "Christine helps organizations develop and implement strategies that create sustainable competitive advantage.",
      image: "https://images.unsplash.com/photo-1580894732930-0babd100d356?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80",
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero
          title="Our Team"
          subtitle="Meet the experienced professionals behind our success"
          imageSrc="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
        />

        {/* Senior Leadership Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-focus-blue mb-6">Senior Leadership</h2>
              <p className="text-focus-muted max-w-2xl mx-auto">
                Our leadership team brings decades of experience across industries and consulting disciplines.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {seniorLeadership.map((member, index) => (
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

        {/* Practice Leaders Section */}
        <section className="py-16 md:py-24 bg-focus-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-focus-blue mb-6">Practice Leaders</h2>
              <p className="text-focus-muted max-w-2xl mx-auto">
                Our practice leaders are experts in their respective fields, driving innovation and excellence for our clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {practiceLeaders.map((member, index) => (
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

        {/* Join Our Team CTA */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-focus-blue rounded-lg p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Join Our Team</h2>
              <p className="text-white text-lg mb-8 max-w-2xl mx-auto opacity-90">
                We're always looking for talented professionals to join our global team. Explore current opportunities and start your journey with us.
              </p>
              <Button
                asChild
                className="bg-white text-focus-blue hover:bg-gray-100 px-8 py-3 text-lg rounded-md transition-colors"
              >
                <Link to="/careers">View Open Positions</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OurTeam;
