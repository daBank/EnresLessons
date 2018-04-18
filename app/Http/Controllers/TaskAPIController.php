<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Task;
use App\User;
use Auth;

class TaskAPIController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    // public function index()
    // {
    //     return view('tasks.index');
    // }
    public function indexall()
    {
        
        return Task::all();
    }

    public function index()
    {
        $userId = Auth::id();
        return Task::where( "user_id" , $userId )->get();
        // return response()->json($userId, 201);
    }

    /**
     * Create a new task.
     *
     * @param  Request  $request
     * @return Response
     */
    public function store(Request $request)
    {

        $this->validate($request, [
            'name' => 'required|max:255',
        ]);

        $userId = Auth::id();

        $store = Task::create([
            'name' => $request->name,
            'user_id' => $userId,
        ]);

        return response()->json($store, 201);
    }
    
    public function update(Request $request, $taskID)
    {
        $this->validate($request, [
            'name' => 'required|max:255',
        ]);

        $userId = Auth::id();
        $task = Task::where( "user_id" , $userId )->where("id", $taskID)->first();
        
        if ($task) {
            // $task->name = $request->name;
            $task->update([
                'name' => $request->name
            ]);
            $task->save();

            // $task->update($request->name);
        }
        return response()->json($task, 200);
    }

    /**
     * Destroy the given task.
     *
     * @param  Request  $request
     * @param  Task  $task
     * @return Response
     */
    public function delete(Request $request, $taskID)
    {
        $response['task_id'] = $taskID;
        
        $userId = Auth::id();
        $task = Task::where( "user_id" , $userId )->where("id", $taskID)->first();
        
        if($task){
            $task->delete();
            $response['message'] = 'delete success!';
        }
        else{
            $response['message'] = 'The Task ID not found.';
        }
        return response()->json($response, 200);
    }
}
/****************************
A Note on HTTP Status Codes and the Response Format

200: OK. The standard success code and default option.
201: Object created. Useful for the store actions.
204: No content. When an action was executed successfully, but there is no content to return.
206: Partial content. Useful when you have to return a paginated list of resources.
400: Bad request. The standard option for requests that fail to pass validation.
401: Unauthorized. The user needs to be authenticated.
403: Forbidden. The user is authenticated, but does not have the permissions to perform an action.
404: Not found. This will be returned automatically by Laravel when the resource is not found.
500: Internal server error. Ideally you're not going to be explicitly returning this, but if something unexpected breaks, this is what your user is going to receive.
503: Service unavailable. Pretty self explanatory, but also another code that is not going to be returned explicitly by the application.

*/