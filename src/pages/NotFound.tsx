
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-focus-light">
        <div className="text-center px-4 py-16">
          <h1 className="text-6xl md:text-8xl font-bold text-focus-blue mb-4">404</h1>
          <p className="text-xl md:text-2xl text-focus-muted mb-8">
            Oops! The page you're looking for doesn't exist.
          </p>
          <Button
            asChild
            className="bg-focus-accent hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-md transition-colors duration-300"
          >
            <a href="/">Return to Home</a>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
