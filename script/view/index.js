import { ModalView } from "./ModalView/ModalView.js";
import { ModalWarningView } from "./ModalView/ModalWarning.js";
import { TaskContainer } from "./TaskContainer/TaskContainer.js";
import { TaskCard } from "./CardView/TaskCard.js";
import { Header } from "./header/index.js";
import { showModal } from "./utils.js";

export class TaskView {
  constructor({ getTasks,
    users,
    getCounters,
    onTaskAdd,
    onTaskDel,
    onTaskStatus,
    onUserAdd,
    onUserDelete,
    onDeleteAllTasks,
    onDoneAllTasks,
    onEditTask
  }) {
    this.getTasks = getTasks;
    let tasks = this.getTasks();
    this.getCounters = getCounters;
    let counters = this.getCounters(tasks);
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
          "",
          "",
          users,
          onTaskAdd,
        );
        this.modalAdd.modal.style.visibility = 'visible'
        showModal()
      }
      if(target.id === 'edit_button'){
        tasks = this.getTasks();
        console.log(tasks)
        for(const task of tasks){
          if(target.parentNode.parentNode.parentNode.id === task.id){
          const editmod = new ModalView("modal_edit", task.title, task.description, users, onTaskAdd, onEditTask, task.id);
          editmod.modal.style.visibility = 'visible'
          showModal()
          }
        }
      }
      if (target.id === 'add') {
        tasks = this.getTasks();
        counters = this.getCounters(tasks);
        console.log(tasks)
        console.log(counters)
         if (counters.InProgress + 1 === 7) {
          const btn = document.getElementById('add');
          btn.disabled = true;
           this.modalWarning = new ModalWarningView("modal_warning");

           this.modalWarning.modal.style.visibility = 'visible'
           showModal()
         }
       }
    })

    this.doneContainer.container.addEventListener('click', ( { target } ) => {
      if (target.id === 'button_delete_all') {
        this.modalWarning = new ModalWarningView("modal_warning", 'Are you sure you want to delete all tasks?', onDeleteAllTasks);
        this.modalWarning.modal.style.visibility = 'visible';
        showModal()
      }
    })
  
    this.inprogressContainer.container.addEventListener('click', ( { target } ) => {
      if (target.id === 'button_done_all') {
        this.onDoneAllTasks();  
      }
      if(target.id === 'back'){
        tasks = this.getTasks();
        counters = this.getCounters(tasks);
        if (counters.InProgress < 6 ) {
          const addBtn = document.getElementById('add');
          addBtn.disabled = false;
        }
      }
    })
  }

  renderNewCards = (tasks) => {
    this.card.doneAllTasksInprogress(tasks);
  };

  createNewTask = (newTask, tasks) => {
    this.card.createNewTaskCard(newTask, tasks);
  };

  showEditTask = (tasks) => {
    this.card.showEditTaskCard(tasks);
  };

  deleteAllTasks = () => {
    this.doneContainer.deleteAllTasks();
  };

  updateCounters = (counters, counterId) => {
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
  };
  
}
