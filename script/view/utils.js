export function createInput(inputProps) {
  const input = document.createElement("input");

  for (const key in inputProps) {
    if (typeof inputProps[key] !== "boolean" || inputProps[key]) {
      input.setAttribute(key, inputProps[key]);
    }
  }

  return input;
}

export function createTextInput(inputProps, className) {
  const input = createInput(inputProps);
  input.setAttribute("type", "text");
  input.classList.add(className);

  return input;
}

export function createButton(title, className, buttonProps) {
  const button = document.createElement("button");
  button.classList.add(className);
  button.textContent = title;

  for (const key in buttonProps) {
    button.setAttribute(key, buttonProps[key]);
  }

  return button;
}

export function createInnerElement(tagName, innerElement, innerText, className = "") {
  const cardDiv = document.createElement(tagName);
  if (className) {
    cardDiv.classList.add(className);
  }

  for (let i = 0; i < innerElement.length; i++) {
    const cardDivInner = document.createElement(innerElement[i]);
    if (innerText) {
      cardDivInner.innerText = innerText[i];
    }
    cardDiv.append(cardDivInner);
  }

  return cardDiv;
}

export function createElementWithClass(tagName, className) {
  const element = document.createElement(tagName);
  element.classList.add(className);

  return element;
}