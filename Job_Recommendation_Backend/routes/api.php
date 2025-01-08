<?php

use App\Http\Controllers\API\ChildTaskController;
use App\Http\Controllers\Api\TaskController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
Route::middleware('auth:sanctum')->get('/user' , [AuthController::class , 'get']  );
Route::get('/user1/{id}' , [AuthController::class , 'getuser']  );
Route::middleware('auth:sanctum')->post('/logout' , [AuthController::class,'logout']);
Route::post('/signup' , [AuthController::class,'signup']);
Route::post('/login' , [AuthController::class,'login']);

// api endpoint for posting 

Route::post('/feedpost',[AuthController::class, 'postFeed']);
Route::get('/newsFeed',[AuthController::class,'newsFeed']);

// api endpoint for tasks
Route::middleware('auth:sanctum')->apiResource('tasks',TaskController::class);
Route::middleware('auth:sanctum')->prefix('childtasks/{task}')->group(function () {
    Route::post('children', [ChildTaskController::class, 'store']); // Add child task
    Route::get('children', [ChildTaskController::class, 'show']); // Get child tasks
    Route::put('children/{child}', [ChildTaskController::class, 'update']); // Get child tasks
    Route::delete('children/{child}', [ChildTaskController::class, 'destroy']); // Get child tasks

});
