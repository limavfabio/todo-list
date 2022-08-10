import _ from 'lodash';
import './style.css';
import TaskGenerate from './modules/TaskGenerate';  
import tasks from './modules/tasks';



for (let i = 0; i < tasks.length; i++) {
  TaskGenerate.renderTask(i);
}

