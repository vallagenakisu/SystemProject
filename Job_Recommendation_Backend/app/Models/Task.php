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
}
