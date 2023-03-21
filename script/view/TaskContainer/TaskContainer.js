import { createContainerButton, createCounter } from "./utils.js"

export class TaskContainer {
   constructor( { containerId, headerId, title, className, buttonProps, buttonId, value, counterId } ) {
      this.container = document.getElementById(containerId);
      this.header = document.getElementById(headerId);
      

      this.count = createCounter(counterId, value);
      this.button = createContainerButton(title, className, buttonProps, buttonId);

      this.container.append(this.button);
      this.header.append(this.count);
   }

   deleteAllTasks = () => {
      while (document.getElementById('card_container_done').firstChild) {
         document.getElementById('card_container_done').removeChild(document.getElementById('card_container_done').firstChild);
      }
   }
}
