
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-24 relative bg-focus-light">
      <div className="container mx-auto px-4">
        <div className="bg-focus-accent rounded-lg p-12 text-center relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-focus-accent opacity-90"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white opacity-90 max-w-2xl mx-auto mb-8">
              Let's work together to develop strategies that drive growth and create lasting value.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                asChild
                className="bg-white text-focus-accent hover:bg-gray-100 px-8 py-3 rounded-md text-lg font-medium transition-colors duration-300"
              >
                <a href="/contact">Contact Us</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-3 rounded-md text-lg font-medium transition-colors duration-300"
              >
                <a href="/services">Our Services</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
