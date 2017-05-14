/*jshint esversion: 6 */

//import { getTasksFromFakeXHR } from '../lib/tasks.db';

export const LOAD_TASKS = 'LOAD_TASKS';

export const loadTasks = tasks => {
  console.log(tasks.length);
  return {
    type: LOAD_TASKS,
    tasks
  };
};

// export const addTask = task => {

//   return {
//     type: ADD_TASK,
//     task
//   };
