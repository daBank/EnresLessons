import React, { Component } from 'react';

export class NewTaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "bank" };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ name: event.target.value });
    }

    handleSubmit(event) {

        event.preventDefault();
        this.props.handleAdd(this.state.name);
        this.setState({ name: "" });
    }


    render() {
        return (
            <div className="panel-body">

                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="task-name" className="col-sm-3 control-label">Task</label>

                        <div className="col-sm-6">
                            <input name="name" type="text" value={this.state.name} onChange={this.handleChange} className="form-control"
                                placeholder="Task Name" aria-label="Task Name" aria-describedby="basic-addon2" />
                        </div>
                    </div>


                    <div className="form-group">
                        <div className="col-sm-offset-3 col-sm-6">
                            <button type="submit" className="btn btn-default btn-sm" >
                                <span className="glyphicon glyphicon-plus-sign"></span> Add Task
                            </button>
                        </div>
                    </div>

                </form>
            </div>
        );
    }
}