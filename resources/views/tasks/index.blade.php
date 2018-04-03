@extends('layouts.app')

@section('content')

 

                        

<div class="container">
    <div class="row justify-content-center">

        <!-- New Task Form -->
        
            <div class="col-md-8 mb-3">
                <div class="card">
                    <div class="card-header">New Task</div>

                    <div class="card-body">
                    @include('common.errors')
                    <form action="{{ url('task') }}" method="POST" class="form-horizontal">
                    {{ csrf_field() }}

                        <!-- Task Name -->
                        <div class="form-group">
                            <label for="task-name" class="col-sm-3 control-label">Task</label>
        
                            <div class="col-sm-6">
                                <input name="name" type="text" class="form-control" 
                                placeholder="Task Name" aria-label="Recipient's username" aria-describedby="basic-addon2">
                            </div>
                        </div>

                        <!-- Task Name -->
                        <div class="form-group">
                            <div class="col-sm-offset-3 col-sm-6">
                                <button type="submit" class="btn btn-default btn-sm">
                                    <span class="glyphicon glyphicon-plus-sign"></span> Add Task
                                </button>
                               
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        

        <div class="col-md-8">
            <!-- <div class="card">
                <div class="card-header">Current Tasks</div>

                <div class="card-body">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                            <th scope="col">Task</th>
                            <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>First Task</td>
                                <td>
                                    <button type="button" class="btn btn-danger btn-sm">
                                        <span class="glyphicon glyphicon-trash"></span> Delete
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>Second Task</td>
                                <td>
                                    <button type="button" class="btn btn-danger btn-sm">
                                        <span class="glyphicon glyphicon-trash"></span> Delete
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div> -->
            
    <!-- Current Tasks -->
    <!-- @if (count($tasks) > 0) -->
        <div class="panel panel-default">
            <div class="panel-heading">
                Current Tasks
            </div>

            <div class="panel-body">
                <table class="table table-striped task-table">

                    <!-- Table Headings -->
                    <thead>
                        <th>Task</th>
                        <th>&nbsp;</th>
                    </thead>

                    <!-- Table Body -->
                    <tbody>
                        @foreach ($tasks as $task)
                            <tr>
                                <!-- Task Name -->
                                <td class="table-text">
                                    <div>{{ $task->name }}</div>
                                </td>
                                    <!-- Delete Button -->
                                    <td>
                                        <form action="{{ url('task/'.$task->id) }}" method="POST">
                                            {{ csrf_field() }}
                                            {{ method_field('DELETE') }}

                                            <button type="submit" id="delete-task-{{ $task->id }}" class="btn btn-danger">
                                                <i class="fa fa-btn fa-trash"></i>Delete
                                            </button>
                                        </form>
                                    
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    <!-- @endif -->
        </div>
        
    </div>
</div>

@endsection
