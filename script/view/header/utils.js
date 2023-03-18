export function addUser(users) {
  const input = document.getElementById("user_input");
  const userName = input.value;
  input.value = "";
  users.push(userName);

  const select = document.getElementById("user_names");
  const option = document.createElement("option");
  option.innerText = users[users.length - 1];
  select.append(option);
  return userName;
}
