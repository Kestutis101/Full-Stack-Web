import express from "express";
import {
  createClient,
  getAllClient,
  updateClient,
  deleteClient,
} from "../controllers/client.js";
import {
  clientDoesntExist,
  checkClientExists,
} from "../middleware/middleware.js";
import { login, register } from "../controllers/user.js";

const router = express.Router();

router.get("/clients", getAllClient);
router.post("/clients/register", checkClientExists, createClient);
router.put("/clients/:id", clientDoesntExist, updateClient);
router.delete("/clients/:id", clientDoesntExist, deleteClient);

router.post("/login", login);
router.post("/register", register);

export default router;
