import { Protect, useClerk, useUser } from "@clerk/clerk-react";
import {
  Eraser,
  FileText,
  Hash,
  House,
  Icon,
  Image,
  LogOut,
  Scissors,
  SquarePen,
  Users,
} from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  {
    to: "/ai",
    label: "Dashboard",
    Icon: House,
  },
  {
    to: "/ai/writeArticle",
    label: "Write Article",
    Icon: SquarePen,
  },
  {
    to: "/ai/blogTitle",
    label: "Blog Title",
    Icon: Hash,
  },
  {
    to: "/ai/generateImage",
    label: "Generate Image",
    Icon: Image,
  },
  {
    to: "/ai/removeBackground",
    label: "Remove Background",
    Icon: Eraser,
  },
  {
    to: "/ai/removeObject",
    label: "Remove Object",
    Icon: Scissors,
  },
  {
    to: "/ai/reviewResume",
    label: "Review Resume",
    Icon: FileText,
  },
  {
    to: "/ai/community",
    label: "Community",
    Icon: Users,
  },
];

const Sidebar = ({ sidebar, setSidebar }) => {
  const { user } = useUser();
  const { signOut, openUserProfile } = useClerk();

  if (!user) {
    return null;
  }
  return (
    <div
      className={`w-60 bg-white border-r border-gray-200 flex flex-col justify-between items-center max-sm:absolute top-14 bottom-0 ${
        sidebar ? "translate-x-0" : "max-sm:translate-x-full"
      } transition-all duration-300 ease-in-out`}
    >
      <div className="my-7 w-full">
        <img
          src={user.imageUrl || "/default-avatar.png"}
          alt={user.fullName || "User"}
          className="w-13 rounded-full mx-auto"
        />
        <h1 className="mt-1 text-center mb-8">
          {user.fullName || "Anonymous"}
        </h1>
        <div>
          {navItems.map(({ to, label, Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/ai"}
              onClick={() => setSidebar(false)}
              className={({ isActive }) =>
                `px-3.5 py-2.5 flex items-center m-3 gap-3 rounded transition-colors duration-200 ${
                  isActive
                    ? " bg-gradient-to-r from-[#A594F9] via-[#9B70FF] to-[#B06FF9] text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              {Icon && <Icon className="w-5 h-5" />}
              <span>{label}</span>
            </NavLink>
          ))}
        </div>
      </div>
      <div className="w-full border-t border-gray-200 p-4 px-7 flex items-center justify-between">
        <div
          onClick={openUserProfile}
          className="flex gap-2 items-center cursor-pointer"
        >
          <img src={user.imageUrl} alt="" className="w-8 rounded-full" />
          <div>
            <h1 className="text-sm font-medium">{user.fullName}</h1>
            <p className="text-xs text-gray-500">
              <Protect plan="premium" fallback="Free">
                Premium
              </Protect>
            </p>
          </div>
        </div>
        <LogOut
          onClick={signOut}
          className="w-4.5 text-gray-400 hover:text-gray-700 transition cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Sidebar;
