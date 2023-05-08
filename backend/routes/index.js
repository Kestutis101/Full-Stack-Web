import express from "express";
import {
  createClient,
  getAllClient,
  updateClient,
  deleteClient,
} from "../controllers/index.js";
import { userDoesntExist } from "../middleware/middleware.js";

const router = express.Router();

router.get("/client", getAllClient);
router.post("/client", createClient);
router.put("/client/:id", userDoesntExist, updateClient);
router.delete("/client/:id", userDoesntExist, deleteClient);

export default router;
