import dotenv from "dotenv";
dotenv.config();

import express, { Express } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import routes from "./routes";
import connectDB from "./config/db";
import cookieParser from "cookie-parser";

const app: Express = express();
const PORT = process.env.PORT || 5000;

app.use(cookieParser());

connectDB();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  }),
);

app.use(bodyParser.json());
app.use(morgan("dev"));

app.use("/", routes);

app.listen(PORT, (err) => {
  if (err) {
    console.log("Error starting server: ", err);
    return;
  }
  console.log(`Server is running successfully on port ${PORT}`);
});
