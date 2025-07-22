import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Bell, MapPin, Home, Trophy, UserCircle } from "lucide-react";

const VolunteerNotifications = () => {
  const navigate = useNavigate();

  const notifications = [
    {
      id: 1,
      type: "Match Scheduled",
      sport: "Volleyball",
      match: "Team A vs Team B",
      location: "Coimbatore",
      status: "Previous",
      time: "2 hours ago"
    },
    {
      id: 2,
      type: "Assignment Update",
      assignment: "Division CBE East",
      time: "1 day ago"
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-80 space-y-4">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <Bell className="w-6 h-6" />
            <h2 className="text-xl font-bold">Notifications</h2>
          </div>

          {/* Notifications List */}
          <div className="space-y-3">
            {notifications.map((notification) => (
              <Card key={notification.id}>
                <CardContent className="p-4">
                  {notification.type === "Match Scheduled" ? (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-sm">{notification.type}</span>
                        <span className="text-xs text-muted-foreground">{notification.time}</span>
                      </div>
                      <div className="text-sm">
                        <p className="font-medium">{notification.sport}</p>
                        <p>{notification.match}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="secondary" className="text-xs">
                            {notification.status}
                          </Badge>
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <MapPin className="w-3 h-3" />
                            <span className="text-xs">{notification.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-sm">{notification.type}</span>
                        <span className="text-xs text-muted-foreground">{notification.time}</span>
                      </div>
                      <div className="text-sm">
                        <Badge variant="secondary" className="text-xs">
                          {notification.assignment}
                        </Badge>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom Navigation */}
          <div className="border-t bg-muted/30 mt-8">
            <div className="flex">
              <div className="flex-1 flex flex-col items-center py-4 bg-primary/10 border-r">
                <Home className="w-6 h-6 text-primary" />
                <span className="text-sm mt-1 text-primary font-medium">Home</span>
              </div>
              <div 
                className="flex-1 flex flex-col items-center py-4 border-r cursor-pointer"
                onClick={() => navigate("/volunteer-matches")}
              >
                <Trophy className="w-6 h-6" />
                <span className="text-sm mt-1">Matches</span>
              </div>
              <div 
                className="flex-1 flex flex-col items-center py-4 cursor-pointer"
                onClick={() => navigate("/volunteer-profile")}
              >
                <UserCircle className="w-6 h-6" />
                <span className="text-sm mt-1">Profile</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerNotifications;