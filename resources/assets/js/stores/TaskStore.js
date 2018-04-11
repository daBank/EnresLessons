import AppDispatcher from '../AppDispatcher';
import {ReduceStore} from 'flux/utils';
import update from 'react-addons-update';
import 'babel-polyfill';
import constants from '../constants';


class TaskStore extends ReduceStore {
  getInitialState() {
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

  reduce(state, action){
    switch (action.type) {
        case constants.ADD_TASK:
            console.log(action.payload);
            let maxId = this._state.maxId+1;
            let newTask = { id: maxId , name: action.payload.name };

            let tasks = [...this._state.tasks, newTask];
            return { tasks, maxId };
        
            // return update(this.getState(), {
            //     tasks: {$push: [newTask] },
            //     maxId: {$set: maxId}
            // });

        default:
            return state;
    }
    
  }

}

export default new TaskStore(AppDispatcher);