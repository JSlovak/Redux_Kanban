/*jshint esversion: 6 */

import React from 'react';

const Task = ({ task }) => (
  <li>
    <h3>{ task.assigned_to }</h3>
    <p>{ task.title }</p>
  </li>
);

export default Task;