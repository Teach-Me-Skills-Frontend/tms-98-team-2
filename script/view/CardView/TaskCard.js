import { createInnerElement, createElementWithClass } from "../utils.js";
import { taskConstants } from "./constants.js";
import { containerCheck } from "./utils.js";

export class TaskCard {
  constructor(containerId = "root") {
    const root = document.getElementById(containerId);

    const card = createElementWithClass("div", "card");

    this.createInnerCard(card, containerId);

    root.append(card);
  }

  getDate = () => {
    const date = new Date();

    const day = date.getDate(),
      month = date.getMonth(),
      year = date.getFullYear();

    day < 10 ? (day = "0" + day) : day;
    month < 10 ? (month = "0" + month) : month;
    return `${day}.${month}.${year}`;
  };

  createInnerCard = (card, containerId, tasks) => {
    const title = createInnerElement("div", [taskConstants.title], ["task title"], "card_header");

    const description = createInnerElement(
      "div",
      [taskConstants.tagHeader, taskConstants.tagInner],
      [taskConstants.description, "task text"],
      "card_description"
    );

    const information = createElementWithClass("div", "card_information");

    information.append(
      createInnerElement(
        "div",
        [taskConstants.tagHeader, taskConstants.tagInner],
        [taskConstants.user, "name"],
        "card_user"
      )
    );
    information.append(createInnerElement("div", [taskConstants.tagHeader], ["time"], "card_user"));

    const buttons = createElementWithClass("div", "card_buttons");
    const navButtons = createElementWithClass("div", "card_navigation");
    containerCheck(containerId, navButtons, buttons);

    card.append(title, description, information, buttons);
  };
}
