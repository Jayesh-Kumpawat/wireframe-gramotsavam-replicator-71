import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

const PlayerOTP = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const mobileNumber = location.state?.mobileNumber || "978xxx";
  const [otp, setOTP] = useState("");

  const handleContinue = () => {
    // For now, navigate to dashboard (can be changed based on login/registration logic)
    navigate("/player-dashboard");
  };

  const handleResendOTP = () => {
    console.log("Resend OTP");
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

          {/* Form Section */}
          <div className="space-y-4">
            <div>
              <label className="text-sm font-normal block mb-2">MOBILE NUMBER</label>
              <Input
                value={mobileNumber}
                readOnly
                className="w-full bg-muted"
              />
            </div>

            <div>
              <label className="text-sm font-normal block mb-2">Enter OTP</label>
              <Input
                value={otp}
                onChange={(e) => setOTP(e.target.value)}
                placeholder=""
                className="w-full"
              />
            </div>

            <Button
              onClick={handleContinue}
              variant="outline"
              className="w-full"
            >
              Continue
            </Button>

            <Button
              onClick={handleResendOTP}
              variant="outline"
              className="w-full"
            >
              RESEND OTP
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerOTP;