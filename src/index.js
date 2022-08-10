import _ from 'lodash'; // eslint-disable-line
import './style.css';
import TaskGenerate from './modules/TaskGenerate.js';
import remove from './modules/remove.js';
// Initialize tasks
TaskGenerate.reloadTasks();



// Add a new task
const addTaskBtn = document.getElementById('add-task-btn');
addTaskBtn.addEventListener('click', () => {
    const taskText = document.getElementById('add-task-input').value;
    TaskGenerate.addTask(taskText);
    document.getElementById('add-task-input').value = '';
});
