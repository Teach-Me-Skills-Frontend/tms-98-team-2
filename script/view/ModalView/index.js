import { ModalAddInputAttr, ModalEditInputAttr } from './constant.js';
import { createTaskAddModal, createTaskEditModal, createModalWarning } from './utils.js';
export class ModalAddView {
    constructor(containerId) {
        this.modal = document.getElementById(containerId);
        this.modalForm = createTaskAddModal();
        this.modalForm.classList.add('add');
        this.modal.append(this.modalForm);

        this.modal.addEventListener('submit', (event) => {
            event.preventDefault();

            const inputTittleValue = this.modalForm.elements[ModalAddInputAttr.TaskAddTitleInput].value.trim();
            const inputDescriptionValue = this.modalForm.elements[ModalAddInputAttr.TaskAddDescriptionInput].value.trim();
          if (inputTittleValue && inputDescriptionValue) {
            console.log(`Title: ${inputTittleValue}`);
            console.log(`Decription: ${inputDescriptionValue}`);
            this.modalForm.reset()
          } else (
            alert('No text')
          )
        })

        this.modalForm.addEventListener('click', ({ target }) => {
            if (target.id === 'modal_add_cancel') {
                console.log('This is cancel button in add form')
            }
            if (target.id === 'modal_add_confirm') {
                console.log('This is confirm button in add form')
            }
        })
    }
}

export class ModalEditView {
    constructor(containerId) {
        this.modal = document.getElementById(containerId);
        this.modalForm = createTaskEditModal();
        this.modalForm.classList.add('edit');
        this.modal.append(this.modalForm);

        this.modal.addEventListener('submit', (event) => {
            event.preventDefault();

            const inputTittleValue = this.modalForm.elements[ModalEditInputAttr.TaskEditTitleInput].value.trim();
            const inputDescriptionValue = this.modalForm.elements[ModalEditInputAttr.TaskEditDescriptionInput].value.trim();
          if (inputTittleValue && inputDescriptionValue) {
            console.log(`Title: ${inputTittleValue}`);
            console.log(`Decription: ${inputDescriptionValue}`);
            this.modalForm.reset()
          } else (
            alert('No text')
          )
        })

        this.modalForm.addEventListener('click', ({ target }) => {
            if (target.id === 'modal_edit_cancel') {
                console.log('This is cancel button in edit form')
            }
            if (target.id === 'modal_edit_confirm') {
                console.log('This is confirm button in edit form')
            }
        })
    }
}

export class ModalWarningView {
    constructor(containerId) {
        this.modal = document.getElementById(containerId);
        this.modalBtn = createModalWarning();
        this.modal.append(this.modalBtn);

        this.modalBtn.addEventListener('submit', (event) => {
            event.preventDefault();
        })

        this.modalBtn.addEventListener('click', ({ target }) => {
            
            if (target.id === 'modal_warning_cancel') {
                console.log('This is cancel button in warning')
            }
            if (target.id === 'modal_warning_confirm') {
                console.log('This is confirm button in warning')
            }
        })
    }
}
