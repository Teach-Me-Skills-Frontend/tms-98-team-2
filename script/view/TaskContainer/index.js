export function createCounter(value = '0') {
   const counter = document.createElement('p');
   counter.classList.add('counter_task');


   // получить значение для счетчика??

   return counter
}

function addCounterTodo () {
   const addCountersTodo = createCounter();
   addCountersTodo.classList.add('counter_add')
   addCountersTodo.setAttribute('id', 'counter_add');

   const add = document.getElementById('card_wrapper_header')

   add.append(addCountersTodo);

}
addCounterTodo()

/* function createButton() {
   const createButtonAdd = document.createElement('button');
   createButtonAdd.classList.add('button', 'button_add');
   createButtonAdd.setAttribute('id', 'button_add');
   createButtonAdd.innerText = 'Add TODO';

   return createButtonAdd
} */
export function createButton (title,) {
   const button = document.createElement('button');
   button.classList.add('button');
   button.textContent = title;


 
   return button;
 }

function addButton() {
   const addButtons = createButton('Add TODO')
   addButtons.classList.add('button_add');
   addButtons.setAttribute('id', 'button_add')

   const add = document.getElementById('card_progress_add')

   add.append(addButtons);

   addButtons.addEventListener('click', () => {
      console.log("object");
   });




   return addButtons
}

addButton();


