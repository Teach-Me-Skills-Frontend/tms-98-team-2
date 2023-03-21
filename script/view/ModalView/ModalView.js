import { ModalInputAttr } from './constant.js';
import { createTaskModal } from './utils.js';
import { TaskStatus } from '../../constant.js';
import { getDate } from '../utils.js';

export class ModalView {
    constructor(containerId, valueTitle, valueDescription, users, onTaskAdd, onEditTask, taskId) {
        this.onTaskAdd = onTaskAdd;
        this.onEditTask = onEditTask;
        this.taskId = taskId
        this.modal = document.getElementById(containerId);
        this.modalForm = createTaskModal(valueTitle, valueDescription, users);
        
        if (containerId === 'modal_add') {
            this.modal.append(this.modalForm);
            this.modalForm.addEventListener('input', this.onInputTaskChange);
            this.modal.addEventListener('submit', this.addNewTask)
            console.log('modal_add')
        } else if (containerId === 'modal_edit') {
            console.log('modal_edit')
            this.modalForm.addEventListener('input', this.onInputTaskChange);
            this.modal.append(this.modalForm);
            this.modal.addEventListener('submit', this.EditTask)
        }
        
        this.modalForm.addEventListener('click', ({ target }) => {
            if (target.id === 'modal_cancel') {
                this.modal.style.visibility = 'hidden'
                this.modal.removeChild(this.modalForm)
                const body = document.querySelector('body')
                body.removeAttribute('style')
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

    onInputTaskChange = () => {
        const inputTittleValue = this.modalForm.elements[ModalInputAttr.TaskTitleInput].value.trim();
        const inputDescriptionValue = this.modalForm.elements[ModalInputAttr.TaskDescriptionInput].value.trim();
        if (inputTittleValue && inputDescriptionValue) {
            const btn = document.getElementById('modal_confirm')
            btn.disabled = false;
        } else {
            const btn = document.getElementById('modal_confirm')
            btn.disabled = true;
        }
    }

    EditTask = (event) => {
        event.preventDefault();
        const inputTittleValue = this.modalForm.elements[ModalInputAttr.TaskTitleInput].value.trim();
        const inputDescriptionValue = this.modalForm.elements[ModalInputAttr.TaskDescriptionInput].value.trim();
        const select = this.modalForm.elements['users'].value;
        console.log(select)
        this.onEditTask(this.taskId, inputTittleValue, inputDescriptionValue, select)
        this.modalForm.reset()
        this.modal.style.visibility = 'hidden'
        
        const body = document.querySelector('body')
        body.removeAttribute('style')
        this.modal.replaceChildren()
    }
}
