
import { useState, useEffect } from "react";
import JobCard, { JobProps } from "@/components/JobCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Sample job data
const sampleJobs: JobProps[] = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "TechCorp",
    location: "New York, NY",
    salary: "$120k - $150k",
    type: "Full-time",
    posted: "2 days ago",
    logo: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTcxNzY5Mg&ixlib=rb-4.0.3&q=80&w=1080",
    featured: true,
  },
  {
    id: "2",
    title: "UX/UI Designer",
    company: "DesignHub",
    location: "Remote",
    salary: "$90k - $110k",
    type: "Full-time",
    posted: "1 week ago",
    logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTcxNzY1MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: "3",
    title: "Data Scientist",
    company: "DataWorks",
    location: "San Francisco, CA",
    salary: "$130k - $160k",
    type: "Full-time",
    posted: "3 days ago",
    logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTcxNzY3Ng&ixlib=rb-4.0.3&q=80&w=1080",
    featured: true,
  },
  {
    id: "4",
    title: "Backend Engineer",
    company: "ServerStack",
    location: "Austin, TX",
    salary: "$110k - $140k",
    type: "Full-time",
    posted: "5 days ago",
    logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTcxNzYwOA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState<JobProps[]>([]);

  useEffect(() => {
    // In a real app, this would be an API call
    setJobs(sampleJobs);
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-bold">Featured Jobs</h2>
        <Link to="/jobs">
          <Button variant="outline">View All Jobs</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
