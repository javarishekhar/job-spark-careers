
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X, Briefcase } from "lucide-react";

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Briefcase className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              JobSpark
            </span>
          </Link>

          {isMobile ? (
            <>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>

              {isMenuOpen && (
                <div className="absolute top-16 left-0 right-0 bg-white shadow-md py-4 px-4 flex flex-col space-y-4">
                  <Link
                    to="/jobs"
                    className="text-gray-700 hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Browse Jobs
                  </Link>
                  <Link
                    to="/employers"
                    className="text-gray-700 hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    For Employers
                  </Link>
                  <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="outline" className="w-full">Sign In</Button>
                  </Link>
                  <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                    <Button className="w-full animated-button">Sign Up</Button>
                  </Link>
                </div>
              )}
            </>
          ) : (
            <div className="flex items-center space-x-8">
              <div className="flex space-x-6">
                <Link
                  to="/jobs"
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  Browse Jobs
                </Link>
                <Link
                  to="/employers"
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  For Employers
                </Link>
              </div>
              <div className="flex items-center space-x-4">
                <Link to="/login">
                  <Button variant="outline">Sign In</Button>
                </Link>
                <Link to="/register">
                  <Button className="animated-button">Sign Up</Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
