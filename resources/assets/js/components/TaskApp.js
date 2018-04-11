import React, { Component } from "react";
import ReactDOM from "react-dom";

import { PanelCreateTask } from "./PanelCreateTask";
import { PanelCurrentTasks } from "./PanelCurrentTasks";

class TaskApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: this.props.tasks
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }


  handleDelete(id) {
    // console.log("id"+id+ "ex de" +this.findIdIndex(id));
    let tasks = [...this.state.tasks];
    tasks.splice(this.findIdIndex(id), 1);

    this.setState({ tasks });
  }

  handleSave(id, newName) {
    let tasks = [...this.state.tasks];
    let index = this.findIdIndex(id);
    tasks[index].name =  newName ;

    this.setState({ tasks });
  }

  findIdIndex(id) {
    // return tasks.findIndex(function (task){
    //     return task.id == id;
    // });
    return this.state.tasks.findIndex(task => task.id == id);
  }
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <PanelCreateTask  />
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