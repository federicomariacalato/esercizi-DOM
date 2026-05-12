const input = document.querySelector("[type=text]");
const ul = document.querySelector(["ul"]);

function addProduct() {
  const task = input.value;
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  li.innerText = task;
  li.appendChild(checkbox);
  ul.appendChild(li);
  input.value = "";
}

