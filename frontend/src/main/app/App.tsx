import useAuth from "@/hooks/useAuth";
import LoginPage from "../auth/LoginPage";
import SidePanel from "./sidepanel/SidePanel";
import { Outlet } from "react-router";
import TopPanel from "./toppanel/TopPanel";

function App() {
  const { waitIsAuthCheck, isAuthenticated } = useAuth();

  if (waitIsAuthCheck) {
    return <div>Loading...</div>;
  }

  if (!waitIsAuthCheck && !isAuthenticated) {
    return <LoginPage />;
  }

  return (
    <div className="flex items-center bg-[#f9fafe] h-screen w-full">
      <SidePanel />
      <div className="flex flex-col h-screen w-full py-6 px-8">
        <TopPanel />
        <div className="bg-white mt-2 h-screen rounded-lg overflow-y-scroll">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
