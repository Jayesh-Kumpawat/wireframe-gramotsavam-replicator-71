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
                    variant={selectedSport === sport ? "default" : "outline"}
                    className="w-full justify-start"
                    onClick={() => setSelectedSport(sport)}
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Notifications */}
            <div className="lg:col-span-2">
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="w-5 h-5" />
                    POC Notifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {notifications.map((notification) => (
                      <div key={notification.id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                        <div>
                          <p className="font-medium">{notification.title}</p>
                          <p className="text-sm text-muted-foreground">{notification.sport} • {notification.time}</p>
                        </div>
                        <Badge variant="outline">{notification.sport}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Teams Table */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Teams Registered - {selectedSport}</CardTitle>
                    <div className="flex items-center gap-2">
                      <div className="relative">
                        <Search className="w-4 h-4 absolute left-3 top-3 text-muted-foreground" />
                        <Input
                          placeholder="Search..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setShowFilters(!showFilters)}
                      >
                        <Filter className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Team Name</TableHead>
                        <TableHead>Level</TableHead>
                        <TableHead>Players</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {registeredTeams
                        .filter(team => 
                          team.sport === selectedSport &&
                          team.name.toLowerCase().includes(searchQuery.toLowerCase())
                        )
                        .map((team) => (
                        <TableRow key={team.id}>
                          <TableCell className="font-medium">{team.name}</TableCell>
                          <TableCell>{team.level}</TableCell>
                          <TableCell>{team.players}</TableCell>
                          <TableCell>
                            <Badge variant={team.status === "Verified" ? "default" : "secondary"}>
                              {team.status}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>

            {/* Filters Panel */}
            {showFilters && (
              <div className="lg:col-span-1">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Filters</CardTitle>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setShowFilters(false)}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-3">Level</h4>
                      <div className="space-y-2">
                        {Object.entries(selectedLevels).map(([level, checked]) => (
                          <div key={level} className="flex items-center space-x-2">
                            <Checkbox
                              id={level}
                              checked={checked}
                              onCheckedChange={(checked) => handleLevelChange(level, checked as boolean)}
                            />
                            <label 
                              htmlFor={level} 
                              className="text-sm capitalize cursor-pointer"
                            >
                              {level}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-3">Position</h4>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select position" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Positions</SelectItem>
                          <SelectItem value="captain">Captain</SelectItem>
                          <SelectItem value="player">Player</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <h4 className="font-medium mb-3">Status</h4>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Status</SelectItem>
                          <SelectItem value="verified">Verified</SelectItem>
                          <SelectItem value="pending">Pending</SelectItem>
                          <SelectItem value="rejected">Rejected</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerDashboard;