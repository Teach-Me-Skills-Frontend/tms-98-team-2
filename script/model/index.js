import { LocalStorageKey } from "./constants.js";
import { TaskStatus } from "../constant.js";

export class TaskModel {
  constructor() {
    const savedTasks = localStorage.getItem(LocalStorageKey.Tasks);
    const tasks = savedTasks ? JSON.parse(savedTasks) : [];

    const savedUsers = localStorage.getItem(LocalStorageKey.Users);
    const users = savedUsers ? JSON.parse(savedUsers) : [];

    this.getCurrentTasks = () => {
      return tasks.slice();
    };

    this.addTask = (newTask) => {
      tasks.push(newTask);
      localStorage.setItem(LocalStorageKey.Tasks, JSON.stringify(tasks));

      return tasks;
    };

    this.removeTask = (taskId) => {
      
      const taskIndex = tasks.findIndex(({ id }) => id === taskId);

      if (taskIndex >= 0) {
        tasks.splice(taskIndex, 1);
        localStorage.setItem(LocalStorageKey.Tasks, JSON.stringify(tasks));
      }

      return taskIndex > -1;
    };

    this.setTaskStatus = (taskId, taskStatus) => {
      
      const taskIndex = tasks.findIndex(({ id }) => id === taskId);

      if (taskIndex >= 0) {
        tasks[taskIndex] = {
          ...tasks[taskIndex],
          status: taskStatus,
        };
        localStorage.setItem(LocalStorageKey.Tasks, JSON.stringify(tasks));
      }
    };

    this.doneAll = (tasks) => {
      
      for (const task of tasks) {
        if (task.status === TaskStatus.inProgress) {
          task.status = TaskStatus.done
        }
      }

      localStorage.setItem(LocalStorageKey.Tasks, JSON.stringify(tasks));

    }

    this.getValue = (tasks) => {
      let todoValue = 0;
      let inProgressValue = 0;
      let doneValue = 0;

      for(const task of tasks) {
          if (task.status === TaskStatus.toDo) {
              todoValue += 1
          } 
          if (task.status === TaskStatus.inProgress) {
              inProgressValue += 1
          } 
          if (task.status === TaskStatus.done) {
              doneValue += 1
          } 
      }

      const statusCount = {
          todo: todoValue,
          inProgress: inProgressValue,
          done: doneValue,
      }

      return statusCount
    }

    this.getUsers = () => {
      return users.slice();
    };

    this.addUser = (userName) => {
      users.push(userName);
      localStorage.setItem(LocalStorageKey.Users, JSON.stringify(users));
    };
  }
}
