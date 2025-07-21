import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

const AddMemberAddress = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { sport, teamData, memberPersonalInfo } = location.state || {};
  
  const [addressData, setAddressData] = useState({
    state: "",
    pincode: "",
    district: "",
    talukBlockMandal: "",
    panchayat: ""
  });

  const handleNext = () => {
    navigate("/add-member-aadhar", { 
      state: { 
        sport, 
        teamData, 
        memberPersonalInfo,
        memberAddressInfo: addressData 
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
          
          <div className="text-sm font-medium mb-4">Address Information</div>
          
          <div className="space-y-4">
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

export default AddMemberAddress;