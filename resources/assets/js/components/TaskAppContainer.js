import React, { Component, PropTypes } from 'react';
import {Container} from 'flux/utils';
import TaskApp from './TaskApp';
import TaskStore from '../stores/TaskStore';
import TaskActionCreators from '../actions/TaskActionCreators';

class TaskAppContainer extends Component {
  componentDidMount() {
    TaskActionCreators.fetchTasks();
  }

  render() {
   
    return <TaskApp tasks={this.state.tasks}
    />;
  }
}

TaskAppContainer.getStores = () => ([TaskStore]);

TaskAppContainer.calculateState = (prevState) => ({
  tasks: TaskStore.getTasks()
});
export default Container.create(TaskAppContainer);
