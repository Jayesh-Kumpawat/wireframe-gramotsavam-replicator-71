import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, CalendarIcon } from "lucide-react";
import { useState } from "react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const AddTeamMember = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { sport, teamData } = location.state || {};
  
  const [memberData, setMemberData] = useState({
    fullName: "",
    dob: undefined as Date | undefined,
    gender: "",
    mobileNumber: "987xxx",
    instagramHandle: ""
  });

  const handleNext = () => {
    navigate("/add-member-address", { 
      state: { 
        sport, 
        teamData, 
        memberPersonalInfo: memberData 
      } 
    });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-sm mx-auto">
        <div className="border-2 border-foreground rounded-lg p-8">
          {/* Back button */}
          <div className="flex items-center mb-6">
            <ArrowLeft 
              className="w-5 h-5 mr-2 cursor-pointer" 
              onClick={() => navigate(-1)}
            />
            <span className="text-sm">Back</span>
          </div>

          <h2 className="text-lg font-normal mb-2 text-center">Add Team</h2>
          <h3 className="text-lg font-normal mb-6 text-center">Member</h3>
          
          <div className="space-y-4">
            <div>
              <label className="text-xs block mb-1">Full Name</label>
              <Input
                value={memberData.fullName}
                onChange={(e) => setMemberData({...memberData, fullName: e.target.value})}
                className="w-full h-8 text-sm"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-xs block mb-1">DOB</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full h-8 text-sm justify-start text-left font-normal",
                        !memberData.dob && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-3 w-3" />
                      {memberData.dob ? format(memberData.dob, "dd/MM/yyyy") : "01/01/2000"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={memberData.dob}
                      onSelect={(date) => setMemberData({...memberData, dob: date})}
                      initialFocus
                      className={cn("p-3 pointer-events-auto")}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <label className="text-xs block mb-1">Gender</label>
                <Select value={memberData.gender} onValueChange={(value) => setMemberData({...memberData, gender: value})}>
                  <SelectTrigger className="w-full h-8 text-sm">
                    <SelectValue placeholder="Male" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <label className="text-xs block mb-1">Mobile Number</label>
              <Input
                value={memberData.mobileNumber}
                onChange={(e) => setMemberData({...memberData, mobileNumber: e.target.value})}
                className="w-full h-8 text-sm"
              />
            </div>

            <div>
              <label className="text-xs block mb-1">Instagram Handle (optional)</label>
              <Input
                value={memberData.instagramHandle}
                onChange={(e) => setMemberData({...memberData, instagramHandle: e.target.value})}
                className="w-full h-8 text-sm"
              />
            </div>

            <Button
              onClick={handleNext}
              variant="outline"
              className="w-full mt-6"
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTeamMember;