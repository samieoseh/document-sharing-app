import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CogIcon from "@/lib/icons/CogIcon";
import PlusIcon from "@/lib/icons/PlusIcon";

export default function TopPanel() {
  return (
    <div className="w-full flex items-center justify-between">
      <Input
        className="w-[70%] rounded-full px-8 h-12 bg-[#f9fafe] hover:shadow-sm hover:bg-white focus:shadow-sm focus:bg-white"
        placeholder="Search folders, files"
      />
      <div className="flex items-center space-x-8">
        <button>
          <CogIcon />
        </button>
        <Button className="rounded-full h-12 text-md w-32">
          <PlusIcon />
          New
        </Button>
      </div>
    </div>
  );
}
