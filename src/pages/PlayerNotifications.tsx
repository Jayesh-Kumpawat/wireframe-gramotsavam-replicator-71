import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Bell } from "lucide-react";

const PlayerNotifications = () => {
  const navigate = useNavigate();

  const notifications = [
    {
      id: 1,
      title: "Team Registration Approved",
      message: "Your Volleyball team registration has been approved!",
      time: "2 hours ago",
      unread: true
    },
    {
      id: 2,
      title: "Match Scheduled",
      message: "Your next match is scheduled for tomorrow at 10 AM",
      time: "1 day ago",
      unread: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="flex items-center p-4 border-b">
        <ArrowLeft 
          className="w-5 h-5 mr-3 cursor-pointer" 
          onClick={() => navigate(-1)}
        />
        <h1 className="text-lg font-normal">Player Dashboard - Notifications</h1>
      </div>

      {/* Notifications List */}
      <div className="p-4">
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div 
              key={notification.id} 
              className={`border rounded-lg p-4 ${notification.unread ? 'bg-blue-50 border-blue-200' : 'bg-background'}`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-medium text-sm mb-1">{notification.title}</h3>
                  <p className="text-sm text-foreground/70 mb-2">{notification.message}</p>
                  <span className="text-xs text-foreground/50">{notification.time}</span>
                </div>
                {notification.unread && (
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-1"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayerNotifications;