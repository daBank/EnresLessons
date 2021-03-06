import React, { Component } from 'react';

import { PanelHeading } from './PanelHeading';
import { NewTaskForm } from './NewTaskForm';
import { Panel } from './Panel';

export  class PanelCreateTask extends Component {
    render() {
        const header = <PanelHeading message="New Task" />
        const body = <NewTaskForm handleAdd={this.props.handleAdd} />;

        return (
            <Panel header={header} body={body} />
        );
    }
}