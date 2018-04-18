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
                <table className="table table-striped task-table">

                    <thead>
                        <tr>
                            <th>Task</th>
                            <th>&nbsp;</th>
                            <th>&nbsp;</th>
                        </tr>
                    </thead>

                    
                    {taskItems}
                </table>
            </div>
        );
    }
}