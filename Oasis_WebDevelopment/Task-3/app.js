const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const task = todoInput.value.trim();
    if (task !== '') {
        addTask(task);
        todoInput.value = '';
    }
});

function addTask(task) {
    const li = document.createElement('li');
    li.textContent = task;

    // Complete button (toggle completed)
    li.addEventListener('click', function () {
        li.classList.toggle('completed');
    });

    // Delete button
    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.className = 'delete-btn';
    delBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        li.remove();
    });

    li.appendChild(delBtn);
    todoList.appendChild(li);
}
