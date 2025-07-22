import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Search, Filter, MapPin, Home, Trophy, UserCircle } from "lucide-react";
import { useState } from "react";

const VolunteerMatches = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSport] = useState("Throwball");

  const matches = [
    {
      id: 1,
      teamA: "Team A",
      teamB: "Team B",
      level: "Division",
      scheduledDate: "3/01/25",
      venue: "Coimbatore",
      status: "scheduled"
    },
    {
      id: 2,
      teamA: "Team A",
      teamB: "Team C",
      level: "Cluster",
      score: "25 - 23",
      venue: "IYC",
      status: "completed"
    },
    {
      id: 3,
      teamA: "Team D",
      teamB: "Team E",
      level: "Division",
      scheduledDate: "5/01/25",
      venue: "Chennai",
      status: "scheduled"
    }
  ];

  const filteredMatches = matches.filter(match =>
    match.teamA.toLowerCase().includes(searchQuery.toLowerCase()) ||
    match.teamB.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-80 space-y-4">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate("/volunteer-dashboard")}
              className="p-1"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h2 className="text-xl font-bold">Matches</h2>
              <p className="text-sm text-muted-foreground">{selectedSport}</p>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="flex gap-2 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search by team name"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon">
              V
            </Button>
          </div>

          {/* Matches List */}
          <div className="space-y-3">
            {filteredMatches.map((match) => (
              <Card key={match.id} className="p-4">
                <CardContent className="p-0">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <div className="font-medium text-sm">
                        {match.teamA} vs {match.teamB}
                      </div>
                      {match.status === "scheduled" && (
                        <div className="text-xs text-muted-foreground mt-1">
                          scheduled on {match.scheduledDate}
                        </div>
                      )}
                      {match.status === "completed" && match.score && (
                        <div className="text-lg font-bold mt-1">
                          {match.score}
                        </div>
                      )}
                    </div>
                    <Badge 
                      variant={match.level === "Division" ? "default" : "secondary"}
                      className="text-xs"
                    >
                      {match.level}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="w-3 h-3" />
                    {match.venue}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom Navigation */}
          <div className="border-t bg-muted/30 mt-8">
            <div className="flex">
              <div 
                className="flex-1 flex flex-col items-center py-4 border-r cursor-pointer"
                onClick={() => navigate("/volunteer-dashboard")}
              >
                <Home className="w-6 h-6" />
                <span className="text-sm mt-1">Home</span>
              </div>
              <div className="flex-1 flex flex-col items-center py-4 bg-primary/10 border-r">
                <Trophy className="w-6 h-6 text-primary" />
                <span className="text-sm mt-1 text-primary font-medium">Matches</span>
              </div>
              <div className="flex-1 flex flex-col items-center py-4 cursor-pointer">
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

export default VolunteerMatches;