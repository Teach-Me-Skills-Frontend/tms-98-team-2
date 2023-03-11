import { ModalView } from "./ModalView/ModalView.js";
import { ModalWarningView } from "./ModalView/ModalWarning.js";
import { TaskContainer } from "./TaskContainer/TaskContainer.js";
import { TaskCard } from "./CardView/TaskCard.js";

export class TaskView {
  constructor({tasks, onTaskAdd}) {
    this.modalAdd = new ModalView('modal_add', 'modal_add_cancel', 'modal_add_confirm', '', '', onTaskAdd);
    this.modalEdit = new ModalView('modal_edit', 'modal_edit_cancel', 'modal_edit_confirm', 'Task 1', 'This is Task 1 Description', 1);
    this.modalWarning = new ModalWarningView("modal_warning");

    this.todoContainer = new TaskContainer({
        containerId:'card_progress_add',
        headerId:'header_add',
        title:  'Add task',
        buttonProps: {
            type: 'button',
            name: 'addTaskButton',
         }, 
         id: 'button_add',
         value: 0,
         counterId: 'counter_todo',
    })

    this.inprogressContainer = new TaskContainer({
        containerId:'card_progress_inprogress',
        headerId:'header_inprogress',
        title:  'Done all',
        buttonProps: {
            type: 'button',
            name: 'doneTaskButton',
         }, 
         id: 'button_done_all',
         value: 0,
         counterId: 'counter_inprogress',
    })

    this.doneContainer = new TaskContainer({
        containerId:'card_progress_done',
        headerId:'header_done',
        title:  'Delete all',
        buttonProps: {
            type: 'button',
            name: 'deleteTaskButton',
         }, 
         id: 'button_delete_all',
         value: 0,
         counterId: 'counter_done',
    })

    this.card_add = new TaskCard("card_container_add");
    this.card_inProgress = new TaskCard("card_container_inprogress");
    this.card_done = new TaskCard("card_container_done");
  }


  createNewTask = (newTask) => {
    console.log(newTask)
  }
}
