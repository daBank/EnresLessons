import AppDispatcher from '../AppDispatcher';
import constants from '../constants';

let TaskActionCreators = {
  addTask(name) {
    AppDispatcher.dispatch({
      type: constants.ADD_TASK,
      payload: {name}
    });
  }
};

export default TaskActionCreators;