import { createInnerElement, createElementWithClass } from "../utils.js";
import { taskConstants } from "./constants.js";
import { containerCheck } from "./listeners.js";

const containerId = {
  ToDo:'card_container_add',
  InProgress:'card_container_inprogress',
  Done:'card_container_done'
};

export class TaskCard {
  constructor(tasks) {
    console.log(tasks)
    for(const key in containerId){
      console.log(key)
      for(const task of tasks){
      if(key === task.status){
        
    const root = document.getElementById(containerId[key]);

    const card = createElementWithClass("div", "card");

    this.createInnerCard(card,task);

    root.append(card);
  }
}
}
  }

  getDate = () => {
    const date = new Date();

    let day = date.getDate(),
      month = date.getMonth(),
      year = date.getFullYear();

    day < 10 ? (day = "0" + day) : day;
    month < 10 ? (month = "0" + month) : month;
    return `${day}.${month}.${year}`;
  };

  createInnerCard = (card, task) => {
   
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
        [taskConstants.user, task.userId],
        "card_user"
      )
    );
    information.append(createInnerElement("div", [taskConstants.tagHeader], [task.date], "card_user"));

    const buttons = createElementWithClass("div", "card_buttons");
    const navButtons = createElementWithClass("div", "card_navigation");
    containerCheck(containerId, navButtons, buttons);

    card.append(title, description, information, buttons);
  };
}
