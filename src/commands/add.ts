import { Task } from '../types/task';
import { readTasks, writeTasks } from '../utils/fileManager';

export default function addTask(description: string): void {
    const fileData = readTasks();
    let maxId = 0
    if (fileData.length !== 0) {
        const ids = fileData.map(({ id }) => id);
        maxId = Math.max(...ids);
    }
    const dateNow = new Date();

    let newTask: Task = {
        id: maxId + 1,
        description: description,
        status: "todo",
        createdAt: dateNow.toISOString(),
        updatedAt: dateNow.toISOString(),
    };
    fileData.push(newTask);

    writeTasks(fileData);
    console.log(`Task added succefully (ID: ${ newTask.id } )`);

}