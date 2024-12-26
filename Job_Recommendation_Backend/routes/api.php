<?php
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
Route::middleware('auth:sanctum')->get('/user' , [AuthController::class , 'get']  );
Route::middleware('auth:sanctum')->post('/logout' , [AuthController::class,'logout']);
Route::post('/signup' , [AuthController::class,'signup']);
Route::post('/login' , [AuthController::class,'login']);

// api endpoint for posting 

Route::post('/feedpost',[AuthController::class, 'postFeed']);
Route::get('/newsFeed',[AuthController::class,'newsFeed']);
