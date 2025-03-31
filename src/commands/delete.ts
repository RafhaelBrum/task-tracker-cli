import { readTasks, writeTasks } from "../utils/fileManager";

export default function deleteTask(id: string): void {
    const tasks = readTasks();
    var idNum = Number(id);
    try {
        const element = tasks.find((tasks) => tasks.id === idNum);
        if (element) {
            const newTasks = tasks.filter(task => task.id !== idNum);
            console.log(`Task ID ${ idNum } deleted.`);
            writeTasks(newTasks);

        } else if (!element) {
            console.log(`Task with ID ${ idNum } not found.`);
        }
    } catch (e) {
        console.log("Invalid ID");
    }

}