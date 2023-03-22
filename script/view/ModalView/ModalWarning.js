import { createModalWarningDelete, createModalWarning } from './utils.js';
import { ModalButtonId } from './constant.js';

export class ModalWarningView {
  constructor(containerId, text, onDeleteAllTasks) {
    this.modal = document.getElementById(containerId);
    this.onDeleteAll = onDeleteAllTasks;
    if (containerId === 'modal_delete') {
      this.modalWarning = createModalWarningDelete(text);
      this.modal.append(this.modalWarning);
    } else if (containerId === 'modal_warning') {
      this.modalWarning = createModalWarning(text);
      this.modal.append(this.modalWarning);
    }

    this.modal.addEventListener('click', ({ target }) => {
      if (target.id === ModalButtonId.warningCancelId) {
        this.cancelClick();
      }
      if (target.id === ModalButtonId.warningConfirmId) {
        this.onDeleteAll();
        this.cancelClick();
      }
      if (target.id === ModalButtonId.warningOkId) {
        this.cancelClick();
      }
    });
  }

  cancelClick = () => {
    this.modal.style.visibility = 'hidden';
    this.modal.replaceChildren();
    const body = document.querySelector('body');
    body.removeAttribute('style');
  };
}
