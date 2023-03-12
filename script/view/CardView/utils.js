import { taskContainersId } from "./constants.js";
import { TaskCard } from "./TaskCard.js";
import { TaskStatus } from "../../constant.js";
import { TaskModel } from "../../model/index.js";

export function taskActions(el, tasks, action) {
  const element = el.parentNode.parentNode.parentNode;

  switch (action) {
    case "todo": {
      for (const task of tasks) {
        if (element.id === task.id) {
          task.status = TaskStatus.toDo;

          element.remove();

          new TaskCard(tasks, tasks.indexOf(task));
        }
      }
      console.log(tasks);
      break;
    }
    case "toInProgress": {
      for (const task of tasks) {
        if (element.id === task.id) {
          task.status = TaskStatus.inProgress;

          element.remove();

          new TaskCard(tasks, tasks.indexOf(task));
        }
      }
      console.log(tasks);
      break;
    }
    case "edit": {
      break;
    }
    case "delete": {
      for (const task of tasks) {
        if (element.id === task.id) {
          const taskIndex = tasks.indexOf(task);
          tasks.splice(taskIndex, 1);
          console.log(tasks);
        }
      }
      element.remove();
      console.log(tasks);
      break;
    }
    case "done": {
      for (const task of tasks) {
        if (element.id === task.id) {
          task.status = TaskStatus.done;

          element.remove();

          new TaskCard(tasks, tasks.indexOf(task));
        }
      }
      console.log(tasks);
      break;
    }
  }
}
