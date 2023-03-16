import { ModalNameAttr, ModalInputAttr, ListOptions, ListOptionsLength } from './constant.js';
import { createTextInput, createButton } from '../utils.js'; 

export function createTaskModal (cancelId, confirmId, valueTitle, valueDescription) {
    const form = document.createElement('form');
    form.classList.add('modal');
    
    const inputTitle = createTextInput ({ name: ModalInputAttr.TaskTitleInput, placeholder: 'Title'})
    inputTitle.classList.add('input_title');
    
    if (!valueTitle) {
        inputTitle.value = '';
    } else {
        inputTitle.value = valueTitle
    }

    const inputDescription = createTextInput ({ name: ModalInputAttr.TaskDescriptionInput, placeholder: 'Description' })
    inputDescription.classList.add('input_info');

    if (!valueDescription) {
        inputDescription.value = '';
    } else {
        inputDescription.value = valueDescription;
    }
    

    const btnContainer = document.createElement('div')
    btnContainer.classList.add('modal_btn');

    const select = document.createElement('select');
    select.classList.add('modal_select');
    select.setAttribute('name', 'users');
    for (let i = 0; i < ListOptionsLength; i += 1) {
        const option = document.createElement('option');
        option.value = ListOptions[i];
        option.text = ListOptions[i];
        select.add(option)
    }
    
    const cancelBtn = createButton ('Cancel', 'modal_btn_cancel', {
        type: 'button',
        name: ModalNameAttr.TaskButtonCancel
    });
    cancelBtn.id = cancelId;

    const confirmBtn = createButton ('Confirm', 'modal_btn_confirm', {
        type: 'submit',
        name: ModalNameAttr.TaskButtonConfirm
    });
    confirmBtn.id = confirmId;

    btnContainer.append(select, cancelBtn, confirmBtn);
    form.append(inputTitle, inputDescription, btnContainer);

    return form;
}

export function createModalWarning () {
    const modal = document.createElement('div');
    modal.classList.add('modal_warning');

    const text = document.createElement('p');
    text.textContent = 'Warning!'
    text.classList.add('modal_warning_text')

    const btnContainer = document.createElement('div')
    btnContainer.classList.add('modal_warning_btn');

    const cancelBtn = createButton ('Cancel', 'modal_warning_cancel', {
        type: 'button',
        name: ModalNameAttr.TaskButtonCancel
    });
    cancelBtn.id = 'modal_warning_cancel'

    const confirmBtn = createButton ('Confirm', 'modal_warning_confirm', {
        type: 'submit',
        name: ModalNameAttr.TaskButtonConfirm
    });
    confirmBtn.id = 'modal_warning_confirm'

    btnContainer.append(cancelBtn, confirmBtn)

    modal.append(text, btnContainer);

    return modal;
}

export function getDate () {
    const date = new Date();

    let day = date.getDate(),
      month = date.getMonth()+1,
      year = date.getFullYear();

    day < 10 ? (day = "0" + day) : day;
    month < 10 ? (month = "0" + month) : month;
    return `${day}.${month}.${year}`;
  }
  