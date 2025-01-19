<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\AddChildTaskRequest;
use App\Http\Requests\UpdateChildTask;
use App\Models\Task;
use Illuminate\Http\Request;

class ChildTaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(AddChildTaskRequest $request , $parentId)
    {
                // Find the parent task
                $parentTask = Task::findOrFail($parentId);
                $data = $request->validated();
        
                // Create the child task
                $childTask = Task::create([
                    'assigned_by' => $data['assigned_by'],
                    'assigned_to' => $data['assigned_to'],
                    'title' => $data['title'],
                    'description' => $data['description'] ?? null,
                    'due_date' => $data['due_date'] ?? null,
                    'status' => $data['status'] ?? false,
                    'parent_id' => $parentTask->id, // Set parent ID
                ]);
        
                // Return success response
                return response()->json([
                    'message' => 'Child task created successfully!',
                    'child_task' => $childTask,
                    'parent_task' => $parentTask,
                ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $task = Task::findOrFail($id);
        $childTasks = $task->childTasks;
        return response()->json($childTasks);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateChildTask $request,  $parentId , $childId)
    {
        $task = Task::findOrFail($childId);
        $request->validated();
        $task->update($request->all());
        return response()->json($task);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($parentId , $childId)
    {
        $task = Task::findOrFail($childId);
        $task->delete();
        return response()->json(['message' => 'Task deleted successfully']);
    }
}
