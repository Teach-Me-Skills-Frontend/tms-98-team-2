import {
  createElementWithClass,
  getDate,
  createButton,
  createInput,
} from '../utils.js';
import { addUser, emptyInput, inputEvent, deleteUser, optionNoUsers } from './utils.js';
import { ButtonsId } from '../constant.js';

export class Header {
  constructor(getUsers, onUserAdd, onUserDelete, onAllUsersDelete) {
    this.getUsers = getUsers;
    let users = this.getUsers();
    this.onUserAdd = onUserAdd;
    this.onUserDelete = onUserDelete;
    this.onAllUsersDelete = onAllUsersDelete;

    const root = document.getElementById('header');

    const title = createElementWithClass('div', 'header_title');
    const innerTitle = document.createElement('h1');
    innerTitle.innerText = 'Trello';

    title.append(innerTitle);

    const users_add = createElementWithClass('div', 'header_user');

    const titleUser = document.createElement('h3');
    titleUser.innerText = 'Add user';

    const userForm = createElementWithClass('form', 'user_form');
    userForm.id = 'user_form';

    userForm.addEventListener('input', inputEvent);

    const inputAdd = createInput({ id: 'user_input' });

    const btnAdd = createButton('New user', 'add_user', {
      id: ButtonsId.addUser,
    });
    btnAdd.disabled = true;
    btnAdd.addEventListener('click', (event) => {
      event.preventDefault();
      users = this.getUsers();
      if (users.length === 0) {
        document.getElementById('no_users').remove();
        const deleteAllUsers = document.createElement('option');
        deleteAllUsers.innerText = 'Delete all';
        deleteAllUsers.id = 'delete_all_users';
        usersWrapName.append(deleteAllUsers);
      }
      const newUser = addUser(users);
      if (newUser) {
        this.onUserAdd(newUser);
      }

      userForm.removeEventListener('input', emptyInput);
      userForm.addEventListener('input', inputEvent);
    });

    userForm.append(inputAdd, btnAdd);

    users_add.append(titleUser, userForm);

    const date = createElementWithClass('div', 'header_date');

    const innerDate = document.createElement('p');
    innerDate.innerText = getDate();

    date.append(innerDate);

    const currentUsers = createElementWithClass('div', 'current_users');

    const usersWrap = createElementWithClass('div', 'users_wrap');

    const usersWrapTitle = document.createElement('h3');
    usersWrapTitle.innerText = 'Users:';

    const usersWrapName = createElementWithClass('select', 'users');
    usersWrapName.setAttribute('id', 'user_names');

    const deleteBtn = createButton('Delete user', 'delete_button', {
      id: ButtonsId.deleteUser,
    });
    deleteBtn.addEventListener('click', () => {
      if(deleteUser(this.getUsers(), this.onUserDelete)){
        document.getElementById(ButtonsId.deleteUser).disabled = true;
        const option = optionNoUsers();
        usersWrapName.append(option);
      }
    });

    usersWrap.append(usersWrapTitle, usersWrapName);

    currentUsers.append(usersWrap, deleteBtn);

    root.append(title, users_add, currentUsers, date);

    if (!users.length) {
      document.getElementById(ButtonsId.deleteUser).disabled = true;
      const option = optionNoUsers();
      usersWrapName.append(option);
    } else {
      document.getElementById(ButtonsId.deleteUser).disabled = false;
      for (let i = 0; i < users.length; i++) {
        const option = document.createElement('option');
        option.innerText = users[i];
        option.value = users[i];
        if (i === users.length - 1) {
          option.selected = true;
        }
        usersWrapName.prepend(option);
      }
      const deleteAllUsers = document.createElement('option');
      deleteAllUsers.innerText = 'Delete all';
      deleteAllUsers.id = 'delete_all_users';
      usersWrapName.append(deleteAllUsers);
    }

    const select = document.getElementById('user_names');
    select.addEventListener('change', ({target}) => {
      if (target.value === 'Delete all') {
        if (confirm(`u want delete all users`)) {
          while(select.options.length){
            select.options[select.options.length - 1].remove();
          }
          document.getElementById(ButtonsId.deleteUser).disabled = true;
          const option = optionNoUsers();
          select.append(option);
          this.onAllUsersDelete();
        } else {
          console.log('no delete')
        }
      }
    })
  }
} 
