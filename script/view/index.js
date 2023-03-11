import { ModalAddView, ModalEditView, ModalWarningView } from "./ModalView/index.js";
// import { TaskTodoContainer, TaskInProgressContainer, TaskDoneContainer } from "./TaskContainer/index.js";

import { TaskGeneralContainer } from "./TaskContainer/index.js";
import { createDeleteAllButton, createInProgressButton, createAddButton } from "./TaskContainer/utils.js"

export class TaskView {
    constructor () {
        this.modalAdd = new ModalAddView('modal_add');
        this.modalEdit = new ModalEditView('modal_edit');
        this.modalWarning = new ModalWarningView ('modal_warning');
        
        // this.todoContainer = new TaskTodoContainer('card_progress_add', 'header_add')
        // this.inprogressContainer = new TaskInProgressContainer('card_progress_inprogress','header_inprogress')
        // this.doneContainer = new TaskDoneContainer('card_progress_done','header_done')
        
        
        this.todoContainer = new TaskGeneralContainer({
            containerId:'card_progress_add',
            headerId:'header_add',
            buttonId: createAddButton() })
        this.inprogressContainer = new TaskGeneralContainer({
            containerId:'card_progress_inprogress',
            headerId:'header_inprogress',
            buttonId: createInProgressButton() })
        
 
        this.doneContainer = new TaskGeneralContainer({
            containerId:'card_progress_done',
            headerId:'header_done',
            buttonId: createDeleteAllButton() })
        
    }

}
