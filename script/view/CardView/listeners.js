import { ModalView } from "../ModalView/ModalView.js";
import { taskContainersId } from "./constants.js";
import { createButton, createElementWithClass } from "../utils.js";
import { taskActions } from "./utils.js";

export function containerCheck(task, navButtons, buttons, tasks) {
  switch (task.status) {
    case "ToDo": {
      const editButtons = createElementWithClass("div", "card_edit");

      const editModal = () => {
        new ModalView("modal_add", "modal_add_cancel", "modal_add_confirm", task.title, task.description);
        editBtn.removeEventListener("click", editModal);
      };

      const editBtn = createButton("Edit", "edit_button");
      editBtn.addEventListener("click", editModal);

      const deleteBtn = createButton("Delete", "delete_button");
      deleteBtn.addEventListener("click", ({ target }) => {
        taskActions(target, tasks, "delete");
      });

      editButtons.append(editBtn, deleteBtn);

      const addBtn = createButton("Add", "add_button");
      addBtn.addEventListener("click", ({ target }) => {
        taskActions(target, tasks, "toInProgress");
      });

      navButtons.style.width = "auto";
      navButtons.append(addBtn);

      buttons.append(editButtons, navButtons);
      break;
    }
    case "InProgress": {
      const backBtn = createButton("Back", "edit_button");
      backBtn.addEventListener("click", ({ target }) => {
        taskActions(target, tasks, "todo");
      });

      const completedBtn = createButton("Complete", "complete_button");
      completedBtn.addEventListener("click", ({ target }) => {
        taskActions(target, tasks, "done");
      });

      navButtons.append(backBtn, completedBtn);
      buttons.append(navButtons);
      break;
    }
    case "Done": {
      const undoBtn = createButton("Undo", "delete_button");
      undoBtn.addEventListener("click", ({ target }) => {
        taskActions(target, tasks, "toInProgress");
      });

      navButtons.append(undoBtn);
      buttons.append(navButtons);
      break;
    }
    default:
      console.err("Problem with task status");
  }
}
