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
    // do your shit after parent is done doing their shit

    this.title = 'React Kanban Board';
  }

  // life cycle hook
  // before rendering this component
  componentWillMount(){
    getTasksFromFakeXHR()
      .then( tasks => {
        console.log(tasks);
        this.props.loadTasks( tasks );
        //this.setState({ tasks });
      });
  }

  render() {
    console.log("App check" + this.props.tasks);
    return (
      <div className="App">
        <div className="App-header">
          <h1>REDUX KANBAN BOARD</h1>
        </div>
        <div id="New Task">
          <NewTaskForm addTask={this.addTask} />
        </div>
        <TaskList tasks={this.props.tasks} />
        <TaskList tasks={this.props.tasks} />
        <TaskList tasks={this.props.tasks} />

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
    // },
    // addBook: book => {
    //   dispatch(addBook(book))
    // }
  }
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default ConnectedApp;