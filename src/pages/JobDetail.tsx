
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { jobs, Job } from "@/data/mockData";
import { useToast } from "@/components/ui/use-toast";
import { MapPin, Briefcase, Clock, Building, DollarSign, AlertCircle } from "lucide-react";

const JobDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [job, setJob] = useState<Job | null>(null);
  const [isApplying, setIsApplying] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // In a real app, this would be an API call
    const foundJob = jobs.find((j) => j.id === id);
    setJob(foundJob || null);
  }, [id]);

  const handleApply = () => {
    setIsApplying(true);
    setTimeout(() => {
      setIsApplying(false);
      toast({
        title: "Application submitted!",
        description: "Your application has been submitted successfully.",
      });
    }, 1500);
  };

  if (!job) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-16 flex justify-center items-center">
          <div className="text-center">
            <AlertCircle className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h2 className="text-2xl font-bold mb-2">Job not found</h2>
            <p className="text-gray-600 mb-6">The job listing you're looking for doesn't exist or has been removed.</p>
            <Link to="/jobs">
              <Button>Browse all jobs</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <Card>
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6">
                    <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0 bg-gray-100">
                      <img
                        src={job.logo}
                        alt={`${job.company} logo`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h1 className="text-2xl font-bold">{job.title}</h1>
                        {job.featured && (
                          <Badge className="bg-primary">Featured</Badge>
                        )}
                      </div>
                      <Link to={`/companies/${job.companyId}`} className="text-lg text-primary hover:underline">
                        {job.company}
                      </Link>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                        <div className="flex items-center gap-2 text-gray-600">
                          <MapPin size={18} />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Briefcase size={18} />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Clock size={18} />
                          <span>Posted {job.posted}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <DollarSign size={18} />
                          <span>{job.salary}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    <Badge variant="outline" className="bg-gray-100">
                      {job.category}
                    </Badge>
                    <Badge variant="outline" className="bg-gray-100">
                      {job.experience}
                    </Badge>
                  </div>

                  <Separator className="my-6" />

                  <div className="space-y-8">
                    <div>
                      <h2 className="text-xl font-semibold mb-4">Job Description</h2>
                      <p className="text-gray-700 whitespace-pre-line">{job.description}</p>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold mb-4">Responsibilities</h2>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        {job.responsibilities.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold mb-4">Requirements</h2>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        {job.requirements.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold mb-4">Benefits</h2>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        {job.benefits.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="sticky top-24">
                <CardContent className="p-6 space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Apply for this job</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Application deadline: {job.deadline}
                    </p>
                    <Button 
                      className="w-full animated-button" 
                      onClick={handleApply}
                      disabled={isApplying}
                    >
                      {isApplying ? "Submitting..." : "Apply Now"}
                    </Button>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-semibold mb-3">About the company</h3>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded overflow-hidden bg-gray-100">
                        <img
                          src={job.logo}
                          alt={`${job.company} logo`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium">{job.company}</h4>
                        <Link 
                          to={`/companies/${job.companyId}`}
                          className="text-sm text-primary hover:underline"
                        >
                          View company profile
                        </Link>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">
                      A leading company in the {job.category} sector, known for innovation and excellence.
                    </p>
                  </div>

                  <Separator />

                  <div className="flex flex-col gap-2">
                    <Button variant="outline" className="w-full">
                      Save Job
                    </Button>
                    <Button variant="outline" className="w-full">
                      Share Job
                    </Button>
                    <Button variant="outline" className="w-full">
                      Report Job
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JobDetail;
