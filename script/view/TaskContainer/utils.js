import { createButton } from "../utils.js";

export function createAddButton() {
   const addButton = createButton('Add task', 'button_add', {
      type: 'button',
      name: 'addTaskButton',
   })

   addButton.id ='button_add';
   addButton.classList.add('button');

   return addButton
}

export function createInProgressButton() {
   const inProgressButton = createButton('Done all', 'button_done_all', {
      type: 'button',
      name: 'doneTaskButton',
   })

   inProgressButton.id ='button_done_all';
   inProgressButton.classList.add('button');

   return inProgressButton
}

export function createDeleteAllButton() {
   const deleteAllButton = createButton('Delete all', 'button_delete_all', {
      type: 'button',
      name: 'deleteTaskButton',
   })

   deleteAllButton.id ='button_delete_all';
   deleteAllButton.classList.add('button');

   return deleteAllButton
}

export function createCounter( className1, className2, id, value = 0 ) {
   const counter = document.createElement('p');
   counter.classList.add(className1, className2);
   counter.id = id;
   counter.textContent = `${value}`;

   return counter
}
