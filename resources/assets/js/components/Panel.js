import React, { Component } from 'react';

export class Panel extends Component {
    render() {
        return (
            <div className="col-md-8 mb-3">
                <div className="panel panel-default">
                    {this.props.header}
                    {this.props.body}
                </div>
            </div>
        );
    }
}