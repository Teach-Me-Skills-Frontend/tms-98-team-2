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
  option.selected = true;
  select.append(option);
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
