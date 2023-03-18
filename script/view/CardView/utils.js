import { TaskCard } from "./TaskCard.js";
import { TaskStatus } from "../../constant.js";

export function taskActions(element, tasks, action,onTaskStatus,onTaskDel) {
  switch (action) {
    case "todo": {
      for (const task of tasks) {
        if (element.id === task.id) {
          task.status = TaskStatus.toDo;

          element.remove();
          new TaskCard(tasks, tasks.indexOf(task),onTaskDel, onTaskStatus);
        }
      }
      break;
    }
    case "toInProgress": {
      for (const task of tasks) {
        if (element.id === task.id) {
          task.status = TaskStatus.inProgress;

          element.remove();
          new TaskCard(tasks, tasks.indexOf(task),onTaskDel, onTaskStatus);
        }
      }
      break;
    }
    case "delete": {
      for (const task of tasks) {
        if (element.id === task.id) {
          const taskIndex = tasks.indexOf(task);
          tasks.splice(taskIndex, 1);
        }
      }
      element.remove();
      break;
    }
    case "done": {
      for (const task of tasks) {
        if (element.id === task.id) {
          task.status = TaskStatus.done;

          element.remove();
          new TaskCard(tasks, tasks.indexOf(task),onTaskDel, onTaskStatus);
        }
      }
      break;
    }
  }
}

export function statusActions(target, tasks, action, onTaskStatus, status,onTaskDel) {
  const element = target.parentNode.parentNode.parentNode;
  for (const task of tasks) {
    if (element.id === task.id) {
      taskActions(element, tasks, action,onTaskStatus,onTaskDel);
      onTaskStatus(task.id, status);
    }
  }
}
