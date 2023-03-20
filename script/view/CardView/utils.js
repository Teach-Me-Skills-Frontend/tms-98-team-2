import { TaskStatus } from "../../constant.js";

export function taskActions(element, tasks, action, createNewTaskCard) {
  switch (action) {
    case "todo": {
      for (const task of tasks) {
        if (element.id === task.id) {
          task.status = TaskStatus.toDo;

          element.remove();
          createNewTaskCard(task, tasks);
        }
      }
      break;
    }
    case "toInProgress": {
      for (const task of tasks) {
        if (element.id === task.id) {
          task.status = TaskStatus.inProgress;

          element.remove();
          createNewTaskCard(task, tasks);
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
          createNewTaskCard(task, tasks);
        }
      }
      break;
    }
  }
}

export function statusActions(target, tasks, action, onTaskStatus, status, createNewTaskCard) {
  const element = target.parentNode.parentNode.parentNode;
  for (const task of tasks) {
    if (element.id === task.id) {
      taskActions(element, tasks, action, createNewTaskCard);
      onTaskStatus(task.id, status);
    }
  }
}
