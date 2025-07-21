import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

const PlayerSignup = () => {
  const navigate = useNavigate();
  const [mobileNumber, setMobileNumber] = useState("978xxx");

  const handleSendOTP = () => {
    navigate("/player-otp", { state: { mobileNumber } });
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

          {/* Title */}
          <h2 className="text-lg font-normal mb-8 text-center">
            Player<br />Signup/Login
          </h2>

          {/* Mobile Number Section */}
          <div className="space-y-4">
            <div>
              <label className="text-sm font-normal block mb-2">MOBILE NUMBER</label>
              <Input
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                placeholder="978xxx"
                className="w-full"
              />
            </div>

            <Button
              onClick={handleSendOTP}
              variant="outline"
              className="w-full"
            >
              SEND OTP
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerSignup;