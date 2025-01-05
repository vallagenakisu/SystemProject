<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Task;
use App\Http\Requests\StoreTaskRequest;
use App\Http\Requests\UpdateTaskRequest;
use GuzzleHttp\Psr7\Request;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(StoreTaskRequest $request)
    {
        $userId = $request->user()->id;
        $tasks = Task::where('assigned_by', $userId)
                    ->orWhere('assigned_to', $userId)
                    ->get();
        return response()->json($tasks);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTaskRequest $request)
    {
        $data = $request->validated();
        $user = $request->user();
        $task = Task::create([
            'assigned_by' => $user->id, 
            'assigned_to' => $user->id,
            'title' => $data['title'],
            'description' => $data['description'],
            'due_date' => $data['due_date'],
            'status' => False,
        ]);
        return response()->json($task, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Task $task)
    {
        $task = Task::with(['assignedBy', 'assignedTo'])->get();
        return response()->json($task);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTaskRequest $request, $id)
    {
        $task = Task::findOrFail($id);
        $request->validated();

        $task->update($request->all());

        return response()->json($task);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $task = Task::findOrFail($id);
        $task->delete();
        return response()->json(['message' => 'Task deleted successfully']);
    }
}
