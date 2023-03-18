import { createInnerElement, createElementWithClass } from "../utils.js";
import { taskConstants, taskContainersId } from "./constants.js";
import { buttonActions } from "./listeners.js";

export class TaskCard {
  constructor(tasks, index = tasks.length - 1, onTaskDel, onTaskStatus) {
    this.onTaskStatus = onTaskStatus;
    this.onTaskDel = onTaskDel;

    if (tasks.length != 0) {
      if (index === -1) {
        this.createNewCard(tasks);
      } else {
        const task = tasks[index];

        for (const key in taskContainersId) {
          if (key === task.status) {
            const root = document.getElementById(taskContainersId[key]);

            const card = createElementWithClass("div", "card");
            card.setAttribute("id", task.id);

            this.createInnerCard(card, task, tasks, this.onTaskDel, this.onTaskStatus);

            root.append(card);
          }
        }
      }
    }
  }

  createNewCard = (tasks) => {
    for (const task of tasks) {
      for (const key in taskContainersId) {
        if (key === task.status) {
          const root = document.getElementById(taskContainersId[key]);

          const card = createElementWithClass("div", "card");
          card.setAttribute("id", task.id);

          this.createInnerCard(card, task, tasks, this.onTaskDel, this.onTaskStatus);

          root.append(card);
        }
      }
    }
  };

  createInnerCard = (card, task, tasks, onTaskDel, onTaskStatus) => {
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
    buttonActions(task, navButtons, buttons, tasks, onTaskDel, onTaskStatus);

    card.append(title, description, information, buttons);
  };
}
