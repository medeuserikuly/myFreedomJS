const addButton = document.querySelector('#addButton'),
    todoList = document.querySelector('#todoList');

let performerInput = document.querySelector('#performerInput'),
    taskInput = document.querySelector('#taskInput');

let toDoTasks = JSON.parse(localStorage.getItem('todoTasks')) || [];
if (!Array.isArray(toDoTasks)) {
    toDoTasks = [];
}

addButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (performerInput.value !== '' && taskInput.value !== '') {
        const task = {
            id: toDoTasks.length + 1,
            performer: performerInput.value,
            task: taskInput.value,
            status: 'План'
        };

        toDoTasks.push(task);
        localStorage.setItem('todoTasks', JSON.stringify(toDoTasks));
        renderTask(task);

        performerInput.value = '';
        taskInput.value = '';
    } else {
        alert('Введите исполнителя и задачу');
    }

});


function renderTask(task) {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${task.id}</td>
        <td>${task.performer}</td>
        <td>${task.task}</td>
        <td>
        <select class="statusSelect">
            <option value="План" ${task.status === 'План' ? 'selected' : ''}>План</option>
            <option value="В работе" ${task.status === 'В работе' ? 'selected' : ''}>В работе</option>
            <option value="Выполнено" ${task.status === 'Выполнено' ? 'selected' : ''}>Выполнено</option>
        </select>
        </td>
        <td class="actionButtons">
            <button class="deleteButton">Удалить</button>
        </td>
    `;
    todoList.appendChild(newRow);

    const deleteButton = newRow.querySelector('.deleteButton');
    deleteButton.addEventListener('click', () => {
        if (confirm('Удалить эту задачу?')) {
            deleteTask(task.id);
            newRow.remove();
        }
    });

    const statusSelect = newRow.querySelector('.statusSelect');
    statusSelect.addEventListener('change', () => {
        task.status = statusSelect.value;

        const index = toDoTasks.findIndex(t => t.id === task.id);
        toDoTasks[index] = task;
        localStorage.setItem('todoTasks', JSON.stringify(toDoTasks));
    });
}

function deleteTask(id) {
    toDoTasks = toDoTasks.filter(task => task.id !== id);
    toDoTasks.forEach((task, index) => {
        task.id = index + 1;
    });
    localStorage.setItem('todoTasks', JSON.stringify(toDoTasks));

    todoList.innerHTML = '';
    toDoTasks.forEach(task => renderTask(task));
}

toDoTasks.forEach(task => renderTask(task));