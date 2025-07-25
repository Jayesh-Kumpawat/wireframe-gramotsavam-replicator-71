import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Home, BarChart3, UserCircle } from "lucide-react";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const menuItems = [
    { title: "Admin Dashboard", active: true },
    { title: "Team Registrations" },
    { title: "Volunteer List" },
    { title: "Levelwise Venues" },
    { title: "Reports & Dashboards" },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="p-6">
        <h1 className="text-2xl font-normal text-center mb-8">Admin Dashboard</h1>
        
        {/* Main Content */}
        <div className="flex flex-col items-center">
          {/* Sidebar Menu */}
          <div className="w-full max-w-sm border-2 border-foreground rounded-lg p-6 mb-8">
            <div className="space-y-3">
              {menuItems.map((item, index) => (
                <Button
                  key={index}
                  variant={item.active ? "default" : "outline"}
                  className="w-full justify-start text-sm py-2"
                >
                  {item.title}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="mt-auto border-t border-foreground">
        <div className="flex">
          <div className="flex-1 flex flex-col items-center py-4 border-r border-foreground cursor-pointer">
            <Home className="w-6 h-6" />
            <span className="text-sm mt-1">Home</span>
          </div>
          <div className="flex-1 flex flex-col items-center py-4 border-r border-foreground cursor-pointer">
            <BarChart3 className="w-6 h-6" />
            <span className="text-sm mt-1">Statistics</span>
          </div>
          <div className="flex-1 flex flex-col items-center py-4 cursor-pointer">
            <UserCircle className="w-6 h-6" />
            <span className="text-sm mt-1">Profile</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;