import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";

const PlayerAddress = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const personalInfo = location.state?.personalInfo || {};
  const fromTeamDetails = location.state?.fromTeamDetails;
  
  const [addressData, setAddressData] = useState({
    state: "",
    pincode: "",
    district: "",
    talukBlockMandal: "",
    panchayat: ""
  });

  const handleNext = () => {
    navigate("/player-aadhar", { 
      state: { 
        personalInfo, 
        addressInfo: addressData,
        fromTeamDetails
      } 
    });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-sm mx-auto">
        <Button 
          onClick={() => navigate(-1)} 
          variant="ghost" 
          className="mb-4 p-2"
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div className="border-2 border-foreground rounded-lg p-8">
          <h2 className="text-lg font-normal mb-2 text-center">Profile</h2>
          <h3 className="text-lg font-normal mb-6 text-center">Registration</h3>
          
          <div className="text-sm font-medium mb-4">Address Information</div>
          
          <div className="space-y-4">
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

export default PlayerAddress;