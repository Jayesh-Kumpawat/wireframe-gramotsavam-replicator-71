import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon, ArrowLeft, Upload, User, Home, Trophy, UserCircle, ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

const PlayerProfileEdit = () => {
  const navigate = useNavigate();
  const [isAddressOpen, setIsAddressOpen] = useState(false);
  
  const [formData, setFormData] = useState({
    fullName: "John Player",
    dob: new Date(2000, 0, 1), // January 1, 2000
    gender: "male",
    instagramHandle: "",
    address: {
      state: "",
      pincode: "",
      district: "",
      talukBlockMandal: "",
      panchayat: ""
    },
    aadharFiles: {
      front: null as File | null,
      back: null as File | null
    }
  });

  const handleFileUpload = (type: 'front' | 'back', event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFormData({
        ...formData,
        aadharFiles: {
          ...formData.aadharFiles,
          [type]: file
        }
      });
    }
  };

  const handleSave = () => {
    navigate("/player-dashboard");
  };

  const states = ["Karnataka", "Tamil Nadu", "Kerala", "Andhra Pradesh", "Telangana"];
  const districts = ["Bangalore", "Mysore", "Hubli", "Mangalore", "Gulbarga"];
  const taluks = ["Bangalore North", "Bangalore South", "Anekal", "Devanahalli"];
  const panchayats = ["Yelahanka", "Krishnarajapuram", "Mahadevapura", "Bommanahalli"];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center">
          <ArrowLeft 
            className="w-5 h-5 mr-3 cursor-pointer" 
            onClick={() => navigate(-1)}
          />
          <h1 className="text-lg font-normal">Player Profile</h1>
        </div>
        <Button variant="ghost" size="sm" className="text-primary">
          Edit
        </Button>
      </div>

      {/* Profile Form */}
      <div className="p-4">
        <div className="w-full max-w-sm mx-auto">
          <div className="border-2 border-foreground rounded-lg p-6">
            {/* Profile Picture */}
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-2 flex items-center justify-center relative">
                <User className="w-8 h-8 text-gray-500" />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <Upload className="w-3 h-3 text-white" />
                </div>
              </div>
              <div className="text-xs text-foreground/70">Player Picture</div>
            </div>

            <div className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="text-xs block mb-1">Full Name</label>
                <Input
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  className="w-full h-8 text-sm"
                />
              </div>

              {/* DOB */}
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

              {/* Gender */}
              <div>
                <label className="text-xs block mb-1">Gender</label>
                <Select value={formData.gender} onValueChange={(value) => setFormData({...formData, gender: value})}>
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

              {/* Instagram Handle */}
              <div>
                <label className="text-xs block mb-1">Instagram Handle (optional)</label>
                <Input
                  value={formData.instagramHandle}
                  onChange={(e) => setFormData({...formData, instagramHandle: e.target.value})}
                  className="w-full h-8 text-sm"
                />
              </div>

              {/* Address Information - Collapsible */}
              <Collapsible open={isAddressOpen} onOpenChange={setIsAddressOpen}>
                <CollapsibleTrigger className="flex items-center justify-between w-full py-2 border-b border-gray-200">
                  <span className="text-xs font-medium">Address Information</span>
                  <ChevronDown className={cn("w-4 h-4 transition-transform", isAddressOpen && "rotate-180")} />
                </CollapsibleTrigger>
                <CollapsibleContent className="pt-3">
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs block mb-1">State</label>
                        <Select 
                          value={formData.address.state} 
                          onValueChange={(value) => setFormData({
                            ...formData, 
                            address: {...formData.address, state: value}
                          })}
                        >
                          <SelectTrigger className="w-full h-8 text-sm">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            {states.map((state) => (
                              <SelectItem key={state} value={state}>{state}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <label className="text-xs block mb-1">Pincode</label>
                        <Select 
                          value={formData.address.pincode} 
                          onValueChange={(value) => setFormData({
                            ...formData, 
                            address: {...formData.address, pincode: value}
                          })}
                        >
                          <SelectTrigger className="w-full h-8 text-sm">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="560001">560001</SelectItem>
                            <SelectItem value="560002">560002</SelectItem>
                            <SelectItem value="560003">560003</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs block mb-1">District</label>
                      <Select 
                        value={formData.address.district} 
                        onValueChange={(value) => setFormData({
                          ...formData, 
                          address: {...formData.address, district: value}
                        })}
                      >
                        <SelectTrigger className="w-full h-8 text-sm">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          {districts.map((district) => (
                            <SelectItem key={district} value={district}>{district}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-xs block mb-1">Taluk/Block/Mandal</label>
                      <Select 
                        value={formData.address.talukBlockMandal} 
                        onValueChange={(value) => setFormData({
                          ...formData, 
                          address: {...formData.address, talukBlockMandal: value}
                        })}
                      >
                        <SelectTrigger className="w-full h-8 text-sm">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          {taluks.map((taluk) => (
                            <SelectItem key={taluk} value={taluk}>{taluk}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-xs block mb-1">Panchayat</label>
                      <Select 
                        value={formData.address.panchayat} 
                        onValueChange={(value) => setFormData({
                          ...formData, 
                          address: {...formData.address, panchayat: value}
                        })}
                      >
                        <SelectTrigger className="w-full h-8 text-sm">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          {panchayats.map((panchayat) => (
                            <SelectItem key={panchayat} value={panchayat}>{panchayat}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>

              {/* Aadhar Card Front */}
              <div>
                <label className="text-xs block mb-1">Aadhar Card Front</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileUpload('front', e)}
                    className="hidden"
                    id="aadhar-front"
                  />
                  <label htmlFor="aadhar-front" className="cursor-pointer">
                    <Upload className="w-6 h-6 mx-auto mb-2 text-gray-400" />
                    <div className="text-xs text-gray-500">
                      {formData.aadharFiles.front ? formData.aadharFiles.front.name : "Upload"}
                    </div>
                  </label>
                </div>
              </div>

              {/* Aadhar Card Back */}
              <div>
                <label className="text-xs block mb-1">Aadhar Card Back</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileUpload('back', e)}
                    className="hidden"
                    id="aadhar-back"
                  />
                  <label htmlFor="aadhar-back" className="cursor-pointer">
                    <Upload className="w-6 h-6 mx-auto mb-2 text-gray-400" />
                    <div className="text-xs text-gray-500">
                      {formData.aadharFiles.back ? formData.aadharFiles.back.name : "Upload"}
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t p-4">
        <div className="flex justify-center space-x-8">
          <div className="flex flex-col items-center">
            <Home 
              className="w-6 h-6 cursor-pointer" 
              onClick={() => navigate("/player-dashboard")}
            />
            <span className="text-xs mt-1">Home</span>
          </div>
          <div className="flex flex-col items-center">
            <Trophy 
              className="w-6 h-6 cursor-pointer" 
              onClick={() => navigate("/player-matches")}
            />
            <span className="text-xs mt-1">Matches</span>
          </div>
          <div className="flex flex-col items-center">
            <UserCircle className="w-6 h-6 text-primary" />
            <span className="text-xs mt-1 text-primary">Profile</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerProfileEdit;