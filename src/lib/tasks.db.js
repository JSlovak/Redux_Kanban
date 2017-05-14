/*jshint esversion: 6 */

const tasksFromFakeDB = [
  {
    task_id: 1,
    title: "Don't eat fried oreos",
    priority: "HIGH",
    status: "To Do",
    createdBy: "admin",
    assignedTo: "minion01"
  },
  {
    task_id: 2,
    title: "Don't eat donuts",
    priority: "MEDIUM",
    status: "Doing",
    createdBy: "admin",
    assignedTo: "minion01"
  },
  {
    task_id: 3,
    title: "Tell Donald Trump there are aliens",
    priority: "HIGH",
    status: "Doing",
    createdBy: "admin",
    assignedTo: "minion01"
  },
  {
    task_id: 4,
    title: "Finish last season of Vikings",
    priority: "LOW",
    status: "To Do",
    createdBy: "admin",
    assignedTo: "minion01"
  },
  {
    task_id: 5,
    title: "Find out what happens to Rob Kardashian",
    priority: "LOW",
    status: "Done",
    created_by: "admin",
    assigned_to: "minion01"
  }
];

export const getTasksFromFakeXHR = () => new Promise((resolve, reject) => {
  setTimeout(() => resolve(tasksFromFakeDB), 500);
});

// export const addTaskToFakeXHR = (task) => new Promise((resolve, reject) => {
//   setTimeout(() => {
//     task._id = Math.random();
//     tasksFromFakeDB.push(task);
//     resolve(tasksFromFakeDB);
//   }, 500);
// });