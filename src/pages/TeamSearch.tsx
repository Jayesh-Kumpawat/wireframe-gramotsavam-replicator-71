import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, Search } from "lucide-react";
import { useState } from "react";

const TeamSearch = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { sport, teamData } = location.state || {};
  
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults] = useState([
    { id: 1, name: "John Doe", phone: "9876543210" },
    { id: 2, name: "Jane Smith", phone: "9876543211" },
    { id: 3, name: "Mike Johnson", phone: "9876543212" }
  ]);

  const handleSearch = () => {
    // Search logic here
    console.log("Searching for:", searchQuery);
  };

  const handleAddPlayer = (player: any) => {
    // Add player logic here
    console.log("Adding player:", player);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-sm mx-auto">
        <div className="border-2 border-foreground rounded-lg p-8">
          {/* Back button */}
          <div className="flex items-center mb-6">
            <ArrowLeft 
              className="w-5 h-5 mr-2 cursor-pointer" 
              onClick={() => navigate(-1)}
            />
            <span className="text-sm">Back</span>
          </div>

          <h2 className="text-lg font-normal mb-6 text-center">
            TEAM CREATION - Search
          </h2>
          
          <div className="space-y-4">
            <div className="flex space-x-2">
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search players..."
                className="flex-1 h-8 text-sm"
              />
              <Button
                onClick={handleSearch}
                variant="outline"
                size="sm"
                className="px-3"
              >
                <Search className="w-4 h-4" />
              </Button>
            </div>

            <div className="space-y-2">
              <label className="text-xs block">Search Results</label>
              {searchResults.map((player) => (
                <div key={player.id} className="flex items-center justify-between p-2 border rounded">
                  <div className="text-sm">
                    <div className="font-medium">{player.name}</div>
                    <div className="text-foreground/70">{player.phone}</div>
                  </div>
                  <Button
                    onClick={() => handleAddPlayer(player)}
                    variant="outline"
                    size="sm"
                    className="text-xs"
                  >
                    Add
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSearch;