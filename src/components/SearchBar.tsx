
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex w-full max-w-3xl mx-auto"
    >
      <div className="relative w-full">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
        <Input
          type="text"
          placeholder="Search for jobs, skills, or companies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 pr-4 py-6 text-base w-full rounded-l-md border-r-0"
        />
      </div>
      <Button
        type="submit"
        className="px-8 rounded-l-none animated-button"
        size="lg"
      >
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
