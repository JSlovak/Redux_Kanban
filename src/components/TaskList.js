/*jshint esversion: 6 */

import React from 'react';
import Task from './Task';

const TaskList = ({ tasks }) => {
  console.log(tasks);
 return ( <ul className='task-list'>
    {
      tasks.map((task) =>
        <Task task={task}
        />
      )
    }
  </ul>
  )
};

export default TaskList;