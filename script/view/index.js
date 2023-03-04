import { ModalAddView, ModalEditView, ModalWarningView } from "./ModalView/index.js";
export class TaskView {
    constructor () {
        this.modalAdd = new ModalAddView('modal_add');
        this.modalEdit = new ModalEditView('modal_edit');
        this.modalWarning = new ModalWarningView ('modal_warning')
    }

}
