import { createInnerElement, createElementWithClass } from "../utils.js";
import { taskConstants, taskContainersId } from "./constants.js";
import { buttonActions } from "./listeners.js";

export class TaskCard {
  constructor(tasks, index = tasks.length - 1, onTaskDel, onTaskStatus) {
    this.onTaskStatus = onTaskStatus;
    this.onTaskDel = onTaskDel;
    this.tasks = tasks;

    if (tasks.length != 0) {
      if (index === -1) {
        //this.createSavedCards(tasks);
        for (const task of tasks) {
          for (const key in taskContainersId) {
            if (key === task.status) {
              const root = document.getElementById(taskContainersId[key]);

              const card = createElementWithClass("div", "card");
              card.setAttribute("id", task.id);

              this.createInnerCard(card, task, this.onTaskDel, this.onTaskStatus, tasks);

              root.append(card);
            }
          }
        }
      } else {
        const task = tasks[index];

        for (const key in taskContainersId) {
          if (key === task.status) {
            const root = document.getElementById(taskContainersId[key]);

            const card = createElementWithClass("div", "card");
            card.setAttribute("id", task.id);

            this.createInnerCard(card, task, this.onTaskDel, this.onTaskStatus, tasks);

            root.append(card);
          }
        }
      }
    }
  }

  //createSavedCards = (tasks) => {};

  createNewTaskCard = (task) => {
    for (const key in taskContainersId) {
      if (key === task.status) {
        const root = document.getElementById(taskContainersId[key]);

        const card = createElementWithClass("div", "card");
        card.setAttribute("id", task.id);

        const title = createInnerElement("div", [taskConstants.title], [task.title], "card_header");

        const description = createInnerElement(
          "div",
          [taskConstants.tagHeader, taskConstants.tagInner],
          [taskConstants.description, task.description],
          "card_description"
        );

        const information = createElementWithClass("div", "card_information");

        information.append(
          createInnerElement(
            "div",
            [taskConstants.tagHeader, taskConstants.tagInner],
            [taskConstants.user, task.user],
            "card_user"
          )
        );
        information.append(
          createInnerElement("div", [taskConstants.tagHeader], [task.date], "card_user")
        );

        const buttons = createElementWithClass("div", "card_buttons");
        const navButtons = createElementWithClass("div", "card_navigation");
        buttonActions(task, navButtons, buttons, this.onTaskDel, this.onTaskStatus, this.tasks);
        /* const editButtons = createElementWithClass("div", "card_edit");

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
          statusActions(
            target,
            tasks,
            "toInProgress",
            onTaskStatus,
            TaskStatus.inProgress,
            onTaskDel
          );
        });

        navButtons.style.width = "auto";
        navButtons.append(addBtn);

        buttons.append(editButtons, navButtons);
*/
        card.append(title, description, information, buttons);

        root.append(card);
      }
    }
  };

  createInnerCard = (card, task, onTaskDel, onTaskStatus, tasks) => {
    const title = createInnerElement("div", [taskConstants.title], [task.title], "card_header");

    const description = createInnerElement(
      "div",
      [taskConstants.tagHeader, taskConstants.tagInner],
      [taskConstants.description, task.description],
      "card_description"
    );

    const information = createElementWithClass("div", "card_information");

    information.append(
      createInnerElement(
        "div",
        [taskConstants.tagHeader, taskConstants.tagInner],
        [taskConstants.user, task.user],
        "card_user"
      )
    );
    information.append(
      createInnerElement("div", [taskConstants.tagHeader], [task.date], "card_user")
    );

    const buttons = createElementWithClass("div", "card_buttons");
    const navButtons = createElementWithClass("div", "card_navigation");
    buttonActions(task, navButtons, buttons, onTaskDel, onTaskStatus, tasks);

    card.append(title, description, information, buttons);
  };
}
