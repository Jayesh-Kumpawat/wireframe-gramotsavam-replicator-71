import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Bell, Home, Trophy, User } from "lucide-react";

const PlayerDashboard = () => {
  const navigate = useNavigate();

  const teams = [
    {
      id: 1,
      name: "Team Name 1",
      sport: "Volleyball",
      status: "Verified",
      statusColor: "bg-green-100 text-green-800"
    },
    {
      id: 2,
      name: "Team Name 2", 
      sport: "Throwball",
      status: "Pending",
      statusColor: "bg-yellow-100 text-yellow-800"
    }
  ];

  const handleNotifications = () => {
    navigate("/player-notifications");
  };

  const handleViewDetails = (teamId: number) => {
    navigate("/player-team-details", { state: { teamId } });
  };

  const handleCreateTeam = () => {
    navigate("/team-creation");
  };

  const handleMatches = () => {
    navigate("/player-matches");
  };

  const handleProfile = () => {
    navigate("/player-profile-view");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <h1 className="text-lg font-normal">Player Dashboard</h1>
        <div className="relative">
          <Bell 
            className="w-6 h-6 cursor-pointer" 
            onClick={handleNotifications}
          />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            2
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4">
        <div className="w-full max-w-sm mx-auto">
          <h2 className="text-base font-medium mb-4">My Teams</h2>
          
          <div className="space-y-4 mb-6">
            {teams.map((team) => (
              <div key={team.id} className="border-2 border-foreground rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <div className="font-medium text-sm">{team.name}</div>
                    <div className="text-sm text-foreground/70">{team.sport}</div>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs ${team.statusColor}`}>
                    {team.status}
                  </span>
                </div>
                <Button
                  onClick={() => handleViewDetails(team.id)}
                  variant="outline"
                  size="sm"
                  className="w-full"
                >
                  View Details
                </Button>
              </div>
            ))}
          </div>

          <Button
            onClick={handleCreateTeam}
            variant="outline"
            className="w-full mb-6"
          >
            Create Team
          </Button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="border-t bg-background">
        <div className="flex justify-around p-4">
          <button 
            onClick={() => {}}
            className="flex flex-col items-center space-y-1 text-primary"
          >
            <div className="bg-blue-100 p-2 rounded-full">
              <Home className="w-5 h-5" />
            </div>
            <span className="text-xs">Home</span>
          </button>
          
          <button 
            onClick={handleMatches}
            className="flex flex-col items-center space-y-1 text-foreground/70"
          >
            <Trophy className="w-5 h-5" />
            <span className="text-xs">Matches</span>
          </button>
          
          <button 
            onClick={handleProfile}
            className="flex flex-col items-center space-y-1 text-foreground/70"
          >
            <User className="w-5 h-5" />
            <span className="text-xs">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerDashboard;