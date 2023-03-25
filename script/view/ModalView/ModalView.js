import { ModalInputAttr } from './constant.js';
import { createTaskModal } from './utils.js';
import { TaskStatus } from '../../constant.js';
import { getDate } from '../utils.js';
import { ModalButtonId } from './constant.js';

export class ModalView {
  constructor(
    containerId,
    valueTitle,
    valueDescription,
    users,
    onTaskAdd,
    onEditTask,
    taskId
  ) {
    this.onTaskAdd = onTaskAdd;
    this.onEditTask = onEditTask;
    this.taskId = taskId;
    this.modal = document.getElementById(containerId);
    this.modalForm = createTaskModal(valueTitle, valueDescription, users);

    if (containerId === 'modal_add') {
      this.modal.append(this.modalForm);
      this.modalForm.addEventListener('input', this.onInputTaskChange);
      this.modal.addEventListener('submit', this.addNewTask);
    } else if (containerId === 'modal_edit') {
      this.modalForm.addEventListener('input', this.onInputTaskChange);
      this.modal.append(this.modalForm);
      this.modal.addEventListener('submit', this.EditTask);
    }

    this.modalForm.addEventListener('click', ({ target }) => {
      if (target.id === ModalButtonId.cancelId) {
        this.cancelClick();
      }
    });
  }

  addNewTask = (event) => {
    event.preventDefault();
    const inputTittleValue =
      this.modalForm.elements[ModalInputAttr.TaskTitleInput].value.trim();
    const inputDescriptionValue =
      this.modalForm.elements[ModalInputAttr.TaskDescriptionInput].value.trim();
    const select = this.modalForm.elements['users'].value;
    if (inputTittleValue && inputDescriptionValue) {
      const newTask = {
        title: inputTittleValue,
        description: inputDescriptionValue,
        user: select,
        date: getDate(),
        status: TaskStatus.toDo,
        id: window.crypto.randomUUID(),
      };
      this.onTaskAdd(newTask);
      this.modalForm.reset();
      this.modal.style.visibility = 'hidden';

      const body = document.querySelector('body');
      body.removeAttribute('style');
      this.modal.replaceChildren();
    }
  };

  onInputTaskChange = () => {
    const inputTittleValue =
      this.modalForm.elements[ModalInputAttr.TaskTitleInput].value.trim();
    const inputDescriptionValue =
      this.modalForm.elements[ModalInputAttr.TaskDescriptionInput].value.trim();
    const checkUsers = document.getElementById('no_user') === null;
    const btn = document.getElementById(ModalButtonId.confirmId);
    if (inputTittleValue && inputDescriptionValue && checkUsers) {
      btn.disabled = false;
    } else {
      btn.disabled = true;
    }
  };

  editTask = (event) => {
    event.preventDefault();
    const inputTittleValue =
      this.modalForm.elements[ModalInputAttr.TaskTitleInput].value.trim();
    const inputDescriptionValue =
      this.modalForm.elements[ModalInputAttr.TaskDescriptionInput].value.trim();
    const select = this.modalForm.elements['users'].value;
    console.log(select);
    this.onEditTask(
      this.taskId,
      inputTittleValue,
      inputDescriptionValue,
      select
    );
    this.modalForm.reset();
    this.modal.style.visibility = 'hidden';

    const body = document.querySelector('body');
    body.removeAttribute('style');
    this.modal.replaceChildren();
  };
  cancelClick = () => {
    this.modal.style.visibility = 'hidden';
    this.modal.replaceChildren();
    const body = document.querySelector('body');
    body.removeAttribute('style');
  };
}
