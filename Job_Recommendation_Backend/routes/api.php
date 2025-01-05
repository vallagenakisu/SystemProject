<?php
use App\Http\Controllers\TaskController;
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
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/postTask', [TaskController::class, 'store']);
    
});
Route::get('/getTask/{id}', [TaskController::class, 'show']);
