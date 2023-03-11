import { taskContainers } from "./constants.js";
import { TaskCard } from "./TaskCard.js";

export function toInProgressTask(el) {
  el.parentNode.parentNode.parentNode.remove();

  new TaskCard(taskContainers.inProgress);
}

export function toEditTask(el) {
  el.parentNode.parentNode.parentNode.remove();

  new TaskCard(taskContainers.add);
}

export function toCompleteTask(el) {
  el.parentNode.parentNode.parentNode.remove();

  new TaskCard(taskContainers.completed);
}

export function deleteTask(el) {
  el.parentNode.parentNode.parentNode.remove();
}
