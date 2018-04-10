import React, { Component } from 'react';

export class PanelHeading extends Component {
    render() {
        return (
            <div className="panel-heading">
                {this.props.message}
            </div>
        );
    }
}