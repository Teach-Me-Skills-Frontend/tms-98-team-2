import { ModalNameAttr, ModalAddInputAttr, ModalEditInputAttr, ListOptions, ListOptionsLength } from './constant.js';
import { createTextInput, createButton } from '../utils.js'; 

export function createTaskAddModal () {
    const form = document.createElement('form');
    form.classList.add('modal');
    
    const inputTitle = createTextInput ({ name: ModalAddInputAttr.TaskAddTitleInput, placeholder: 'Title' })
    inputTitle.classList.add('input_title');

    const inputDescription = createTextInput ({ name: ModalAddInputAttr.TaskAddDescriptionInput, placeholder: 'Description' })
    inputDescription.classList.add('input_info');

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
    cancelBtn.id = 'modal_add_cancel'

    const confirmBtn = createButton ('Confirm', 'modal_btn_confirm', {
        type: 'submit',
        name: ModalNameAttr.TaskButtonConfirm
    });
    confirmBtn.id = 'modal_add_confirm';

    btnContainer.append(select, cancelBtn, confirmBtn);
    form.append(inputTitle, inputDescription, btnContainer);

    return form;
}

export function createTaskEditModal () {
    const form = document.createElement('form');
    form.classList.add('modal');
    
    const inputTitle = createTextInput ({ name: ModalEditInputAttr.TaskEditTitleInput, placeholder: 'Title' })
    inputTitle.classList.add('input_title');

    const inputDescription = createTextInput ({ name: ModalEditInputAttr.TaskEditDescriptionInput, placeholder: 'Description' })
    inputDescription.classList.add('input_info');

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
    cancelBtn.id = 'modal_edit_cancel'

    const confirmBtn = createButton ('Confirm', 'modal_btn_confirm', {
        type: 'submit',
        name: ModalNameAttr.TaskButtonConfirm
    });
    confirmBtn.id = 'modal_edit_confirm';

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
