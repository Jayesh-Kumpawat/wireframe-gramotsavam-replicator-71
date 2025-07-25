import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Bell, ArrowLeft, Home, User } from "lucide-react";
import { useState } from "react";
const PlayerMatches = () => {
  const navigate = useNavigate();
  const [selectedMatch, setSelectedMatch] = useState(null);
  const tournaments = [{
    sport: "Volleyball",
    levels: [{
      name: "Cluster Level",
      status: "Completed",
      date: "1/01/25",
      statusColor: "bg-green-100 text-green-800",
      matches: [{
        id: 1,
        teamA: "Team A",
        teamB: "Team B",
        status: "Completed",
        score: "25 - 23",
        venue: "Coimbatore"
      }, {
        id: 2,
        teamA: "Team A",
        teamB: "Team C",
        status: "Upcoming",
        date: "3/01/25",
        venue: "IYC"
      }]
    }, {
      name: "Division Level",
      status: "Upcoming",
      date: "3/01/25",
      statusColor: "bg-blue-100 text-blue-800",
      matches: []
    }, {
      name: "Finals Level",
      status: "Locked",
      date: "Not yet available",
      statusColor: "bg-gray-100 text-gray-800",
      matches: []
    }]
  }, {
    sport: "Throwball",
    levels: []
  }];
  const handleViewMatches = (sport, level) => {
    setSelectedMatch({
      sport,
      level
    });
  };
  const handleBack = () => {
    if (selectedMatch) {
      setSelectedMatch(null);
    } else {
      navigate("/player-dashboard");
    }
  };
  if (selectedMatch) {
    return <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="flex items-center p-4 border-b">
          <ArrowLeft className="w-5 h-5 mr-3 cursor-pointer" onClick={handleBack} />
          <h1 className="text-lg font-normal">{selectedMatch.sport} {selectedMatch.level.name} Matches</h1>
        </div>

        {/* Match Details */}
        <div className="p-4">
          <div className="space-y-4">
            {selectedMatch.level.matches.map(match => <div key={match.id} className="border-2 border-foreground rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-sm font-medium">
                    {match.teamA} vs {match.teamB}
                  </div>
                  <span className={`text-xs px-2 py-1 rounded ${match.status === "Completed" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"}`}>
                    {match.status}
                  </span>
                </div>
                
                {match.score && <div className="text-lg font-bold text-center mb-2">
                    {match.score}
                  </div>}
                
                <div className="text-sm text-foreground/70 text-center">
                  📍 {match.venue}
                </div>
                
                {match.date && <div className="text-sm text-foreground/70 text-center mt-1">
                    scheduled on {match.date}
                  </div>}
              </div>)}
          </div>
        </div>
      </div>;
  }
  return <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <h1 className="text-lg font-normal">Matches</h1>
      </div>

      {/* Player Dashboard Section */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm">Player Dashboard</span>
          
        </div>

        {/* Tournament List */}
        <div className="space-y-6">
          {tournaments.map(tournament => <div key={tournament.sport}>
              <h2 className="font-medium mb-3">{tournament.sport}</h2>
              
              {tournament.levels.length > 0 ? <div className="space-y-3">
                  {tournament.levels.map((level, index) => <div key={index} className="border-2 border-foreground rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <div className="font-medium text-sm">{level.name}</div>
                          <div className="text-xs text-foreground/70">
                            {level.status === "Completed" ? `Completed on ${level.date}` : level.status === "Upcoming" ? `scheduled on ${level.date}` : level.date}
                          </div>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded ${level.statusColor}`}>
                          {level.status}
                        </span>
                      </div>
                      
                      <Button variant="outline" size="sm" className="w-full" onClick={() => handleViewMatches(tournament.sport, level)} disabled={level.status === "Locked"}>
                        View Matches
                      </Button>
                    </div>)}
                </div> : <div className="border-2 border-foreground rounded-lg p-4 text-center text-foreground/50">
                  No tournaments available
                </div>}
            </div>)}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t">
        <div className="flex">
          <button className="flex-1 flex flex-col items-center py-3" onClick={() => navigate("/player-dashboard")}>
            <Home className="w-5 h-5 mb-1" />
            <span className="text-xs">Home</span>
          </button>
          
          <button className="flex-1 flex flex-col items-center py-3 bg-blue-100">
            <div className="w-5 h-5 mb-1 bg-blue-500 rounded" />
            <span className="text-xs text-blue-600">Matches</span>
          </button>
          
          <button className="flex-1 flex flex-col items-center py-3" onClick={() => navigate("/player-profile-view")}>
            <User className="w-5 h-5 mb-1" />
            <span className="text-xs">Profile</span>
          </button>
        </div>
      </div>
    </div>;
};
export default PlayerMatches;