import React, { Component } from 'react';
import ReactDOM from "react-dom";

import TaskActionCreators from '../actions/TaskActionCreators';

export class NewTaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "bank" };

        
        this.addButton = null;
        this.setAddButtonRef = element => {
          this.addButton = element;
        };
        this.toggleButton = () => {
            // disabledButton using the raw DOM API
            console.log("Tetsetset");
            if (this.addButton){
                this.addButton.disabled=!this.addButton.disabled;
            }
        };

        this.handleAdd =this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ name: event.target.value });
        console.log("hc");
        console.log(this.refs);
       
        if(event.target.value == "")
        {
            console.log("in space");
            this.toggleButton();
        }
        else
        {
            if(this.addButton.disabled) this.toggleButton();
        }
    }

    handleAdd(e) {
        e.preventDefault();
        
        console.log("ntf");
        console.log(this.props.onAdd);
        this.props.onAdd(this.state.name);
        this.setState({ name: "" });
        this.handleChange(e);
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
                            <button className="btn btn-default btn-sm" onClick={this.handleAdd} ref={this.setAddButtonRef}>
                                <span className="glyphicon glyphicon-plus-sign"></span> Add Task
                            </button>
                        </div>
                    </div>

                </form>
            </div>
        );
    }
}