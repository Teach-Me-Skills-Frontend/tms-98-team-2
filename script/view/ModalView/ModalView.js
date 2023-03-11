import { ModalInputAttr } from './constant.js';
import { createTaskModal, createModalWarning } from './utils.js';
export class ModalView {
    constructor(containerId, cancelId, confirmId, valueTitle, valueDescription) {
        this.modal = document.getElementById(containerId);
        this.modalForm = createTaskModal(cancelId, confirmId, valueTitle, valueDescription);
        this.modalForm.classList.add('add');
        this.modal.append(this.modalForm);

        this.modal.addEventListener('submit', (event) => {
            event.preventDefault();

            const inputTittleValue = this.modalForm.elements[ModalInputAttr.TaskTitleInput].value.trim();
            const inputDescriptionValue = this.modalForm.elements[ModalInputAttr.TaskDescriptionInput].value.trim();
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
            if (target.id === 'modal_edit_cancel') {
                console.log('This is cancel button in edit form')
            }
            if (target.id === 'modal_edit_confirm') {
                console.log('This is confirm button in edit form')
            }
        })
    }
}
