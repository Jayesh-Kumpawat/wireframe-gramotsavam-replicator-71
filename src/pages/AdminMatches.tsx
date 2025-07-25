import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Search, Filter, MapPin, Plus, X } from "lucide-react";
import { useState } from "react";

const AdminMatches = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSport] = useState("Throwball");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedLevels, setSelectedLevels] = useState({
    cluster: false,
    division: false,
    finals: false
  });
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const matches = [{
    id: 1,
    teamA: "Team A",
    teamB: "Team B",
    level: "Division",
    scheduledDate: "3/01/25",
    venue: "Coimbatore",
    status: "scheduled"
  }, {
    id: 2,
    teamA: "Team A",
    teamB: "Team C",
    level: "Cluster",
    score: "25 - 23",
    venue: "IYC",
    status: "completed"
  }, {
    id: 3,
    teamA: "Team D",
    teamB: "Team E",
    level: "Division",
    scheduledDate: "5/01/25",
    venue: "Chennai",
    status: "scheduled"
  }];

  const handleLevelChange = (level: string, checked: boolean) => {
    setSelectedLevels(prev => ({
      ...prev,
      [level]: checked
    }));
  };

  const filteredMatches = matches.filter(match => {
    const matchesSearch = match.teamA.toLowerCase().includes(searchQuery.toLowerCase()) || match.teamB.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLevel = Object.keys(selectedLevels).every(level => !selectedLevels[level as keyof typeof selectedLevels] || match.level.toLowerCase() === level);
    return matchesSearch && matchesLevel;
  });

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-80 space-y-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" onClick={() => navigate("/admin-dashboard")} className="p-1">
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div>
                <h2 className="text-xl font-bold">Matches</h2>
                <p className="text-sm text-muted-foreground">{selectedSport}</p>
              </div>
            </div>
            <Button size="sm" onClick={() => navigate("/create-match")}>
              <Plus className="w-4 h-4" />
            </Button>
          </div>

          {/* Search and Filters */}
          <div className="flex gap-2 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search by team name" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="pl-10" />
            </div>
            <Dialog open={showFilters} onOpenChange={setShowFilters}>
              <DialogTrigger asChild>
                <Button variant="outline" size="icon">
                  <Filter className="w-4 h-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="w-80">
                <DialogHeader>
                  <div className="flex items-center justify-between">
                    <DialogTitle>Filters</DialogTitle>
                    <Button variant="ghost" size="icon" onClick={() => setShowFilters(false)}>
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </DialogHeader>
                <div className="space-y-4 pt-4">
                  {/* Level Filters */}
                  <div>
                    <label className="text-sm font-medium mb-3 block">Level</label>
                    <div className="space-y-2">
                      {Object.entries(selectedLevels).map(([level, checked]) => (
                        <div key={level} className="flex items-center space-x-2">
                          <Checkbox id={level} checked={checked} onCheckedChange={checked => handleLevelChange(level, checked as boolean)} />
                          <label htmlFor={level} className="text-sm capitalize">
                            {level}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Date Filter */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">Date</label>
                    <Select value={selectedDate} onValueChange={setSelectedDate}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select date range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="today">Today</SelectItem>
                        <SelectItem value="week">This Week</SelectItem>
                        <SelectItem value="month">This Month</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Status Filter */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">Status</label>
                    <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="scheduled">Scheduled</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="cancelled">Cancelled</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Matches List */}
          <div className="space-y-3">
            {filteredMatches.map(match => (
              <Card key={match.id} className="p-4 cursor-pointer hover:bg-muted/50 transition-colors" onClick={() => {
                sessionStorage.setItem('userType', 'admin');
                navigate(`/match-details/${match.id}`);
              }}>
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
                    <Badge variant={match.level === "Division" ? "default" : "secondary"} className="text-xs">
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
        </div>
      </div>
    </div>
  );
};

export default AdminMatches;