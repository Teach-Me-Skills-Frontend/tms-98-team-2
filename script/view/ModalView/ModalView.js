import { ModalInputAttr } from './constant.js';
import { createTaskModal } from './utils.js';
import { TaskStatus } from '../../constant.js';
import { getDate } from '../utils.js';

export class ModalView {
    constructor(containerId, cancelId, confirmId, valueTitle, valueDescription, users, onTaskAdd) {
        this.onTaskAdd = onTaskAdd;
        this.modal = document.getElementById(containerId);
        this.modalForm = createTaskModal(cancelId, confirmId, valueTitle, valueDescription, users);
        this.modalForm.classList.add('add');
        this.modal.append(this.modalForm);
        
   
        
        this.modalForm.addEventListener('input', this.onAddTaskChange);
        this.modalForm.addEventListener('input', this.onEditTaskChange);
        this.modal.addEventListener('submit', this.addNewTask)
        

        this.modalForm.addEventListener('click', ({ target }) => {
            if (target.id === 'modal_add_cancel') {
                this.modal.style.visibility = 'hidden'
                this.modal.removeChild(this.modalForm)
                const body = document.querySelector('body')
                body.removeAttribute('style')
            }
            if (target.id === 'modal_edit_cancel') {
                this.modal.style.visibility = 'hidden'
                this.modal.removeChild(this.modalForm)
                const body = document.querySelector('body')
                body.removeAttribute('style')
            }
            if (target.id === 'modal_add_confirm') {
                
            }
        })
    }

    addNewTask = (event) => {
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
            this.modal.style.visibility = 'hidden'
            
            const body = document.querySelector('body')
            body.removeAttribute('style')
            this.modal.replaceChildren()
          }
    }

    onAddTaskChange = () => {
        const inputTittleValue = this.modalForm.elements[ModalInputAttr.TaskTitleInput].value.trim();
        const inputDescriptionValue = this.modalForm.elements[ModalInputAttr.TaskDescriptionInput].value.trim();
        if (inputTittleValue && inputDescriptionValue) {
            const btn = document.getElementById('modal_add_confirm')
            console.log(btn)
            btn.disabled = false;
        } 
    }

    onEditTaskChange = () => {
        const inputTittleValue = this.modalForm.elements[ModalInputAttr.TaskTitleInput].value.trim();
        const inputDescriptionValue = this.modalForm.elements[ModalInputAttr.TaskDescriptionInput].value.trim();
        if (inputTittleValue && inputDescriptionValue) {
            const btn = document.getElementById('modal_edit_confirm')
            console.log(btn)
            btn.disabled = false;
        } 
    }
}
