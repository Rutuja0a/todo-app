document.getElementById('todo-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();
    if (todoText) {
        addTodoItem(todoText);
        todoInput.value = '';
    }
});

function addTodoItem(todoText) {
    const todoList = document.getElementById('todo-list');
    const li = document.createElement('li');
    li.textContent = todoText;
    todoList.appendChild(li);
}
