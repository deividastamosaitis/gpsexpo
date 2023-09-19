import express from "express";
const router = express.Router();
import {
  createForm,
  getForms,
  getForm,
} from "../controllers/formController.js";

router.post("/create", createForm);
router.get("/getforms", getForms);
router.get("/getforms/:id", getForm);

export default router;
