import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 4000;

const app = express();
app.use(cors);

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Connected!"))
  .catch((err) => console.log(err));

app.listen(PORT, () => console.log(`This app running on port: ${PORT}`));
