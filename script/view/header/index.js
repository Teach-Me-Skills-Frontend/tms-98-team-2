import { createElementWithClass, getDate, createButton, createInput } from "../utils.js";
import { addUser, emptyInput, inputEvent } from "./utils.js";

export class Header {
  constructor(getUsers, onUserAdd, onUserDelete) {
    this.getUsers = getUsers;
    let users = this.getUsers()
    this.onUserAdd = onUserAdd;
    this.onUserDelete = onUserDelete;

    const root = document.getElementById("header");

    const title = createElementWithClass("div", "header_title");
    const innerTitle = document.createElement("h1");
    innerTitle.innerText = "Trello";

    title.append(innerTitle);

    const users_add = createElementWithClass("div", "header_user");

    const titleUser = document.createElement("h3");
    titleUser.innerText = "Add user";

    const userForm = createElementWithClass("form", "user_form");
    userForm.id = 'user_form';

    userForm.addEventListener('input', inputEvent)

    const inputAdd = createInput({id: "user_input"});

    const btnAdd = createButton("New user", "add_user", { id: "add_user" });
    btnAdd.disabled = true;
    btnAdd.addEventListener("click", (event) => {
      if(users.length === 0){
        document.getElementById('no_users').remove();
      }
      const newUser = addUser(this.getUsers);
      if(newUser){
        this.onUserAdd(newUser);
      }
      event.preventDefault();

      userForm.removeEventListener('input', emptyInput);
      userForm.addEventListener('input', inputEvent);
    });

    userForm.append(inputAdd, btnAdd);

    users_add.append(titleUser, userForm);

    const date = createElementWithClass("div", "header_date");

    const innerDate = document.createElement("p");
    innerDate.innerText = getDate();

    date.append(innerDate);

    const currentUsers = createElementWithClass("div", "current_users");

    const usersWrap=createElementWithClass('div','users_wrap');

    const usersWrapTitle = document.createElement("h3");
    usersWrapTitle.innerText = "Users:";

    const usersWrapName = createElementWithClass("select", "users");
    usersWrapName.setAttribute("id", "user_names");

    const deleteUser=createButton('Delete user','delete_button',{id: 'delete_user'});
    deleteUser.addEventListener('click',() => {
      users = this.getUsers();
      const select = document.getElementById('user_names')
      for(const user of users){
        if(user === select.value){
          const userIndex = users.indexOf(user);
          users.splice(userIndex,1);
          this.onUserDelete(userIndex);
          let selectChild = select.firstChild;
          for(let i = 0; i < userIndex + 1; i++){
            if(selectChild.value === user){
              selectChild.remove();
            }
            selectChild = selectChild.nextSibling;
          }
        }
      }

      if(!users.length){
        document.getElementById('delete_user').disabled = true;
        const option = document.createElement("option");
        option.innerText = "No users";
        option.setAttribute('id','no_users');
        usersWrapName.append(option);
      }
    });

    usersWrap.append(usersWrapTitle, usersWrapName);

    currentUsers.append(usersWrap, deleteUser);

    root.append(title, users_add, currentUsers, date);

    if (!users.length) {
      document.getElementById('delete_user').disabled = true;
      const option = document.createElement("option");
      option.innerText = "No users";
      option.id = 'no_users';
      usersWrapName.append(option);
    } else {
      document.getElementById('delete_user').disabled = false;
      for (let i = 0; i < users.length; i++) {
        const option = document.createElement("option");
        option.innerText = users[i];
        usersWrapName.append(option);
      }
    }
  }
}
