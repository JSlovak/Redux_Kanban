/*jshint esversion: 6 */

import React from 'react';
import Task from './Task';

const TaskList = ({ tasks }) => {
  console.log("TaskList:" + tasks);
 return ( <ul>
    {
      tasks.map((task) =>
        <Task key={task.task_id} task={task}
        />
      )
    }
  </ul>
  )
};

export default TaskList;