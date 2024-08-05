const express = require("express");
const {
  createUser,
  loginUserCtrl,
  addToWatchList,
  getWatchList,
} = require("../controller/userCtrl");
const { authMiddleware } = require("../middlewares/authMiddlewares");

const router = express.Router();
//authroute->userctrl->usermodel tocheck user
router.post("/login", loginUserCtrl);
router.post("/register", createUser);
router.put("/watchlist",authMiddleware,addToWatchList);
router.get("/watchlist",authMiddleware,getWatchList);
module.exports = router;