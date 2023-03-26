import { LocalStorageKey } from './constants.js';
import { TaskStatus } from '../constant.js';

export class TaskModel {
  constructor() {
    const savedTasks = localStorage.getItem(LocalStorageKey.Tasks);
    let tasks = savedTasks ? JSON.parse(savedTasks) : [];

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

    this.removeAllTask = () => {
      tasks = tasks.filter((task) => task.status !== TaskStatus.done);
      localStorage.setItem(LocalStorageKey.Tasks, JSON.stringify(tasks));
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

    this.editTask = (taskId, textTitle, textDescription, userSelect) => {
      const taskIndex = tasks.findIndex(({ id }) => id === taskId);
      if (taskIndex >= 0) {
        tasks[taskIndex] = {
          ...tasks[taskIndex],
          title: textTitle,
          description: textDescription,
          user: userSelect,
        };
        localStorage.setItem(LocalStorageKey.Tasks, JSON.stringify(tasks));
      }
    };

    this.doneAll = () => {
      for (const task of tasks) {
        if (task.status === TaskStatus.inProgress) {
          task.status = TaskStatus.done;
        }
      }

      localStorage.setItem(LocalStorageKey.Tasks, JSON.stringify(tasks));
    };

    this.getValue = (tasks) => {
      return tasks.reduce(
        (acc, task) => {
          acc[task.status] += 1;
          return acc;
        },
        {
          [TaskStatus.toDo]: 0,
          [TaskStatus.inProgress]: 0,
          [TaskStatus.done]: 0,
        }
      );
    };

    this.getUsers = () => {
      return users.slice();
    };

    this.addUser = (userName) => {
      users.push(userName);
      localStorage.setItem(LocalStorageKey.Users, JSON.stringify(users));
    };

    this.delUser = (index) => {
      users.splice(index, 1);
      localStorage.setItem(LocalStorageKey.Users, JSON.stringify(users));
    };

    this.delAllUsers = () => {
      users.splice(0, users.length);
      localStorage.setItem(LocalStorageKey.Users, JSON.stringify(users));
    };
  }
}
