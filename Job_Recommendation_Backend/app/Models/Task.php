<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $table = "tasks";
    protected $fillable = [
        'assigned_by',
        'assigned_to',
        'title',
        'description',
        'due_date',
        'status',
        'parent_id',
    ];

    //relationship
    public function assignedBy()
    {
        return $this->belongsTo(User::class, 'assigned_by');
    }
    public function assignedTo()
    {
        return $this->belongsTo(User::class, 'assigned_to');
    }
    public function childTasks()
    {
        return $this->hasMany(Task::class, 'parent_id');
    }
    public function parentTask()
    {
        return $this->belongsTo(Task::class, 'parent_id');
    }

}
