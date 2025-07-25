import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronUp, ChevronDown, X } from "lucide-react";
import { useState } from "react";

interface VolunteerFiltersModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const VolunteerFiltersModal = ({ open, onOpenChange }: VolunteerFiltersModalProps) => {
  const [levelExpanded, setLevelExpanded] = useState(true);
  const [stateExpanded, setStateExpanded] = useState(false);
  const [districtExpanded, setDistrictExpanded] = useState(false);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <DialogTitle>Volunteer Filters</DialogTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onOpenChange(false)}
            className="h-6 w-6"
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* Level Section */}
          <div>
            <Button
              variant="ghost"
              onClick={() => setLevelExpanded(!levelExpanded)}
              className="w-full justify-between p-0 h-auto font-normal"
            >
              <span>Level Assignment</span>
              {levelExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </Button>
            
            {levelExpanded && (
              <div className="mt-2 space-y-2 pl-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="assigned" />
                  <label htmlFor="assigned" className="text-sm">Assigned</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="not-assigned" />
                  <label htmlFor="not-assigned" className="text-sm">Not Assigned</label>
                </div>
              </div>
            )}
          </div>

          {/* State Section */}
          <div>
            <Button
              variant="ghost"
              onClick={() => setStateExpanded(!stateExpanded)}
              className="w-full justify-between p-0 h-auto font-normal"
            >
              <span>State</span>
              {stateExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </Button>
            
            {stateExpanded && (
              <div className="mt-2 space-y-2 pl-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="tamil-nadu" />
                  <label htmlFor="tamil-nadu" className="text-sm">Tamil Nadu</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="kerala" />
                  <label htmlFor="kerala" className="text-sm">Kerala</label>
                </div>
              </div>
            )}
          </div>

          {/* District Section */}
          <div>
            <Button
              variant="ghost"
              onClick={() => setDistrictExpanded(!districtExpanded)}
              className="w-full justify-between p-0 h-auto font-normal"
            >
              <span>District</span>
              {districtExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </Button>
            
            {districtExpanded && (
              <div className="mt-2 space-y-2 pl-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="coimbatore" />
                  <label htmlFor="coimbatore" className="text-sm">Coimbatore</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="thirupur" />
                  <label htmlFor="thirupur" className="text-sm">Thirupur</label>
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VolunteerFiltersModal;