import TaskGenerate from './TaskGenerate.js';
import tasks from './tasks.js';

// If task is edited, then update tasks array and localStorage
export default document.addEventListener('input', (event) => {
  const { target } = event;
  if (target.classList.contains('task-text')) {
    const taskItem = target.parentElement;
    const taskIndex = Array.prototype.indexOf.call(
      document.getElementById('tasks-container').children,
      taskItem,
    );
    tasks[taskIndex].text = target.value;
    TaskGenerate.refreshLocalStorage();
  }
});
