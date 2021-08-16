import express from "express";
import sequelize from "./models";
import "dotenv/config";
import User from "./routes/user";

const app = express();
sequelize.sync();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(User);

app.listen(process.env.PORT);
