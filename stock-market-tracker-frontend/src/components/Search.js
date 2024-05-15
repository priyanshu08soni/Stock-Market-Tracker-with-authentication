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
      className={`flex align-items-center my-2 border-2 rounded-md relative z-50 w-96 ${
        darkMode
          ? "bg-gray-900 border-gray-800"
          : " bg-white border-neutral-200"
      }`}
      style={{ border: "1px solid lightgray" }}
    >
      <input
        type="text"
        value={input}
        className={`w-full px-4 py-2 focus:outline-none rounded-md ${
          darkMode ? "bg-gray-900" : null
        }`}
        placeholder="Search stock ..."
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
        <button onClick={clear}>
          <XIcon className="h-4 w-4 m-1 fill-gray-500" />
        </button>
      )}
      <button
        onClick={updateBestMatches}
        className="h-8 w-8 bg-indigo-600 rounded-md flex justify-content-center align-items-center m-1 p-2  "
      >
        <SearchIcon className="fill-gray-100" />
      </button>
      {input && bestMatches.length > 0 ? (
        <SearchResult results={bestMatches} />
      ) : null}
    </div>
  );
};

export default Search;
