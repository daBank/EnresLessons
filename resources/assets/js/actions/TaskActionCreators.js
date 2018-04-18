import AppDispatcher from '../AppDispatcher';
import constants from '../constants';
import TaskAPI from '../api/TaskAPI';

let TaskActionCreators = {

  addTask(name) {
    let d = new Date();
    let newId = d.toISOString();
    AppDispatcher.dispatchAsync(TaskAPI.addTask(name), {
      request: constants.ADD_TASK,
      success: constants.ADD_TASK_SUCCESS,
      failure: constants.ADD_TASK_ERROR
    }, {name, id: newId});
  },

  deleteTask(id){
    console.log("555" +id);
      AppDispatcher.dispatchAsync(TaskAPI.deleteTask(id),{
        request: constants.DELETE_TASK,
        success: constants.DELETE_TASK_SUCCESS,
        failure: constants.DELETE_TASK_ERROR
      }, {id:id});
  },

  editTask(id, newName){
    AppDispatcher.dispatchAsync(TaskAPI.editTask(id, newName),{
      request: constants.EDIT_TASK,
      success: constants.EDIT_TASK_SUCCESS,
      failure: constants.EDIT_TASK_ERROR
    }, {id:id, name: newName});
  },

  fetchTasks() {
    AppDispatcher.dispatchAsync(TaskAPI.fetchTasks(), {
      request: constants.FETCH_TASKS,
      success: constants.FETCH_TASKS_SUCCESS,
      failure: constants.FETCH_TASKS_ERROR
    });
  }
};

export default TaskActionCreators;