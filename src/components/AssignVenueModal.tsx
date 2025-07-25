import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft } from "lucide-react";

interface AssignVenueModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AssignVenueModal = ({ open, onOpenChange }: AssignVenueModalProps) => {
  const handleAssign = () => {
    console.log("Venue assigned");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="flex flex-row items-center space-y-0 pb-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onOpenChange(false)}
            className="h-6 w-6 mr-2"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <DialogTitle className="text-sm text-muted-foreground">Levelwise Venues</DialogTitle>
            <h2 className="text-lg font-semibold bg-blue-100 px-3 py-1 rounded mt-1">Assign Venue</h2>
          </div>
        </DialogHeader>
        
        <div className="space-y-6 bg-blue-100 p-4 rounded-lg">
          {/* Level Name */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Level Name</label>
            <Select defaultValue="thirupur">
              <SelectTrigger className="bg-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-white z-50">
                <SelectItem value="thirupur">Thirupur</SelectItem>
                <SelectItem value="coimbatore">Coimbatore</SelectItem>
                <SelectItem value="chennai">Chennai</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Venue */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Venue</label>
            <Select defaultValue="xyz-ground">
              <SelectTrigger className="bg-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-white z-50">
                <SelectItem value="xyz-ground">xyz ground, Thirupur</SelectItem>
                <SelectItem value="abc-school">abc school, CBE</SelectItem>
                <SelectItem value="main-stadium">Main Stadium, Chennai</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Assign Button */}
          <Button 
            onClick={handleAssign}
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium"
          >
            Assign
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AssignVenueModal;