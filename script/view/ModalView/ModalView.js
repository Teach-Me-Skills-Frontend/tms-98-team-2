import { ModalInputAttr } from './constant.js';
import { createTaskModal } from './utils.js';
import { TaskStatus } from '../../constant.js';
import { getDate } from '../utils.js';

export class ModalView {
    constructor(containerId, cancelId, confirmId, valueTitle, valueDescription, onTaskAdd) {
        this.onTaskAdd = onTaskAdd;
        this.modal = document.getElementById(containerId);
        this.modalForm = createTaskModal(cancelId, confirmId, valueTitle, valueDescription);
        this.modalForm.classList.add('add');
        this.modal.append(this.modalForm);
   

        this.modal.addEventListener('submit', (event) => {
            event.preventDefault();

            const inputTittleValue = this.modalForm.elements[ModalInputAttr.TaskTitleInput].value.trim();
            const inputDescriptionValue = this.modalForm.elements[ModalInputAttr.TaskDescriptionInput].value.trim();
            const select = this.modalForm.elements['users'].value;
          if (inputTittleValue && inputDescriptionValue) {
            const newTask = {
                title: inputTittleValue,
                description: inputDescriptionValue,
                user: select,
                date: getDate(),
                status: TaskStatus.toDo,
                id: window.crypto.randomUUID()
            };
            this.onTaskAdd(newTask)
            
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
