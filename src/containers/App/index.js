/*jshint esversion: 6 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import TaskList from '../../components/TaskList';
import NewTaskForm from '../NewBookForm';
import { getTasksFromFakeXHR } from '../../lib/tasks.db';
import { loadTask } from '../../actions';


import './styles.css';

class App extends Component {
  constructor(props){
    // give props to your parents
    super(props);
    // do your shit after parent is done doing their shit

    this.title = 'React Kanban Board';

    // set the initial state of THIS COMPONENT
    // in the constructor
    // this.state = {
    //   books : [],
    //   filter : ''
    // };

  }

  // life cycle hook
  // before rendering this component
  componentWillMount(){
    getBooksFromFakeXHR()
      .then( tasks => {
        this.props.loadTasks( tasks );
        // this.setState({ books });
      });
  }

  // addBook = ( book ) => {
  //   // addBookToFakeXHR( book )
  //   //   .then( books => {
  //   //     this.setState({ books });
  //   //   });
  //   this.props.addBook( book );
  // }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Redux Kanban Board</h2>
        </div>
        <BookList tasks={this.props.tasks} />
        <NewTaskForm addTask={this.addTask} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
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