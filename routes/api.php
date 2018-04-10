<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
    
//     return $request->user();
//  });
Route::post('register/{user_id}', 'Auth\RegisterController@register');
 Route::group(['middleware' => 'auth:api'], function() {
    Route::get('tasks', 'TaskAPIController@index');
    Route::post('task/store', 'TaskAPIController@store');
    Route::post('task/update/{task_id}', 'TaskAPIController@update');
    Route::delete('task/delete/{task_id}', 'TaskAPIController@delete');
 });