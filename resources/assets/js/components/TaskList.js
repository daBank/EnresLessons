import React, { Component } from 'react';

import { Task } from './Task';

export class TaskList extends Component {
    render() {
        // console.log('tl');
        // console.log(this.props.handleDelete);
        
        const taskItems = this.props.tasks.map((task) =>
                <Task key={task.id} task={task} handleDelete={this.props.handleDelete} handleSave={this.props.handleSave}>
                </Task>
        );
       

        // console.log("Tasklist"+ this.props.tasks);
        return (
            <div className="panel-body">
                {taskItems}
            </div>
        );
    }
}