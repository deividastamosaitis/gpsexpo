import express from "express";
const router = express.Router();
import {
  createForm,
  getForms,
  getForm,
  updateForm,
} from "../controllers/formController.js";

router.post("/create", createForm);
router.get("/getforms", getForms);
router.get("/getforms/:id", getForm);
router.patch("/getforms/:id", updateForm);

export default router;
