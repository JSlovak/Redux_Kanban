/*jshint esversion: 6 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import TaskList from '../../components/TaskList';
import NewTaskForm from '../NewTaskForm';
import { getTasksFromFakeXHR } from '../../lib/tasks.db';
import { loadTasks } from '../../actions';


import './styles.css';

class App extends Component {
  constructor(props){
    // give props to your parents
    super(props);
    console.log(this.props);
    // do your shit after parent is done doing their shit

    this.title = 'React Kanban Board';
  }

  // life cycle hook
  // before rendering this component
  componentWillMount(){
    getTasksFromFakeXHR()
      .then( tasks => {
        this.props.loadTasks( tasks );
        //this.setState({ tasks });
      });
  }

  render() {
    console.log("App check" + this.props.tasks);
    return (
      <div className="App">
        <div className="App-header">
          <NewTaskForm className="NewTask" addTask={this.addTask} />
        </div>
        <div className="App-body">
          <div className="column">
            <h1 className="Status-header">TO DO</h1>
            <TaskList tasks={this.props.tasks} />
          </div>
          <div className="column">
            <h1 className="Status-header" >DOING</h1>
            <TaskList tasks={this.props.tasks} />
          </div>
          <div className="column">
            <h1 className="Status-header" >DONE</h1>
            <TaskList tasks={this.props.tasks} />
          </div>
        </div>
      </div>
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
    loadTasks: tasks => {
      dispatch(loadTasks(tasks))
    }

  }
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default ConnectedApp;