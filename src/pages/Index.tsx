
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturedJobs from "@/components/FeaturedJobs";
import CategorySection from "@/components/CategorySection";
import StatsSection from "@/components/StatsSection";
import TestimonialSection from "@/components/TestimonialSection";
import SearchBar from "@/components/SearchBar";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();

  const handleSearch = (query: string) => {
    toast({
      title: "Search initiated",
      description: `Searching for "${query}"...`,
    });
    // In a real app, this would navigate to search results page with the query
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        
        <div className="container mx-auto px-4 py-8 -mt-8 relative z-10">
          <SearchBar onSearch={handleSearch} />
        </div>
        
        <StatsSection />
        <FeaturedJobs />
        <CategorySection />
        <TestimonialSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
