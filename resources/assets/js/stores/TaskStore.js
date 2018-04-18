import AppDispatcher from '../AppDispatcher';
import {ReduceStore} from 'flux/utils';
import update from 'react-addons-update';
import 'babel-polyfill';
import constants from '../constants';
import _ from 'lodash';


class TaskStore extends ReduceStore {

  getInitialState() {
      let _modifiedTasks={};
        this.setModifiedTasks = function(tasks) { _modifiedTasks =tasks; }
        this.getModifiedTasks = function() { return _modifiedTasks; }
    return {
        tasks: [{ id: 1, name: "hello" }, { id: 2, name: "world" }, {id: 3, name: "test123"}],
        maxId: 3
      };
  }

  getTasks() {
    return [...this._state.tasks];
  }

  getMaxId() {
      return this._state.maxId;
  }

  findIdIndex(id) {
    // return tasks.findIndex(function (task){
    //     return task.id == id;
    // });
    // let tasks = [...this._state.tasks];
    return this.getTasks().findIndex(task => task.id == id);
  }

  reduce(state, action){
    let maxId = this._state.maxId;
    let tasks = [...this._state.tasks];
    //let _modifiedTasks=[...this._state.tasks]; /// ???? cannot add this to DELETE_TASK scope, it will be null/undifined when return.
    let index;

console.log("reduce");
console.log(this.getModifiedTasks());
    switch (action.type) {
        case constants.ADD_TASK:
            console.log("ADD_TASK");
            console.log(action.payload);
            let newTask = { id: action.payload.id , name: action.payload.name };
            tasks = [...this._state.tasks, newTask];
            return { tasks, maxId };
        
        case constants.ADD_TASK_SUCCESS:
            console.log("ADD_TASK_SUCCESS");
            console.log(action.payload.response);
            let taskIndex = this.findIdIndex(action.payload.id);
            tasks[taskIndex].id = action.payload.response.id;
            return { tasks, maxId };

        case constants.ADD_TASK_ERROR:
            console.log("ADD_TASK_ERROR");
            console.log(action.payload.response);
            tasks.splice(this.findIdIndex(action.payload.id), 1);
            return {tasks,maxId};

        case constants.DELETE_TASK:
            console.log("DELETE_TASK");
            console.log(action.payload);
            console.log(tasks);
           
            index =this.findIdIndex(action.payload.id);
            if(index ){
                console.log("tttt"+index);
                console.log(tasks);
                this.setModifiedTasks( {index: index, task: {id:action.payload.id, name: tasks[index].name} } );
                // deletedTasks = {id:action.payload.id, name: tasks[index].name};
            }
            // let deletedName = ( tasks[id] )? tasks[id].name: null;
            tasks.splice(this.findIdIndex(action.payload.id), 1);
            console.log(this.getModifiedTasks());

            return {tasks,maxId};

        case constants.DELETE_TASK_SUCCESS:
            console.log("DELETE_TASK_SUCCESS");
            // console.log(action.payload);
            // console.log(this.getModifiedTasks());
            this.setModifiedTasks({});
            return {tasks,maxId};

        case constants.DELETE_TASK_ERROR:
            console.log("DELETE_TASK_ERROR");
            console.log(action.payload);

            if(this.getModifiedTasks() != {} && this.getModifiedTasks().index && this.getModifiedTasks().task ){
                tasks.splice(this.getModifiedTasks().index, 0, this.getModifiedTasks().task);
                this.setModifiedTasks({});
            }
            console.log(tasks);
            // tasks.splice(this.findIdIndex(action.payload.id), 1);
            return {tasks,maxId};
_
        case constants.EDIT_TASK:
            console.log("EDIT_TASK");
            console.log(action.payload.name);
            index = this.findIdIndex(action.payload.id);

            if( index ){
                console.log("ttttgif"+name);
                console.log(tasks);
                this.setModifiedTasks( {index: index, task: {id: action.payload.id, name: tasks[index].name} } );
                console.log(this.getModifiedTasks());
                // deletedTasks = {id:action.payload.id, name: tasks[index].name};
            }

            tasks[index].name =  action.payload.name ;
            return {tasks, maxId};

        case constants.EDIT_TASK_SUCCESS:
            console.log("EDIT_TASK_SUCCESS");
            console.log(action.payload.response);
            this.setModifiedTasks({});
            return {tasks, maxId};
        
        case constants.EDIT_TASK_ERROR:
            console.log("EDIT_TASK_ERROR");
            console.log(action.payload.response);

            if(this.getModifiedTasks() != {} && this.getModifiedTasks().index && this.getModifiedTasks().task ){
                tasks[this.getModifiedTasks().index].name = this.getModifiedTasks().task.name;
                this.setModifiedTasks({});
            }

            return {tasks, maxId};

        case constants.FETCHTASKS:
            return {
                tasks: [],
                maxId: 1
            };
        
        case constants.FETCH_TASKS_SUCCESS:
            console.log(action.payload.response);
            let newTasks = action.payload.response.map(
                task => ({ id: task.id, name: task.name })
            );
            maxId = _.maxBy(newTasks, 'id').id;
            return {tasks: newTasks, maxId};
        
        case constants.FETCH_TASKS_ERROR:
            return state;

        default:
            return state;
    }
    
  }

}

export default new TaskStore(AppDispatcher);