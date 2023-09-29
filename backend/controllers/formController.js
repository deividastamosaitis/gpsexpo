import asyncHandler from "express-async-handler";
import Forma from "../models/formModel.js";

// @desc   Register a new user
// route   POST /api/forms
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

// @desc   Get all forms
// route   GET /api/forms/getforms
// @access Private

const getForms = asyncHandler(async (req, res) => {
  const forms = await Forma.find({}).sort({ createdAt: -1 });
  res.status(200).json(forms);
});

// @desc   Get one form
// route   GET /api/forms/getform/:id
// @access Private

const getForm = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const form = await Forma.findById(id);
  if (!form) {
    return res.status(404).json({ error: "nera tokios formos" });
  }
  res.status(200).json(form);
});

// @desc   Update user profile
// route   PATCH /api/users/profile
// @access Private
const updateForm = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const form = await Forma.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(200).json(form);
  } catch (error) {
    res.status(404).json({ error: "nera tokios formos" });
  }
});

export { createForm, getForms, getForm, updateForm };
