import React, { Component } from "react";
import ReactDOM from "react-dom";

import { PanelCreateTask } from "./PanelCreateTask";
import { PanelCurrentTasks } from "./PanelCurrentTasks";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [{ id: 1, name: "hello" }, { id: 2, name: "world" }],
      maxId: 2
    };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleAdd(name) {
    console.log(name);
    //let newTask = {id: this.state.tasks.length+1, name: name};
    let newTask = { id: this.state.maxId + 1, name };
    //let tasks = this.state.tasks;
    //let tasks = [...this.state.tasks];
    //tasks.push(newTask);
    let tasks = [...this.state.tasks, newTask];
    this.setState({ tasks: tasks, maxId:newTask.id });
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
          <PanelCreateTask handleAdd={this.handleAdd} />
          <PanelCurrentTasks
            tasks={this.state.tasks}
            handleDelete={this.handleDelete}
            handleSave={this.handleSave}
          />
        </div>
      </div>
    );
  }
}

if (document.getElementById("example")) {
  ReactDOM.render(<Container />, document.getElementById("example"));
}

if (document.getElementById("example")) {
  ReactDOM.render(<Container />, document.getElementById("example"));
}

// class Hello extends Component {
//     render() {
//         return (
//             <div className="form-group">
//                 <label htmlFor="task-name" className="col-sm-3 control-label">Tasks</label>

//                 <div className="col-sm-6">
//                     <input name="name" type="text" className="form-control"
//                         placeholder="Task Name" aria-label="Task Name" aria-describedby="basic-addon2" />
//                 </div>
//             </div>
//         );
//     }
// }
// var hiddenClass='hidden-xs hidden-sm';

// function showEdit(id){
//     $("#save-task-"+id).removeClass(hiddenClass);
//     $("#name-task-"+id).addClass(hiddenClass);

//     $("#input-task-"+id).removeClass(hiddenClass);
//     $("#edit-task-"+id).addClass(hiddenClass);
// }

// function cancleEdit(id){
//     $("#save-task-"+id).addClass(hiddenClass);
//     $("#name-task-"+id).removeClass(hiddenClass);

//     $("#input-task-"+id).addClass(hiddenClass);
//     $("#edit-task-"+id).removeClass(hiddenClass);
// }

// export default class Example extends Component {
//     render() {
//         return (
//             <div className="container">
//                 <div className="row justify-content-center">
//                     <div className="col-md-8">
//                         <div className="card">
//                             <div className="card-header">Example Component</div>

//                             <div className="card-body">
//                                 I'm an example component!dfgffdqqq
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }
