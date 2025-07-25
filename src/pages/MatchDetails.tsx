import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Edit, MapPin, Upload } from "lucide-react";
import { useState } from "react";

const MatchDetails = () => {
  const navigate = useNavigate();
  const { matchId } = useParams();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [location, setLocation] = useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleSubmitMedia = () => {
    if (selectedFile) {
      // Handle media upload logic here
      console.log("Uploading file:", selectedFile.name);
      console.log("Location:", location);
      // Reset form
      setSelectedFile(null);
      setLocation("");
    }
  };

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

          {/* Upload Media Button */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="w-full">
                <Upload className="w-4 h-4 mr-2" />
                Upload Media
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Upload Media</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="text-center">
                  <h3 className="font-medium">{matchData.teamA.name} vs {matchData.teamB.name}</h3>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="date">Date</Label>
                  <Input
                    id="date"
                    value={matchData.scheduledDate}
                    readOnly
                    className="bg-muted"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter location"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="file">Upload</Label>
                  <Input
                    id="file"
                    type="file"
                    onChange={handleFileChange}
                    accept="image/*,video/*"
                  />
                  {selectedFile && (
                    <p className="text-sm text-muted-foreground">
                      Selected: {selectedFile.name}
                    </p>
                  )}
                </div>

                <Button 
                  onClick={handleSubmitMedia} 
                  className="w-full"
                  disabled={!selectedFile}
                >
                  Submit
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default MatchDetails;