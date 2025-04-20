
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    id: "basic",
    name: "Basic",
    description: "Perfect for small businesses getting started with hiring",
    price: 49,
    features: [
      "Post up to 3 job listings",
      "30-day job visibility",
      "Basic candidate filtering",
      "Email support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    id: "pro",
    name: "Professional",
    description: "Ideal for growing companies with regular hiring needs",
    price: 99,
    features: [
      "Post up to 10 job listings",
      "60-day job visibility",
      "Advanced candidate filtering",
      "Featured job listings",
      "Priority email support",
      "Detailed analytics",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Tailored solutions for large companies with high-volume hiring",
    price: 199,
    features: [
      "Unlimited job listings",
      "90-day job visibility",
      "Premium company branding",
      "Advanced analytics and reporting",
      "Dedicated account manager",
      "API access for integration",
      "Custom recruitment solutions",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const Employers = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="relative h-96 bg-gradient-to-r from-primary to-accent text-white flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold mb-4">
                Hire the best talent for your company
              </h1>
              <p className="text-xl opacity-90 mb-6">
                Post jobs, find candidates, and build your team with JobSpark's powerful employer tools.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/register">
                  <Button size="lg" variant="default" className="bg-white text-primary hover:bg-gray-100 animated-button">
                    Get Started
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Schedule a Demo
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab}>
            <div className="flex justify-center mb-12">
              <TabsList className="grid grid-cols-3 w-full max-w-md">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="pricing">Pricing</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="overview">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6">
                    Find the right candidates, faster
                  </h2>
                  <p className="text-gray-600 mb-6">
                    JobSpark connects you with qualified candidates who match your job requirements. Our advanced matching algorithm ensures you receive applications from candidates with the skills and experience you need.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Post jobs in minutes and reach thousands of candidates",
                      "Use powerful filters to screen applicants efficiently",
                      "Manage your recruitment pipeline in one place",
                      "Access detailed analytics to optimize your hiring process",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="rounded-full bg-green-100 p-1 mt-1">
                          <Check size={14} className="text-green-600" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button onClick={() => setActiveTab("pricing")} className="animated-button">
                      View Pricing Plans
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    alt="Team working together"
                    className="rounded-lg shadow-xl"
                  />
                  <div className="absolute inset-0 bg-primary/10 rounded-lg" />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="pricing">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">
                  Choose the right plan for your hiring needs
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Whether you're occasionally hiring or building a large team, we have a plan that fits your requirements.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {pricingPlans.map((plan) => (
                  <Card 
                    key={plan.id} 
                    className={`relative overflow-hidden ${
                      plan.popular ? 'border-primary shadow-lg' : ''
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute top-0 right-0">
                        <div className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
                          MOST POPULAR
                        </div>
                      </div>
                    )}
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold">{plan.name}</h3>
                        <p className="text-gray-500 text-sm mt-1">{plan.description}</p>
                      </div>
                      <div className="mb-6">
                        <div className="flex items-end">
                          <span className="text-3xl font-bold">${plan.price}</span>
                          <span className="text-gray-500 ml-1">/month</span>
                        </div>
                      </div>
                      <div className="space-y-4">
                        {plan.features.map((feature, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <div className="rounded-full bg-green-100 p-1 mt-1">
                              <Check size={14} className="text-green-600" />
                            </div>
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-8">
                        <Button 
                          className={`w-full ${plan.popular ? 'animated-button' : ''}`}
                          variant={plan.popular ? "default" : "outline"}
                        >
                          {plan.cta}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <p className="text-gray-600">
                  Need a custom solution for your enterprise?{" "}
                  <a href="#" className="text-primary hover:underline">
                    Contact our sales team
                  </a>
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="features">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">
                  Powerful tools for employers
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Our platform is designed to streamline your hiring process from start to finish.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Job Posting Management",
                    description: "Create, edit, and manage multiple job postings from one dashboard. Use templates to speed up the process.",
                    icon: "📋",
                  },
                  {
                    title: "Candidate Screening",
                    description: "Filter applications based on skills, experience, and other criteria to quickly identify the best candidates.",
                    icon: "🔍",
                  },
                  {
                    title: "Application Tracking",
                    description: "Track candidate progress through your hiring pipeline and manage communications all in one place.",
                    icon: "📊",
                  },
                  {
                    title: "Company Branding",
                    description: "Showcase your company culture, benefits, and values with a customizable company profile page.",
                    icon: "🏢",
                  },
                  {
                    title: "Analytics & Reporting",
                    description: "Gain insights into your hiring process with detailed analytics on job performance and candidate sources.",
                    icon: "📈",
                  },
                  {
                    title: "Team Collaboration",
                    description: "Collaborate with your hiring team, share notes, and make decisions together on candidate selection.",
                    icon: "👥",
                  },
                ].map((feature, index) => (
                  <Card key={index} className="card-hover">
                    <CardContent className="p-6">
                      <div className="text-4xl mb-4">{feature.icon}</div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Employers;
