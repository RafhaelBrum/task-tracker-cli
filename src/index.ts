import fs, { writeFileSync } from 'fs';


import addTask from "./commands/add";
import listTask from "./commands/list";
import updateTask from "./commands/update";
import deleteTask from "./commands/delete";

const command = process.argv[2]
const description = process.argv[3]

console.log(process.argv);


switch (command) {
    case "add":
        addTask(description);
        break;
    case "list":
        listTask();
        break;
    case "update":
        updateTask();
        break;
    case "delete":
        deleteTask();
        break;
    default:
        console.log("No such command");
        break;
}
