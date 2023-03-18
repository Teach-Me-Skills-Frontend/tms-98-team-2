import { ModalView } from "../ModalView/ModalView.js";
import { createButton, createElementWithClass } from "../utils.js";
import { taskActions, statusActions } from "./utils.js";
import { TaskStatus } from "../../constant.js";

export function buttonActions(task, navButtons, buttons, tasks, onTaskDel, onTaskStatus) {
  switch (task.status) {
    case "ToDo": {
      const editButtons = createElementWithClass("div", "card_edit");

      const editModal = () => {
        new ModalView(
          "modal_edit",
          "modal_edit_cancel",
          "modal_edit_confirm",
          task.title,
          task.description
        );
        editBtn.removeEventListener("click", editModal);
      };

      const editBtn = createButton("Edit", "edit_button");
      editBtn.addEventListener("click", editModal);

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
      addBtn.addEventListener("click", ({ target }) => {
        statusActions(target, tasks, "toInProgress", onTaskStatus, TaskStatus.inProgress,onTaskDel);
      });

      navButtons.style.width = "auto";
      navButtons.append(addBtn);

      buttons.append(editButtons, navButtons);
      break;
    }
    case "InProgress": {
      const backBtn = createButton("Back", "edit_button");
      backBtn.addEventListener("click", ({ target }) => {
        statusActions(target, tasks, "todo", onTaskStatus, TaskStatus.toDo,onTaskDel);
      });

      const completedBtn = createButton("Complete", "complete_button");
      completedBtn.addEventListener("click", ({ target }) => {
        statusActions(target, tasks, "done", onTaskStatus, TaskStatus.done,onTaskDel);
      });

      navButtons.append(backBtn, completedBtn);
      buttons.append(navButtons);
      break;
    }
    case "Done": {
      const undoBtn = createButton("Undo", "delete_button");
      undoBtn.addEventListener("click", ({ target }) => {
        statusActions(target, tasks, "toInProgress", onTaskStatus, TaskStatus.inProgress,onTaskDel);
      });

      navButtons.append(undoBtn);
      buttons.append(navButtons);
      break;
    }
    default:
      console.err("Problem with task status");
  }
}
