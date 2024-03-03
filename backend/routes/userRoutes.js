import express from "express";
import { updateUser, deleteUser } from "../controllers/userController.js";
import { verifyToken } from "../middlewares/verfiyUser.js";
const router = express.Router();

router.put("/update/:id", verifyToken, updateUser);
router.delete("/delete/:id", verifyToken, deleteUser);

export default router;
