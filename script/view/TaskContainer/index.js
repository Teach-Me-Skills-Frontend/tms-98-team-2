import { createContainerButton, createCounter } from "./utils.js"
export class TaskGeneralContainer {
   constructor( {containerId, headerId, title, className, buttonProps, id, value} ) {
      this.container = document.getElementById(containerId);
      this.header = document.getElementById(headerId);

      this.count = createCounter('counter_task', 'counter_done', value);
      this.button = createContainerButton(title, className, buttonProps, id);

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
