import { getDate } from "../utils.js";
import { createElementWithClass } from "../utils.js";
import { createButton } from "../utils.js";
import { addUser } from "./utils.js";

export class Header {
  constructor(users, onUserAdd) {
    this.onUserAdd = onUserAdd;

    const root = document.getElementById("header");

    const title = createElementWithClass("div", "header_title");
    const innerTitle = document.createElement("h1");
    innerTitle.innerText = "Trello";

    title.append(innerTitle);

    const users_wrap = createElementWithClass("div", "header_user");

    const titleUser = document.createElement("h3");
    titleUser.innerText = "Add user";

    const userForm = createElementWithClass("form", "user_form");

    const inputAdd = document.createElement("input");
    inputAdd.setAttribute("id", "user_input");

    const btnAdd = createButton("New user", "add_user", { id: "add_user" });
    btnAdd.addEventListener("click", (event) => {
      const newUser = addUser(users);
      this.onUserAdd(newUser);
      event.preventDefault();
    });

    userForm.append(inputAdd, btnAdd);

    users_wrap.append(titleUser, userForm);

    const date = createElementWithClass("div", "header_date");
    const innerDate = document.createElement("p");
    innerDate.innerText = getDate();

    date.append(innerDate);

    const currentUsers = createElementWithClass("div", "current_users");

    const currentUsersTitle = document.createElement("h3");
    currentUsersTitle.innerText = "Users:";

    const currentUsersName = createElementWithClass("select", "users");
    currentUsersName.setAttribute("id", "user_names");

    if (users.length === 0) {
      const option = document.createElement("option");
      option.innerText = "No users";
      currentUsersName.append(option);
    } else {
      for (let i = 0; i < users.length; i++) {
        const option = document.createElement("option");
        option.innerText = users[i];
        currentUsersName.append(option);
      }
    }

    currentUsers.append(currentUsersTitle, currentUsersName);

    root.append(title, users_wrap, currentUsers, date);
  }
}
