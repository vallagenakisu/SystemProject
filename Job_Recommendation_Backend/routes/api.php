<?php

use App\Http\Controllers\API\ChildTaskController;
use App\Http\Controllers\API\ProjectController;
use App\Http\Controllers\Api\SendRequestController;
use App\Http\Controllers\Api\TaskController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Models\SendRequest;

Route::middleware('auth:sanctum')->get('/user' , [AuthController::class , 'get']  );
Route::get('/user1/{id}' , [AuthController::class , 'getuser']  );
Route::middleware('auth:sanctum')->post('/logout' , [AuthController::class,'logout']);
Route::post('/signup' , [AuthController::class,'signup']);
Route::post('/login' , [AuthController::class,'login'])->name('login');

// api endpoint for posting 

Route::post('/feedpost',[AuthController::class, 'postFeed']);
Route::get('/newsFeed',[AuthController::class,'newsFeed']);

// api endpoint for tasks
// get request to api/tasks gets all the task of a specific user
// post request to api/tasks creates a new task
// delete request to api/tasks/{task_id} deletes a task
// put request to api/tasks/{task_id} updates a task
Route::middleware('auth:sanctum')->apiResource('tasks',TaskController::class);



Route::middleware('auth:sanctum')->prefix('childtasks/{task}')->group(function () {
    Route::post('children', [ChildTaskController::class, 'store']); // Add child task
    Route::get('children', [ChildTaskController::class, 'show']); // Get child tasks
    Route::put('children/{child}', [ChildTaskController::class, 'update']); // Get child tasks
    Route::delete('children/{child}', [ChildTaskController::class, 'destroy']); // Get child tasks

});
Route::middleware('auth:sanctum')->prefix('projects')->group(function () {
    Route::post('/', [ProjectController::class, 'store']); // Add project tested
    Route::get('/', [ProjectController::class, 'index']); // Get projects tested
    Route::get('created/{user}', [ProjectController::class, 'getProjectCreated']); // Get projects Created tested
    Route::get('assigend/{user}', [ProjectController::class, 'getProjectAssigned']); // Get projects 
    Route::put('/{project}', [ProjectController::class, 'update']); // Get projects tested
    Route::delete('/{project}', [ProjectController::class,'destroy']); // deletes project tested
    Route::get('/count/{project}' , [ProjectController::class , 'UpdateUserCount']);
    Route::get('/get' , [ProjectController::class , 'getUserCount']);
});

Route::middleware('auth:sanctum')->prefix('sendrequest')->group(function () {
    Route::post('/', [SendRequestController::class, 'sendAddRequest']); // Add request tested
    Route::get('/user/{user}', [SendRequestController::class, 'getRequests']); // Get requests tested
    Route::post('/request/{request}', [SendRequestController::class, 'respondToRequest']); // respond to request tested
    Route::delete('/{project}/{user}' , [SendRequestController::class , 'deleteUser']); // deletes users from project tested
});
