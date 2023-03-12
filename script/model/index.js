import { LocalStorageKey } from "./constants.js";

export class TaskModel {
  constructor() {
    const savedTasks = localStorage.getItem(LocalStorageKey.Tasks);
    const tasks = savedTasks ? JSON.parse(savedTasks) : [];

    this.getCurrentTasks = () => {
      return tasks.slice();
    };

    this.addTask = (newTask) => {
      tasks.push(newTask);
      localStorage.setItem(LocalStorageKey.Tasks, JSON.stringify(tasks));

      return newTask;
    };
  }
}
