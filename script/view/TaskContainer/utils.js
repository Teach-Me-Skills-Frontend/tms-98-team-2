export function createCounter(id, value) {
  const counter = document.createElement('p');
  counter.classList.add('counter_task');
  counter.id = id;
  counter.textContent = `${value}`;

  return counter;
}
