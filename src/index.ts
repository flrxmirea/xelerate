import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

import validateEnv from "@utils/validateEnv";

dotenv.config();

validateEnv();

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.sendStatus(200);
});

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default server;
