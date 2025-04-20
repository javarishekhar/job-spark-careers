
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Users, Building, Globe } from "lucide-react";

const stats = [
  {
    id: "jobs",
    label: "Active Jobs",
    value: "10,000+",
    icon: <Briefcase className="h-8 w-8 text-primary" />,
  },
  {
    id: "companies",
    label: "Companies",
    value: "2,500+",
    icon: <Building className="h-8 w-8 text-primary" />,
  },
  {
    id: "candidates",
    label: "Candidates",
    value: "150,000+",
    icon: <Users className="h-8 w-8 text-primary" />,
  },
  {
    id: "countries",
    label: "Countries",
    value: "25+",
    icon: <Globe className="h-8 w-8 text-primary" />,
  },
];

const StatsSection = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.id} className="overflow-hidden border-none shadow-md card-hover">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-500">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
