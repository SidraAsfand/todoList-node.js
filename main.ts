#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.magenta.bold("========>>>>><<<<<========"));
console.log(chalk.green.bold("========>>>>>welcome TO-DO-LIST<<<<<========"));
console.log(chalk.blue.bold("========>>>>><<<<<========"));

let toDolist:string[] = [];
let condition = true;

let   arrayList= async()=>{
  while(condition){
let  option= await inquirer.prompt([
  {
    name: "choices",
    type: "list",
    message: chalk.magenta.bold("choose an options"),
    choices: ["ADD","Delete","view","update","Exit"]
  }

]);

  if(option.choices==="ADD"){
    await addTask();
  
  }
  else if(option.choices==="Delete"){
    await deleteTask();
  }
  else if(option.choices==="view"){
    await veiwTask();
  }
  else if(option.choices==="update"){
    await updateTask();
  }
  else if(option.choices==="Exit"){
    condition=false;
  }
}
}


let addTask = async()=>{
  let tasks = await inquirer.prompt(
    {
      name: "addTask",
      type: "input",
      message: chalk.magenta.bold("add your tasks!"),
    },
  );
  toDolist.push(tasks.addTask);
  console.log(`your task added successfully! ${tasks.addTask} `);
}
let deleteTask = async()=>{
  await veiwTask();
 let taskindex= await inquirer.prompt([
    {
      name: "deleteTask",
      type: "number",
      message: chalk.magenta.bold("select index no: which task you want to delete???!"),
    }
  ])
  let deleteTask=toDolist.splice(taskindex.deleteTask-1,1);
  console.log(`your selective task deleted successfully! ${deleteTask}`);
  
}

let updateTask = async()=>{
  await veiwTask();
 let updateIndex= await inquirer.prompt([
    {
      name: "index",
      type: "number",
      message: chalk.magenta.bold("select index no: which task you want to update???!"),
    },
    {
      name: "newTask",
      type: "input",
      message: chalk.magenta.bold("now enter your new Task!!!!"),

    }
  ])
  toDolist[updateIndex.index-1] =updateIndex.newTask
  console.log(`your selective task deleted successfully! ${updateIndex.index} `);
  
}
  
  
  let veiwTask=()=>{

    toDolist.forEach((task,  index ) => {
      console.log(`${index+1} : ${task}`)
    }
    )

}
arrayList();

