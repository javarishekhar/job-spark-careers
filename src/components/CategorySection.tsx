
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Code, Palette, LineChart, Server, ShoppingBag, Microscope } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    id: "tech",
    name: "Technology",
    count: 1243,
    icon: <Code size={24} className="text-blue-500" />,
  },
  {
    id: "design",
    name: "Design",
    count: 856,
    icon: <Palette size={24} className="text-pink-500" />,
  },
  {
    id: "marketing",
    name: "Marketing",
    count: 723,
    icon: <LineChart size={24} className="text-purple-500" />,
  },
  {
    id: "engineering",
    name: "Engineering",
    count: 982,
    icon: <Server size={24} className="text-green-500" />,
  },
  {
    id: "sales",
    name: "Sales",
    count: 675,
    icon: <ShoppingBag size={24} className="text-orange-500" />,
  },
  {
    id: "healthcare",
    name: "Healthcare",
    count: 542,
    icon: <Microscope size={24} className="text-red-500" />,
  },
];

const CategorySection = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Explore Job Categories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse through the most in-demand job categories and find the
            perfect role that matches your skills and interests.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link key={category.id} to={`/jobs/category/${category.id}`}>
              <Card className="card-hover h-full cursor-pointer">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                  <p className="text-gray-500">{category.count} open positions</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
