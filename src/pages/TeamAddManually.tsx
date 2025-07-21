import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

const TeamAddManually = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { sport, teamData } = location.state || {};
  
  const [newMember, setNewMember] = useState({
    name: "",
    phone: "",
    email: ""
  });

  const handleAddMember = () => {
    // Add member logic here
    navigate(-1);
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
            TEAM CREATION - Add Manually
          </h2>
          
          <div className="space-y-4">
            <div>
              <label className="text-xs block mb-1">Player Name</label>
              <Input
                value={newMember.name}
                onChange={(e) => setNewMember({...newMember, name: e.target.value})}
                className="w-full h-8 text-sm"
              />
            </div>

            <div>
              <label className="text-xs block mb-1">Phone Number</label>
              <Input
                value={newMember.phone}
                onChange={(e) => setNewMember({...newMember, phone: e.target.value})}
                className="w-full h-8 text-sm"
              />
            </div>

            <div>
              <label className="text-xs block mb-1">Email (Optional)</label>
              <Input
                value={newMember.email}
                onChange={(e) => setNewMember({...newMember, email: e.target.value})}
                className="w-full h-8 text-sm"
              />
            </div>

            <Button
              onClick={handleAddMember}
              variant="outline"
              className="w-full mt-6"
            >
              Add Member
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamAddManually;