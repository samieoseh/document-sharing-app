import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import useFolderMutations from "@/hooks/mutations/useFolderMutations";
import useAppContext from "@/hooks/useAppContext";
import { useState } from "react";
import { useLocation } from "react-router";

export default function ButtonDialogContent() {
  const { action } = useAppContext();

  return (
    <DialogContent className="w-[400px]">
      {action === "folder" ? <CreateNewFolder /> : <CreateNewFile />}
    </DialogContent>
  );
}

const CreateNewFolder = () => {
  const location = useLocation();
  const folderId = location.pathname.split("/")[2];
  const parentId = folderId ? folderId : null;

  const [folderName, setFolderName] = useState<string>("");

  const { createFolderMutation } = useFolderMutations();

  const handleCreateNewFolder = (folderName: string) => {
    createFolderMutation.mutate({
      name: folderName,
      parentId: parentId,
    });
  };

  return (
    <div className="space-y-4">
      <DialogHeader>
        <DialogTitle>New Folder</DialogTitle>
      </DialogHeader>

      <Input
        placeholder="Folder Name"
        value={folderName}
        onChange={(e) => {
          setFolderName(e.target.value);
        }}
      />
      <DialogFooter>
        <Button
          type="button"
          className="bg-secondary shadow-none text-[#3f4042] hover:bg-secondary"
        >
          Cancel
        </Button>
        <Button
          type="submit"
          onClick={() => handleCreateNewFolder(folderName)}
          disabled={createFolderMutation.isPending || !folderName}
        >
          Confirm
        </Button>
      </DialogFooter>
    </div>
  );
};

const CreateNewFile = () => {
  return (
    <div className="py-4">
      <Input placeholder="File Name" />
    </div>
  );
};
