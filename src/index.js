import _ from 'lodash'; // eslint-disable-line
import './style.css';
import TaskGenerate from './modules/TaskGenerate.js';
import tasks from './modules/tasks.js';

// Initialize tasks
TaskGenerate.reloadTasks();

// A click listener to remove the task
const tasksContainer = document.getElementById('tasks-container');
tasksContainer.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('trash-icon')) {
        const taskItem = target.parentElement;
        const taskIndex = Array.prototype.indexOf.call(tasksContainer.children, taskItem);
        tasks.splice(taskIndex, 1);
        TaskGenerate.reloadTasks();
        TaskGenerate.resetTasksId();
    }
});

// Add a new task
const addTaskBtn = document.getElementById('add-task-btn');
addTaskBtn.addEventListener('click', () => {
    const taskText = document.getElementById('add-task-input').value;
    TaskGenerate.addTask(taskText);
    document.getElementById('add-task-input').value = '';
});
