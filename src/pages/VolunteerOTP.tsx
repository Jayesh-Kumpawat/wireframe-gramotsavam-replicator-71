import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";

const VolunteerOTP = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const phoneNumber = location.state?.phoneNumber || "+919867452451";
  const [otp, setOTP] = useState("");
  const [countdown, setCountdown] = useState(53);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleVerify = () => {
    // Extract the last digit of the phone number
    const lastDigit = phoneNumber.slice(-1);
    
    if (lastDigit === '1') {
      navigate("/volunteer-dashboard");
    } else if (lastDigit === '2') {
      navigate("/poc-dashboard");
    } else if (lastDigit === '3') {
      navigate("/admin-dashboard");
    } else {
      // Default to volunteer dashboard for other numbers
      navigate("/volunteer-dashboard");
    }
  };

  const handleChangeNumber = () => {
    navigate(-1);
  };

  const handleResendOTP = () => {
    if (countdown === 0) {
      setCountdown(53);
      console.log("Resend OTP");
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
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-lg font-normal mb-4">isha</h2>
            <p className="text-sm text-foreground/70 mb-2">
              Verify your Mobile Number
            </p>
            <p className="text-sm text-foreground/70 mb-4">
              An OTP has been sent to
            </p>
            <p className="text-sm font-medium mb-4">{phoneNumber}</p>
            
            <button 
              onClick={handleChangeNumber}
              className="text-sm text-primary underline"
            >
              Change Number
            </button>
          </div>

          {/* OTP Input */}
          <div className="space-y-6">
            <div className="flex justify-center">
              <InputOTP maxLength={6} value={otp} onChange={setOTP}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>

            <div className="text-center">
              <button 
                onClick={handleResendOTP}
                disabled={countdown > 0}
                className={`text-sm ${countdown > 0 ? 'text-foreground/70' : 'text-primary underline'}`}
              >
                {countdown > 0 ? `Resend OTP in ${countdown} seconds` : 'Resend OTP'}
              </button>
            </div>

            <Button
              onClick={handleVerify}
              variant="outline"
              className="w-full"
            >
              Verify
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerOTP;