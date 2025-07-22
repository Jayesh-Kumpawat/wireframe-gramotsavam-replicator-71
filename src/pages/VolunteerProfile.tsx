import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Home, Trophy, UserCircle, Camera } from "lucide-react";

const VolunteerProfile = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-80 space-y-4">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate("/volunteer-dashboard")}
              className="p-1"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h2 className="text-xl font-bold">POC Profile</h2>
            </div>
          </div>

          <Card>
            <CardContent className="pt-6 space-y-4">
              {/* Profile Picture Section */}
              <div className="flex flex-col items-center space-y-3">
                <div className="relative">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-primary/10">
                      <UserCircle className="w-12 h-12 text-primary" />
                    </AvatarFallback>
                  </Avatar>
                  <Button 
                    size="icon" 
                    variant="secondary" 
                    className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full"
                  >
                    <Camera className="w-4 h-4" />
                  </Button>
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium">ASSIGNED TO:</p>
                  <Badge variant="destructive" className="mt-1">
                    Division
                  </Badge>
                  <p className="text-sm font-medium mt-1">CBE East</p>
                </div>
              </div>

              {/* Form Fields */}
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium block mb-2">Full Name</label>
                  <Input placeholder="Enter full name" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-sm font-medium block mb-2">DOB</label>
                    <Input placeholder="01/01/2000" type="date" />
                  </div>
                  <div>
                    <label className="text-sm font-medium block mb-2">Gender</label>
                    <Button variant="outline" className="w-full justify-start">
                      Male
                    </Button>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium block mb-2">Instagram Handle</label>
                  <Input placeholder="@username" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bottom Navigation */}
          <div className="border-t bg-muted/30 mt-8">
            <div className="flex">
              <div 
                className="flex-1 flex flex-col items-center py-4 border-r cursor-pointer"
                onClick={() => navigate("/volunteer-dashboard")}
              >
                <Home className="w-6 h-6" />
                <span className="text-sm mt-1">Home</span>
              </div>
              <div 
                className="flex-1 flex flex-col items-center py-4 border-r cursor-pointer"
                onClick={() => navigate("/volunteer-matches")}
              >
                <Trophy className="w-6 h-6" />
                <span className="text-sm mt-1">Matches</span>
              </div>
              <div className="flex-1 flex flex-col items-center py-4 bg-primary/10">
                <UserCircle className="w-6 h-6 text-primary" />
                <span className="text-sm mt-1 text-primary font-medium">Profile</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerProfile;