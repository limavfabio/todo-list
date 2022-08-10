import _ from 'lodash'; // eslint-disable-line
import './style.scss';
import TaskGenerate from './modules/TaskGenerate.js';
import tasks from './modules/tasks.js';

for (let i = 0; i < tasks.length; i + 1) {
  TaskGenerate.renderTask(i);
}
