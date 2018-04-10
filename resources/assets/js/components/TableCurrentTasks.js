import React, { Component } from 'react';

export class TableCurrentTasks extends Component {
    render() {
        return (
            <div className="panel-body">
                <table className="table table-striped task-table">

                    <thead>
                        <th>Task</th>
                        <th>&nbsp;</th>
                        <th>&nbsp;</th>
                    </thead>

                    <tbody>
                        <tr>

                            <form onSubmit={this.handleSubmit}>

                                <td className="table-text">
                                    <div id="name-task-id">
                                    </div>
                                    <div className="col-sm-12 hidden-xs hidden-sm" id="input-task-id">
                                        <input name="name" type="text" className="form-control"
                                            value="task->name" aria-label="Task Name" aria-describedby="basic-addon2" />
                                    </div>
                                </td>

                                <td className="table-text">

                                    <button type="button" id="edit-task-id" className="btn btn-warning" onClick="showEdit({ this.task_id })">
                                        <i className="fa fa-btn fa-trash"></i>Edit
                                    </button>

                                    <div className="hidden-xs hidden-sm" id="save-task-id">

                                        <button type="submit" className="btn btn-info">
                                            <i className="fa fa-btn fa-trash"></i>Save
                                        </button>



                                        <button type="submit" className="btn btn-secondary" onClick="cancleEdit()">
                                            <i className="fa fa-btn fa-de"></i>Cancle
                                        </button>
                                    </div>


                                </td>
                            </form>

                            <td className="table-text">
                                <form action="url" method="POST" onSubmit={this.handleClick}>


                                    <button type="submit" id="delete-task-id" className="btn btn-danger">
                                        <i className="fa fa-btn fa-trash"></i>Delete
                                        </button>
                                </form>
                            </td>

                        </tr>

                    </tbody>
                </table>
            </div>
        );
    }
}