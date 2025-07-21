import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, Send } from "lucide-react";
import { useState } from "react";

const TeamInvite = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { sport, teamData } = location.state || {};
  
  const [inviteData, setInviteData] = useState({
    name: "",
    phone: "",
    message: "Join my team for Gramotsavam!"
  });

  const handleSendInvite = () => {
    // Send invite logic here
    console.log("Sending invite to:", inviteData);
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
            TEAM CREATION - Invite
          </h2>
          
          <div className="space-y-4">
            <div>
              <label className="text-xs block mb-1">Player Name</label>
              <Input
                value={inviteData.name}
                onChange={(e) => setInviteData({...inviteData, name: e.target.value})}
                className="w-full h-8 text-sm"
              />
            </div>

            <div>
              <label className="text-xs block mb-1">Phone Number</label>
              <Input
                value={inviteData.phone}
                onChange={(e) => setInviteData({...inviteData, phone: e.target.value})}
                className="w-full h-8 text-sm"
              />
            </div>

            <div>
              <label className="text-xs block mb-1">Invitation Message</label>
              <Input
                value={inviteData.message}
                onChange={(e) => setInviteData({...inviteData, message: e.target.value})}
                className="w-full h-8 text-sm"
              />
            </div>

            <Button
              onClick={handleSendInvite}
              variant="outline"
              className="w-full mt-6"
            >
              <Send className="w-4 h-4 mr-2" />
              Send Invite
            </Button>

            <p className="text-xs text-foreground/70 text-center">
              An SMS/WhatsApp invite will be sent with app download link
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamInvite;