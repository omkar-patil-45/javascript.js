let todoList = [
  {
    item: 'Buy Milk',
    dueDate: 7 / 7 / 2024
  },
  {
    item: 'javascript',
    dueDate: 7 / 6 / 2024
  },
  {
    item: 'React',
    dueDate: 7 / 6 / 2024
  }
];
displayItems();

function addTodo() {
  let inputElement = document.querySelector("#todo-input");
  let todoItem = inputElement.value;
  todoList.push({ item: todoItem, dueDate: todoDate });
  inputElement.value = '';
  dateElement.value = '';

  displayItems();
}

function displayItems() {
  let containerElement = document.querySelector(".todo-container");

  let newHtml = '';

  for (let i = 0; i < todoList.length; i++) {
    let item = todoList[i].item;
    let dueDate = todoList[i].dueDate
    newHtml += `
    <div>
    <span>${item}</span>
    <span>${dueDate}</span>

    <button onclick="todoList.splice(${i},1);displayItems();">Delete</button>
    </div>
    `;
  }
  containerElement.innerHTML = newHtml;
}

