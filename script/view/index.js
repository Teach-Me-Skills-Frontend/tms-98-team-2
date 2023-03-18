import { ModalView } from "./ModalView/ModalView.js";
import { ModalWarningView } from "./ModalView/ModalWarning.js";
import { TaskContainer } from "./TaskContainer/TaskContainer.js";
import { TaskCard } from "./CardView/TaskCard.js";
import { Header } from "./header/index.js";

export class TaskView {
  constructor({ tasks, users, onTaskAdd, onTaskDel, onTaskStatus, onUserAdd }) {
    this.header = new Header(users, onUserAdd);

    this.modalAdd = new ModalView(
      "modal_add",
      "modal_add_cancel",
      "modal_add_confirm",
      "",
      "",
      onTaskAdd
    );
    this.modalEdit = new ModalView(
      "modal_edit",
      "modal_edit_cancel",
      "modal_edit_confirm",
      "Task 1",
      "This is Task 1 Description",
      1
    );
    this.modalWarning = new ModalWarningView("modal_warning");

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
      value: 0,
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
      value: 0,
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
      value: 0,
      counterId: "counter_delete_all",
    });

    this.card = new TaskCard(tasks, -1, onTaskDel, onTaskStatus);
  }

  createNewTask = (newTask) => {
    this.card.createNewTaskCard(newTask)
  };
}
