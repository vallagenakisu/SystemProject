<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignUpRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function signup(SignUpRequest $req)
    {
        $data = $req->validated();
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password'])
        ]);
        $token = $user->createToken('auth_token')->plainTextToken;
        return response ([
            'user' => $user,
            'token' => $token
        ]);
    }
    public function login(LoginRequest $req)
    {
        $data = $req->validated();
        $credentials = ['email' => $data['email'], 'password' => $data['password']];
        if(! Auth::attempt($credentials)){
            return response(['message' => 'Invalid credentials']);
        }
        /** @var \App\Models\User $user */
        $user = Auth::user();
        $token = $user->createToken('auth_token')->plainTextToken;
        return response([
            'user' => $user,
            'token' => $token
        ]);
        
    }
    public function logout(Request $request)
    {
        $user = $request->user();
        if ($user) {
            $user->tokens()->delete(); // Revoke all tokens
            return response()->json(['message' => 'Logged out successfully'], 200);
        }
    
        return response()->json(['message' => 'No user logged in'], 400);
    }
    function get (Request $request){
        /** @var \App\Models\User $user */
        $user = Auth::user();
        return response([
            'user'=>$user,
            'info' => $request->user()
        ]);
    }
}
