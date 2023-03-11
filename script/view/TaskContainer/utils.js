import { createButton } from "../utils.js";

export function createContainerButton (title, className, buttonProps, id) {
   const btn = createButton (title, className, buttonProps);
   btn.id = id;

   return btn
}

export function createCounter( className1, className2, value ) {
   const counter = document.createElement('p');
   counter.classList.add(className1, className2);
   counter.textContent = `${value}`;

   return counter
}
