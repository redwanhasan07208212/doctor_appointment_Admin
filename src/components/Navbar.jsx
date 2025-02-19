import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AdminContext } from "../context/AdminContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { aToken, setAToken } = useContext(AdminContext);

  const logout = () => {
    navigate("/");
    aToken && setAToken("");
    aToken && localStorage.removeItem("aToken");
  };

  return (
    <div className="flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white">
      <div className="flex items-center gap-2 text-xs">
        <svg
          className="cursor-pointer"
          onClick={() => navigate("/")}
          width="217"
          height="46"
          viewBox="0 0 217 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 20C10 22.2091 11.7909 24 14 24C16.2091 24 18 22.2091 18 20C18 17.7909 16.2091 16 14 16C11.7909 16 10 17.7909 10 20Z"
            fill="#5F6FFF"
          />
          <path
            d="M14 28C17.3137 28 20 25.3137 20 22V16H22V22C22 26.4183 18.4183 30 14 30C9.58172 30 6 26.4183 6 22V16H8V22C8 25.3137 10.6863 28 14 28Z"
            fill="#5F6FFF"
          />

          <path
            d="M30 10H40V20H50V30H40V40H30V30H20V20H30V10Z"
            fill="#5F6FFF"
          />
        </svg>
        <p className="border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-500">
          {aToken ? "Admin" : "Doctor"}
        </p>
      </div>
      <button
        onClick={logout}
        className="bg-primary text-white text-sm px-10 py-2 rounded-full"
      >
        LogOut
      </button>
    </div>
  );
};

export default Navbar;
