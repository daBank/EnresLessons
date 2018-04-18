import React, { Component } from 'react';

export class Task extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "", edit: false };

        this.saveButton = null;
        this.setSaveButtonRef = element => {
          this.saveButton = element;
        };
        this.toggleButton = () => {
            // disabledButton using the raw DOM API
            console.log("Tetsetset");
               if (this.saveButton){
                   this.saveButton.disabled=!this.saveButton.disabled;
                }
        };

        this.handleChange = this.handleChange.bind(this)
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    handleChange(event) {
        this.setState({...this.state,  name: event.target.value });
        if(event.target.value == "")
        {
            this.toggleButton();
        }
        else
        {
            if(this.saveButton.disabled) this.toggleButton();
        }
    }

    handleDelete() {
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


        let taskElement = 
        <tr>
            <td className="table-text">
                <div id="name-task-id">
                {this.props.task.id}:{this.props.task.name}
                </div>
                
            </td>

            <td className="table-text">
                <button type="button" id="edit-task-id" className="btn btn-warning" onClick={this.handleEdit}>
                    <i className="fa fa-btn fa-trash"></i>Edit
                </button>

                
            </td>

            <td className="table-text">
                    <button id="delete-task-id" className="btn btn-danger" onClick={this.handleDelete}>
                        <i className="fa fa-btn fa-trash"></i>Delete
                    </button>
            </td>

        </tr>;
        

        if(this.state.edit){
            taskElement =
            <tr>
                <td className="table-text">
                    <div className="col-sm-12 hidden-xs hidden-sm" id="input-task-id">
                        <input name="name" type="text" className="form-control"
                            value={this.state.name} onChange={this.handleChange} aria-label="Task Name" aria-describedby="basic-addon2" />
                    </div>
                </td>
                
                <td>
                    <div className="hidden-xs hidden-sm" id="save-task-id">
                        <button type="submit" className="btn btn-info" onClick={this.handleSave} ref={this.setSaveButtonRef}>
                            <i className="fa fa-btn fa-trash"></i>Save
                        </button>
                    </div>
                </td>
                
                <td>
                    <button type="submit" className="btn btn-secondary" onClick={this.handleCancel}>
                        <i className="fa fa-btn fa-de"></i>Cancle
                    </button>
                </td>
            </tr>;
        }
        
        // <div>
        //     <span>{this.props.task.name}</span>
        //     <button onClick={this.handleEdit}>
        //         Edit
        //             </button>
        //     <button onClick={this.handleDelete}>
        //         Delete
        //             </button>
        // </div>;

        // if (this.state.edit) {
        //     taskElement = <div>
        //         <input value={this.state.name} onChange={this.handleChange} />
        //         <button onClick={this.handleSave} ref={this.setSaveButtonRef}>
        //             Save
        //             </button>
        //         <button onClick={this.handleCancel}>
        //             Cancel
        //             </button>
        //     </div>;
        // }

        return (
            <tbody>
                {taskElement}
            </tbody>

        );
    }
}