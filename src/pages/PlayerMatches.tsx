import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Trophy, Calendar, MapPin } from "lucide-react";

const PlayerMatches = () => {
  const navigate = useNavigate();

  const matches = [
    {
      id: 1,
      sport: "Volleyball",
      opponent: "Team Alpha",
      date: "Tomorrow",
      time: "10:00 AM",
      venue: "Ground A",
      status: "upcoming"
    },
    {
      id: 2,
      sport: "Throwball", 
      opponent: "Team Beta",
      date: "Next Week",
      time: "2:00 PM",
      venue: "Ground B",
      status: "scheduled"
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
        <h1 className="text-lg font-normal">Matches</h1>
      </div>

      {/* Matches List */}
      <div className="p-4">
        <div className="space-y-4">
          {matches.map((match) => (
            <div key={match.id} className="border-2 border-foreground rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <Trophy className="w-5 h-5 mr-2 text-primary" />
                  <span className="font-medium">{match.sport}</span>
                </div>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                  {match.status}
                </span>
              </div>
              
              <div className="space-y-2">
                <div className="text-sm">vs {match.opponent}</div>
                
                <div className="flex items-center text-sm text-foreground/70">
                  <Calendar className="w-4 h-4 mr-2" />
                  {match.date} at {match.time}
                </div>
                
                <div className="flex items-center text-sm text-foreground/70">
                  <MapPin className="w-4 h-4 mr-2" />
                  {match.venue}
                </div>
              </div>
              
              <Button
                variant="outline"
                size="sm"
                className="w-full mt-3"
              >
                View Details
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayerMatches;