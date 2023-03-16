import { createModalWarning } from './utils.js';

export class ModalWarningView {
    constructor(containerId) {
        this.modal = document.getElementById(containerId);
        this.modalBtn = createModalWarning();
        this.modal.append(this.modalBtn);

        this.modalBtn.addEventListener('submit', (event) => {
            event.preventDefault();
        })

        this.modalBtn.addEventListener('click', ({ target }) => {
            
            if (target.id === 'modal_warning_cancel') {
                console.log('This is cancel button in warning')
            }
            if (target.id === 'modal_warning_confirm') {
                console.log('This is confirm button in warning')
            }
        })
    }
}
