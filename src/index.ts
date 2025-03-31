import fs, { writeFileSync } from 'fs';


import addTask from "./commands/add";
import listTask from "./commands/list";
import updateTask from "./commands/update";
import deleteTask from "./commands/delete";

const command = process.argv[2]

console.log(process.argv);

// try {
//     const jsonTasks = fs.readFileSync('tasks.json', 'utf-8');
//     const data = JSON.parse(jsonTasks);
//     console.log(data);

// } catch (e) {
//     console.log("JSON file does not exists. Creating JSON file...");
//     writeFileSync('tasks.json', '');
//     console.log('JSON File created.');
// }



switch (command) {
    case "add":
        addTask();
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
