// import { ModalAddView, ModalEditView, ModalWarningView } from "./ModalView/index.js";
import { TaskGeneralContainer } from "./TaskContainer/index.js";
import { TaskCard } from "./CardView/TaskCard.js";



export class TaskView {
  constructor(tasks, statusCount) {
    // this.modalAdd = new ModalView('modal_add', 'modal_add_cancel', 'modal_add_confirm', 'Title', 'Description');
    // this.modalEdit = new ModalView('modal_edit', 'modal_edit_cancel', 'modal_edit_confirm', 'Task 1', 'This is Task 1 Description', 1);
    // this.modalWarning = new ModalWarningView("modal_warning");

    this.todoContainer = new TaskGeneralContainer({
      containerId:'card_progress_add',
      headerId:'header_add',
      title:  'Add task',
      className: 'button_add', 
      buttonProps: {
          type: 'button',
          name: 'addTaskButton',
       }, 
       id: 'button_add',
       value: statusCount.todo,
  })
  this.inprogressContainer = new TaskGeneralContainer({
    containerId:'card_progress_inprogress',
    headerId:'header_inprogress',
    title:  'Done all',
    className: 'button_done_all', 
    buttonProps: {
        type: 'button',
        name: 'doneTaskButton',
     }, 
     id: 'button_done_all',
     value: statusCount.inProgress,
})

'Delete all', 'button_delete_all', {
    type: 'button',
    name: 'deleteTaskButton',
 }

this.doneContainer = new TaskGeneralContainer({
    containerId:'card_progress_done',
    headerId:'header_done',
    title:  'Delete all',
    className: 'button_delete_all', 
    buttonProps: {
        type: 'button',
        name: 'deleteTaskButton',
     }, 
     id: 'button_delete_all',
     value: statusCount.done,
})

    this.card_add=new TaskCard(tasks)
   // this.card_inProgress = new TaskCard("card_container_inprogress");
    //this.card_done = new TaskCard("card_container_done");

    // this.todoContainer.container.addEventListener('click', ( { target } ) => {
    //   if (target.id === 'button_add') {
    //     new ModalAddView("modal_add");
    //   }
    // })
  }

  createTask (tasks) {
    this.todoContainer.container.addEventListener('click', ( { target } ) => {
      if (target.id === 'button_add') {
        this.modalAdd = new ModalView("modal_add", tasks);
        this.modalAdd.modalForm.addEventListener('submit', () => {
          this.card_add=new TaskCard(tasks)
        })
      }
    })
  }

  renderTask () {
    this.cardNew = new TaskCard("card_container_add");
  }

}

