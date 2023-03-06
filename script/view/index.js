import { ModalAddView, ModalEditView, ModalWarningView } from "./ModalView/index.js";
import {
  TaskTodoContainer,
  TaskInProgressContainer,
  TaskDoneContainer,
} from "./TaskContainer/index.js";
import { TaskCard } from "./CardView/TaskCard.js";

export class TaskView {
  constructor() {
    this.modalAdd = new ModalAddView("modal_add");
    this.modalEdit = new ModalEditView("modal_edit");
    this.modalWarning = new ModalWarningView("modal_warning");

    this.todoContainer = new TaskTodoContainer("card_progress_add", "header_add");
    this.inprogressContainer = new TaskInProgressContainer(
      "card_progress_inprogress",
      "header_inprogress"
    );
    this.doneContainer = new TaskDoneContainer("card_progress_done", "header_done");

    this.card_add = new TaskCard("card_container_add");
    this.card_inProgress = new TaskCard("card_container_inprogress");
    this.card_done = new TaskCard("card_container_done");
  }
}
