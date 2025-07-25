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
  const [divisionExpanded, setDivisionExpanded] = useState(false);
  const [finalExpanded, setFinalExpanded] = useState(false);
  const [stateExpanded, setStateExpanded] = useState(false);
  const [blockExpanded, setBlockExpanded] = useState(false);
  const [districtExpanded, setDistrictExpanded] = useState(false);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <DialogTitle>Filters</DialogTitle>
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
          {/* Level Assignment Section */}
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
                  <Checkbox id="cluster" />
                  <label htmlFor="cluster" className="text-sm">Cluster</label>
                </div>
                <div className="flex items-center space-x-2 pl-4">
                  <Checkbox id="cbe" />
                  <label htmlFor="cbe" className="text-sm">CBE</label>
                </div>
                <div className="flex items-center space-x-2 pl-4">
                  <Checkbox id="thirupur" />
                  <label htmlFor="thirupur" className="text-sm">Thirupur</label>
                </div>
              </div>
            )}
          </div>

          {/* Division Section */}
          <div>
            <Button
              variant="ghost"
              onClick={() => setDivisionExpanded(!divisionExpanded)}
              className="w-full justify-between p-0 h-auto font-normal"
            >
              <span>Division</span>
              {divisionExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </Button>
          </div>

          {/* Final Section */}
          <div>
            <Button
              variant="ghost"
              onClick={() => setFinalExpanded(!finalExpanded)}
              className="w-full justify-between p-0 h-auto font-normal"
            >
              <span>Final</span>
              {finalExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </Button>
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
          </div>

          {/* Block Section */}
          <div>
            <Button
              variant="ghost"
              onClick={() => setBlockExpanded(!blockExpanded)}
              className="w-full justify-between p-0 h-auto font-normal"
            >
              <span>Block</span>
              {blockExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </Button>
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
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VolunteerFiltersModal;