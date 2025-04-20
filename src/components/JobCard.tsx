
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Briefcase, MapPin, Clock } from "lucide-react";

export interface JobProps {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  posted: string;
  logo: string;
  featured?: boolean;
}

const JobCard = ({ job }: { job: JobProps }) => {
  return (
    <Card className={`overflow-hidden card-hover ${job.featured ? 'border-l-4 border-primary' : ''}`}>
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="h-14 w-14 rounded-md overflow-hidden flex items-center justify-center bg-gray-100">
            <img
              src={job.logo}
              alt={`${job.company} logo`}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-lg text-gray-900">
                {job.title}
              </h3>
              {job.featured && (
                <Badge className="bg-primary hover:bg-primary/90">Featured</Badge>
              )}
            </div>
            <div className="text-gray-700 font-medium mb-3">{job.company}</div>
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <MapPin size={16} />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Briefcase size={16} />
                <span>{job.type}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={16} />
                <span>{job.posted}</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-gray-50 px-6 py-4 flex justify-between items-center">
        <div className="font-medium text-primary">{job.salary}</div>
        <Link to={`/jobs/${job.id}`}>
          <Button className="animated-button">View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default JobCard;
