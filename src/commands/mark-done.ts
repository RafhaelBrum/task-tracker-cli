import { readTasks, writeTasks } from "../utils/fileManager";

export default function markDone(id: string) {
    const tasks = readTasks();
    var idNum = Number(id);
    const element = tasks.find((tasks) => tasks.id === idNum);
    if (element) element.status = "done";
    writeTasks(tasks);
}