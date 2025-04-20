
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthBox from "@/components/AuthBox";

const Login = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-gray-50 py-16">
        <div className="container max-w-md px-4">
          <AuthBox defaultTab="login" />
          
          <div className="text-center mt-6">
            <p className="text-gray-600 text-sm">
              Don't have an account?{" "}
              <Link to="/register" className="text-primary hover:underline">
                Create one now
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
