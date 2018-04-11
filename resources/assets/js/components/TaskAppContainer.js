import React, { Component, PropTypes } from 'react';
import {Container} from 'flux/utils';
import TaskApp from './TaskApp';
import TaskStore from '../stores/TaskStore';

class TaskAppContainer extends Component {
  componentDidMount(){
    
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
