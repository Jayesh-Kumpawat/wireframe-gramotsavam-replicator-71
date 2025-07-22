import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, User, Settings } from "lucide-react";
import { useState } from "react";

const TeamDetails = () => {
  const navigate = useNavigate();
  const { teamId } = useParams();
  const [selectedPlayer, setSelectedPlayer] = useState<string | null>(null);

  // Mock team data
  const team = {
    id: teamId,
    name: "Team 2",
    sport: "Throwball",
    level: "Division",
    status: "Verified",
    captain: "Player 1"
  };

  const players = [
    { id: 1, name: "Player 1", status: "Verified", position: "Captain" },
    { id: 2, name: "Player 2", status: "Registered", position: "Player" },
    { id: 3, name: "Player 3", status: "Verified", position: "Player" },
    { id: 4, name: "Player 4", status: "Registered", position: "Player" },
    { id: 5, name: "Player 5", status: "Verified", position: "Player" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b p-4 flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate(-1)}
        >
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
                  <span className="text-sm text-muted-foreground">Player Name | Captain | Status | Others</span>
                  <Settings className="w-4 h-4" />
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
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {players.map((player) => (
                    <TableRow 
                      key={player.id}
                      className={selectedPlayer === player.name ? "bg-muted" : ""}
                    >
                      <TableCell>
                        <input
                          type="checkbox"
                          checked={selectedPlayer === player.name}
                          onChange={() => setSelectedPlayer(selectedPlayer === player.name ? null : player.name)}
                          className="rounded"
                        />
                      </TableCell>
                      <TableCell 
                        className={`font-medium cursor-pointer ${player.name === "Player 2" ? "text-primary bg-primary/10" : ""}`}
                        onClick={() => navigate("/player-profile-creation")}
                      >
                        {player.name}
                      </TableCell>
                      <TableCell>
                        <Badge variant={player.status === "Verified" ? "default" : "secondary"}>
                          {player.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{player.position}</TableCell>
                    </TableRow>
                  ))}
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
    </div>
  );
};

export default TeamDetails;