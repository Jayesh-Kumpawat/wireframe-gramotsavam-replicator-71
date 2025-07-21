import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, Users, MapPin, Calendar } from "lucide-react";

const PlayerTeamDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const teamId = location.state?.teamId || 1;

  // Mock team data - in real app this would come from API/state
  const teamData = {
    1: {
      name: "Team Name 1",
      sport: "Volleyball",
      status: "Verified",
      members: ["You (Captain)", "Player 2", "Player 3", "Player 4"],
      location: "Ground A, Sports Complex",
      nextMatch: "Tomorrow, 10:00 AM"
    },
    2: {
      name: "Team Name 2", 
      sport: "Throwball",
      status: "Pending",
      members: ["You (Captain)", "Player 2"],
      location: "TBD",
      nextMatch: "TBD"
    }
  };

  const team = teamData[teamId as keyof typeof teamData];

  const handleEditTeam = () => {
    navigate("/team-edit", { state: { teamId, team } });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="flex items-center p-4 border-b">
        <ArrowLeft 
          className="w-5 h-5 mr-3 cursor-pointer" 
          onClick={() => navigate(-1)}
        />
        <h1 className="text-lg font-normal">Player Dashboard - View Team Details</h1>
      </div>

      {/* Team Details */}
      <div className="p-4">
        <div className="w-full max-w-sm mx-auto">
          <div className="border-2 border-foreground rounded-lg p-6">
            <div className="text-center mb-6">
              <h2 className="text-lg font-medium mb-2">{team.name}</h2>
              <div className="text-sm text-foreground/70 mb-2">{team.sport}</div>
              <span className={`px-3 py-1 rounded text-xs ${
                team.status === 'Verified' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
              }`}>
                {team.status}
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex items-center mb-2">
                  <Users className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">Team Members</span>
                </div>
                <div className="space-y-1">
                  {team.members.map((member, index) => (
                    <div key={index} className="text-sm text-foreground/70 ml-6">
                      {member}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center mb-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">Location</span>
                </div>
                <div className="text-sm text-foreground/70 ml-6">{team.location}</div>
              </div>

              <div>
                <div className="flex items-center mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">Next Match</span>
                </div>
                <div className="text-sm text-foreground/70 ml-6">{team.nextMatch}</div>
              </div>
            </div>

            <Button
              onClick={handleEditTeam}
              variant="outline"
              className="w-full mt-6"
            >
              Edit Team
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerTeamDetails;