
import { Button } from "@/components/ui/button";

interface HeroProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
  buttonText?: string;
  buttonLink?: string;
}

const Hero = ({ title, subtitle, imageSrc, buttonText, buttonLink }: HeroProps) => {
  return (
    <div className="relative h-[80vh] min-h-[500px] w-full">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageSrc})` }}
      >
        <div className="absolute inset-0 bg-focus-blue bg-opacity-70"></div>
      </div>
      
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-white opacity-90 mb-8 max-w-2xl">
              {subtitle}
            </p>
          )}
          {buttonText && buttonLink && (
            <Button
              asChild
              className="bg-focus-accent hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-md transition-colors duration-300"
            >
              <a href={buttonLink}>{buttonText}</a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
