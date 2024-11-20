<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function signup(Request $req)
    {

        $validator = Validator::make($req->all(), [
            'firstName' => 'required|string|max:255',
            'lastName' => 'required|string|max:255',
            'email' => 'required|string',
            'password' => 'required|string',
            'country' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => $validator->errors()
            ], 400);
        }

        else {
            return response()->json([
                'status' => 'success',
                'message' => 'User created successfully'
            ], 201);
        }
    }
}
