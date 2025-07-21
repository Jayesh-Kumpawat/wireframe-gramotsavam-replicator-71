import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Bell, Home, Trophy, User } from "lucide-react";

const PlayerNotifications = () => {
  const navigate = useNavigate();

  const notifications = [
    {
      id: 1,
      title: "Your Match Scheduled",
      sport: "Volleyball",
      details: "vs Team B",
      venue: "Venue: QBE",
      hasAction: false
    },
    {
      id: 2,
      title: "Team Registration Pending",
      sport: "Throwball",
      details: "",
      venue: "",
      hasAction: true
    }
  ];

  const handleCompleteRegistration = () => {
    navigate("/team-register");
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
        <div className="flex items-center">
          <Bell className="w-5 h-5 mr-2" />
          <span className="text-sm">Notifications</span>
        </div>
      </div>

      {/* Notifications List */}
      <div className="flex-1 p-4">
        <div className="w-full max-w-sm mx-auto space-y-4">
          {notifications.map((notification) => (
            <div key={notification.id} className="border-2 border-foreground rounded-lg p-4">
              <div className="mb-2">
                <h3 className="font-medium text-sm mb-1">{notification.title}</h3>
                <div className="text-sm text-foreground/70">{notification.sport}</div>
              </div>
              
              {notification.details && (
                <div className="mb-2">
                  <div className="text-sm">{notification.details}</div>
                  {notification.venue && (
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs ml-2">
                      {notification.venue}
                    </span>
                  )}
                </div>
              )}

              {notification.hasAction && (
                <Button
                  onClick={handleCompleteRegistration}
                  variant="outline"
                  size="sm"
                  className="mt-2"
                >
                  Complete Registration
                </Button>
              )}
            </div>
          ))}
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

export default PlayerNotifications;