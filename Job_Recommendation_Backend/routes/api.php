<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
// use App\Http\Controllers\api\AuthController;
use App\Http\Controllers\AuthController;

Route::post('/signup' , [AuthController::class,'signup']);
Route::post('/login' , [AuthController::class,'login']);
Route::post('/logout' , [AuthController::class,'logout']);
