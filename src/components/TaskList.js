/*jshint esversion: 6 */

import React from 'react';
import Task from './Task';

const TaskList = ({ tasks }) => (
  <ul>
    {
      tasks.map( ({ }) =>
        <Task
          // key={_id}
          // title={title}
          // author={author}
        />
      )
    }
  </ul>
);

export default TookList;