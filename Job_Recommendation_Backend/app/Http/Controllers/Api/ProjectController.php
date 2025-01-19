<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Project;
use App\Models\User;
use App\Models\ProjectUser;
use App\Models\SendRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $projects = Project::with('users')->get();
        return response()->json([
            'status' => 'success',
            'data' => $projects
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'no_of_employees' => 'nullable|integer|min:0',
            'completion' => 'nullable|integer|min:0|max:100',
        ]);
        if(Auth::id() == null){
            return response()->json([
                'status' => 'error',
                'message' => 'Unauthorized to create project'
            ], 403);
        }
        $project = Project::create([
            'name' => $request->name,
            'description' => $request->description,
            'created_by' => Auth::id() , 
            'no_of_employees' => 0,
            'completion' => 0
        ]);
        $project->users()->attach(Auth::id(), ['role' => 'admin', 'status' => 'accepted']);
        
        $project->load('users');
        return response()->json([
            'status' => 'success',
            'message' => 'Project created successfully',
            'data' => $project
        ], 201);
        
    }
    public function getProjectCreated($userId)
    {
        $user = User::find($userId);
        $projects = $user->projects()->wherePivot('role', 'admin')->get();
        return response()->json([
            'status' => 'success',
            'data' => $projects
        ]);
    }
    public function getProjectAssigned($userId)
    {
        $projects = User::find($userId)->projects->wherePivot('role', 'user');
        return response()->json([
            'status' => 'success',
            'data' => $projects
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $project = Project::with('users')->findOrFail($id);
        return response()->json([
            'status' => 'success',
            'data' => $project
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'name' => 'string|max:255',
            'description' => 'string'
        ]);

        $project = Project::findOrFail($id);
        
        if ($project->created_by !== Auth::id()) {
            return response()->json([
                'status' => 'error',
                'message' => 'Unauthorized to update this project'
            ], 403);
        }

        $project->update($request->all());

        return response()->json([
            'status' => 'success',
            'message' => 'Project updated successfully',
            'data' => $project
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $project = Project::findOrFail($id);
        
        if ($project->created_by !== Auth::id()) {
            return response()->json([
                'status' => 'error',
                'message' => 'Unauthorized to delete this project'
            ], 403);
        }

        $project->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Project deleted successfully'
        ]);
    }


    /**
     * Get number of users in project
     */
    public function UpdateUserCount($projectId)
    {
        $project = Project::findOrFail($projectId);
        $acceptedCount = $project->users()->wherePivot('status', 'accepted')->count();
        $pendingCount = $project->users()->wherePivot('status', 'pending')->count();
        $project->no_of_employees = $acceptedCount;
        return response()->json([
            'status' => 'success',
            'data' => [
                'accepted_users' => $acceptedCount,
                'pending_users' => $pendingCount,
                'total_users' => $acceptedCount 
            ]
        ]);
    }
    public function getUserCount($projectId)
    {
        $project = Project::findOrFail($projectId);
        return $project->no_of_employees;
    }
}
