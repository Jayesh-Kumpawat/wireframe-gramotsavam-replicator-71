import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Edit, MapPin } from "lucide-react";

const MatchDetails = () => {
  const navigate = useNavigate();
  const { matchId } = useParams();

  // Determine which matches page to navigate back to based on user type
  const handleBackNavigation = () => {
    const userType = sessionStorage.getItem('userType');
    const matchesRoute = userType === 'poc' ? '/poc-matches' : '/volunteer-matches';
    navigate(matchesRoute);
  };

  // Mock data - in real app this would come from API based on matchId
  const matchData = {
    id: matchId,
    teamA: { id: "team-a-1", name: "Team A" },
    teamB: { id: "team-b-1", name: "Team B" },
    scheduledDate: "3/01/25",
    venue: "Coimbatore",
    status: "scheduled"
  };

  const teamAPlayers = [
    { id: 1, name: "Player 1", status: "Verified", others: "..." },
    { id: 2, name: "Player 2", status: "Registered", others: "..." },
    { id: 3, name: "Player 3", status: "Verified", others: "..." },
    { id: 4, name: "Player 4", status: "Registered", others: "..." }
  ];

  const teamBPlayers = [
    { id: 1, name: "Player 1", status: "Verified", others: "..." },
    { id: 2, name: "Player 2", status: "Registered", others: "..." },
    { id: 3, name: "Player 3", status: "Verified", others: "..." },
    { id: 4, name: "Player 4", status: "Registered", others: "..." }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-80 space-y-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleBackNavigation}
                className="p-1"
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div>
                <h2 className="text-xl font-bold">Match Details</h2>
              </div>
            </div>
            <Button variant="outline" size="sm">
              <Edit className="w-4 h-4 mr-1" />
              Edit
            </Button>
          </div>

          {/* Match Info */}
          <Card className="mb-4">
            <CardContent className="pt-4">
              <div className="text-sm text-muted-foreground mb-1">
                scheduled on {matchData.scheduledDate}
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <MapPin className="w-3 h-3" />
                {matchData.venue}
              </div>
            </CardContent>
          </Card>

          {/* Team A Details */}
          <Card>
            <CardHeader className="pb-3">
               <CardTitle className="text-base">
                <span>
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-base font-semibold text-foreground hover:text-primary"
                    onClick={() => navigate(`/team-details/${matchData.teamA.id}`)}
                  >
                    {matchData.teamA.name}
                  </Button>
                  {" Details"}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-3 overflow-x-auto pb-2">
                {teamAPlayers.map((player) => (
                  <div key={player.id} className="flex-shrink-0 min-w-[280px] p-3 border rounded-md bg-muted/30">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-medium">{player.name}</span>
                      <span className="text-muted-foreground">|</span>
                      <Badge 
                        variant={player.status === "Verified" ? "default" : "secondary"}
                        className="text-xs"
                      >
                        {player.status}
                      </Badge>
                      <span className="text-muted-foreground">|</span>
                      <span className="text-muted-foreground">{player.others}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Team B Details */}
          <Card>
            <CardHeader className="pb-3">
               <CardTitle className="text-base">
                <span>
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-base font-semibold text-foreground hover:text-primary"
                    onClick={() => navigate(`/team-details/${matchData.teamB.id}`)}
                  >
                    {matchData.teamB.name}
                  </Button>
                  {" Details"}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-3 overflow-x-auto pb-2">
                {teamBPlayers.map((player) => (
                  <div key={player.id} className="flex-shrink-0 min-w-[280px] p-3 border rounded-md bg-muted/30">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-medium">{player.name}</span>
                      <span className="text-muted-foreground">|</span>
                      <Badge 
                        variant={player.status === "Verified" ? "default" : "secondary"}
                        className="text-xs"
                      >
                        {player.status}
                      </Badge>
                      <span className="text-muted-foreground">|</span>
                      <span className="text-muted-foreground">{player.others}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MatchDetails;