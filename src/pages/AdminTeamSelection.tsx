import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

const AdminTeamSelection = () => {
  const navigate = useNavigate();
  const [selectedSport, setSelectedSport] = useState("Throwball");

  const sports = ["Volleyball", "Throwball", "Badminton", "Kho-Kho"];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="space-y-6">
          {/* Back button */}
          <Button 
            onClick={() => navigate("/admin-dashboard")} 
            variant="ghost" 
            className="p-2"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          
          <Card className="w-80">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Team Registrations</CardTitle>
              <p className="text-sm text-muted-foreground">Select Sport</p>
            </CardHeader>
            <CardContent className="space-y-3">
              {sports.map((sport) => (
                <Button
                  key={sport}
                  variant="outline"
                  className="w-full justify-start text-base py-3"
                  onClick={() => navigate(`/admin-team-registrations/${sport.toLowerCase()}`)}
                >
                  {sport}
                </Button>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminTeamSelection;