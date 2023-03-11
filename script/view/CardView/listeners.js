import { ModalView } from "../ModalView/ModalView.js";
import { taskContainers } from "./constants.js";
import { createButton, createElementWithClass } from "../utils.js";
import { toInProgressTask, toCompleteTask, toEditTask, deleteTask } from "./utils.js";

export function containerCheck(containerId, navButtons, buttons) {
  if (containerId === taskContainers.add) {
    const editButtons = createElementWithClass("div", "card_edit");

    const editModal = () => {
      new ModalView(containerId);
      editBtn.removeEventListener("click", editModal);
    };

    const editBtn = createButton("Edit", "edit_button");
    editBtn.addEventListener("click", editModal);

    const deleteBtn = createButton("Delete", "delete_button");
    deleteBtn.addEventListener("click", ({ target }) => {
      deleteTask(target);
    });

    editButtons.append(editBtn, deleteBtn);

    const addBtn = createButton("Add", "add_button");
    addBtn.addEventListener("click", ({ target }) => {
      toInProgressTask(target);
    });

    navButtons.style.width = "auto";
    navButtons.append(addBtn);

    buttons.append(editButtons, navButtons);
  } else if (containerId === taskContainers.inProgress) {
    const backBtn = createButton("Back", "edit_button");
    backBtn.addEventListener("click", ({ target }) => {
      toEditTask(target);
    });

    const completedBtn = createButton("Complete", "complete_button");
    completedBtn.addEventListener("click", ({ target }) => {
      toCompleteTask(target);
    });

    navButtons.append(backBtn, completedBtn);
    buttons.append(navButtons);
  } else {
    const undoBtn = createButton("Undo", "delete_button");
    undoBtn.addEventListener("click", ({ target }) => {
      toInProgressTask(target);
    });

    navButtons.append(undoBtn);
    buttons.append(navButtons);
  }
}
