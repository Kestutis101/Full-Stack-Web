import express from "express";
import {
  createClient,
  getAllClient,
  updateClient,
  deleteClient,
} from "../controllers/client.js";
import {
  clientDoestExist,
  checkClientExists,
} from "../middleware/middleware.js";
import { login, register, handleBadRequests } from "../controllers/user.js";

const router = express.Router();

router.get("/clients", getAllClient);
router.post("/clients/register", checkClientExists, createClient);
router.put("/clients/:id", clientDoestExist, updateClient);
router.delete("/clients/:id", clientDoestExist, deleteClient);
router.all("/*", handleBadRequests);

router.post("/login", login);
router.post("/register", register);

export default router;
