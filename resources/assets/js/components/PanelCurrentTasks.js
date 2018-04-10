import React, { Component } from 'react';

import { PanelHeading } from './PanelHeading';
// import { NewTaskForm } from './NewTaskForm';
import { TaskList } from './TaskList';
import { Panel } from './Panel';

export class PanelCurrentTasks extends Component {
    render() {
        const heading = <PanelHeading message="Current Tasks" />;
        // console.log('pct');
        // console.log(this.props.handleDelete);
        const body = <TaskList tasks={this.props.tasks} handleDelete={this.props.handleDelete} handleSave={this.props.handleSave}/>;
        // console.log("tasls: "+this.props.tasks[0].id);
        return (
            <Panel header={heading} body={body} />
        );
    }
}