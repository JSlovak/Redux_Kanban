/*jshint esversion: 6 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../../actions';

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

    this.props.addTask(this.createTaskObject(this.state));

    this.setState({
      title: " ",
      priority: " ",
      status: " ",
      created_by: " ",
      assigned_to: " "
    });

  }

  createTaskObject(stateObj) {
    return {
      title: this.state.title,
      priority: this.state.priority,
      status: this.state.status,
      created_by: "ME!",
      assigned_to: this.state.assigned_to

    };
  }

// Can refactor all this changes with:

// handleChange = (event) => {
//   this.setState({[event.target.name]: event.target.value});
// };

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

  getPriorityColor = (priority)=> {
    switch (priority) {
      case 'Urgent' :
        return {'backgroundColor':'red'};
      case 'High' :
        return {'backgroundColor':'orange'};
      case 'Medium' :
        return {'backgroundColor':'yellow'};
      case 'Low' :
        return {'backgroundColor':'beige'};
      default:
        return {'backgroundColor':'beige'};
    }
  }

  render(){
    console.log(this.props);
    return (
        <form
          className="NewCardForm"
          onSubmit={this.handleSubmit}
          onDoubleClick={this.handleSubmit}
          >
          <h1>NEW TASK</h1>
          <input type="text" name="title" value={this.state.title} onChange={this.handleChangeTitle}/>
          <p>INSERT USER NAME HERE</p>
          <select type="text" name="priority" value={this.state.priority} onChange={this.handleChangePriority}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            <option value="Urgent">Urgent</option>
          </select>
          <input type="submit"/>
        </form>
    );
  }
}

const mapStateToProps = (state) => {
  // state.tasks.forEach(curr => {
  //   console.log(curr);
  // });
  //console.log("App test state:" + state.tasks);
  return {
    tasks: state.tasks
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addTask: task => {
      dispatch(addTask(task))
    }
  }
}

const ConnectedNewTaskForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTaskForm);

export default ConnectedNewTaskForm;