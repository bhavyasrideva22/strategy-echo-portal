
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Briefcase, Users, GraduationCap, MapPin, Building, Clock } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface JobPosition {
  id: number;
  title: string;
  location: string;
  type: string;
  department: string;
  description: string;
}

const Careers = () => {
  const { toast } = useToast();
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  const [applicationData, setApplicationData] = useState({
    fullName: "",
    email: "",
    phone: "",
    coverLetter: "",
    resume: null as File | null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const jobPositions: JobPosition[] = [
    {
      id: 1,
      title: "Senior Management Consultant",
      location: "Frankfurt, Germany",
      type: "Full-time",
      department: "Consulting",
      description: "We are looking for an experienced Senior Management Consultant to join our team in Frankfurt. As a Senior Consultant, you will lead client engagements, develop strategic recommendations, and mentor junior team members. The ideal candidate has 7+ years of consulting experience with a strong background in business strategy and transformation projects."
    },
    {
      id: 2,
      title: "Business Analyst",
      location: "Frankfurt, Germany",
      type: "Full-time",
      department: "Analytics",
      description: "The Business Analyst role involves working closely with clients to understand their business challenges and translate them into analytical frameworks. You'll gather and analyze data, create insightful reports, and present findings to stakeholders. We're looking for candidates with strong analytical skills, business acumen, and excellent communication abilities."
    },
    {
      id: 3,
      title: "Marketing Specialist",
      location: "Remote (Germany-based)",
      type: "Full-time",
      department: "Marketing",
      description: "As a Marketing Specialist, you'll develop and implement marketing strategies to enhance our brand presence and generate client leads. Responsibilities include content creation, social media management, campaign analytics, and event coordination. The ideal candidate has experience in B2B marketing within the consulting or professional services sector."
    },
    {
      id: 4,
      title: "Junior Consultant",
      location: "Frankfurt, Germany",
      type: "Full-time",
      department: "Consulting",
      description: "We're seeking ambitious Junior Consultants to join our growing team. In this role, you'll support senior consultants in client projects, conduct research, analyze data, and develop presentations. This position is perfect for recent graduates or professionals with 1-2 years of experience who are eager to build a career in management consulting."
    }
  ];

  const handleApply = (job: JobPosition) => {
    setSelectedJob(job);
    window.scrollTo({ top: document.getElementById('application-form')?.offsetTop, behavior: 'smooth' });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setApplicationData(prev => ({ ...prev, resume: e.target.files![0] }));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setApplicationData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedJob) {
      toast({
        title: "Error",
        description: "Please select a job position first.",
        variant: "destructive"
      });
      return;
    }
    
    if (!applicationData.resume) {
      toast({
        title: "Error",
        description: "Please upload your resume.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Application submitted!",
        description: `Thank you for applying to the ${selectedJob.title} position. We'll review your application soon.`,
      });
      
      // Reset form
      setApplicationData({
        fullName: "",
        email: "",
        phone: "",
        coverLetter: "",
        resume: null
      });
      setSelectedJob(null);
    }, 1500);
  };

  const renderValueProposition = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
      <div className="bg-white rounded-lg p-6 shadow-md text-center">
        <div className="mx-auto bg-blue-50 w-16 h-16 flex items-center justify-center rounded-full mb-4">
          <Users className="h-8 w-8 text-focus-accent" />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-focus-blue">Collaborative Culture</h3>
        <p className="text-focus-muted">Join a team of diverse professionals working together to solve complex challenges in a supportive environment.</p>
      </div>
      
      <div className="bg-white rounded-lg p-6 shadow-md text-center">
        <div className="mx-auto bg-blue-50 w-16 h-16 flex items-center justify-center rounded-full mb-4">
          <GraduationCap className="h-8 w-8 text-focus-accent" />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-focus-blue">Growth Opportunities</h3>
        <p className="text-focus-muted">Accelerate your career with mentorship programs, continuous learning, and challenging projects with industry leaders.</p>
      </div>
      
      <div className="bg-white rounded-lg p-6 shadow-md text-center">
        <div className="mx-auto bg-blue-50 w-16 h-16 flex items-center justify-center rounded-full mb-4">
          <Briefcase className="h-8 w-8 text-focus-accent" />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-focus-blue">Impactful Work</h3>
        <p className="text-focus-muted">Make a real difference by working on strategic projects that transform businesses and create lasting value.</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative h-[50vh] min-h-[300px] w-full">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1474&q=80')` }}
          >
            <div className="absolute inset-0 bg-focus-blue bg-opacity-70"></div>
          </div>
          
          <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
            <div className="max-w-3xl animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Join Our Team
              </h1>
              <p className="text-xl md:text-2xl text-white opacity-90 mb-8 max-w-2xl">
                Build your career at Focus Strategy and help shape the future of business.
              </p>
            </div>
          </div>
        </div>

        {/* Value Proposition Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-focus-blue mb-6">Why Work With Us</h2>
              <p className="text-xl text-focus-muted mb-8">
                At Focus Strategy, we're building a team of exceptional professionals who are passionate about making a difference.
              </p>
            </div>
            
            {renderValueProposition()}
          </div>
        </section>

        {/* Open Positions Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-focus-blue mb-12 text-center">Open Positions</h2>
            
            <div className="max-w-4xl mx-auto">
              {jobPositions.map((job) => (
                <div key={job.id} className="mb-8 bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                      <h3 className="text-2xl font-semibold text-focus-blue">{job.title}</h3>
                      <Button 
                        onClick={() => handleApply(job)}
                        className="mt-4 md:mt-0 bg-focus-accent hover:bg-blue-700"
                      >
                        Apply Now
                      </Button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="flex items-center text-focus-muted">
                        <MapPin className="h-5 w-5 mr-2 text-focus-accent" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center text-focus-muted">
                        <Clock className="h-5 w-5 mr-2 text-focus-accent" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center text-focus-muted">
                        <Building className="h-5 w-5 mr-2 text-focus-accent" />
                        <span>{job.department}</span>
                      </div>
                    </div>
                    
                    <p className="text-focus-muted">{job.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section id="application-form" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-focus-blue mb-8 text-center">Apply Now</h2>
              
              {selectedJob ? (
                <div className="mb-8 p-4 bg-blue-50 border-l-4 border-focus-accent rounded">
                  <p className="font-medium text-focus-blue">
                    You are applying for: <span className="font-bold">{selectedJob.title}</span>
                  </p>
                </div>
              ) : (
                <div className="mb-8 p-4 bg-gray-100 border rounded text-center">
                  <p className="text-focus-muted">
                    Select a position from above to apply.
                  </p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <Label htmlFor="fullName">Full Name*</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={applicationData.fullName}
                      onChange={handleInputChange}
                      required
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address*</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={applicationData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-2"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={applicationData.phone}
                    onChange={handleInputChange}
                    className="mt-2"
                  />
                </div>
                
                <div className="mb-6">
                  <Label htmlFor="resume">Upload Resume (PDF, DOC, DOCX)*</Label>
                  <Input
                    id="resume"
                    name="resume"
                    type="file"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    required
                    className="mt-2"
                  />
                </div>
                
                <div className="mb-6">
                  <Label htmlFor="coverLetter">Cover Letter</Label>
                  <Textarea
                    id="coverLetter"
                    name="coverLetter"
                    value={applicationData.coverLetter}
                    onChange={handleInputChange}
                    rows={5}
                    className="mt-2"
                    placeholder="Tell us why you're interested in this position and what makes you a great fit."
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting || !selectedJob}
                  className="w-full bg-focus-accent hover:bg-blue-700"
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
