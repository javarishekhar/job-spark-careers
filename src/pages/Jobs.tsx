
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import FilterSidebar from "@/components/FilterSidebar";
import JobCard from "@/components/JobCard";
import { jobs, Job } from "@/data/mockData";
import { useToast } from "@/components/ui/use-toast";
import { Pagination } from "@/components/ui/pagination";
import { useIsMobile } from "@/hooks/use-mobile";

const Jobs = () => {
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(jobs);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 8;
  const isMobile = useIsMobile();
  const { toast } = useToast();

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    toast({
      title: "Search results updated",
      description: query ? `Showing results for "${query}"` : "Showing all jobs",
    });
  };

  const handleApplyFilters = (filters: any) => {
    // In a real app, this would filter based on the provided criteria
    toast({
      title: "Filters applied",
      description: "Job listings have been filtered according to your preferences.",
    });
  };

  // Calculate pagination
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-6">Browse Jobs</h1>
            <SearchBar onSearch={handleSearch} />
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <FilterSidebar
              onApplyFilters={handleApplyFilters}
              className="w-full md:w-1/4"
              isMobile={isMobile}
            />

            <div className="w-full md:w-3/4">
              <div className="mb-4 flex justify-between items-center">
                <p className="text-gray-600">
                  Showing {currentJobs.length} of {filteredJobs.length} jobs
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Sort by:</span>
                  <select className="border rounded-md px-2 py-1 text-sm">
                    <option>Most Relevant</option>
                    <option>Newest</option>
                    <option>Highest Salary</option>
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                {currentJobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>

              {totalPages > 1 && (
                <div className="mt-8 flex justify-center">
                  <Pagination>
                    <Pagination.Prev
                      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                    />
                    <div className="flex items-center gap-1">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <Pagination.Number
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          active={page === currentPage}
                        >
                          {page}
                        </Pagination.Number>
                      ))}
                    </div>
                    <Pagination.Next
                      onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                      disabled={currentPage === totalPages}
                    />
                  </Pagination>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Jobs;
