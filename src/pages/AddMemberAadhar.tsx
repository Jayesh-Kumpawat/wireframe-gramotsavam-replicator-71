import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, Upload } from "lucide-react";
import { useState } from "react";

const AddMemberAadhar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { sport, teamData, memberPersonalInfo, memberAddressInfo } = location.state || {};
  
  const [aadharFiles, setAadharFiles] = useState({
    front: null as File | null,
    back: null as File | null
  });

  const handleFileUpload = (type: 'front' | 'back', event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setAadharFiles({...aadharFiles, [type]: file});
    }
  };

  const handleSubmit = () => {
    // Add member to team and navigate back to team registration
    navigate("/team-register", { 
      state: { 
        sport, 
        teamData: {
          ...teamData,
          members: [
            ...teamData.members,
            {
              ...memberPersonalInfo,
              ...memberAddressInfo,
              aadhar: aadharFiles,
              id: Date.now()
            }
          ]
        }
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
          
          <div className="text-sm font-medium mb-4">Aadhar Card Photos</div>
          
          <div className="space-y-6">
            <div>
              <label className="text-xs block mb-2">Aadhar Card Front</label>
              <div className="border-2 border-dashed border-foreground/30 rounded-lg p-8 text-center">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileUpload('front', e)}
                  className="hidden"
                  id="member-aadhar-front"
                />
                <label htmlFor="member-aadhar-front" className="cursor-pointer">
                  <Upload className="w-8 h-8 mx-auto mb-2 text-foreground/50" />
                  <div className="text-sm text-foreground/70">
                    {aadharFiles.front ? aadharFiles.front.name : "Upload"}
                  </div>
                </label>
              </div>
            </div>

            <div>
              <label className="text-xs block mb-2">Aadhar Card Back</label>
              <div className="border-2 border-dashed border-foreground/30 rounded-lg p-8 text-center">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileUpload('back', e)}
                  className="hidden"
                  id="member-aadhar-back"
                />
                <label htmlFor="member-aadhar-back" className="cursor-pointer">
                  <Upload className="w-8 h-8 mx-auto mb-2 text-foreground/50" />
                  <div className="text-sm text-foreground/70">
                    {aadharFiles.back ? aadharFiles.back.name : "Upload"}
                  </div>
                </label>
              </div>
            </div>

            <Button
              onClick={handleSubmit}
              variant="outline"
              className="w-full mt-6"
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMemberAadhar;