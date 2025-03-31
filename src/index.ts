import addTask from "./commands/add";
import listTask from "./commands/list";
import updateTask from "./commands/update";
import deleteTask from "./commands/delete";
import markDone from "./commands/mark-done";
import markInProgress from "./commands/mark-in-progress";


const command = process.argv[2]
const description = process.argv[3]
const status = process.argv[3]
const id = process.argv[3]

console.log(process.argv);


switch (command) {
    case "add":
        addTask(description);
        break;

    case "list":
        listTask(status);
        break;

    case "update":
        updateTask();
        break;

    case "delete":
        deleteTask();
        break;

    case "mark-done":
        markDone(id);
        break;

    case "mark-in-progress":
        markInProgress(id);
        break;

    default:
        console.log("No such command");
        break;
}
