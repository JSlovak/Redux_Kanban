/*jshint esversion: 6 */

import React from 'react';

const Task = ({ task }) => (
  <li className='task-card'>
    <img className='tack' src='tack.png' alt='tack'></img>
    <h3>{ task.assigned_to }</h3>
    <p>{ task.title }</p>
  </li>
);

export default Task;