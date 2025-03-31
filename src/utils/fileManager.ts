import fs from 'fs';
import { Task } from '../types/task';

function ensureTaskFileExists(): void {
    if (fs.existsSync('tasks.json')) return;
    else fs.writeFileSync('tasks.json', '[]');
}

export function readTasks(): Task[] {
    ensureTaskFileExists();
    const data = fs.readFileSync('tasks.json', 'utf-8');
    const tasks = JSON.parse(data);
    return tasks;
}

export function writeTasks(task: Task[]): void {
    ensureTaskFileExists();
    let newTask = JSON.stringify(task, null, 2);
    fs.writeFileSync('tasks.json', newTask);
}