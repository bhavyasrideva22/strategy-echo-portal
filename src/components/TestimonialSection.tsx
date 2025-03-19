
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
}

const TestimonialSection = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "Focus Strategy helped us develop a roadmap for our digital transformation that resulted in a 30% increase in operational efficiency.",
      author: "Sarah Johnson",
      position: "CEO",
      company: "TechInnovate Inc."
    },
    {
      quote: "Their market analysis provided us with actionable insights that helped us identify new growth opportunities we hadn't considered before.",
      author: "Michael Chen",
      position: "COO",
      company: "Global Ventures"
    },
    {
      quote: "Working with Focus Strategy transformed our approach to customer engagement. Their expertise was invaluable to our success.",
      author: "Emma Rodriguez",
      position: "Chief Strategy Officer",
      company: "Elevate Solutions"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-20 bg-focus-blue text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">What Our Clients Say</h2>

          <div className="relative px-8 md:px-12">
            <div className="relative overflow-hidden min-h-[200px]">
              <div
                className="transition-opacity duration-500"
                key={currentIndex}
              >
                <blockquote className="text-xl md:text-2xl italic mb-8">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                <div className="font-medium">
                  <p className="text-lg">{testimonials[currentIndex].author}</p>
                  <p className="text-focus-accent">
                    {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-10 space-x-4">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-focus-blue border border-white/20 hover:bg-white/10 transition-colors duration-200"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-focus-blue border border-white/20 hover:bg-white/10 transition-colors duration-200"
                aria-label="Next testimonial"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
