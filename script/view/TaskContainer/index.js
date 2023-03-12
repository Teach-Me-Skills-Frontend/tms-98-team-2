import { createContainerButton, createCounter } from "./utils.js"

export class TaskGeneralContainer {
   constructor( { containerId, headerId, title, className, buttonProps, buttonId, value, counterId } ) {
      this.container = document.getElementById(containerId);
      this.header = document.getElementById(headerId);

      this.count = createCounter(counterId, value);
      this.button = createContainerButton(title, className, buttonProps, buttonId);

      this.container.append(this.button);
      this.header.append(this.count);

      this.container.addEventListener('click', ( { target } ) => {
         if (target.id === 'button_delete_all') {
            console.log("delete task");
         } else if (target.id === 'button_done_all') {
            console.log("done all task");
         } else if (target.id === 'button_add') {
            console.log("add task");
         }
      })
   }
}


































/* export class TaskTodoContainer {
   constructor(containerId, headerId) {
      this.container = document.getElementById(containerId);
      this.header = document.getElementById(headerId);

      this.count = createCounter('counter_task', 'counter_add', 'counter_add');
      this.button = createAddButton();

      this.container.append(this.button);
      this.header.append(this.count);

      this.container.addEventListener('click', ( { target } ) => {
         if (target.id === 'button_add') {
            console.log("add task");
         }
      })

   }
      
}

export class TaskInProgressContainer {
   constructor(containerId, headerId) {
      this.container = document.getElementById(containerId);
      this.header = document.getElementById(headerId);

      this.count = createCounter('counter_task', 'counter_inprogress', 'counter_inprogress');
      this.button = createInProgressButton();

      this.container.append(this.button);
      this.header.append(this.count);

      this.container.addEventListener('click', ( { target } ) => {
         if (target.id === 'button_done_all') {
            console.log("done all task");
         }
      })
      
   }

}

export class TaskDoneContainer {
   constructor(containerId, headerId) {
      this.container = document.getElementById(containerId);
      this.header = document.getElementById(headerId);

      this.count = createCounter('counter_task', 'counter_done', 'counter_done');
      this.button = createDeleteAllButton();

      this.container.append(this.button);
      this.header.append(this.count);

      this.container.addEventListener('click', ( { target } ) => {
         if (target.id === 'button_delete_all') {
            console.log("delete task");
         }
      })
      
   }

}
 */