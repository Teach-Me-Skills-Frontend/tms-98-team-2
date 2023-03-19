import { createModalWarning } from './utils.js';

export class ModalWarningView {
    constructor(containerId, text, onDeleteAllTasks) {
        this.modal = document.getElementById(containerId);
        this.modalBtn = createModalWarning(text);
        this.modal.append(this.modalBtn);
        this.onDeleteAll = onDeleteAllTasks

        this.modalBtn.addEventListener('submit', (event) => {
            event.preventDefault();
        })

        this.modalBtn.addEventListener('click', ({ target }) => {
            
            if (target.id === 'modal_warning_cancel') {
                this.modal.style.visibility = 'hidden'
                this.modal.replaceChildren()
                const body = document.querySelector('body')
                body.removeAttribute('style')
            }
            if (target.id === 'modal_warning_confirm') {
                this.onDeleteAll()
                this.modal.style.visibility = 'hidden'
                this.modal.replaceChildren()
                const body = document.querySelector('body')
                body.removeAttribute('style')
            }
        })
    }
}
