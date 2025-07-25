import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Filter } from "lucide-react";

const LevelwiseVenues = () => {
  const navigate = useNavigate();

  const venueData = [
    { level: "Level", levelName: "Level Name", venue: "Venue" },
    { level: "Cluster", levelName: "Thirusepur", venue: "xyz ground, Thirusepur" },
    { level: "Division", levelName: "Coimbatore", venue: "abc school, CBE" },
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-2xl font-bold mb-6">Levelwise Venues</h1>
        
        {/* Back Button */}
        <Button 
          onClick={() => navigate("/admin-dashboard")} 
          variant="ghost" 
          className="mb-4 p-2"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>

        {/* Search and Actions */}
        <div className="mb-6 space-y-4">
          <div className="flex gap-4 items-center">
            <Input
              placeholder="Search by name"
              className="max-w-sm"
            />
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
          
          <Button className="bg-blue-500 hover:bg-blue-600 text-white">
            Assign Venue
          </Button>
        </div>

        {/* Table Container with Horizontal Scroll */}
        <div className="border rounded-lg overflow-x-auto">
          <div className="min-w-full">
            <table className="w-full">
              <thead className="border-b bg-muted/50">
                <tr>
                  <th className="text-left p-4 font-medium min-w-[120px]">Level</th>
                  <th className="text-left p-4 font-medium min-w-[150px]">Level Name</th>
                  <th className="text-left p-4 font-medium min-w-[200px]">Venue</th>
                </tr>
              </thead>
              <tbody>
                {venueData.map((row, index) => (
                  <tr key={index} className={index === 0 ? "border-b font-medium" : "border-b"}>
                    <td className="p-4">{row.level}</td>
                    <td className="p-4">{row.levelName}</td>
                    <td className="p-4">{row.venue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LevelwiseVenues;