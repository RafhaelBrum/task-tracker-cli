import { read, stat } from "fs";
import { Task } from "../types/task";
import { readTasks } from "../utils/fileManager";

export default function listTasks(status?: string): void {
    const tasks = readTasks();
    const todo = tasks.filter(task => task.status === 'todo');
    const inProgress = tasks.filter(task => task.status === 'in-progress');
    const done = tasks.filter(task => task.status === 'done');

    switch (status) {
        case 'todo':
            console.table(todo);
            break;

        case 'in-progress':
            console.table(inProgress);
            break;

        case 'done':
            console.table(done);
            break;

        default:
            console.table(tasks);
            break;
    }


}