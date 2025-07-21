import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, User, Mail, Phone, Edit } from "lucide-react";

const PlayerProfileView = () => {
  const navigate = useNavigate();

  const profileData = {
    name: "John Player",
    email: "john.player@email.com", 
    phone: "+91 9876543210",
    location: "Bangalore, Karnataka",
    teams: 2,
    matches: 5
  };

  const handleEditProfile = () => {
    navigate("/player-profile-edit");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="flex items-center p-4 border-b">
        <ArrowLeft 
          className="w-5 h-5 mr-3 cursor-pointer" 
          onClick={() => navigate(-1)}
        />
        <h1 className="text-lg font-normal">Profile</h1>
      </div>

      {/* Profile Content */}
      <div className="p-4">
        <div className="w-full max-w-sm mx-auto">
          <div className="border-2 border-foreground rounded-lg p-6">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <User className="w-10 h-10 text-gray-500" />
              </div>
              <h2 className="text-lg font-medium">{profileData.name}</h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-foreground/70" />
                <span className="text-sm">{profileData.email}</span>
              </div>

              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-foreground/70" />
                <span className="text-sm">{profileData.phone}</span>
              </div>

              <div className="flex items-center">
                <User className="w-4 h-4 mr-3 text-foreground/70" />
                <span className="text-sm">{profileData.location}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{profileData.teams}</div>
                <div className="text-xs text-foreground/70">Teams</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{profileData.matches}</div>
                <div className="text-xs text-foreground/70">Matches</div>
              </div>
            </div>

            <Button
              onClick={handleEditProfile}
              variant="outline"
              className="w-full"
            >
              <Edit className="w-4 h-4 mr-2" />
              Edit Profile
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerProfileView;