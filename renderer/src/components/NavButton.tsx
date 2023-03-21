import React from "react";

interface NavButtonProps {
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}

const NavButton: React.FC<NavButtonProps> = ({ onClick, icon, label }) => {
  return (
    <button className="btn btn-ghost" onClick={onClick}>
      <div className="flex items-center space-x-2">
        <span className="text-lg">{icon}</span>
        <span>{label}</span>
      </div>
    </button>
  );
};

export default NavButton;
