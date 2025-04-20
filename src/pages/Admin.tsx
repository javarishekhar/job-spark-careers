
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Search, Filter, User, Settings, Building } from "lucide-react";
import { jobs, Job } from "@/data/mockData";
import { useToast } from "@/components/ui/use-toast";

const Admin = () => {
  const [activeJobs, setActiveJobs] = useState<Job[]>(jobs);
  const { toast } = useToast();

  const handleDeleteJob = (id: string) => {
    setActiveJobs(activeJobs.filter(job => job.id !== id));
    toast({
      title: "Job deleted",
      description: "The job listing has been removed successfully.",
    });
  };

  const handleFeatureJob = (id: string) => {
    setActiveJobs(activeJobs.map(job => 
      job.id === id ? { ...job, featured: !job.featured } : job
    ));
    
    const job = activeJobs.find(job => job.id === id);
    toast({
      title: job?.featured ? "Job unfeatured" : "Job featured",
      description: `The job listing has been ${job?.featured ? 'removed from' : 'added to'} featured jobs.`,
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
          
          <Tabs defaultValue="jobs">
            <TabsList className="mb-8 w-full max-w-md grid-cols-4 h-auto">
              <TabsTrigger value="jobs" className="py-3">
                <div className="flex flex-col items-center gap-1">
                  <Briefcase size={18} />
                  <span>Jobs</span>
                </div>
              </TabsTrigger>
              <TabsTrigger value="users" className="py-3">
                <div className="flex flex-col items-center gap-1">
                  <User size={18} />
                  <span>Users</span>
                </div>
              </TabsTrigger>
              <TabsTrigger value="companies" className="py-3">
                <div className="flex flex-col items-center gap-1">
                  <Building size={18} />
                  <span>Companies</span>
                </div>
              </TabsTrigger>
              <TabsTrigger value="settings" className="py-3">
                <div className="flex flex-col items-center gap-1">
                  <Settings size={18} />
                  <span>Settings</span>
                </div>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="jobs">
              <Card>
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl">Manage Job Listings</CardTitle>
                  <CardDescription>
                    Review, edit, and manage all job postings on the platform
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-6">
                    <div className="relative w-full max-w-sm">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input 
                        placeholder="Search jobs..." 
                        className="pl-9"
                      />
                    </div>
                    <Button className="animated-button">
                      Add New Job
                    </Button>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50 text-left">
                        <tr>
                          <th className="px-4 py-3 text-sm font-medium text-gray-500">Title</th>
                          <th className="px-4 py-3 text-sm font-medium text-gray-500">Company</th>
                          <th className="px-4 py-3 text-sm font-medium text-gray-500">Status</th>
                          <th className="px-4 py-3 text-sm font-medium text-gray-500">Posted</th>
                          <th className="px-4 py-3 text-sm font-medium text-gray-500">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {activeJobs.map((job) => (
                          <tr key={job.id} className="hover:bg-gray-50">
                            <td className="px-4 py-4 font-medium">{job.title}</td>
                            <td className="px-4 py-4">{job.company}</td>
                            <td className="px-4 py-4">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                Active
                              </span>
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-500">{job.posted}</td>
                            <td className="px-4 py-4">
                              <div className="flex space-x-2">
                                <Button variant="outline" size="sm">
                                  Edit
                                </Button>
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  className="text-amber-600 hover:text-amber-700 hover:bg-amber-50"
                                  onClick={() => handleFeatureJob(job.id)}
                                >
                                  {job.featured ? "Unfeature" : "Feature"}
                                </Button>
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  className="text-red-600 hover:text-red-700 hover:bg-red-50"
                                  onClick={() => handleDeleteJob(job.id)}
                                >
                                  Delete
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="users">
              <Card>
                <CardHeader>
                  <CardTitle>User Management</CardTitle>
                  <CardDescription>
                    Manage job seekers and employer accounts
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <p className="text-gray-500">User management features coming soon...</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="companies">
              <Card>
                <CardHeader>
                  <CardTitle>Company Management</CardTitle>
                  <CardDescription>
                    Manage company profiles and verification
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <p className="text-gray-500">Company management features coming soon...</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="settings">
              <Card>
                <CardHeader>
                  <CardTitle>Platform Settings</CardTitle>
                  <CardDescription>
                    Configure platform settings and preferences
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <p className="text-gray-500">Settings panel coming soon...</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;
