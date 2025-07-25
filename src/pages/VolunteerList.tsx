import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Filter } from "lucide-react";
import { useState } from "react";
import VolunteerFiltersModal from "@/components/VolunteerFiltersModal";
import AssignLevelModal from "@/components/AssignLevelModal";
const VolunteerList = () => {
  const navigate = useNavigate();
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [assignLevelOpen, setAssignLevelOpen] = useState(false);
  const volunteerData = [{
    name: "John Smith",
    mobNo: "98xxx",
    levelAssignment: "CBE (Cluster)",
    district: "Coimbatore",
    block: "xxx",
    state: "Tamil Nadu"
  }, {
    name: "Jane Doe",
    mobNo: "98xxx",
    levelAssignment: "Not Assigned",
    district: "Thirupur",
    block: "xxx",
    state: "Tamil Nadu"
  }];
  return <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-2xl font-bold mb-6">Volunteer List</h1>
        
        {/* Back Button */}
        <Button onClick={() => navigate("/admin-dashboard")} variant="ghost" className="mb-4 p-2">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>

        <div className="mb-6 space-y-4">
          <h2 className="text-lg font-semibold">Volunteer List</h2>
          
          {/* Search and Actions */}
          <div className="flex gap-4 items-center">
            <Input placeholder="Search by name" className="max-w-sm" />
            <Button variant="outline" size="icon" onClick={() => setFiltersOpen(true)}>
              <Filter className="h-4 w-4" />
            </Button>
          </div>
          
          <Button className="bg-blue-500 hover:bg-blue-600 text-white" onClick={() => setAssignLevelOpen(true)}>
            Assign LvL
          </Button>
        </div>

        {/* Table Container with Horizontal Scroll */}
        <div className="border rounded-lg overflow-x-auto">
          <div className="min-w-full">
            <table className="w-full">
              <thead className="border-b bg-muted/50">
                <tr>
                  <th className="text-left p-4 font-medium min-w-[60px]">
                    
                  </th>
                  <th className="text-left p-4 font-medium min-w-[120px]">Name</th>
                  <th className="text-left p-4 font-medium min-w-[100px]">Mob No.</th>
                  <th className="text-left p-4 font-medium min-w-[150px]">Level Assignment</th>
                  <th className="text-left p-4 font-medium min-w-[120px]">District</th>
                  <th className="text-left p-4 font-medium min-w-[100px]">Block</th>
                  <th className="text-left p-4 font-medium min-w-[120px]">State</th>
                </tr>
              </thead>
              <tbody>
                {volunteerData.map((row, index) => <tr key={index} className="border-b">
                    <td className="p-4">
                      <Checkbox />
                    </td>
                    <td className="p-4">{row.name}</td>
                    <td className="p-4">{row.mobNo}</td>
                    <td className="p-4">{row.levelAssignment}</td>
                    <td className="p-4">{row.district}</td>
                    <td className="p-4">{row.block}</td>
                    <td className="p-4">{row.state}</td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modals */}
        <VolunteerFiltersModal open={filtersOpen} onOpenChange={setFiltersOpen} />
        <AssignLevelModal open={assignLevelOpen} onOpenChange={setAssignLevelOpen} />
      </div>
    </div>;
};
export default VolunteerList;