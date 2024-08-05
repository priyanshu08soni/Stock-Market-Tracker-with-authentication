import React, { useContext, useState } from "react";
import { XIcon, SearchIcon } from "@heroicons/react/solid";
import SearchResult from "./SearchResult";
import ThemeContext from "../context/ThemeContext";
import { searchSymbols } from "../api/stock-api";
const Search = () => {
  const [input, setInput] = useState("");
  const [bestMatches, setBestMatches] = useState([]);
  const { darkMode } = useContext(ThemeContext);
  const clear = () => {
    setInput("");
    setBestMatches([]);
  };
  const updateBestMatches = async () => {
    try {
      if (input) {
        const searchResults = await searchSymbols(input);
        const result = searchResults.result;
        setBestMatches(result);
      }
    } catch (error) {
      setBestMatches([]);
      console.log(error);
    }
  };
  return (
    <div
      className={`flex align-items-center my-2 rounded-md relative z-50 ${
        darkMode
          ? "bg-gray-900 border-gray-800"
          : " bg-white border-blue-100"
      }`}
      style={{height:"10px",width:"32.8%"}}
    >
      <input
        type="text"
        value={input}
        className={`w-full px-4 py-2 focus:outline-none rounded-md shadow-md ${
          darkMode ? "bg-gray-700" : null
        }`}
        placeholder="Search stock ... and press enter"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            updateBestMatches();
          }
        }}
      />
      {input && (
        <button className="ms-2" onClick={clear}>
          <XIcon className="h-7 w-7 fill-gray-500" />
        </button>
      )}
      
      {input && bestMatches.length > 0 ? (
        <SearchResult results={bestMatches} />
      ) : null}
    </div>
  );
};

export default Search;
