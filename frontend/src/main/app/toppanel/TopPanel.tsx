import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CogIcon from "@/lib/icons/CogIcon";
import PlusIcon from "@/lib/icons/PlusIcon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import FolderOutlinedIcon from "@/lib/icons/FolderOutlinedIcon";
import FileOutlinedIcon from "@/lib/icons/FileOutlinedIcon";
import UploadFolderOutlinedIcon from "@/lib/icons/UploadFolderOutlinedIcon";
import UploadFileOutlinedIcon from "@/lib/icons/UploadFileOutlinedIcon";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import ButtonDialogContent from "./ButtonDialogContent";
import useAppContext from "@/hooks/useAppContext";

export default function TopPanel() {
  const { setAction } = useAppContext();
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
        <Dialog>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="rounded-full h-12 text-md w-32">
                <PlusIcon />
                New
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-72 mr-12">
              <DropdownMenuGroup>
                {/* Create new folder */}
                <DialogTrigger asChild onClick={() => setAction("folder")}>
                  <DropdownMenuItem>
                    <FolderOutlinedIcon />
                    <span>New Folder</span>
                  </DropdownMenuItem>
                </DialogTrigger>

                {/* Create new file */}
                <DialogTrigger asChild onClick={() => setAction("file")}>
                  <DropdownMenuItem>
                    <FileOutlinedIcon />
                    <span>New File</span>
                  </DropdownMenuItem>
                </DialogTrigger>

                <DropdownMenuSeparator />

                {/* Upload folder */}
                <DropdownMenuItem>
                  <UploadFolderOutlinedIcon />
                  <span>Upload Folder</span>
                </DropdownMenuItem>

                {/* Upload file */}
                <DropdownMenuItem>
                  <UploadFileOutlinedIcon />
                  <span>Upload File</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <ButtonDialogContent />
        </Dialog>
      </div>
    </div>
  );
}




