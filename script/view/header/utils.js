import { ButtonsId } from '../constant.js';

export function addUser(users) {
  const input = document.getElementById('user_input');
  const userName = input.value.trim();
  for (let i = 0; i < users.length; i++) {
    if (users[i] === userName) {
      alert('You have the same name!');
      return 0;
    }
  }

  document.getElementById(ButtonsId.addUser).disabled = true;
  document.getElementById(ButtonsId.deleteUser).disabled = false;
  input.value = '';
  users.push(userName);

  const select = document.getElementById('user_names');
  const option = document.createElement('option');
  option.innerText = users[users.length - 1];
  option.value = users[users.length - 1];
  option.selected = true;
  select.prepend(option);
  return userName;
}

export const emptyInput = ({ target }) => {
  if (!target.value.trim()) {
    const btn = document.getElementById(ButtonsId.addUser);
    btn.disabled = true;

    const userForm = document.getElementById('user_form');
    userForm.removeEventListener('input', emptyInput);
    userForm.addEventListener('input', inputEvent);
  }
};

export const inputEvent = ({ target }) => {
  if (target.value.trim()) {
    const btn = document.getElementById(ButtonsId.addUser);
    btn.disabled = false;

    const userForm = document.getElementById('user_form');
    userForm.removeEventListener('input', inputEvent);
    userForm.addEventListener('input', emptyInput);
  }
};

export function deleteUser (users, onUserDelete) {
  const select = document.getElementById('user_names');
      for (const user of users) {
        if (user === select.value) {
          let userIndex = users.indexOf(user);
          users.splice(userIndex, 1);
          onUserDelete(userIndex);

          let selectChild = select.firstChild;
          do {
            if (selectChild.value === user) {
              if(!users.length){
                document.getElementById('delete_all_users').remove();
              }
              selectChild.remove();
              break;
            }
            selectChild = selectChild.nextSibling;
            userIndex--;
          }
          while (userIndex)
        }
      }

      if (!users.length) {
        return 1;
      }
      return 0;
}

export function optionNoUsers () {
  const option = document.createElement('option');
  option.innerText = 'No users';
  option.id = 'no_users';
  return option;
}
