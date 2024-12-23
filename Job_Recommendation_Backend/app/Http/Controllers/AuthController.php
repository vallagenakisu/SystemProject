<?php

namespace App\Http\Controllers;

use App\Http\Requests\FeedPostRequest;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignUpRequest;
use App\Models\post_feed;
use App\Models\PostFeed;
use App\Models\User;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function signup(SignUpRequest $req)
    {
        $data = $req->validated();
        // First handle file upload if the user uploaded a file
        $profileImagePath = null;
        if ($req->hasFile('profileImage')) {
            $profileImagePath = $req->file('profileImage')->store('profile_images', 'public');
        }


        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
            'country' => $data['country'], // Add country to the user record
            'profile_image' => $profileImagePath, // Save file path if uploaded
        ]);


        $token = $user->createToken('auth_token')->plainTextToken;
        return response([
            'user' => $user,
            'token' => $token
        ]);
    }
    public function login(LoginRequest $req)
    {
        $data = $req->validated();
        $credentials = ['email' => $data['email'], 'password' => $data['password']];
        if (! Auth::attempt($credentials)) {
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
    function get(Request $request)
    {
        $user = $request->user();

        return response()->json([
            'id' => $user->id,
            'name' => $user->name,
            'email' => $user->email,
            'profile_image' => $user->profile_image ? asset('storage/' . $user->profile_image) : null,
        ]);
    }

    public function postFeed(FeedPostRequest $feedPostRequest)
    {
        $data = $feedPostRequest->validated(); // Validate and capture the data
        $postImagePath = null;

        if ($feedPostRequest->hasFile('postImage')) {
            $postImagePath = $feedPostRequest->file('postImage')->store('profile_images', 'public');
            $data['postImagePath'] = $postImagePath; // Add the image path to the response
        }

        $post = PostFeed::create(
            [
                'user_id' => $data['user_id'],
                'postContent' => $data['postContent'],
                'postImage' => $postImagePath,
            ]
        );

        return response()->json([
            'message' => 'Data has been successfully received',
            'data' => $data['user_id'],
        ], 200);
    }
}
