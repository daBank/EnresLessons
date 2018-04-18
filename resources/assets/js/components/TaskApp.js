import React, { Component } from "react";
import ReactDOM from "react-dom";

import { PanelCreateTask } from "./PanelCreateTask";
import { PanelCurrentTasks } from "./PanelCurrentTasks";
import TaskActionCreators from '../actions/TaskActionCreators';

class TaskApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: this.props.tasks,
      maxId: 1
    };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleAdd(name) {
    console.log('ta');
    console.log(name);
    //let newTask = { id: this.state.maxId + 1, name };
    /* let tasks = this.state.tasks;
     let tasks = [...this.state.tasks];
     tasks.push(newTask); */
    //let tasks = [...this.state.tasks, newTask];
    //this.setState({ tasks: tasks, maxId:newTask.id });
    
    TaskActionCreators.addTask(name);
  }

  handleDelete(id) {
    TaskActionCreators.deleteTask(id);
  }

  handleSave(id, newName) {
    TaskActionCreators.editTask(id, newName);
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <PanelCreateTask onAdd={this.handleAdd} />
          <PanelCurrentTasks
            tasks={this.props.tasks}
            handleDelete={this.handleDelete}
            handleSave={this.handleSave}
          />
        </div>
      </div>
    );
  }
}

export default TaskApp;