import React, { useContext } from "react";
import Search from "./Search";
import ThemeContext from "../context/ThemeContext";
const Header = ({ name }) => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <>
      <div>
        <div
          className={`w-full h-full rounded-md relative pb-4  ${
            darkMode ? "bg-gray-900" : "bg-blue-50"
          } `}
          style={{ display: "flex", alignItems: "center",justifyContent:"space-between", gap: "50px" }}
        >
          <h1 className="text-lg xl:text-2xl 2xl:text-4xl ps-2">{name}</h1>
          <Search />
        </div>
        
      </div>
    </>
  );
};

export default Header;
