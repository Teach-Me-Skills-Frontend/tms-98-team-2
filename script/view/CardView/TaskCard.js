import { createInnerElement, createElementWithClass } from "../utils.js";
import { taskConstants, taskContainersId } from "./constants.js";
import { buttonActions } from "./listeners.js";

export class TaskCard {
  constructor(tasks, onTaskDel, onTaskStatus) {
    this.onTaskStatus = onTaskStatus;
    this.onTaskDel = onTaskDel;

    if (tasks.length != 0) {
      for (const task of tasks) {
        this.createNewTaskCard(task, tasks);
      } 
    }
  }

  createNewTaskCard = (task, tasks) => {
    for (const key in taskContainersId) {
      if (key === task.status) {
        const root = document.getElementById(taskContainersId[key]);

        const card = createElementWithClass("div", "card");
        card.setAttribute("id", task.id);

        this.createInnerCard(card, task, this.onTaskDel, this.onTaskStatus, tasks, this.createNewTaskCard.bind(this));

        root.append(card);
      }
    }
  };

  createInnerCard = (card, task, onTaskDel, onTaskStatus, tasks, createNewTaskCard) => {
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
    buttonActions(task, navButtons, buttons, onTaskDel, onTaskStatus, tasks, createNewTaskCard);

    card.append(title, description, information, buttons);
  };
}
