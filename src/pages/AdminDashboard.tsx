import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Home, Trophy, UserCircle, Users, MapPin, BarChart3, FileText } from "lucide-react";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const menuItems = [
    { title: "Team Registrations", icon: Users, action: () => navigate("/admin-team-selection") },
    { title: "Volunteer List", icon: Users, action: () => navigate("/volunteer-list") },
    { title: "Levelwise Venues", icon: MapPin, action: () => navigate("/levelwise-venues") },
    { title: "Reports & Dashboards", icon: BarChart3, action: () => navigate("/reports-dashboards") },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-80 space-y-6">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-xl font-semibold mb-8">Admin Dashboard</h1>
          </div>

          {/* Menu Items */}
          <div className="space-y-4">
            {menuItems.map((item) => (
              <Button
                key={item.title}
                onClick={item.action}
                variant="outline"
                className="w-full h-14 text-base font-normal bg-red-100 hover:bg-red-200 border-red-200 text-foreground rounded-2xl"
              >
                {item.title}
              </Button>
            ))}
          </div>

          {/* Bottom Navigation */}
          <div className="mt-12 border-t bg-muted/30 rounded-lg">
            <div className="flex">
              <div className="flex-1 flex flex-col items-center py-4 border-r cursor-pointer bg-blue-100 rounded-l-lg">
                <Home className="w-6 h-6 text-blue-600" />
                <span className="text-sm mt-1 text-blue-600">Home</span>
              </div>
              <div 
                className="flex-1 flex flex-col items-center py-4 border-r cursor-pointer"
                onClick={() => navigate("/admin-matches")}
              >
                <Trophy className="w-6 h-6" />
                <span className="text-sm mt-1">Matches</span>
              </div>
              <div 
                className="flex-1 flex flex-col items-center py-4 cursor-pointer rounded-r-lg"
                onClick={() => navigate("/admin-profile")}
              >
                <UserCircle className="w-6 h-6" />
                <span className="text-sm mt-1">Profile</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;