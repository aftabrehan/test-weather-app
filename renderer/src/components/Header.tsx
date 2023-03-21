import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-white border-b border-gray-300">
      <button className="p-2 rounded-md hover:bg-gray-100">
        <FontAwesomeIcon icon={faBars} />
      </button>
      <h1 className="text-2xl font-bold">Weather App</h1>
      <div></div>
    </header>
  );
};

export default Header;
