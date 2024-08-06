import React, { useContext } from "react";
import { MdOutlineLeaderboard } from "react-icons/md";
import { CgDetailsLess } from "react-icons/cg";
import { AiOutlineRise } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import ThemeIcon from "../components/ThemeIcon";
import ThemeContext from "../context/ThemeContext";
const Leaderboard = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <>
    <nav className={`pt-4 pb-4 flex ${ darkMode ? "bg-gray-900 text-gray-300" : " bg-blue-50"
      }`}
    >
        <div className="logo flex items-center w-25"><MdOutlineLeaderboard  /></div>
        <div className="flex items-center justify-end pr-16 gap-10 w-75">
            <NavLink className="navlink" to="/" >Home</NavLink>
            <NavLink className="navlink" to="/leaderboard">Leaderboard</NavLink>
            <ThemeIcon />
        </div>
    </nav>
      <div className={`font-roboto ${
        darkMode ? "bg-gray-900 text-gray-300" : " bg-blue-50"
      } `}>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gird-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-10 font-roboto">
          <div className="md:col-span-2 xl:col-span-1">
            <div className="flex items-center justify-center">
              <div className="my-1 text-5xl font-roboto heading">
                <MdOutlineLeaderboard />
                Leaderboard
              </div>
            </div>
            <div className="leaderboard">
              <div className="flex items-center justify-end pb-2">
                <div className="flex items-center gap-3 slippage">
                  Slippage
                  <select className="dropdown" name="" id="">
                    <option value="0">0%</option>
                    <option value="0.5">0.5%</option>
                    <option value="1">1%</option>
                  </select>
                </div>
              </div>
              <hr />
              <div className="flex items-center py-2">
                <input className="input1" type="text" />
                <CiSearch
                  style={{
                    fontSize: "30px",
                    color: "gray",
                    marginLeft: "8px",
                    marginRight: "8px",
                    cursor: "pointer",
                  }}
                />
              </div>
              <hr />
              <div className="d-flex align-items-center gap-5 py-2">
                <div className="flex items-center justify-between w-75">
                  <div className="w-50">Name</div>
                  <div className="w-50">Calmar Ratio</div>
                </div>
                <div style={{ paddingLeft: "20px" }}>Details</div>
              </div>
              <hr />
              <div className="d-flex align-items-center gap-5 py-2">
                <div className="flex items-center justify-between w-75">
                  <div className="w-50">strategy_name</div>
                  <div className="w-50 flex items-center gap-1 ">
                    <AiOutlineRise
                      style={{ color: "green", fontSize: "25px" }}
                    />
                    <p>3.62</p>
                  </div>
                </div>
                <button>details</button>
              </div>
              <hr />
              <div className="d-flex align-items-center gap-5 py-2">
                <div className="flex items-center justify-between w-75">
                  <div className="w-50">strategy_name</div>
                  <div className="w-50 flex items-center gap-1 ">
                    <AiOutlineRise
                      style={{ color: "green", fontSize: "25px" }}
                    />
                    <p>3.62</p>
                  </div>
                </div>
                <button>details</button>
              </div>
              <hr />
              <div className="d-flex align-items-center gap-5 py-2">
                <div className="flex items-center justify-between w-75">
                  <div className="w-50">strategy_name</div>
                  <div className="w-50 flex items-center gap-1 ">
                    <AiOutlineRise
                      style={{ color: "green", fontSize: "25px" }}
                    />
                    <p>3.62</p>
                  </div>
                </div>
                <button>details</button>
              </div>
              <hr />
              <div className="d-flex align-items-center gap-5 py-2">
                <div className="flex items-center justify-between w-75">
                  <div className="w-50">strategy_name</div>
                  <div className="w-50 flex items-center gap-1 ">
                    <AiOutlineRise
                      style={{ color: "green", fontSize: "25px" }}
                    />
                    <p>3.62</p>
                  </div>
                </div>
                <button>details</button>
              </div>
              <hr />
              <div className="d-flex align-items-center gap-5 py-2">
                <div className="flex items-center justify-between w-75">
                  <div className="w-50">strategy_name</div>
                  <div className="w-50 flex items-center gap-1 ">
                    <AiOutlineRise
                      style={{ color: "green", fontSize: "25px" }}
                    />
                    <p>3.62</p>
                  </div>
                </div>
                <button>details</button>
              </div>
              <hr />
              <div className="d-flex align-items-center gap-5 py-2">
                <div className="flex items-center justify-between w-75">
                  <div className="w-50">strategy_name</div>
                  <div className="w-50 flex items-center gap-1 ">
                    <AiOutlineRise
                      style={{ color: "green", fontSize: "25px" }}
                    />
                    <p>3.62</p>
                  </div>
                </div>
                <button>details</button>
              </div>
              <hr />
              <div className="d-flex align-items-center gap-5 py-2">
                <div className="flex items-center justify-between w-75">
                  <div className="w-50">strategy_name</div>
                  <div className="w-50 flex items-center gap-1 ">
                    <AiOutlineRise
                      style={{ color: "green", fontSize: "25px" }}
                    />
                    <p>3.62</p>
                  </div>
                </div>
                <button>details</button>
              </div>
              <hr />
              <div className="d-flex align-items-center gap-5 py-2">
                <div className="flex items-center justify-between w-75">
                  <div className="w-50">strategy_name</div>
                  <div className="w-50 flex items-center gap-1 ">
                    <AiOutlineRise
                      style={{ color: "green", fontSize: "25px" }}
                    />
                    <p>3.62</p>
                  </div>
                </div>
                <button>details</button>
              </div>
              <hr />
              <div className="d-flex align-items-center gap-5 py-2">
                <div className="flex items-center justify-between w-75">
                  <div className="w-50">strategy_name</div>
                  <div className="w-50 flex items-center gap-1 ">
                    <AiOutlineRise
                      style={{ color: "green", fontSize: "25px" }}
                    />
                    <p>3.62</p>
                  </div>
                </div>
                <button>details</button>
              </div>
              <hr />
              <div className="d-flex align-items-center gap-5 py-2">
                <div className="flex items-center justify-between w-75">
                  <div className="w-50">strategy_name</div>
                  <div className="w-50 flex items-center gap-1 ">
                    <AiOutlineRise
                      style={{ color: "green", fontSize: "25px" }}
                    />
                    <p>3.62</p>
                  </div>
                </div>
                <button>details</button>
              </div>
              <hr />
            </div>
          </div>
          <div className="col-span-2">
            <div className="flex items-center justify-center">
              <div className="my-1 text-5xl font-roboto heading ">
                <CgDetailsLess
                  style={{ marginBottom: "-15px", marginTop: "11px" }}
                />
                Details
              </div>
            </div>
            <div className={`flex gap-5 mt-4 bg-gray-300 shadow-md rounded-md ${darkMode?"bg-gray-900 border-gray-800":"bg-white border-blue-100"}`}
              style={{ color:"gray",overflow:"auto",borderRadius: "20px",}}>
              <div
                className={`w-full h-full flex justify-between text-3xl relative p-8`}
                style={{
                  border: "3px solid #d3d3e8",
                  color: "gray",
                  overflow: "auto",
                  borderRadius: "20px",
                  backgroundColor: "#fff3f3",
                }}
              >
                <div>Strategy_name</div>
                <div className="flex gap-2">
                  <AiOutlineRise style={{ color: "green", fontSize: "35px" }} />
                  <p>3.62%</p>
                </div>
              </div>
            </div>
            <div className={`flex gap-5 mt-4 bg-gray-300 shadow-md rounded-md ${darkMode?"bg-gray-900 border-gray-800":"bg-white border-blue-100"}`}
              style={{ color:"gray",overflow:"auto",borderRadius: "20px",}}>
              <div
                className={`w-full h-full flex items-center justify-between relative p-8`}
                style={{
                  border: "3px solid #d3d3e8",
                  color: "gray",
                  overflow: "auto",
                  borderRadius: "20px",
                  backgroundColor: "#fff3f3",
                }}
              >
                <div className="flex w-50 justify-between px-5">
                  <b>Avg. Daily Profit</b>
                  <b>$319.54</b>
                </div>
                <div
                  style={{ border: "2px solid #d3d3e8", height: "70px" }}
                ></div>
                <div className="flex w-50 justify-between px-5">
                  <b>Overall Profit</b>
                  <b>$381845</b>
                </div>
              </div>
            </div>
            <div className={`flex gap-5 mt-4 bg-gray-300 shadow-md rounded-md ${darkMode?"bg-gray-900 border-gray-800":"bg-white border-blue-100"}`}
              style={{ color:"gray",overflow:"auto",borderRadius: "20px",}}>
              <div
                className={`w-full h-full flex items-center justify-between relative p-8`}
                style={{
                  border: "3px solid #d3d3e8",
                  color: "gray",
                  overflow: "auto",
                  borderRadius: "20px",
                  backgroundColor: "#fff3f3",
                }}
              >
                <div className="flex w-50 justify-between px-5">
                  <b>Win %(Day)</b>
                  <b>0.65</b>
                </div>
                <div
                  style={{ border: "2px solid #d3d3e8", height: "70px" }}
                ></div>
                <div className="flex w-50 justify-between px-5">
                  <b>Price</b>
                  <b>$500</b>
                </div>
              </div>
            </div>
            <div className={`flex gap-5 mt-4 bg-gray-300 shadow-md rounded-md ${darkMode?"bg-gray-900 border-gray-800":"bg-white border-blue-100"}`}
              style={{ color:"gray",overflow:"auto",borderRadius: "20px",}}>
              <div
                className={`w-full h-full flex items-center justify-between relative p-8 border-2`}
                style={{
                  border: "3px solid #d3d3e8",
                  color: "gray",
                  overflow: "auto",
                  borderRadius: "20px",
                  backgroundColor: "#fff3f3",
                }}
              >
                <div>Action</div>
                <button>View</button>
                <button>Buy</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
