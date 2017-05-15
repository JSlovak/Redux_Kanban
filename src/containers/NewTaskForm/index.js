/*jshint esversion: 6 */

import React, { Component } from 'react';

class NewTaskForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      title: " ",
      priority: " ",
      status: " ",
      created_by: " ",
      assigned_to: " "

    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.addTask(this.state);

    this.setState({
      title: " ",
      priority: " ",
      status: " ",
      created_by: " ",
      assigned_to: " "
    });

  }

  handleChangeTitle = (event) => {
    this.setState({
      title : event.target.value
    });
  }

  handleChangePriority = (event) => {
    this.setState({
      priority : event.target.value
    });
  }

  handleChangeStatus = (event) => {
    this.setState({
      status : event.target.value
    });
  }

  handleChangeAssignment= (event) => {
    this.setState({
      assigned_to: event.target.value
    });
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input type="text" placeholder="Title" value={this.state.title} onChange={this.handleChangeTitle} />
        </div>
        <div>
          <input type="text" placeholder="Assigned To" value={this.state.assigned_to} onChange={this.handleChangeAuthor} />
        </div>
        <div>
          <input type="text" placeholder="Status" value={this.state.status} onChange={this.handleChangeAuthor} />
        </div>
        <div>
          <button type="submit">Add Task</button>
        </div>
      </form>
    );
  }
}

export default NewTaskForm;