
import { Link } from "react-router-dom";
import { Briefcase } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Briefcase className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                JobSpark
              </span>
            </div>
            <p className="text-gray-600 text-sm">
              Connecting talent with opportunity. Find your next career move or
              your next great hire with JobSpark.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-4">For Job Seekers</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/jobs" className="text-gray-600 hover:text-primary text-sm">
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link to="/saved-jobs" className="text-gray-600 hover:text-primary text-sm">
                  Saved Jobs
                </Link>
              </li>
              <li>
                <Link to="/career-resources" className="text-gray-600 hover:text-primary text-sm">
                  Career Resources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-4">For Employers</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/post-job" className="text-gray-600 hover:text-primary text-sm">
                  Post a Job
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-600 hover:text-primary text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/employer-resources" className="text-gray-600 hover:text-primary text-sm">
                  Employer Resources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-primary text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} JobSpark. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
