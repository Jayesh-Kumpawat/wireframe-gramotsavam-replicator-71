import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Search, CalendarIcon } from "lucide-react";
import { useState } from "react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const CreateMatch = () => {
  const navigate = useNavigate();
  const [level, setLevel] = useState("");
  const [venue, setVenue] = useState("");
  const [firstTeam, setFirstTeam] = useState("");
  const [secondTeam, setSecondTeam] = useState("");
  const [matchDate, setMatchDate] = useState<Date>();

  const handleCreate = () => {
    // Handle match creation logic here
    console.log({ level, venue, firstTeam, secondTeam, matchDate });
    navigate("/volunteer-matches");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-80">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate("/volunteer-matches")}
              className="p-1"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h2 className="text-xl font-bold">Create Match</h2>
              <p className="text-sm text-muted-foreground">Throwball</p>
            </div>
          </div>

          <Card>
            <CardContent className="space-y-4 pt-6">
              {/* Level and Venue Row */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-sm font-medium mb-2 block">Level</label>
                  <Select value={level} onValueChange={setLevel}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="division">Division</SelectItem>
                      <SelectItem value="cluster">Cluster</SelectItem>
                      <SelectItem value="finals">Finals</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Venue</label>
                  <Input
                    placeholder="Enter venue"
                    value={venue}
                    onChange={(e) => setVenue(e.target.value)}
                  />
                </div>
              </div>

              {/* First Team */}
              <div>
                <label className="text-sm font-medium mb-2 block">First Team</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by team name"
                    value={firstTeam}
                    onChange={(e) => setFirstTeam(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Second Team */}
              <div>
                <label className="text-sm font-medium mb-2 block">Second Team</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by team name"
                    value={secondTeam}
                    onChange={(e) => setSecondTeam(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Match Date */}
              <div>
                <label className="text-sm font-medium mb-2 block">Match Date</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !matchDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {matchDate ? format(matchDate, "dd/MM/yyyy") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={matchDate}
                      onSelect={setMatchDate}
                      initialFocus
                      className={cn("p-3 pointer-events-auto")}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Create Button */}
              <Button 
                onClick={handleCreate}
                className="w-full mt-6"
                disabled={!level || !venue || !firstTeam || !secondTeam || !matchDate}
              >
                Create
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CreateMatch;