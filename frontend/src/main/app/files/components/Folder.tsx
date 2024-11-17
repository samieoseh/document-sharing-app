import { FolderProps } from "@/types/Folder";
import { Link } from "react-router-dom";

const MAX_FOLDER_LENGTH = 10;

export default function Folder({ folder }: { folder: FolderProps }) {
  const folderNameLengthExceeded = folder.name.length > MAX_FOLDER_LENGTH;
  const folderName = folderNameLengthExceeded
    ? folder.name.slice(0, MAX_FOLDER_LENGTH) + "..."
    : folder.name;
  return (
    <Link
      to={`/files/${folder._id}`}
      className="bg-[#f0f3f8] px-6 py-4 rounded-lg flex flex-col items-center gap-1 transition-shadow"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="5em"
        height="5em"
        viewBox="0 0 24 24"
      >
        <path
          fill="#ffb200"
          stroke="#ffb200"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 6a2 2 0 0 1 2-2h3.93a2 2 0 0 1 1.664.89l.812 1.22A2 2 0 0 0 13.07 7H19a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
        ></path>
      </svg>
      <span className="text-gray-500 text-sm">{folderName}</span>
    </Link>
  );
}
