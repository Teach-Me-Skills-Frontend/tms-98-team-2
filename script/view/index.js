import { ModalView } from "./ModalView/ModalView.js";
import { ModalWarningView } from "./ModalView/ModalWarning.js";
import { TaskContainer } from "./TaskContainer/TaskContainer.js";
import { TaskCard } from "./CardView/TaskCard.js";
import { Header } from "./header/index.js";

export class TaskView {
  constructor({ tasks,
    users,
    counters,
    onTaskAdd,
    onTaskDel,
    onTaskStatus,
    onUserAdd,
    onUserDelete,
    onDeleteAllTasks,
    onDoneAllTasks,
    onEditTask
  }) {
    this.onDoneAllTasks = onDoneAllTasks;
    this.header = new Header(users, onUserAdd, onUserDelete);

    this.todoContainer = new TaskContainer({
      containerId: "card_progress_add",
      headerId: "header_add",
      title: "Add task",
      className: "button_add",
      buttonProps: {
        type: "button",
        name: "addTaskButton",
      },
      buttonId: "button_add",
      value: counters.ToDo,
      counterId: "counter_todo",
    });

    this.inprogressContainer = new TaskContainer({
      containerId: "card_progress_inprogress",
      headerId: "header_inprogress",
      title: "Done all",
      className: "button_done_all",
      buttonProps: {
        type: "button",
        name: "doneTaskButton",
      },
      buttonId: "button_done_all",
      value: counters.InProgress,
      counterId: "counter_inprogress",
    });

    this.doneContainer = new TaskContainer({
      containerId: "card_progress_done",
      headerId: "header_done",
      title: "Delete all",
      className: "button_delete_all",
      buttonProps: {
        type: "button",
        name: "deleteTaskButton",
      },
      buttonId: "button_delete_all",
      value: counters.Done,
      counterId: "counter_done",
    });

    this.card = new TaskCard(tasks, onTaskDel, onTaskStatus);

    this.todoContainer.container.addEventListener('click', ( { target } ) => {
      if (target.id === 'button_add') {
        this.modalAdd = new ModalView(
          "modal_add",
          "modal_add_cancel",
          "modal_add_confirm",
          "",
          "",
          users,
          onTaskAdd,
        );
        this.modalAdd.modal.style.visibility = 'visible'
        const body = document.querySelector('body')
        const marginSize = window.innerWidth - body.clientWidth;
            if (marginSize) {
                body.style.marginRight = marginSize + "px";
            }
        
        body.style.overflow = 'hidden'
      }
      if(target.id === 'edit_button'){
        for(const task of tasks){
          if(target.parentNode.parentNode.parentNode.id === task.id){
          const editmod = new ModalView("modal_edit", "modal_edit_cancel", "modal_edit_confirm", task.title, task.description);
          editmod.modal.style.visibility = 'visible'
          const body = document.querySelector('body')
          const marginSize = window.innerWidth - body.clientWidth;
          if (marginSize) {
            body.style.marginRight = marginSize + "px";
          }
          body.style.overflow = 'hidden'
          }
        }
      }
      if (target.id === 'add') {
        console.log(counters)
         if (counters.InProgress >= 6) {
          console.log('add block')
           this.modalWarning = new ModalWarningView("modal_warning");
           this.modalWarning.modal.style.visibility = 'visible'
           const body = document.querySelector('body');
           const marginSize = window.innerWidth - body.clientWidth;
           if (marginSize) {
             body.style.marginRight = marginSize + "px";
           }
           body.style.overflow = 'hidden'
         }
       }
    })

    this.doneContainer.container.addEventListener('click', ( { target } ) => {
      if (target.id === 'button_delete_all') {
        this.modalWarning = new ModalWarningView("modal_warning", 'Are you sure you want to delete all tasks?', onDeleteAllTasks);
        this.modalWarning.modal.style.visibility = 'visible';
        const body = document.querySelector('body');
        const marginSize = window.innerWidth - body.clientWidth;
        if (marginSize) {
          body.style.marginRight = marginSize + "px";
        }
        body.style.overflow = 'hidden'
      }
    })
  
    this.inprogressContainer.container.addEventListener('click', ( { target } ) => {
      if (target.id === 'button_done_all') {
        this.onDoneAllTasks();  
      }
    })

    /* document.addEventListener('click', ({ target }) => {
      if (target.id === 'editbtn') {
        this.modalAdd = new ModalView(
          "modal_edit",
          "modal_edit_cancel",
          "modal_edit_confirm",
          "",
          "",
          users,
          onTaskAdd,
          onEditTask
        );
        this.modalAdd.modal.style.visibility = 'visible'
        const body = document.querySelector('body')
        const marginSize = window.innerWidth - body.clientWidth;
            if (marginSize) {
                body.style.marginRight = marginSize + "px";
            }
        
        body.style.overflow = 'hidden'
      }
    }) */

  }

  renderNewCards=(tasks)=>{
    this.card.doneAllTasksInprogress(tasks);
  };
  
  createNewTask = (newTask, tasks) => {
    this.card.createNewTaskCard(newTask, tasks);
  };

  deleteAllTasks = () => {
    this.doneContainer.deleteAllTasks();
  }

  updateCounters = (counters, counterId) => {
    console.log(counters,counterId)
    if (counterId === 'counter_todo'){
       const todo = document.getElementById(counterId);
       todo.textContent = counters.ToDo;
    } else if (counterId === 'counter_inprogress') {
       const inProgress = document.getElementById(counterId);
       inProgress.textContent = counters.InProgress;
    } else if (counterId === 'counter_done') {
       const done = document.getElementById(counterId);
       done.textContent = counters.Done;
    }
    return counters;
  }
  
}
