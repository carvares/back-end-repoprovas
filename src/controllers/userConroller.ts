import { Request, Response } from "express";

import * as userService from "../services/userService";

export async function getProfessors (req: Request, res: Response) {
  try {
    const result = await userService.searchProfessors(req.body);
    res.send(result);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

export async function getSubjects (req: Request, res: Response) {
  try {
    const result = await userService.searchSubjects(req.body);
    res.send(result);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

export async function getTests (req: Request, res: Response) {
  try {
    const subjectId = Number(req.params.id)
    const result = await userService.searchTests(subjectId);
    res.send(result);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}
export async function getSemesters(req: Request, res:Response) {
  try{
    const result = await userService.searchPeriods();
    res.send(result);
  } catch(err){
    console.error(err);
    res.sendStatus(500)
  }
}

export async function getRelations(req:Request, res:Response) {
  try{
    const result = await userService.seachRelations();
    res.send(result)
  }catch(err){
  console.log(err);
  res.sendStatus(500);
}
}

export async function newTest(req:Request, res:Response) {
  try{
    await userService.insertTest(req.body)
    res.sendStatus(201)
  } catch(err){
    console.log(err);
    res.sendStatus(500)
  }
}