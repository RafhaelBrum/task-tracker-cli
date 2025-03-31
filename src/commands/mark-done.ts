import { readTasks, writeTasks } from "../utils/fileManager";

export default function markDone(id: string) {
    const tasks = readTasks();
    var idNum = Number(id);
    try {
        const element = tasks.find((tasks) => tasks.id === idNum);
        if (element) {
            element.status = "done";
            element.updatedAt = new Date().toISOString();
            console.log(`Task ID ${ idNum } marked as done.`)
        }
    } catch (e) {
        console.log("Invalid ID")
    }
    writeTasks(tasks);
}