import { ModalView } from "./ModalView/ModalView.js";
import { ModalWarningView } from "./ModalView/ModalWarning.js";
import { TaskGeneralContainer } from "./TaskContainer/index.js";
import { TaskCard } from "./CardView/TaskCard.js";

export class TaskView {
  constructor() {
    this.modalAdd = new ModalView('modal_add', 'modal_add_cancel', 'modal_add_confirm', 'Title', 'Description');
    this.modalEdit = new ModalView('modal_edit', 'modal_edit_cancel', 'modal_edit_confirm', 'Task 1', 'This is Task 1 Description', 1);
    this.modalWarning = new ModalWarningView("modal_warning");

    this.todoContainer = new TaskGeneralContainer({
        containerId:'card_progress_add',
        headerId:'header_add',
        title:  'Add task',
/*         className: 'button_add', */ 
        buttonProps: {
            type: 'button',
            name: 'addTaskButton',
         }, 
         id: 'button_add',
         value: 0 /* statusCount.todo */,
         counterId: 'counter_todo',
    })

    this.inprogressContainer = new TaskGeneralContainer({
        containerId:'card_progress_inprogress',
        headerId:'header_inprogress',
        title:  'Done all',
/*         className: 'button_done_all',  */
        buttonProps: {
            type: 'button',
            name: 'doneTaskButton',
         }, 
         id: 'button_done_all',
         value: 0 /* statusCount.inProgress */,
         counterId: 'counter_inprogress',
    })

    this.doneContainer = new TaskGeneralContainer({
        containerId:'card_progress_done',
        headerId:'header_done',
        title:  'Delete all',
/*         className: 'button_delete_all',  */
        buttonProps: {
            type: 'button',
            name: 'deleteTaskButton',
         }, 
         id: 'button_delete_all',
         value: 0 /* statusCount.done */,
         counterId: 'counter_done',
    })

    this.card_add = new TaskCard("card_container_add");
    this.card_inProgress = new TaskCard("card_container_inprogress");
    this.card_done = new TaskCard("card_container_done");
  }

}
