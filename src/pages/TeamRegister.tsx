import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

const TeamRegister = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const sport = location.state?.sport || "Throwball";
  
  const [teamData, setTeamData] = useState({
    teamName: "",
    members: [
      { name: "You (Captain)", id: "captain" },
      { name: "ST2...", id: "member1" }
    ]
  });

  const handleAddManually = () => {
    navigate("/team-add-manually", { state: { sport, teamData } });
  };

  const handleSearch = () => {
    navigate("/team-search", { state: { sport, teamData } });
  };

  const handleInvite = () => {
    navigate("/team-invite", { state: { sport, teamData } });
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
            Register Team for<br />{sport}
          </h2>
          
          <div className="space-y-4">
            <div>
              <label className="text-xs block mb-1">Team Name</label>
              <Input
                value={teamData.teamName}
                onChange={(e) => setTeamData({...teamData, teamName: e.target.value})}
                className="w-full h-8 text-sm"
              />
            </div>

            <div>
              <label className="text-xs block mb-2">Team Members</label>
              <div className="space-y-2">
                {teamData.members.map((member, index) => (
                  <div key={member.id} className="text-sm p-2 border rounded">
                    {member.name}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs block mb-2">Add Team Members</label>
              <div className="flex space-x-2">
                <Button
                  onClick={handleAddManually}
                  variant="outline"
                  size="sm"
                  className="flex-1 text-xs"
                >
                  Add Manually
                </Button>
                <Button
                  onClick={handleSearch}
                  variant="outline"
                  size="sm"
                  className="flex-1 text-xs"
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
              
              <p className="text-xs text-foreground/70 mt-2">
                Add a player who doesn't have this app yet
              </p>
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

export default TeamRegister;