<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Project;
use App\Models\SendRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class SendRequestController extends Controller
{
    

    public function sendAddRequest(Request $request)
    {        
        $request->validate([
            'recipient_id' => 'required',
            'project_id' => 'required'
        ]);
    
        $auth_user = Auth::id();
    
        $project = Project::find($request['project_id']);
        // checks if the project exists
        if ($project == null ) {
            return response()->json([
                'status' => 'error',
                'message' => 'Project not found'
            ], 404);
        }
        //checks if the recipient user exists
        $user = User::find($request['recipient_id']);
        if($user == null){
            return response()->json([
                'status' => 'error',
                'message' => 'User not found'
            ], 404);
        }
        //checks the role of authenticated user if he is a member or admin he can send requests
        $role = $project->users()->where('user_id', $auth_user)->first()->pivot->role;
        if ($role !== 'admin' and $role !== 'member') {
            Log::error('Unauthorized action by user: ' . $auth_user);
            return response()->json([
                'status' => 'error',
                'message' => 'You are not authorized to send requests'
            ], 403);
        }
        // Check if a request has already been sent to this recipient for the same project
        $existingRequest = SendRequest::where('recipient_id', $request['recipient_id'])
        ->where('project_id', $request['project_id'])
        ->where('status', 'pending')
        ->first();

        if ($existingRequest) {
        return response()->json([
        'status' => 'error',
        'message' => 'A request has already been sent to this user for this project'
        ], 400); // Bad Request
        }
    
        $sendRequest = SendRequest::create([
            'sender_id' => $auth_user,
            'recipient_id' => $request['recipient_id'],
            'project_id' => $request['project_id'],
            'status' => 'pending'
        ]);
        Log::info('SendRequest created: ' . $sendRequest->id);
    
        return response()->json([
            'status' => 'success',
            'message' => 'User invitation sent successfully',
            'data' => $sendRequest
        ], 201);
    }
    
   public function getRequests($userId )
    {
        $user = User::find($userId);
        $receivedRequests = $user->receivedRequests;
        return response()->json([
            'status' => 'success',
            'data' => $receivedRequests
        ]);
    }
    public function respondToRequest($requestId , Request $requests)
    {
        $requests->validate([
            'action' => 'required|in:accepted,rejected'
        ]);
        $action = $requests->action;
        $request = SendRequest::find($requestId);

        if (!$request) {
            return "Request not found!";
        }

        if (!in_array($action, ['accepted', 'rejected'])) {
            return "Invalid action!";
        }

        $request->status = $action;
        $request->save();

        if ($action === 'accepted') {
            // Add the recipient to the project
            $project = Project::find($request->project_id);
            $project->users()->attach($request->recipient_id , ['role' => 'member', 'status' => 'accepted']);
        }
        $request->delete();

        return [
            'status' => 'success',
            'message' => 'Request responded successfully'
        ];
    }
    public function deleteUser($projectId, $userId)
    {
        $project = Project::find($projectId);
        $project->users()->detach($userId);
        return response()->json([
            'status' => 'success',
            'message' => 'User removed from project successfully'
        ]);
    }
}
