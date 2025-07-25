import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Plus, Home, Trophy, UserCircle } from "lucide-react";
import { useState } from "react";

const AdminProfile = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [dob, setDob] = useState("01/01/2000");
  const [gender, setGender] = useState("Male");
  const [instagramHandle, setInstagramHandle] = useState("");

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <h1 className="text-2xl font-bold mb-6">Admin Profile</h1>
        
        <div className="border-2 border-foreground rounded-lg p-6">
          {/* Back Button */}
          <Button 
            onClick={() => navigate("/admin-dashboard")} 
            variant="ghost" 
            className="mb-4 p-2"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>

          {/* Title */}
          <h2 className="text-lg font-semibold mb-6">Admin Profile</h2>

          {/* Profile Picture */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Avatar className="w-24 h-24 bg-blue-200">
                <AvatarImage src="" />
                <AvatarFallback className="text-sm text-foreground bg-blue-200">
                  Profile Picture
                </AvatarFallback>
              </Avatar>
              <Button 
                size="icon" 
                className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-white border-2 border-foreground hover:bg-gray-50"
                variant="outline"
              >
                <Plus className="w-4 h-4 text-foreground" />
              </Button>
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="text-sm font-medium mb-2 block">Full Name</label>
              <Input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter full name"
                className="w-full"
              />
            </div>

            {/* DOB and Gender Row */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">DOB</label>
                <Input
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  placeholder="01/01/2000"
                  className="w-full"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Gender</label>
                <Select value={gender} onValueChange={setGender}>
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-white z-50">
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Instagram Handle */}
            <div>
              <label className="text-sm font-medium mb-2 block">Instagram Handle</label>
              <Input
                value={instagramHandle}
                onChange={(e) => setInstagramHandle(e.target.value)}
                placeholder="Enter Instagram handle"
                className="w-full"
              />
            </div>

            {/* Bottom Navigation */}
            <div className="mt-12 border-t bg-muted/30 rounded-lg">
              <div className="flex">
                <div 
                  className="flex-1 flex flex-col items-center py-4 border-r cursor-pointer rounded-l-lg"
                  onClick={() => navigate("/admin-dashboard")}
                >
                  <Home className="w-6 h-6" />
                  <span className="text-sm mt-1">Home</span>
                </div>
                <div 
                  className="flex-1 flex flex-col items-center py-4 border-r cursor-pointer"
                  onClick={() => {
                    sessionStorage.setItem('userType', 'admin');
                    navigate("/admin-matches");
                  }}
                >
                  <Trophy className="w-6 h-6" />
                  <span className="text-sm mt-1">Matches</span>
                </div>
                <div className="flex-1 flex flex-col items-center py-4 cursor-pointer bg-blue-100 rounded-r-lg">
                  <UserCircle className="w-6 h-6 text-blue-600" />
                  <span className="text-sm mt-1 text-blue-600">Profile</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;