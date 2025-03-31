import { readTasks, writeTasks } from "../utils/fileManager";

export default function markInProgress(id: string) {
    const tasks = readTasks();
    var idNum = Number(id);
    const element = tasks.find((tasks) => tasks.id === idNum);
    if (element) {
        element.status = "in-progress";
        element.updatedAt = new Date().toISOString();
        console.log(`Task ID ${ idNum } marked as in-progress.`)
    }
    writeTasks(tasks);
}