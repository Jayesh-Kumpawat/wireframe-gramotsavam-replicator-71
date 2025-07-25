import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ReportsDashboards = () => {
  const navigate = useNavigate();

  const stats = [
    {
      title: "Number of Teams Registered",
      value: "150"
    },
    {
      title: "Number of Players",
      value: "1200"
    },
    {
      title: "Number of Clusters",
      value: "21"
    },
    {
      title: "Maximum Players in Cluster",
      value: "Coimbatore",
      subtitle: "(311)"
    }
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <h1 className="text-2xl font-bold mb-6">Reports & Dashboards</h1>
        
        <div className="border-2 border-foreground rounded-lg p-6">
          {/* Back Button */}
          <Button 
            onClick={() => navigate("/admin-dashboard")} 
            variant="ghost" 
            className="mb-4 p-2"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>

          {/* Title */}
          <h2 className="text-lg font-semibold mb-6">Reports & Dashboards</h2>

          {/* Filters */}
          <div className="space-y-4 mb-8">
            <div>
              <label className="text-sm font-medium mb-2 block">Filter by Sport</label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent className="bg-white z-50">
                  <SelectItem value="football">Football</SelectItem>
                  <SelectItem value="cricket">Cricket</SelectItem>
                  <SelectItem value="basketball">Basketball</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Filter by State</label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent className="bg-white z-50">
                  <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                  <SelectItem value="kerala">Kerala</SelectItem>
                  <SelectItem value="karnataka">Karnataka</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Filter by Venue</label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent className="bg-white z-50">
                  <SelectItem value="coimbatore">Coimbatore</SelectItem>
                  <SelectItem value="thirupur">Thirupur</SelectItem>
                  <SelectItem value="chennai">Chennai</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Statistics */}
          <div className="space-y-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                <div className="text-2xl font-bold">
                  {stat.value}
                  {stat.subtitle && (
                    <div className="text-lg font-normal text-muted-foreground">{stat.subtitle}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsDashboards;