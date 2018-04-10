@extends('layouts.app')

@section('content')

 

                        

<div class="container">
    <div class="row justify-content-center">

        <!-- New Task Form -->
        
        <div class="col-md-8 mb-3">
            <div class="panel panel-default">

                <div class="panel-heading">
                    New Task
                </div>

                <div class="panel-body">
                @include('common.errors')
                    <form action="{{ url('task') }}" method="POST" class="form-horizontal">
                    {{ csrf_field() }}

                        <!-- Task Name -->
                        <div class="form-group">
                            <label for="task-name" class="col-sm-3 control-label">Task</label>
        
                            <div class="col-sm-6">
                                <input name="name" type="text" class="form-control" 
                                placeholder="Task Name" aria-label="Task Name" aria-describedby="basic-addon2">
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
                        <th>&nbsp;</th>
                    </thead>

                    <!-- Table Body -->
                    <tbody>
                        @foreach ($tasks as $task)
                            <tr>

                            <form  action="{{ url('update/'.$task->id) }}" method="POST">
                                <!-- Task Name -->
                                <td class="table-text">
                                    <div id="name-task-{{$task->id}}">{{ $task->name }}</div>
                                    <div class="col-sm-12 hidden-xs hidden-sm"  id="input-task-{{ $task->id }}"> 
                                        <input name="name" type="text" class="form-control" 
                                        value="{{ $task->name }}" aria-label="Task Name" aria-describedby="basic-addon2">
                                    </div>
                                </td>
                                
                                <td class="table-text">

                                    <!-- Edit Button -->
                                    <button type="button" id="edit-task-{{ $task->id }}" class="btn btn-warning" onclick="showEdit('{{ $task->id }}')">
                                            <i class="fa fa-btn fa-trash"></i>Edit
                                    </button>

                                    <!-- Save Button -->
                                    <div class="hidden-xs hidden-sm" id="save-task-{{ $task->id }}"> 
                                      
                                            {{ csrf_field() }}
                                            <!-- {{ method_field('UPDATE') }} -->
                                            <button type="submit"  class="btn btn-info">
                                                <i class="fa fa-btn fa-trash"></i>Save
                                            </button>
                                        

                                        <!-- Cancle Button -->
                                        <!-- <div class="hidden-xs hidden-sm" id="save-task-{{ $task->id }}">  -->
                                            <button type="submit"  class="btn btn-secondary" onclick="cancleEdit({{$task->id}})">
                                                    <i class="fa fa-btn fa-de"></i>Cancle
                                            </button>
                                        <!-- </div> -->
                                    </div>

                                    
                                </td>
                                </form>
                                <!-- Delete Button -->
                                <td class="table-text">
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

<script>

var hiddenClass='hidden-xs hidden-sm';
console.log("Declare functions");
function showEdit(id){
    console.log("in show edit");
    $("#save-task-"+id).removeClass(hiddenClass); 
    $("#name-task-"+id).addClass(hiddenClass);

    $("#input-task-"+id).removeClass(hiddenClass); 
    $("#edit-task-"+id).addClass(hiddenClass);
}

function cancleEdit(id){
    console.log("in cancle edit");
    $("#save-task-"+id).addClass(hiddenClass); 
    $("#name-task-"+id).removeClass(hiddenClass);

    $("#input-task-"+id).addClass(hiddenClass); 
    $("#edit-task-"+id).removeClass(hiddenClass);
}
</script>