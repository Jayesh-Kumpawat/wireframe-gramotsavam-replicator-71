import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, Edit2, Trash2, Home, Trophy, User } from "lucide-react";

const PlayerTeamDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const teamId = location.state?.teamId || 1;

  // Mock team data - in real app this would come from API/state
  const teamData = {
    1: {
      name: "Team Name 1",
      sport: "Volleyball",
      members: [
        { name: "John Player", phone: "988xxx", status: "Registered" },
        { name: "Sarah Wilson", phone: "908xxx", status: "Manual Entry" }
      ]
    },
    2: {
      name: "Team Name 2", 
      sport: "Throwball",
      members: [
        { name: "John Player", phone: "988xxx", status: "Registered" }
      ]
    }
  };

  const team = teamData[teamId as keyof typeof teamData];

  const handleTransferCaptaincy = () => {
    // Handle transfer captaincy logic
  };

  const handleEditMember = (memberIndex: number) => {
    // Handle edit member logic
  };

  const handleDeleteMember = (memberIndex: number) => {
    // Handle delete member logic
  };

  const handleMatches = () => {
    navigate("/player-matches");
  };

  const handleProfile = () => {
    navigate("/player-profile-view");
  };

  const handleHome = () => {
    navigate("/player-dashboard");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="flex items-center p-4 border-b">
        <ArrowLeft 
          className="w-5 h-5 mr-3 cursor-pointer" 
          onClick={() => navigate(-1)}
        />
        <h1 className="text-sm font-normal">View Team Details</h1>
      </div>

      {/* Team Details */}
      <div className="flex-1 p-4">
        <div className="w-full max-w-sm mx-auto">
          <div className="border-2 border-foreground rounded-lg p-4">
            {/* Team Header */}
            <div className="text-center mb-4">
              <h2 className="font-medium text-sm mb-1">{team.name}</h2>
              <div className="text-sm text-foreground/70">{team.sport}</div>
            </div>

            {/* Team Members */}
            <div className="mb-4">
              <h3 className="text-sm font-medium mb-3">Team Members</h3>
              <div className="space-y-3">
                {team.members.map((member, index) => (
                  <div key={index} className="border rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="text-sm font-medium">{member.name}</div>
                        <div className="text-xs text-foreground/70">{member.phone}</div>
                        <span className={`inline-block px-2 py-1 rounded text-xs mt-1 ${
                          member.status === 'Registered' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-orange-100 text-orange-800'
                        }`}>
                          {member.status}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button 
                          onClick={() => handleEditMember(index)}
                          className="p-1"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => handleDeleteMember(index)}
                          className="p-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Transfer Captaincy Button */}
            <Button
              onClick={handleTransferCaptaincy}
              variant="outline"
              className="w-full bg-red-50 border-red-200 text-red-800 hover:bg-red-100"
            >
              Transfer Captaincy
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="border-t bg-background">
        <div className="flex justify-around p-4">
          <button 
            onClick={handleHome}
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

export default PlayerTeamDetails;