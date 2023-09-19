import asyncHandler from "express-async-handler";
import Forma from "../models/formModel.js";

// @desc   Register a new user
// route   POST /api/users
// @access Public
const createForm = asyncHandler(async (req, res) => {
  const {
    name,
    email,
    telNumber,
    cameraCount,
    utpCables,
    nightTime,
    howLong,
    money,
    address,
    details,
  } = req.body;

  const form = await Forma.create({
    name,
    email,
    telNumber,
    cameraCount,
    utpCables,
    nightTime,
    howLong,
    money,
    address,
    details,
  });
  if (form) {
    res.status(201).json("Veikia");
  } else {
    res.status(400);
    throw new Error("ne tokie duomenys");
  }
});

// @desc   Get user profile
// route   GET /api/form/getform
// @access Private

const getForm = asyncHandler(async (req, res) => {
  const forms = await Forma.find({}).sort({ createdAt: -1 });
  res.status(200).json(forms);
});

// @desc   Update user profile
// route   PUT /api/users/profile
// @access Private
// const updateUserProfile = asyncHandler(async (req, res) => {
//   const user = await User.findById(req.user._id);

//   if (user) {
//     user.name = req.body.name || user.name;
//     user.email = req.body.email || user.email;
//     if (req.body.password) {
//       user.password = req.body.password;
//     }

//     const updatedUser = await user.save();

//     res.status(200).json({
//       _id: updatedUser._id,
//       name: updatedUser.name,
//       email: updatedUser.email,
//     });
//   } else {
//     res.status(404);
//     throw new Error("User not found");
//   }
// });

export { createForm, getForm };
