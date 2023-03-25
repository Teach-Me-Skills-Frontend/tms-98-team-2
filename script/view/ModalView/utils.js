import { ModalNameAttr, ModalInputAttr, ModalButtonId } from './constant.js';
import { createTextInput, createButton } from '../utils.js';

export function createTaskModal(valueTitle, valueDescription, users) {
  const form = document.createElement('form');
  form.classList.add('modal');

  const inputTitle = createTextInput({
    name: ModalInputAttr.TaskTitleInput,
    placeholder: 'Title',
  });
  inputTitle.classList.add('input_title');

  if (!valueTitle) {
    inputTitle.value = '';
  } else {
    inputTitle.value = valueTitle;
  }

  const inputDescription = createTextInput({
    name: ModalInputAttr.TaskDescriptionInput,
    placeholder: 'Description',
  });
  inputDescription.classList.add('input_info');

  if (!valueDescription) {
    inputDescription.value = '';
  } else {
    inputDescription.value = valueDescription;
  }

  const btnContainer = document.createElement('div');
  btnContainer.classList.add('modal_btn');

  const select = document.createElement('select');
  select.classList.add('modal_select');
  select.setAttribute('name', 'users');
  const usersLength = users.length;
  if (!usersLength) {
    const option = document.createElement('option');
    option.value = 'No user';
    option.id = ModalButtonId.noUserId;
    option.textContent = 'No user';
    select.add(option);
  } else {
    users.forEach(user => {
      const option = document.createElement('option');
      option.value = user;
      option.textContent = user;
      select.append(option);
    }) 
  }

  const cancelBtn = createButton('Cancel', 'modal_btn_cancel', {
    type: 'button',
    name: ModalNameAttr.TaskButtonCancel,
  });
  cancelBtn.id = ModalButtonId.cancelId;

  const confirmBtn = createButton('Confirm', 'modal_btn_confirm', {
    type: 'submit',
    name: ModalNameAttr.TaskButtonConfirm,
  });
  confirmBtn.id = ModalButtonId.confirmId;
  confirmBtn.disabled = true;

  btnContainer.append(select, cancelBtn, confirmBtn);
  form.append(inputTitle, inputDescription, btnContainer);

  return form;
}

export function createModalWarningDelete(value) {
  const modal = document.createElement('div');
  modal.classList.add('modal_warning');

  const text = document.createElement('p');
  text.textContent = value;
  text.classList.add('modal_warning_text');

  const btnContainer = document.createElement('div');
  btnContainer.classList.add('modal_warning_btn');

  const cancelBtn = createButton('Cancel', 'modal_warning_cancel', {
    type: 'button',
    name: ModalNameAttr.TaskButtonCancel,
  });
  cancelBtn.id = 'modal_warning_cancel';

  const confirmBtn = createButton('Confirm', 'modal_warning_confirm', {
    type: 'submit',
    name: ModalNameAttr.TaskButtonConfirm,
  });
  confirmBtn.id = 'modal_warning_confirm';

  btnContainer.append(cancelBtn, confirmBtn);

  modal.append(text, btnContainer);

  return modal;
}

export function createModalWarning(value) {
  const modal = document.createElement('div');
  modal.classList.add('modal_warning');

  const text = document.createElement('p');
  text.textContent = value;
  text.classList.add('modal_warning_text');

  const btnContainer = document.createElement('div');
  btnContainer.classList.add('modal_warning_btn');

  const okButton = createButton('Ok', 'modal_warning_cancel', {
    type: 'button',
    name: ModalNameAttr.TaskButtonOk,
  });
  okButton.id = 'modal_warning_ok';

  btnContainer.append(okButton);

  modal.append(text, btnContainer);

  return modal;
}
