import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, User, Settings, Eye, Plus } from "lucide-react";
import { useState } from "react";
const TeamDetails = () => {
  const navigate = useNavigate();
  const {
    teamId
  } = useParams();
  const [selectedPlayer, setSelectedPlayer] = useState<string | null>(null);
  const [statusFilters, setStatusFilters] = useState({
    verified: false,
    registered: false
  });
  const [ageFilter, setAgeFilter] = useState("");
  const [documentsFilter, setDocumentsFilter] = useState("");

  // Mock team data
  const team = {
    id: teamId,
    name: "Team 2",
    sport: "Throwball",
    level: "Division",
    status: "Verified",
    captain: "Player 1"
  };
  const players = [{
    id: 1,
    name: "Player 1",
    status: "Verified",
    position: "Captain"
  }, {
    id: 2,
    name: "Player 2",
    status: "Registered",
    position: "Player"
  }, {
    id: 3,
    name: "Player 3",
    status: "Verified",
    position: "Player"
  }, {
    id: 4,
    name: "Player 4",
    status: "Registered",
    position: "Player"
  }, {
    id: 5,
    name: "Player 5",
    status: "Verified",
    position: "Player"
  }];
  return <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b p-4 flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h1 className="text-2xl font-bold">Team 2 Details</h1>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Team Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                Team Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="font-medium">Team Name:</span>
                <span>{team.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Sport:</span>
                <span>{team.sport}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Level:</span>
                <span>{team.level}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Status:</span>
                <Badge variant={team.status === "Verified" ? "default" : "secondary"}>
                  {team.status}
                </Badge>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Captain:</span>
                <span>{team.captain}</span>
              </div>
            </CardContent>
          </Card>

          {/* Players Table */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Players</CardTitle>
                <div className="flex items-center gap-2">
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => navigate("/player-signup")}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <Settings className="w-4 h-4" />
                      </Button>
                    </SheetTrigger>
                    <SheetContent>
                      <SheetHeader>
                        <SheetTitle>Filters</SheetTitle>
                      </SheetHeader>
                      <div className="mt-6 space-y-6">
                        <div>
                          <h4 className="font-medium mb-3">Status</h4>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Checkbox id="verified" checked={statusFilters.verified} onCheckedChange={checked => setStatusFilters(prev => ({
                              ...prev,
                              verified: checked as boolean
                            }))} />
                              <label htmlFor="verified" className="text-sm">Verified</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="registered" checked={statusFilters.registered} onCheckedChange={checked => setStatusFilters(prev => ({
                              ...prev,
                              registered: checked as boolean
                            }))} />
                              <label htmlFor="registered" className="text-sm">Registered</label>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-medium mb-3">Age</h4>
                          <Select value={ageFilter} onValueChange={setAgeFilter}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select age range" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="18-25">18-25</SelectItem>
                              <SelectItem value="26-35">26-35</SelectItem>
                              <SelectItem value="36-45">36-45</SelectItem>
                              <SelectItem value="46+">46+</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <h4 className="font-medium mb-3">Documents</h4>
                          <Select value={documentsFilter} onValueChange={setDocumentsFilter}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select document status" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="complete">Complete</SelectItem>
                              <SelectItem value="incomplete">Incomplete</SelectItem>
                              <SelectItem value="pending">Pending Review</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Select</TableHead>
                    <TableHead>Player Name</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Position</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {players.map(player => <TableRow key={player.id} className={selectedPlayer === player.name ? "bg-muted" : ""}>
                      <TableCell>
                        <input type="checkbox" checked={selectedPlayer === player.name} onChange={() => setSelectedPlayer(selectedPlayer === player.name ? null : player.name)} className="rounded" />
                      </TableCell>
                      <TableCell className={`font-medium cursor-pointer ${player.name === "Player 2" ? "text-primary bg-primary/10" : ""}`} onClick={() => navigate("/player-profile-creation")}>
                        {player.name}
                      </TableCell>
                      <TableCell>
                        <Badge variant={player.status === "Verified" ? "default" : "secondary"}>
                          {player.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{player.position}</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm" onClick={() => navigate("/player-profile-view")}>
                          <Eye className="w-4 h-4" />
                        </Button>
                      </TableCell>
                    </TableRow>)}
                </TableBody>
              </Table>

              <div className="mt-4 flex justify-center">
                <Button variant="outline" className="w-full max-w-sm">
                  Change Captain
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>;
};
export default TeamDetails;