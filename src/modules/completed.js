import TaskGenerate from './TaskGenerate.js';
import tasks from './tasks.js';

// If checked, then set completed to true
export default document.addEventListener('input', (event) => {
  const { target } = event;
  if (target.classList.contains('checkbox')) {
    const taskItem = target.parentElement;
    const taskIndex = Array.prototype.indexOf.call(
      document.getElementById('tasks-container').children,
      taskItem,
    );
    tasks[taskIndex].completed = target.checked;
    // If checked, strike through the text
    if (target.checked) {
      target.parentElement.querySelector('.task-text').style.textDecoration = 'line-through';
    } else {
      target.parentElement.querySelector('.task-text').style.textDecoration = 'none';
    }
    TaskGenerate.refreshLocalStorage();
  }
});
