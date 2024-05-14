<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('web')->group(function () {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);
    
    Route::middleware('auth:sanctum')->group(function () {
        Route::get('/user', function (Request $request) {
            return $request->user();
        });

        Route::post('/logout', [AuthController::class, 'logout']);

        Route::post('/users/{user}/update_icon_file', [UserController::class, 'update_icon_file']);

        Route::apiResource('/posts', PostController::class);
        Route::post('/posts/{post}/like', [PostController::class, 'like']);
        Route::post('/posts/{post}/unlike', [PostController::class, 'unlike']);
    });
});
