import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate } from "react-router-dom";
import { Bell, Search, Home, Trophy, UserCircle, Filter, X } from "lucide-react";
import { useState } from "react";

const VolunteerDashboard = () => {
  const navigate = useNavigate();
  const [selectedSport, setSelectedSport] = useState("Throwball");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedLevels, setSelectedLevels] = useState({
    cluster: false,
    division: false,
    finals: false
  });

  const sports = ["Volleyball", "Throwball", "Badminton", "Kho-Kho"];
  
  const notifications = [
    { id: 1, title: "New team registration", sport: "Volleyball", time: "2 hours ago" },
    { id: 2, title: "Match schedule updated", sport: "Throwball", time: "4 hours ago" },
    { id: 3, title: "Player verification pending", sport: "Badminton", time: "6 hours ago" }
  ];

  const registeredTeams = [
    { id: 1, name: "Thunder Warriors", sport: "Throwball", level: "Cluster", players: 12, status: "Verified" },
    { id: 2, name: "Lightning Bolts", sport: "Throwball", level: "Division", players: 11, status: "Pending" },
    { id: 3, name: "Storm Riders", sport: "Throwball", level: "Finals", players: 13, status: "Verified" },
    { id: 4, name: "Wind Runners", sport: "Throwball", level: "Cluster", players: 10, status: "Verified" }
  ];

  const handleLevelChange = (level: string, checked: boolean) => {
    setSelectedLevels(prev => ({ ...prev, [level]: checked }));
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Main Content */}
      <div className="flex-1 p-6 space-y-6">
        <div>
          <h2 className="text-xl font-bold mb-6">HOME</h2>
          
          <Card className="mb-6 max-w-md">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Volunteer Dashboard</CardTitle>
                <div className="relative">
                  <Bell className="w-5 h-5" />
                  <Badge variant="destructive" className="absolute -top-2 -right-2 w-5 h-5 rounded-full p-0 flex items-center justify-center text-xs">
                    1
                  </Badge>
                </div>
              </div>
            </CardHeader>
          </Card>

          <Card className="max-w-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Registered Teams</CardTitle>
              <p className="text-sm text-muted-foreground">Select Sport</p>
            </CardHeader>
            <CardContent className="space-y-3">
              {sports.map((sport) => (
                <Button
                  key={sport}
                  variant={sport === "Throwball" ? "destructive" : "outline"}
                  className="w-full justify-start text-base py-3"
                  onClick={() => navigate(`/volunteer-teams/${sport.toLowerCase()}`)}
                >
                  {sport}
                </Button>
              ))}
              <Button variant="secondary" className="w-full mt-4 text-base py-3">
                Register New Team
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="border-t bg-muted/30">
        <div className="flex max-w-md">
          <div className="flex-1 flex flex-col items-center py-4 bg-primary/10 border-r">
            <Home className="w-6 h-6 text-primary" />
            <span className="text-sm mt-1 text-primary font-medium">Home</span>
          </div>
          <div className="flex-1 flex flex-col items-center py-4 border-r cursor-pointer">
            <Trophy className="w-6 h-6" />
            <span className="text-sm mt-1">Matches</span>
          </div>
          <div className="flex-1 flex flex-col items-center py-4 cursor-pointer">
            <UserCircle className="w-6 h-6" />
            <span className="text-sm mt-1">Profile</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerDashboard;