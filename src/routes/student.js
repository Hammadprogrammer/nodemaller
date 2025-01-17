import express from "express";
import {
  addStudent,
  getAllStudent,
  getStudent,
  sendEmail,
} from "../controllers/student.controllers.js";

const router = express.Router();

router.post("/student", addStudent);
router.get("/student/:id", getStudent);
router.get("/student", getAllStudent);
router.get("/sendemail", sendEmail);

export default router;