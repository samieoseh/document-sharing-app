import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import useAuth from "@/hooks/useAuth";
import ClockIcon from "@/lib/icons/ClockIcon";
import ClockOutlinedIcon from "@/lib/icons/ClockOutlinedIcon";
import FileIcon from "@/lib/icons/FileIcon";
import FileOutlinedIcon from "@/lib/icons/FileOutlinedIcon";
import HomeIcon from "@/lib/icons/HomeIcon";
import HomeOutlinedIcon from "@/lib/icons/HomeOutlinedIcon";
import SharedIcon from "@/lib/icons/SharedIcon";
import SharedOutlinedIcon from "@/lib/icons/SharedOutlinedIcon";
import TrashIcon from "@/lib/icons/TrashIcon";
import TrashOutlinedIcon from "@/lib/icons/TrashOutlinedIcon";
import { Link, useLocation } from "react-router-dom";

export default function SidePanel() {
  const { user } = useAuth();
  const { pathname } = useLocation();

  return (
    <div className="w-[20%] h-screen py-6 px-6">
      <div className="flex gap-4 items-center">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>{user?.username}</AvatarFallback>
        </Avatar>
        <h2 className="text-md">{user?.username}</h2>
      </div>

      <div className="mt-8 space-y-8">
        <ul className="flex flex-col gap-4">
          <Link to="/">
            <li
              className={`text-sm flex items-center space-x-2 ${pathname === "/" && "bg-[#c3e7ff]"} rounded-full px-4 py-2`}
            >
              {pathname === "/" ? <HomeIcon /> : <HomeOutlinedIcon />}
              <p>Home</p>
            </li>
          </Link>
          <Link to="/files">
            <li
              className={`text-sm flex items-center space-x-2 ${pathname === "/files" && "bg-[#c3e7ff]"} rounded-full px-4 py-2`}
            >
              {pathname === "/files" ? <FileIcon /> : <FileOutlinedIcon />}
              <p>Files</p>
            </li>
          </Link>
          <Link to="/shared">
            <li
              className={`text-sm flex items-center space-x-2 ${pathname === "/shared" && "bg-[#c3e7ff]"} rounded-full px-4 py-2`}
            >
              {pathname === "/shared" ? <SharedIcon /> : <SharedOutlinedIcon />}
              <p>Shared</p>
            </li>
          </Link>
          <Link to="/recent">
            <li
              className={`text-sm flex items-center space-x-2 ${pathname === "/recent" && "bg-[#c3e7ff]"} rounded-full px-4 py-2`}
            >
              {pathname === "/recent" ? <ClockIcon /> : <ClockOutlinedIcon />}
              <p>Recent</p>
            </li>
          </Link>
          <Link to="files/trash">
            <li
              className={`text-sm flex items-center space-x-2 ${pathname === "/files/trash" && "bg-[#c3e7ff]"} rounded-full px-4 py-2`}
            >
              {pathname === "/files/trash" ? (
                <TrashIcon />
              ) : (
                <TrashOutlinedIcon />
              )}
              <p>Trash</p>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
