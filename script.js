const addButton = document.querySelector('button');
const upSortIcon = document.querySelector('i.up');
const inputField = document.querySelector('input');
const validationMessage = document.querySelector('span.validation-span');
const downSortIcon = document.querySelector('i.down');
const clearButton = document.querySelector('.x');
const inputSection = document.querySelector('.card-add-input');
const listSection = document.querySelector('.card-list');
const taskList = document.querySelector('ol');

let tasks = [];

const addTask = (event) => {
    event.preventDefault();
    const taskText = inputField.value.trim();
    
    if (taskText !== '') {
        tasks.push(taskText);
        renderTasks(); 
        inputField.value = '';
    } else {
        inputField.value = '';
        validationMessage.style.display = 'block';
    }

    inputSection.classList.toggle('d-none');
    listSection.classList.remove('d-none');
}

const deleteTask = (index) => {
    tasks.splice(index, 1);
    renderTasks();
}

const clearInputField = () => {
    inputField.value = '';
}

const sortTasksAZ = () => {
    tasks.sort();
    renderTasks();
}

const sortTasksZA = () => {
    tasks.sort((a, b) => b.localeCompare(a));
    renderTasks();
}

const renderTasks = () => {
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        taskList.innerHTML += `
            <li>
                <span class='task-inner'>${index + 1}.${task}</span>
                <div class='icon'>
                    <i class="fa-regular fa-circle-xmark delete-btn" onclick="deleteTask(${index})"></i>
                </div>
            </li>`;
    });
}

addButton.addEventListener('click', addTask);
upSortIcon.addEventListener('click', sortTasksZA);
downSortIcon.addEventListener('click', sortTasksAZ);
clearButton.addEventListener('click', clearInputField);

