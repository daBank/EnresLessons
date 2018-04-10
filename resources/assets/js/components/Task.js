import React, { Component } from 'react';

export class Task extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "", edit: false };

        this.handleChange = this.handleChange.bind(this)
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    handleChange(event) {
        this.setState({...this.state,  name: event.target.value });
    }

    handleDelete() {
        console.log("t delete id: " + this.props.task.id);
        // TO DELETE
        console.log(this.props.handleDelete);
        // event.preventDefault();
        this.props.handleDelete(this.props.task.id);
    }

    handleEdit() {
        console.log("edit");
        let state = { ...this.state, name: this.props.task.name, edit: true };
        this.setState(state);
    }

    handleCancel() {
        let state = { ...this.state, name: "", edit: false };
        this.setState(state);
    }
    // HANDLE SAVE

    handleSave() {
        console.log("save id "+this.props.task.id+ "new name "+ this.state.name);
        this.props.handleSave(this.props.task.id, this.state.name);
        this.setState({...this.state,  edit: false });
    }

    render() {
        let taskElement = <div>
            <span>{this.props.task.name}</span>
            <button onClick={this.handleEdit}>
                Edit
                    </button>
            <button onClick={this.handleDelete}>
                Delete
                    </button>
        </div>;
        if (this.state.edit) {
            taskElement = <div>
                <input value={this.state.name} onChange={this.handleChange} />
                <button onClick={this.handleSave}>
                    Save
                    </button>
                <button onClick={this.handleCancel}>
                    Cancel
                    </button>
            </div>;
        }
        return (
            <div>{taskElement}
            </div>

        );
    }
}