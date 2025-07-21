import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const PlayerProfileCreation = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    dob: undefined as Date | undefined,
    gender: "",
    mobileNumber: "",
    instagramHandle: ""
  });

  const handleNext = () => {
    navigate("/player-address", { state: { personalInfo: formData } });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-sm mx-auto">
        <div className="border-2 border-foreground rounded-lg p-8">
          <h2 className="text-lg font-normal mb-2 text-center">Profile</h2>
          <h3 className="text-lg font-normal mb-6 text-center">Registration</h3>
          
          <div className="text-sm font-medium mb-4">Personal Information</div>
          
          <div className="space-y-4">
            <div>
              <label className="text-xs block mb-1">Full Name</label>
              <Input
                value={formData.fullName}
                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                className="w-full h-8 text-sm"
              />
            </div>

            <div>
              <label className="text-xs block mb-1">DOB</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full h-8 text-sm justify-start text-left font-normal",
                      !formData.dob && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-3 w-3" />
                    {formData.dob ? format(formData.dob, "dd/MM/yyyy") : "01/01/2000"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={formData.dob}
                    onSelect={(date) => setFormData({...formData, dob: date})}
                    initialFocus
                    className={cn("p-3 pointer-events-auto")}
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div>
              <label className="text-xs block mb-1">Gender</label>
              <Select value={formData.gender} onValueChange={(value) => setFormData({...formData, gender: value})}>
                <SelectTrigger className="w-full h-8 text-sm">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-xs block mb-1">Mobile Number</label>
              <Input
                value={formData.mobileNumber}
                onChange={(e) => setFormData({...formData, mobileNumber: e.target.value})}
                placeholder="98xxxx"
                className="w-full h-8 text-sm"
              />
            </div>

            <div>
              <label className="text-xs block mb-1">Instagram Handle (optional)</label>
              <Input
                value={formData.instagramHandle}
                onChange={(e) => setFormData({...formData, instagramHandle: e.target.value})}
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

export default PlayerProfileCreation;