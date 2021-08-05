import "./setup";

import express from "express";
import cors from "cors";
import "reflect-metadata";

import connectDatabase from "./database";

import * as userController from "./controllers/userConroller";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/professors", userController.getProfessors);
app.get("/subjects", userController.getSubjects)
app.get("/tests/:id",userController.getTests)
app.get("/tests/",userController.getTests)
app.get("/semesters", userController.getSemesters)
app.get("/relations", userController.getRelations)
app.post("/sendtest", userController.newTest)

export async function init () {

  await connectDatabase();
  
}

export default app;

