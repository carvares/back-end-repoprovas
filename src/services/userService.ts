import { getRepository } from "typeorm";
import Professors from "../entities/Professors";
import Relations from "../entities/Relations";
import Semesters from "../entities/Semesters";
import Subjects from "../entities/Subjects";
import Tests from "../entities/Tests";

interface  CreateTest{
  name: string;
  categoryId: number;
  professorId: number;
  subjectId: number;
  link:string;
}
export async function searchProfessors ({id, name}:{id:number,name:string}) {

  if(name){
    const result = await getRepository(Professors).findOne({name:name});
  return result;
  }
  const result = await getRepository(Professors).find();
  return result;
}

export async function searchSubjects ({id, name}:{id:number,name:string}) {
  if(name){
    const result = await getRepository(Subjects).findOne({where:{name:name}, relations: ["semester"]});
  return result;
  }
  const result = await getRepository(Subjects).find({relations:["semester"]});
  
  return result;
}

export async function searchTests(subjectId:number) {
  if(subjectId){
    const result = await getRepository(Tests).find({where:{subject: subjectId} ,relations: ["category","subject","professor","subject.semester"]});
    return result;
  }
  const result = await getRepository(Tests).find();
    return result;
}
export async function searchPeriods() {
  const result = await getRepository(Semesters).find()
  return result;
  
}
export async function seachRelations() {
  const result = await getRepository(Relations).find({relations:["professor","subject"]})
  return result
}
export async function insertTest(body:CreateTest) {
  await getRepository(Tests).insert(body)
}


/*const result = await getRepository(Tests).find({
    relations:["category", "subject","professor"],
    select:["name"]
  })
  console.log(result)
  return result;*/

  /*
  const result = await getRepository(Tests).find({
    join:{alias:"test",leftJoinAndSelect:{
      category:"test.name"
    }}
  })
  console.log(result)
  return result;
  */