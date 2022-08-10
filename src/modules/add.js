import * as vars from './variables.js';
import tasks from './tasks.js';
import TaskGenerate from './TaskGenerate.js';

// Add a new task
export default vars.addTaskBtn.addEventListener('click', () => {
    const taskText = document.getElementById('add-task-input').value;
    TaskGenerate.addTask(taskText);
    document.getElementById('add-task-input').value = '';
});
