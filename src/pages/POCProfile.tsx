import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Home, Trophy, UserCircle } from "lucide-react";

const POCProfile = () => {
  const navigate = useNavigate();

  const profileData = {
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "+91 98765 43210",
    role: "Point of Contact",
    district: "Coimbatore",
    assignedSports: ["Throwball", "Volleyball"],
    experience: "5 years",
    joinedDate: "January 2020"
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-80 space-y-4">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <Button variant="ghost" size="sm" onClick={() => navigate("/poc-dashboard")} className="p-1">
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h2 className="text-xl font-bold">Profile</h2>
              <p className="text-sm text-muted-foreground">POC Details</p>
            </div>
          </div>

          {/* Profile Card */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">{profileData.name}</CardTitle>
              <Badge variant="secondary" className="w-fit">
                {profileData.role}
              </Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground">Email</label>
                <p className="text-sm mt-1">{profileData.email}</p>
              </div>
              
              <Separator />
              
              <div>
                <label className="text-sm font-medium text-muted-foreground">Phone</label>
                <p className="text-sm mt-1">{profileData.phone}</p>
              </div>
              
              <Separator />
              
              <div>
                <label className="text-sm font-medium text-muted-foreground">District</label>
                <p className="text-sm mt-1">{profileData.district}</p>
              </div>
              
              <Separator />
              
              <div>
                <label className="text-sm font-medium text-muted-foreground">Assigned Sports</label>
                <div className="flex gap-2 mt-1">
                  {profileData.assignedSports.map((sport) => (
                    <Badge key={sport} variant="outline" className="text-xs">
                      {sport}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <Separator />
              
              <div>
                <label className="text-sm font-medium text-muted-foreground">Experience</label>
                <p className="text-sm mt-1">{profileData.experience}</p>
              </div>
              
              <Separator />
              
              <div>
                <label className="text-sm font-medium text-muted-foreground">Joined</label>
                <p className="text-sm mt-1">{profileData.joinedDate}</p>
              </div>
            </CardContent>
          </Card>

          {/* Edit Profile Button */}
          <Button variant="outline" className="w-full">
            Edit Profile
          </Button>

          {/* Bottom Navigation */}
          <div className="border-t bg-muted/30 mt-8">
            <div className="flex">
              <div className="flex-1 flex flex-col items-center py-4 border-r cursor-pointer" onClick={() => navigate("/poc-dashboard")}>
                <Home className="w-6 h-6" />
                <span className="text-sm mt-1">Home</span>
              </div>
              <div className="flex-1 flex flex-col items-center py-4 border-r cursor-pointer" onClick={() => navigate("/poc-matches")}>
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

export default POCProfile;