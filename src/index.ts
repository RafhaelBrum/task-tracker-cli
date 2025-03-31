#!/usr/bin/env node


import addTask from "./commands/add";
import listTask from "./commands/list";
import updateTask from "./commands/update";
import deleteTask from "./commands/delete";
import markDone from "./commands/mark-done";
import markInProgress from "./commands/mark-in-progress";


const command = process.argv[2]
const param1 = process.argv[3]
const param2 = process.argv[4]

console.log(process.argv);


switch (command) {
    case "add":
        addTask(param1); // id
        break;

    case "list":
        listTask(param1); // status
        break;

    case "update":
        updateTask(param1, param2); // id, desc
        break;

    case "delete":
        deleteTask(param1); //id
        break;

    case "mark-done":
        markDone(param1); // id
        break;

    case "mark-in-progress":
        markInProgress(param1); // id
        break;

    default:
        console.log("No such command");
        break;
}
