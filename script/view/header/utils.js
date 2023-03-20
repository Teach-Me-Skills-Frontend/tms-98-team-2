export function addUser(users) {
  const input = document.getElementById("user_input");
  const userName = input.value;
  for(let i = 0; i < users.length; i++){
    if(users[i]===userName){
      alert('You have the same name!');
      return 0;
    }
  }

  console.log(userName)
  document.getElementById('add_user').disabled = true;
  document.getElementById('delete_user').disabled=false;
  input.value = "";
  users.push(userName);
  const select = document.getElementById("user_names");
  const option = document.createElement("option");
  option.innerText = users[users.length - 1];
  select.append(option);
  return userName;
}

export const emptyInput=({target})=>{
  if(!target.value.trim()){
    const btn=document.getElementById('add_user');
    btn.disabled = true;

    const userForm=document.getElementById('user_form');
    userForm.removeEventListener('input', emptyInput);
    userForm.addEventListener('input', inputEvent);
  }
}

export const inputEvent=({target})=>{
  if(target.value.trim()){
    const btn=document.getElementById('add_user');
    btn.disabled = false;
    
    const userForm=document.getElementById('user_form');
    userForm.removeEventListener('input', inputEvent);
    userForm.addEventListener('input', emptyInput);
  }
}