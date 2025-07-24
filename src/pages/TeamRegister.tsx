import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, CalendarIcon, Upload } from "lucide-react";
import { useState } from "react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const TeamRegister = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const sport = location.state?.sport || "Throwball";
  const isVolunteer = location.state?.isVolunteer || false;
  const captainDetails = location.state?.captainDetails;
  
  const getCaptainDisplayName = () => {
    if (isVolunteer && captainDetails?.name) {
      return `${captainDetails.name} (Captain)`;
    }
    return "You (Captain)";
  };
  
  const [teamData, setTeamData] = useState({
    teamName: "",
    members: [
      { name: getCaptainDisplayName(), id: "captain" },
      { name: "ST2...", id: "member1" }
    ]
  });

  // Popup states for manual member addition
  const [showMemberDialog, setShowMemberDialog] = useState(false);
  const [currentStep, setCurrentStep] = useState<'personal' | 'address' | 'aadhar'>('personal');
  const [memberData, setMemberData] = useState({
    fullName: "",
    dob: undefined as Date | undefined,
    gender: "",
    mobileNumber: "987xxx",
    instagramHandle: ""
  });
  const [addressData, setAddressData] = useState({
    state: "",
    pincode: "",
    district: "",
    talukBlockMandal: "",
    panchayat: ""
  });
  const [aadharFiles, setAadharFiles] = useState({
    front: null as File | null,
    back: null as File | null
  });

  const handleAddManually = () => {
    setShowMemberDialog(true);
    setCurrentStep('personal');
    // Reset form data
    setMemberData({
      fullName: "",
      dob: undefined,
      gender: "",
      mobileNumber: "987xxx",
      instagramHandle: ""
    });
    setAddressData({
      state: "",
      pincode: "",
      district: "",
      talukBlockMandal: "",
      panchayat: ""
    });
    setAadharFiles({
      front: null,
      back: null
    });
  };

  const handleNextStep = () => {
    if (currentStep === 'personal') {
      setCurrentStep('address');
    } else if (currentStep === 'address') {
      setCurrentStep('aadhar');
    }
  };

  const handlePrevStep = () => {
    if (currentStep === 'address') {
      setCurrentStep('personal');
    } else if (currentStep === 'aadhar') {
      setCurrentStep('address');
    }
  };

  const handleFileUpload = (type: 'front' | 'back', event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setAadharFiles({...aadharFiles, [type]: file});
    }
  };

  const handleSubmitMember = () => {
    // Add member to team
    const newMember = {
      ...memberData,
      ...addressData,
      aadhar: aadharFiles,
      id: Date.now().toString(),
      name: memberData.fullName
    };
    
    setTeamData({
      ...teamData,
      members: [...teamData.members, newMember]
    });
    
    // Close dialog and reset
    setShowMemberDialog(false);
    setCurrentStep('personal');
  };

  const handleSearch = () => {
    navigate("/team-search", { state: { sport, teamData } });
  };

  const handleInvite = () => {
    navigate("/team-invite", { state: { sport, teamData } });
  };

  const handleRegisterTeam = () => {
    if (isVolunteer) {
      navigate("/volunteer-dashboard");
    } else {
      navigate("/player-dashboard");
    }
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

          <h2 className="text-lg font-normal mb-6 text-center">
            Register Team for<br />{sport}
          </h2>
          
          <div className="space-y-4">
            <div>
              <label className="text-xs block mb-1">Team Name</label>
              <Input
                value={teamData.teamName}
                onChange={(e) => setTeamData({...teamData, teamName: e.target.value})}
                className="w-full h-8 text-sm"
              />
            </div>

            <div>
              <label className="text-xs block mb-2">Team Members</label>
              <div className="space-y-2">
                {teamData.members.map((member, index) => (
                  <div key={member.id} className="text-sm p-2 border rounded">
                    {member.name}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs block mb-2">Add Team Members</label>
              <div className="flex space-x-2">
                <Button
                  onClick={handleAddManually}
                  variant="outline"
                  size="sm"
                  className="flex-1 text-xs"
                >
                  Add Manually
                </Button>
                <Button
                  onClick={handleSearch}
                  variant="outline"
                  size="sm"
                  className="flex-1 text-xs"
                >
                  Search
                </Button>
                <Button
                  onClick={handleInvite}
                  variant="outline"
                  size="sm"
                  className="flex-1 text-xs"
                >
                  Invite
                </Button>
              </div>
              
              <p className="text-xs text-foreground/70 mt-2">
                Add a player who doesn't have this app yet
              </p>
            </div>

            <Button
              onClick={handleRegisterTeam}
              variant="outline"
              className="w-full mt-6"
            >
              Register Team
            </Button>
          </div>
        </div>
      </div>

      {/* Manual Member Addition Dialog */}
      <Dialog open={showMemberDialog} onOpenChange={setShowMemberDialog}>
        <DialogContent className="w-full max-w-sm mx-auto">
          <DialogHeader>
            <DialogTitle className="text-center">
              Add Team Member
            </DialogTitle>
          </DialogHeader>

          {currentStep === 'personal' && (
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
                onClick={handleNextStep}
                variant="outline"
                className="w-full mt-6"
              >
                Next
              </Button>
            </div>
          )}

          {currentStep === 'address' && (
            <div className="space-y-4">
              <div className="text-sm font-medium mb-4">Address Information</div>
              
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-xs block mb-1">State</label>
                  <Input
                    value={addressData.state}
                    onChange={(e) => setAddressData({...addressData, state: e.target.value})}
                    className="w-full h-8 text-sm"
                  />
                </div>

                <div>
                  <label className="text-xs block mb-1">Pincode</label>
                  <Input
                    value={addressData.pincode}
                    onChange={(e) => setAddressData({...addressData, pincode: e.target.value})}
                    className="w-full h-8 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs block mb-1">District</label>
                <Input
                  value={addressData.district}
                  onChange={(e) => setAddressData({...addressData, district: e.target.value})}
                  className="w-full h-8 text-sm"
                />
              </div>

              <div>
                <label className="text-xs block mb-1">Taluk/Block/Mandal</label>
                <Input
                  value={addressData.talukBlockMandal}
                  onChange={(e) => setAddressData({...addressData, talukBlockMandal: e.target.value})}
                  className="w-full h-8 text-sm"
                />
              </div>

              <div>
                <label className="text-xs block mb-1">Panchayat</label>
                <Input
                  value={addressData.panchayat}
                  onChange={(e) => setAddressData({...addressData, panchayat: e.target.value})}
                  className="w-full h-8 text-sm"
                />
              </div>

              <div className="flex gap-2">
                <Button
                  onClick={handlePrevStep}
                  variant="outline"
                  className="flex-1"
                >
                  Back
                </Button>
                <Button
                  onClick={handleNextStep}
                  variant="outline"
                  className="flex-1"
                >
                  Next
                </Button>
              </div>
            </div>
          )}

          {currentStep === 'aadhar' && (
            <div className="space-y-4">
              <div className="text-sm font-medium mb-4">Aadhar Card Photos</div>
              
              <div>
                <label className="text-xs block mb-2">Aadhar Card Front</label>
                <div className="border-2 border-dashed border-foreground/30 rounded-lg p-4 text-center">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileUpload('front', e)}
                    className="hidden"
                    id="member-aadhar-front"
                  />
                  <label htmlFor="member-aadhar-front" className="cursor-pointer">
                    <Upload className="w-6 h-6 mx-auto mb-2 text-foreground/50" />
                    <div className="text-xs text-foreground/70">
                      {aadharFiles.front ? aadharFiles.front.name : "Upload"}
                    </div>
                  </label>
                </div>
              </div>

              <div>
                <label className="text-xs block mb-2">Aadhar Card Back</label>
                <div className="border-2 border-dashed border-foreground/30 rounded-lg p-4 text-center">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileUpload('back', e)}
                    className="hidden"
                    id="member-aadhar-back"
                  />
                  <label htmlFor="member-aadhar-back" className="cursor-pointer">
                    <Upload className="w-6 h-6 mx-auto mb-2 text-foreground/50" />
                    <div className="text-xs text-foreground/70">
                      {aadharFiles.back ? aadharFiles.back.name : "Upload"}
                    </div>
                  </label>
                </div>
              </div>

              <div className="flex gap-2">
                <Button
                  onClick={handlePrevStep}
                  variant="outline"
                  className="flex-1"
                >
                  Back
                </Button>
                <Button
                  onClick={handleSubmitMember}
                  variant="outline"
                  className="flex-1"
                >
                  Add Member
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TeamRegister;