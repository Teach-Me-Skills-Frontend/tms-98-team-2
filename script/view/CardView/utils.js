import { ModalEditView } from "../ModalView/index.js";
import { taskContainers } from "./constants.js";
import { createButton, createElementWithClass } from "../utils.js";

export function containerCheck(containerId, navButtons, buttons) {
  if (containerId === taskContainers.add) {
    const editButtons = createElementWithClass("div", "card_edit");

    const editBtn = createButton("Edit", "edit_button");
    editBtn.addEventListener("click", () => {
      const modalEdit = new ModalEditView(containerId);
      console.log("edit");
    });

    const deleteBtn = createButton("Delete", "delete_button");
    deleteBtn.addEventListener("click", () => {
      console.log("delete");
    });

    editButtons.append(editBtn, deleteBtn);

    const addBtn = createButton("Add", "navButtons");
    addBtn.addEventListener("click", ({ target }) => {
      console.log("add");
      //toInProgressTask(target);
    });

    navButtons.style.width = "auto";
    navButtons.append(addBtn);

    buttons.append(editButtons, navButtons);
  } else if (containerId === taskContainers.inProgress) {
    const backBtn = createButton("Back", "navButtons");
    backBtn.addEventListener("click", ({ target }) => {
      console.log("back");
      //toEditTask(target);
    });

    const completedBtn = createButton("Complete", "navButtons");
    completedBtn.addEventListener("click", (target) => {
      console.log("complete");
      //toCompleteTask(target);
    });

    navButtons.append(backBtn, completedBtn);
    buttons.append(navButtons);
  } else {
    const undoBtn = createButton("Undo", "navButtons");
    undoBtn.addEventListener("click", (target) => {
      console.log("undo");
      //toInprogressTask(target);
    });

    navButtons.append(undoBtn);
    buttons.append(navButtons);
  }
}
