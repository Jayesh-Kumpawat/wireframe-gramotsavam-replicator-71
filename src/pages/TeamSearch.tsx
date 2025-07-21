import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, Search, User } from "lucide-react";
import { useState } from "react";

const TeamSearch = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { sport, teamData } = location.state || {};
  
  const [searchQuery, setSearchQuery] = useState("987xxx");
  const [teamName, setTeamName] = useState(teamData?.teamName || "");
  const [searchResults] = useState([
    { id: 1, name: "John Player", status: "Search for players already registered" }
  ]);

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
  };

  const handleAddManually = () => {
    navigate("/team-add-manually", { state: { sport, teamData: { ...teamData, teamName } } });
  };

  const handleInvite = () => {
    navigate("/team-invite", { state: { sport, teamData: { ...teamData, teamName } } });
  };

  const handleRegisterTeam = () => {
    navigate("/player-dashboard");
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
            Register Team for<br />{sport || "Throwball"}
          </h2>
          
          <div className="space-y-4">
            <div>
              <label className="text-xs block mb-1">Team Name</label>
              <Input
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                className="w-full h-8 text-sm"
              />
            </div>

            <div>
              <label className="text-xs block mb-2">Team Members</label>
              <div className="border rounded p-2 text-sm">
                <div>You (Captain)</div>
                <div className="text-foreground/70">978xxx</div>
              </div>
            </div>

            <div>
              <label className="text-xs block mb-2">Add Team Members</label>
              <div className="flex space-x-2 mb-3">
                <Button
                  onClick={handleAddManually}
                  variant="outline"
                  size="sm"
                  className="flex-1 text-xs"
                >
                  Add Manual
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 text-xs bg-blue-100"
                  disabled
                >
                  Search
                </Button>
                <Button
                  onClick={handleInvite}
                  variant="outline"
                  size="sm"
                  className="flex-1 text-xs"
                >
                  Invite
                </Button>
              </div>

              <div className="flex space-x-2 mb-3">
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
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

              {searchResults.map((result) => (
                <div key={result.id} className="flex items-center space-x-3 p-2 border rounded mb-2">
                  <User className="w-4 h-4 text-red-500" />
                  <div className="flex-1">
                    <div className="text-sm font-medium">{result.name}</div>
                    <div className="text-xs text-foreground/70">{result.status}</div>
                  </div>
                </div>
              ))}
            </div>

            <Button
              onClick={handleRegisterTeam}
              variant="outline"
              className="w-full mt-6"
            >
              Register Team
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSearch;