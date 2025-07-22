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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b p-4">
        <h1 className="text-2xl font-bold">POC DASHBOARD</h1>
      </div>

      <div className="flex flex-1">
        {/* Left Sidebar */}
        <div className="w-80 border-r p-6 space-y-6">
          <div>
            <h2 className="text-lg font-semibold mb-4">HOME</h2>
            
            <Card className="mb-4">
              <CardHeader>
                <CardTitle className="text-sm">Volunteer Dashboard</CardTitle>
                <Badge variant="destructive" className="w-fit">1</Badge>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Registered Teams</CardTitle>
                <p className="text-xs text-muted-foreground">Select Sport</p>
              </CardHeader>
              <CardContent className="space-y-2">
                {sports.map((sport) => (
                  <Button
                    key={sport}
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => navigate(`/volunteer-teams/${sport.toLowerCase()}`)}
                  >
                    {sport}
                  </Button>
                ))}
                <Button variant="secondary" className="w-full mt-4">
                  Register New Team
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Bottom Navigation */}
          <div className="flex justify-center space-x-8 pt-4 border-t">
            <div className="flex flex-col items-center">
              <Home className="w-6 h-6 text-primary cursor-pointer" />
              <span className="text-xs mt-1 text-primary">Home</span>
            </div>
            <div className="flex flex-col items-center">
              <Trophy 
                className="w-6 h-6 cursor-pointer" 
                onClick={() => navigate("/player-matches")}
              />
              <span className="text-xs mt-1">Matches</span>
            </div>
            <div className="flex flex-col items-center">
              <UserCircle 
                className="w-6 h-6 cursor-pointer" 
                onClick={() => navigate("/player-profile-view")}
              />
              <span className="text-xs mt-1">Profile</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="text-center py-20">
            <h2 className="text-xl font-semibold mb-4">Welcome to POC Dashboard</h2>
            <p className="text-muted-foreground">Select a sport from the sidebar to view registered teams</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerDashboard;