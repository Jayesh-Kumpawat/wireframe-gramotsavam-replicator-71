import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Bell, Home, Trophy, UserCircle, ArrowLeft, Users, Settings, BarChart3 } from "lucide-react";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const stats = [
    { title: "Total Volunteers", value: "45", icon: Users },
    { title: "Active Tournaments", value: "3", icon: Trophy },
    { title: "Registered Teams", value: "128", icon: BarChart3 },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="space-y-6">
          {/* Back button */}
          <Button 
            onClick={() => navigate(-1)} 
            variant="ghost" 
            className="p-2"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          
          <Card className="mb-6 w-80">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Admin Dashboard</CardTitle>
                <div className="relative cursor-pointer">
                  <Bell className="w-5 h-5" />
                  <Badge variant="destructive" className="absolute -top-2 -right-2 w-5 h-5 rounded-full p-0 flex items-center justify-center text-xs">
                    3
                  </Badge>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Stats Cards */}
          <div className="space-y-4 w-80">
            {stats.map((stat) => (
              <Card key={stat.title}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.title}</p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                    </div>
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Admin Actions */}
          <Card className="w-80">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Admin Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start text-base py-3">
                <Users className="w-4 h-4 mr-2" />
                Manage Volunteers
              </Button>
              <Button variant="outline" className="w-full justify-start text-base py-3">
                <Trophy className="w-4 h-4 mr-2" />
                Tournament Management
              </Button>
              <Button variant="outline" className="w-full justify-start text-base py-3">
                <Settings className="w-4 h-4 mr-2" />
                System Settings
              </Button>
            </CardContent>
          </Card>

          {/* Bottom Navigation */}
          <div className="border-t bg-muted/30 w-80">
            <div className="flex">
              <div className="flex-1 flex flex-col items-center py-4 bg-primary/10 border-r">
                <Home className="w-6 h-6 text-primary" />
                <span className="text-sm mt-1 text-primary font-medium">Home</span>
              </div>
              <div className="flex-1 flex flex-col items-center py-4 border-r cursor-pointer">
                <Trophy className="w-6 h-6" />
                <span className="text-sm mt-1">Tournaments</span>
              </div>
              <div className="flex-1 flex flex-col items-center py-4 cursor-pointer">
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