import React from "react";
import NavButton from "./NavButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser } from "@fortawesome/free-solid-svg-icons";

interface SidebarProps {
  onNavigateHome: () => void;
  onNavigateProfile: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  onNavigateHome,
  onNavigateProfile,
}) => {
  return (
    <div className="w-64 bg-gray-800 h-screen">
      <div className="flex flex-col justify-between h-full py-6">
        <div className="flex flex-col space-y-4 text-white">
          <NavButton
            onClick={onNavigateHome}
            icon={<FontAwesomeIcon icon={faHome} />}
            label="Home"
          />
          <NavButton
            onClick={onNavigateProfile}
            icon={<FontAwesomeIcon icon={faUser} />}
            label="Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
