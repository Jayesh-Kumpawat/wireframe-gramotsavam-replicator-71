import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";

const VolunteerLogin = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleContinue = () => {
    navigate("/volunteer-otp", { state: { phoneNumber } });
  };

  const handleGoogleLogin = () => {
    console.log("Continue with Google");
  };

  const handleAppleLogin = () => {
    console.log("Continue with Apple");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-sm mx-auto">
        {/* Back button */}
        <Button 
          onClick={() => navigate(-1)} 
          variant="ghost" 
          className="mb-4 p-2"
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        
        <div className="border-2 border-foreground rounded-lg p-8">
          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-lg font-normal mb-2">ISHA</h2>
            <h3 className="text-base font-normal mb-4">Namaskaram</h3>
            <p className="text-sm text-foreground/70 mb-6">
              we'll check if you have an account and help create one if you don't
            </p>
          </div>

          {/* Form Section */}
          <div className="space-y-4">
            <Input
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter Phone No"
              className="w-full"
            />

            <Button
              onClick={handleContinue}
              variant="outline"
              className="w-full"
            >
              Continue
            </Button>

            <div className="text-center text-sm text-foreground/70">
              or
            </div>

            <Button
              onClick={handleGoogleLogin}
              variant="outline"
              className="w-full"
            >
              Continue with Google
            </Button>

            <Button
              onClick={handleAppleLogin}
              variant="outline"
              className="w-full"
            >
              Continue with Apple
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerLogin;