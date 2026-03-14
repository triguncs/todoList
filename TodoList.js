const todoList = [];
const todoDates = [];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  for (let index = 0; index < todoList.length; index++) {
    const todo = todoList[index];
    const date = todoDates[index];
    const todoHTML = `
    <div>${todo}</div>
    <div>${date}</div>
    <button onclick="
      todoList.splice(${index}, 1);
      todoDates.splice(${index}, 1);
      renderTodoList();
    " class="delete-todo-button">Delete</button> 
    `;
    todoListHTML += todoHTML;
  }
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  let name = inputElement.value;

  const dateElement = document.querySelector('.js-todoDate');
  const date = dateElement.value;

  name = name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  todoList.push(name);

  
  todoDates.push(date);

  inputElement.value = '';    

  renderTodoList();
}