import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ChevronRight, ArrowLeft } from "lucide-react";
const LanguageSelection = () => {
  const navigate = useNavigate();
  const languages = [{
    english: "English",
    native: "English"
  }, {
    english: "Tamil",
    native: "தமிழ்"
  }, {
    english: "Telugu",
    native: "తెలుగు"
  }, {
    english: "Kannada",
    native: "ಕನ್ನಡ"
  }, {
    english: "Malayalam",
    native: "മലയാളം"
  }, {
    english: "Odia",
    native: "ଓଡ଼ିଆ"
  }];
  const handleLanguageSelect = (language: string) => {
    // Store selected language and navigate to login options
    navigate('/login');
  };
  return <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-sm mx-auto">
        {/* Back button */}
        <Button onClick={() => navigate(-1)} variant="ghost" className="mb-4 p-2">
          <ArrowLeft className="h-4 w-4" />
        </Button>
        {/* Language selection container */}
        <div className="border-2 border-foreground rounded-lg p-6 mb-8">
          <h2 className="text-lg font-normal mb-4 text-center">Choose Language</h2>
          <div className="space-y-2">
            {languages.map(language => <Button key={language.english} onClick={() => handleLanguageSelect(language.english)} variant="outline" className="w-full justify-center px-4 py-2 text-center">
                <div className="flex flex-col items-center">
                  <span>{language.english}</span>
                  {language.english !== "English" && (
                    <span className="text-blue-500 mt-1">{language.native}</span>
                  )}
                </div>
              </Button>)}
          </div>
        </div>
        
        {/* Arrow indicator */}
        
      </div>
    </div>;
};
export default LanguageSelection;