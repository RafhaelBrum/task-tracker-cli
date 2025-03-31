import { readTasks, writeTasks } from "../utils/fileManager";

export default function markInProgress(id: string) {
    const tasks = readTasks();
    var idNum = Number(id);
    const element = tasks.find((tasks) => tasks.id === idNum);
    if (element) element.status = "in-progress";
    writeTasks(tasks);
}