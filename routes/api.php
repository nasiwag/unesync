<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::any('/auth', function (Request $request) {
    $from = $request->validate(['username' => 'required|string']);
    if ($from['username'] == 'saleem') {
        return response()->json(['success' => true, 'remote_url' => 'http://saleem:12345678@3.85.169.6:5984/smartpos']);
    }
    return response()->json(['success' => false, 'message' => 'Invalid user!'], 422);
});
