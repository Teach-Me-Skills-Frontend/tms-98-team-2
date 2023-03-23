import { ModalView } from './ModalView/ModalView.js';
import { ModalWarningView } from './ModalView/ModalWarning.js';
import { TaskContainer } from './TaskContainer/TaskContainer.js';
import { TaskCard } from './CardView/TaskCard.js';
import { Header } from './header/Header.js';
import { showModal } from './utils.js';
import { CountersId, ButtonsId, ModalText } from './constant.js';

export class TaskView {
  constructor({
    getTasks,
    getUsers,
    getCounters,
    onTaskAdd,
    onTaskDel,
    onTaskStatus,
    onUserAdd,
    onUserDelete,
    onDeleteAllTasks,
    onDoneAllTasks,
    onEditTask,
  }) {
    this.getTasks = getTasks;
    let tasks = this.getTasks();
    this.getUsers = getUsers;

    this.getCounters = getCounters;
    let counters = this.getCounters(tasks);
    this.onDoneAllTasks = onDoneAllTasks;

    this.header = new Header(this.getUsers, onUserAdd, onUserDelete);

    this.todoContainer = new TaskContainer({
      containerId: 'card_progress_add',
      headerId: 'header_add',
      value: counters.ToDo,
      counterId: CountersId.toDo,
    });

    this.inprogressContainer = new TaskContainer({
      containerId: 'card_progress_inprogress',
      headerId: 'header_inprogress',
      value: counters.InProgress,
      counterId: CountersId.inProgress,
    });

    this.doneContainer = new TaskContainer({
      containerId: 'card_progress_done',
      headerId: 'header_done',
      value: counters.Done,
      counterId: CountersId.done,
    });
    const deleteBtn = document.getElementById(ButtonsId.deleteAllTaskBtn);
    if(!counters.Done){
      deleteBtn.disabled = true;
    }
    else{
      deleteBtn.disabled = false;
    }

    this.card = new TaskCard(tasks, onTaskDel, onTaskStatus);
    if (counters.InProgress === 6) {
      const addBtns = document.getElementsByClassName('add_button');
      for (const btn of addBtns) {
        btn.disabled = true;
      }
      const undoBtns = document.getElementsByClassName('undo_button');
      for (const btn of undoBtns) {
        btn.disabled = true;
      }
      this.modalWarning = new ModalWarningView(
        'modal_warning',
        ModalText.sixTasks
      );

      this.modalWarning.modal.style.visibility = 'visible';
      showModal();
    }

    this.todoContainer.container.addEventListener('click', ({ target }) => {
      if (target.id === ButtonsId.addTaskBtn) {
        this.modalAdd = new ModalView(
          'modal_add',
          '',
          '',
          this.getUsers(),
          onTaskAdd
        );
        this.modalAdd.modal.style.visibility = 'visible';
        showModal();
      }
      if (target.id === ButtonsId.editTaskBtn) {
        tasks = this.getTasks();
        for (const task of tasks) {
          if (target.parentNode.parentNode.parentNode.id === task.id) {
            const editmod = new ModalView(
              'modal_edit',
              task.title,
              task.description,
              this.getUsers(),
              onTaskAdd,
              onEditTask,
              task.id
            );
            editmod.modal.style.visibility = 'visible';
            showModal();
          }
        }
      }
      if (target.id === ButtonsId.addBtn) {
        tasks = this.getTasks();
        counters = this.getCounters(tasks);
        if (counters.InProgress === 6) {
          const addBtns = document.getElementsByClassName('add_button');
          for (const btn of addBtns) {
            btn.disabled = true;
          }
          const undoBtns = document.getElementsByClassName('undo_button');
          for (const btn of undoBtns) {
            btn.disabled = true;
          }
          this.modalWarning = new ModalWarningView(
            'modal_warning',
            ModalText.sixTasks
          );

          this.modalWarning.modal.style.visibility = 'visible';
          showModal();
        }
      }
    });

    this.doneContainer.container.addEventListener('click', ({ target }) => {
      if (target.id === ButtonsId.deleteAllTaskBtn) {
        this.modalWarning = new ModalWarningView(
          'modal_delete',
          ModalText.deleteAllTasks,
          onDeleteAllTasks
        );
        this.modalWarning.modal.style.visibility = 'visible';
        showModal();
      }
      if (target.id === ButtonsId.undoBtn) {
        tasks = this.getTasks();
        counters = this.getCounters(tasks);
        if (counters.InProgress === 6) {
          const addBtns = document.getElementsByClassName('add_button');
          for (const btn of addBtns) {
            btn.disabled = true;
          }
          const undoBtns = document.getElementsByClassName('undo_button');
          for (const btn of undoBtns) {
            btn.disabled = true;
          }
          this.modalWarning = new ModalWarningView(
            'modal_warning',
            ModalText.sixTasks
          );

          this.modalWarning.modal.style.visibility = 'visible';
          showModal();
        }
      }
    });

    this.inprogressContainer.container.addEventListener(
      'click',
      ({ target }) => {
        if (target.id === ButtonsId.doneAllTaskBtn) {
          this.onDoneAllTasks();
          if (counters.InProgress === 6) {
            const addBtns = document.getElementsByClassName('add_button');
            for (const btn of addBtns) {
              btn.disabled = false;
            }
            const undoBtns = document.getElementsByClassName('undo_button');
            for (const btn of undoBtns) {
              btn.disabled = false;
            }
          }
        }
        if (
          target.id === ButtonsId.backBtn ||
          target.id === ButtonsId.completeBtn
        ) {
          tasks = this.getTasks();
          counters = this.getCounters(tasks);
          if (counters.InProgress < 6) {
            const addBtns = document.getElementsByClassName('add_button');
            for (const addBtn of addBtns) {
              addBtn.disabled = false;
            }
            const undoBtns = document.getElementsByClassName('undo_button');
            for (const btn of undoBtns) {
              btn.disabled = false;
            }
          }
        }
      }
    );
  }

  renderNewCards = (tasks) => {
    this.card.doneAllTasksInprogress(tasks);
  };

  createNewTask = (newTask, tasks) => {
    this.card.createNewTaskCard(newTask, tasks);
    const counters = this.getCounters(tasks);
    if (counters.InProgress === 6) {
      const addBtns = document.getElementsByClassName('add_button');
      for (const addBtn of addBtns) {
        addBtn.disabled = true;
      }
    }
  };

  showEditTask = (tasks) => {
    this.card.showEditTaskCard(tasks);
  };

  deleteAllTasks = () => {
    this.doneContainer.deleteAllTasks();
  };

  updateCounters = (counters, counterId) => {
    const deleteBtn = document.getElementById(ButtonsId.deleteAllTaskBtn);
    if(!counters.Done){
      deleteBtn.disabled = true;
    }
    else{
      deleteBtn.disabled = false;
    }
    if (counterId === CountersId.toDo) {
      const todo = document.getElementById(counterId);
      todo.textContent = counters.ToDo;
    } else if (counterId === CountersId.inProgress) {
      const inProgress = document.getElementById(counterId);
      inProgress.textContent = counters.InProgress;
    } else if (counterId === CountersId.done) {
      const done = document.getElementById(counterId);
      done.textContent = counters.Done;
    }
    return counters;
  };
}
