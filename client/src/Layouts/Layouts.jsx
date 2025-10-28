import { Outlet } from "react-router-dom";
import Logo from "../Shared/Logo/Logo";
import { Menu, Sidebar, X } from "lucide-react";
import { useState } from "react";

const Layouts = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div className="flex flex-col items-start justify-start h-screen">
      <nav className="w-full px-8 min-h-14 flex items-center justify-between border-b border-gray-200">
        <Logo StackPilot />
        {sidebar ? (
          <X
            onClick={() => setSidebar(false)}
            className="w-6 h-6 text-gray-600 sm:hidden"
          />
        ) : (
          <Menu
            onClick={() => setSidebar(true)}
            className="w-6 h-6 text-gray-600 sm:hidden"
          />
        )}
      </nav>
      <Outlet />
    </div>
  );
};

export default Layouts;
