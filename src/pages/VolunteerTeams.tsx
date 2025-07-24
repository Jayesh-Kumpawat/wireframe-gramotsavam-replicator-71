import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Search, Filter, X } from "lucide-react";
import { useState } from "react";

const VolunteerTeams = () => {
  const navigate = useNavigate();
  const { sport } = useParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  
  const [selectedClusters, setSelectedClusters] = useState({
    tiruppur: false,
    alandurai: false,
    coimbatore: false,
    erode: false
  });
  
  const [selectedDivisions, setSelectedDivisions] = useState({
    coimbatore: false,
    tiruppur: false,
    salem: false
  });
  
  const [selectedStatus, setSelectedStatus] = useState({
    verified: false,
    registered: false
  });

  const [selectedLevels, setSelectedLevels] = useState({
    cluster: false,
    division: false,
    finals: false
  });

  const registeredTeams = [
    {
      id: 1,
      name: "Thunder Warriors",
      sport: "Throwball",
      captain: "Priya Sharma",
      cluster: "Tiruppur",
      division: "Coimbatore",
      currentLevel: "Division",
      status: "Verified"
    },
    {
      id: 2,
      name: "Lightning Bolts",
      sport: "Throwball",
      captain: "Arjun Kumar",
      cluster: "Alandurai",
      division: "Tiruppur",
      currentLevel: "Cluster",
      status: "Pending"
    },
    {
      id: 3,
      name: "Storm Riders",
      sport: "Throwball",
      captain: "Meera Patel",
      cluster: "Coimbatore",
      division: "Coimbatore",
      currentLevel: "Finals",
      status: "Verified"
    },
    {
      id: 4,
      name: "Wind Runners",
      sport: "Throwball",
      captain: "Rajesh Singh",
      cluster: "Erode",
      division: "Salem",
      currentLevel: "Division",
      status: "Verified"
    },
    {
      id: 5,
      name: "Spike Masters",
      sport: "Volleyball",
      captain: "Kavitha Raj",
      cluster: "Tiruppur",
      division: "Coimbatore",
      currentLevel: "Division",
      status: "Verified"
    },
    {
      id: 6,
      name: "Net Warriors",
      sport: "Volleyball",
      captain: "Deepak Nair",
      cluster: "Alandurai",
      division: "Tiruppur",
      currentLevel: "Cluster",
      status: "Pending"
    },
    {
      id: 7,
      name: "Shuttle Pros",
      sport: "Badminton",
      captain: "Anita Reddy",
      cluster: "Coimbatore",
      division: "Coimbatore",
      currentLevel: "Finals",
      status: "Verified"
    },
    {
      id: 8,
      name: "Court Kings",
      sport: "Badminton",
      captain: "Vikram Gupta",
      cluster: "Erode",
      division: "Salem",
      currentLevel: "Division",
      status: "Verified"
    },
    {
      id: 9,
      name: "Chase Masters",
      sport: "Kho-Kho",
      captain: "Lakshmi Devi",
      cluster: "Tiruppur",
      division: "Coimbatore",
      currentLevel: "Cluster",
      status: "Verified"
    },
    {
      id: 10,
      name: "Tag Champions",
      sport: "Kho-Kho",
      captain: "Suresh Babu",
      cluster: "Alandurai",
      division: "Tiruppur",
      currentLevel: "Division",
      status: "Pending"
    }
  ];

  const handleClusterChange = (cluster: string, checked: boolean) => {
    setSelectedClusters(prev => ({
      ...prev,
      [cluster]: checked
    }));
  };

  const handleDivisionChange = (division: string, checked: boolean) => {
    setSelectedDivisions(prev => ({
      ...prev,
      [division]: checked
    }));
  };

  const handleStatusChange = (status: string, checked: boolean) => {
    setSelectedStatus(prev => ({
      ...prev,
      [status]: checked
    }));
  };

  const handleLevelChange = (level: string, checked: boolean) => {
    setSelectedLevels(prev => ({
      ...prev,
      [level]: checked
    }));
  };

  const filteredTeams = registeredTeams.filter(team => 
    team.sport.toLowerCase() === sport?.toLowerCase() && 
    team.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (Object.values(selectedClusters).every(v => !v) || selectedClusters[team.cluster.toLowerCase() as keyof typeof selectedClusters]) &&
    (Object.values(selectedDivisions).every(v => !v) || selectedDivisions[team.division.toLowerCase() as keyof typeof selectedDivisions]) &&
    (Object.values(selectedLevels).every(v => !v) || selectedLevels[team.currentLevel.toLowerCase() as keyof typeof selectedLevels])
  );

  const sportName = sport?.charAt(0).toUpperCase() + sport?.slice(1) || "";

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b p-4 flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => navigate("/volunteer-dashboard")}>
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h1 className="text-2xl font-bold">Teams Registered - {sportName}</h1>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Teams Table */}
          <div className={showFilters ? "lg:col-span-2" : "lg:col-span-3"}>
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Teams - {sportName}</CardTitle>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Search className="w-4 h-4 absolute left-3 top-3 text-muted-foreground" />
                      <Input 
                        placeholder="Search teams..." 
                        value={searchQuery} 
                        onChange={e => setSearchQuery(e.target.value)} 
                        className="pl-10" 
                      />
                    </div>
                    <Button variant="outline" size="icon" onClick={() => setShowFilters(!showFilters)}>
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
                        <TableHead>Captain</TableHead>
                        <TableHead>Cluster</TableHead>
                        <TableHead>Division</TableHead>
                        <TableHead>Current Level</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                  <TableBody>
                    {filteredTeams.map(team => (
                      <TableRow key={team.id} className="cursor-pointer hover:bg-muted/50">
                        <TableCell 
                          className="font-medium text-primary" 
                          onClick={() => navigate(`/team-details/${team.id}`)}
                        >
                          {team.name}
                        </TableCell>
                        <TableCell>{team.captain}</TableCell>
                        <TableCell>{team.cluster}</TableCell>
                        <TableCell>{team.division}</TableCell>
                        <TableCell>
                          <Badge variant={team.currentLevel === "Finals" ? "destructive" : team.currentLevel === "Division" ? "default" : "secondary"}>
                            {team.currentLevel}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant={team.status === "Verified" ? "default" : "secondary"}>
                            {team.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                {filteredTeams.length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">
                    No teams found for {sportName}
                  </div>
                )}
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
                    <Button variant="ghost" size="icon" onClick={() => setShowFilters(false)}>
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-3">Current Level</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="cluster-level" 
                          checked={selectedLevels.cluster} 
                          onCheckedChange={checked => handleLevelChange("cluster", checked as boolean)} 
                        />
                        <label htmlFor="cluster-level" className="text-sm cursor-pointer">
                          Cluster
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="division-level" 
                          checked={selectedLevels.division} 
                          onCheckedChange={checked => handleLevelChange("division", checked as boolean)} 
                        />
                        <label htmlFor="division-level" className="text-sm cursor-pointer">
                          Division
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="finals-level" 
                          checked={selectedLevels.finals} 
                          onCheckedChange={checked => handleLevelChange("finals", checked as boolean)} 
                        />
                        <label htmlFor="finals-level" className="text-sm cursor-pointer">
                          Finals
                        </label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-3">Status</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="verified" 
                          checked={selectedStatus.verified} 
                          onCheckedChange={checked => handleStatusChange("verified", checked as boolean)} 
                        />
                        <label htmlFor="verified" className="text-sm cursor-pointer">
                          Verified
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="registered" 
                          checked={selectedStatus.registered} 
                          onCheckedChange={checked => handleStatusChange("registered", checked as boolean)} 
                        />
                        <label htmlFor="registered" className="text-sm cursor-pointer">
                          Registered
                        </label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-3">Cluster</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="tiruppur" 
                          checked={selectedClusters.tiruppur} 
                          onCheckedChange={checked => handleClusterChange("tiruppur", checked as boolean)} 
                        />
                        <label htmlFor="tiruppur" className="text-sm cursor-pointer">
                          Tiruppur
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="alandurai" 
                          checked={selectedClusters.alandurai} 
                          onCheckedChange={checked => handleClusterChange("alandurai", checked as boolean)} 
                        />
                        <label htmlFor="alandurai" className="text-sm cursor-pointer">
                          Alandurai
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="coimbatore-cluster" 
                          checked={selectedClusters.coimbatore} 
                          onCheckedChange={checked => handleClusterChange("coimbatore", checked as boolean)} 
                        />
                        <label htmlFor="coimbatore-cluster" className="text-sm cursor-pointer">
                          Coimbatore
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="erode" 
                          checked={selectedClusters.erode} 
                          onCheckedChange={checked => handleClusterChange("erode", checked as boolean)} 
                        />
                        <label htmlFor="erode" className="text-sm cursor-pointer">
                          Erode
                        </label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-3">Division</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="coimbatore-division" 
                          checked={selectedDivisions.coimbatore} 
                          onCheckedChange={checked => handleDivisionChange("coimbatore", checked as boolean)} 
                        />
                        <label htmlFor="coimbatore-division" className="text-sm cursor-pointer">
                          Coimbatore
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="tiruppur-division" 
                          checked={selectedDivisions.tiruppur} 
                          onCheckedChange={checked => handleDivisionChange("tiruppur", checked as boolean)} 
                        />
                        <label htmlFor="tiruppur-division" className="text-sm cursor-pointer">
                          Tiruppur
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="salem-division" 
                          checked={selectedDivisions.salem} 
                          onCheckedChange={checked => handleDivisionChange("salem", checked as boolean)} 
                        />
                        <label htmlFor="salem-division" className="text-sm cursor-pointer">
                          Salem
                        </label>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VolunteerTeams;