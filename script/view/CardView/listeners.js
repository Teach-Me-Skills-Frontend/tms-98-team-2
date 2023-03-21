import { createButton, createElementWithClass } from "../utils.js";
import { taskActions, statusActions } from "./utils.js";
import { TaskStatus } from "../../constant.js";

export function buttonActions(task, navButtons, buttons, onTaskDel, onTaskStatus, tasks, createNewTaskCard, onEditTask) {
  switch (task.status) {
    case "ToDo": {
      const editButtons = createElementWithClass("div", "card_edit");

      const editBtn = createButton("Edit", "edit_button");
      editBtn.id = 'edit_button'

      const deleteBtn = createButton("Delete", "delete_button");
      deleteBtn.addEventListener("click", ({ target }) => {
        const element = target.parentNode.parentNode.parentNode;
        for (const task of tasks) {
          if (element.id === task.id) {
            onTaskDel(task.id);
            taskActions(element, tasks, "delete");
          }
        }
      });

      editButtons.append(editBtn, deleteBtn);

      const addBtn = createButton("Add", "add_button");
      addBtn.id='add';
      addBtn.addEventListener("click", ({ target }) => {
        statusActions(
          target,
          tasks,
          "toInProgress",
          onTaskStatus,
          TaskStatus.inProgress,
          createNewTaskCard
        );
      });

      navButtons.append(addBtn);

      buttons.append(editButtons, navButtons);
      break;
    }
    case "InProgress": {
      const backBtn = createButton("Back", "edit_button");
      backBtn.addEventListener("click", ({ target }) => {
        statusActions(target, tasks, "todo", onTaskStatus, TaskStatus.toDo, createNewTaskCard);
      });

      const completedBtn = createButton("Complete", "complete_button");
      completedBtn.addEventListener("click", ({ target }) => {
        statusActions(target, tasks, "done", onTaskStatus, TaskStatus.done, createNewTaskCard);
      });

      navButtons.append(backBtn, completedBtn);
      buttons.append(navButtons);
      break;
    }
    case "Done": {
      const undoBtn = createButton("Undo", "delete_button");
      undoBtn.addEventListener("click", ({ target }) => {
        statusActions(target, tasks, "toInProgress", onTaskStatus, TaskStatus.inProgress, createNewTaskCard);
      });

      const deleteBtn = createButton("Delete", "delete_button");
      deleteBtn.addEventListener("click", ({ target }) => {
        const element = target.parentNode.parentNode.parentNode;
        for (const task of tasks) {
          if (element.id === task.id) {
            onTaskDel(task.id);
            taskActions(element, tasks, "delete");
          }
        }
      });

      navButtons.append(undoBtn, deleteBtn);
      buttons.append(navButtons);
      break;
    }
    default:
      console.err("Problem with task status");
  }
}
