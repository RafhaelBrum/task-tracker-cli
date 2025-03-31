import { readTasks, writeTasks } from "../utils/fileManager";

export default function updateTask(id: string, description: string): void {
    const tasks = readTasks();
    var idNum = Number(id);
    const element = tasks.find((tasks) => tasks.id === idNum);
    if (element) {
        element.description = description;
        element.updatedAt = new Date().toISOString();
        console.log(`Task ID ${ idNum } updated.`)
    }
    writeTasks(tasks);
}