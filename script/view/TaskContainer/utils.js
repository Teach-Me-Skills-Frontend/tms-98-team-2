import { createButton } from "../utils.js";

export function createContainerButton (title, className, buttonProps, buttonId) {
   const btn = createButton (title, className, buttonProps, buttonId);
   btn.id = buttonId;

   return btn
}

export function createCounter( id, value ) {
   const counter = document.createElement('p');
   counter.classList.add('counter_task');
   counter.id = id;
   counter.textContent = `${value}`;

   return counter
}
