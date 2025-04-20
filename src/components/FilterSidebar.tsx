
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

interface FilterSidebarProps {
  onApplyFilters: (filters: any) => void;
  className?: string;
  isMobile?: boolean;
}

const FilterSidebar = ({ onApplyFilters, className, isMobile = false }: FilterSidebarProps) => {
  const [isOpen, setIsOpen] = useState(!isMobile);
  const [jobTypes, setJobTypes] = useState<string[]>([]);
  const [experienceLevels, setExperienceLevels] = useState<string[]>([]);
  const [salaryRange, setSalaryRange] = useState([0]);
  
  const jobTypeOptions = [
    { id: "full-time", label: "Full-time" },
    { id: "part-time", label: "Part-time" },
    { id: "contract", label: "Contract" },
    { id: "internship", label: "Internship" },
    { id: "remote", label: "Remote" },
  ];
  
  const experienceOptions = [
    { id: "entry", label: "Entry Level" },
    { id: "mid", label: "Mid Level" },
    { id: "senior", label: "Senior Level" },
    { id: "executive", label: "Executive" },
  ];

  const toggleJobType = (id: string) => {
    setJobTypes(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id]
    );
  };

  const toggleExperience = (id: string) => {
    setExperienceLevels(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id]
    );
  };

  const handleApplyFilters = () => {
    onApplyFilters({
      jobTypes,
      experienceLevels,
      salaryRange: salaryRange[0],
    });
    if (isMobile) {
      setIsOpen(false);
    }
  };

  const handleClearFilters = () => {
    setJobTypes([]);
    setExperienceLevels([]);
    setSalaryRange([0]);
    onApplyFilters({
      jobTypes: [],
      experienceLevels: [],
      salaryRange: 0,
    });
  };

  return (
    <div className={className}>
      {isMobile && (
        <Button 
          variant="outline" 
          className="w-full mb-4 flex items-center justify-center gap-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Filter size={16} />
          {isOpen ? "Hide Filters" : "Show Filters"}
        </Button>
      )}

      {isOpen && (
        <Card className="sticky top-24">
          <CardContent className="p-6 space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3">Job Type</h3>
              <div className="space-y-2">
                {jobTypeOptions.map((option) => (
                  <div key={option.id} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`job-type-${option.id}`} 
                      checked={jobTypes.includes(option.id)}
                      onCheckedChange={() => toggleJobType(option.id)}
                    />
                    <label 
                      htmlFor={`job-type-${option.id}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3">Experience Level</h3>
              <div className="space-y-2">
                {experienceOptions.map((option) => (
                  <div key={option.id} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`exp-${option.id}`} 
                      checked={experienceLevels.includes(option.id)}
                      onCheckedChange={() => toggleExperience(option.id)}
                    />
                    <label 
                      htmlFor={`exp-${option.id}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3">Salary Range</h3>
              <div className="px-2">
                <Slider
                  value={salaryRange}
                  onValueChange={setSalaryRange}
                  max={100}
                  step={1}
                  className="my-6"
                />
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">$0k</span>
                  <span className="text-sm text-gray-500">${salaryRange[0]}k</span>
                  <span className="text-sm text-gray-500">$100k+</span>
                </div>
              </div>
            </div>

            <div className="pt-2 space-y-3">
              <Button 
                className="w-full"
                onClick={handleApplyFilters}
              >
                Apply Filters
              </Button>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={handleClearFilters}
              >
                Clear Filters
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default FilterSidebar;
