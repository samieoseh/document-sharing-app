import { fetchFolders } from "@/api/folder-api";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import { FolderProps } from "@/types/Folder";
import { useQuery } from "@tanstack/react-query";
import Folder from "./components/Folder";
import { useLocation } from "react-router";

export default function FilesPage() {
  const location = useLocation();
  const folderId = location.pathname.split("/")[2];
  const axiosPrivate = useAxiosPrivate();

  const { data: folders, isLoading: foldersLoading } = useQuery({
    queryKey: ["folders", folderId],
    queryFn: () => fetchFolders(axiosPrivate, folderId),
  });

  console.log({ folders });

  if (foldersLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="px-8 py-8">
      <h1>Folders</h1>
      <div className="py-4 flex items-center gap-4 flex-wrap">
        {folders?.map((folder: FolderProps) => (
          <Folder key={folder._id} folder={folder} />
        ))}
      </div>
      <h1>Files</h1>
    </div>
  );
}
