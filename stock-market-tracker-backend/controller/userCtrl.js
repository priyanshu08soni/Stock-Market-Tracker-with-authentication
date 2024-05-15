const { generateToken } = require("../config/jwtToken");
const User = require("../models/userModels");

const asyncHandler = require("express-async-handler");

const createUser = asyncHandler(async (req, res) => {
  //asigning the email that is filled in form to email variable.
  const email = req.body.email;
  const findUser = await User.findOne({ email: email });
  if (!findUser) {
    //create a new user
    const newUser = await User.create(req.body);
    res.json(newUser);
  } else {
    //user is already exist
    throw new Error("User Already Exists");
  }
});

const loginUserCtrl = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  //check if user exists or not
  const findUser = await User.findOne({ email });
  if (findUser && (await findUser.isPasswordMatched(password))) {
    const updateuser = await User.findByIdAndUpdate(
      findUser.id,
      {
        new: true,
      }
    );
    res.json({
      _id: findUser?._id,
      firstname: findUser?.firstname,
      lastname: findUser?.lastname,
      email: findUser?.email,
      mobile: findUser?.mobile,
      watchlist:findUser?.watchlist,
      token: generateToken(findUser?._id),
    });
  } else {
    throw new Error("Invalid Credentials");
  }
});
const addToWatchList = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { title } = req.body;
  try {
    let user = await User.findByIdAndUpdate(
      _id,
      {
        $push: { watchlist: title },
      },
      {
        new: true,
      }
    );
    res.json(user);
  } catch (error) {
    throw new Error(error);
  }
});
const getWatchList = asyncHandler(async (req, res) => {
  const { _id } = req.user;

  try {
    const findUser = await User.findById(_id).populate("watchlist");
    res.json(findUser);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createUser,
  loginUserCtrl,
  addToWatchList,
  getWatchList
};
