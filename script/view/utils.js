export function createInput (inputProps) {
    const input = document.createElement('input');
  
    for (const key in inputProps) {
      if (typeof inputProps[key] !== 'boolean' || inputProps[key]) {
        input.setAttribute(key,
          inputProps[key]);
      }
    }
  
    return input;
}

export function createTextInput (inputProps, className) {
    const input = createInput(inputProps);
    input.setAttribute('type', 'text');
    input.classList.add(className);
  
    return input;
}

export function createButton (title, className, buttonProps) {
    const button = document.createElement('button');
    button.classList.add(className);
    button.textContent = title;
  
    for (const key in buttonProps) {
      button.setAttribute(key, buttonProps[key]);
    }
  
    return button;
}
