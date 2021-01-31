import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import userRoutes from "./routes/user.js";
import goalRoutes from "./routes/goal.js";

const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();

app.use(bodyParser.json());
app.use(cors());

// routes
app.use("/users", userRoutes);
app.use("/goals", goalRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

mongoose.connect(
  process.env.CONNECT_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  () => {
    console.log("Connected to db!");
  }
);

mongoose.set('useFindAndModify', false);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
