
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 -z-10" />
      <div 
        className="absolute inset-0 -z-20 opacity-10" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Find Your <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Dream Job</span> Today
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Connect with top employers and discover thousands of job opportunities tailored to your skills and experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/jobs">
              <Button size="lg" className="animated-button">
                Find Jobs
              </Button>
            </Link>
            <Link to="/employers">
              <Button size="lg" variant="outline">
                For Employers
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
