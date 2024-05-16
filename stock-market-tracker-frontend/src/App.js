import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ThemeContext from "./context/ThemeContext";
import StockContext from "./context/StockContext";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [stockSymbol, setStockSymbol] = useState("FB");

  return (
    // make react fragments
    <>
      <BrowserRouter>
        <Routes>
          {/* By help of outlet we will using multiple routes in layout. */}
          <Route
            index
            element={
              <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
                <StockContext.Provider value={{ stockSymbol, setStockSymbol }}>
                  <Home />
                </StockContext.Provider>
              </ThemeContext.Provider>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
