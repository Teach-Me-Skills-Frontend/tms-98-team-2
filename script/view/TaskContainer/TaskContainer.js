import { createCounter } from './utils.js';

export class TaskContainer {
  constructor({ containerId, headerId, value, counterId }) {
    this.container = document.getElementById(containerId);
    this.header = document.getElementById(headerId);
    this.count = createCounter(counterId, value);
    this.header.append(this.count);
  }

  deleteAllTasks = () => {
    const cardContainer = document.getElementById('card_container_done');
    while (cardContainer.firstChild) {
      cardContainer.removeChild(cardContainer.firstChild);
    }
  };
}
