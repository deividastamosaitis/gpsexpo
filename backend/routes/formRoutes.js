import express from "express";
const router = express.Router();
import { createForm, getForm } from "../controllers/formController.js";

router.post("/create", createForm);
router.get("/getform", getForm);

export default router;
