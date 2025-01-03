<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    protected $table = "task" ;
    protected $fillable = [
        'task',
        'description',
        'due_date',
        'status',
        'assigned_to',
        'assigned_by'
    ];

    //relationships
    public function assignedBy()
    {
        return $this->belongsTo(User::class ,'assigned_by' );

    }
    public function assignedTO()
    {
        return $this->belongsTo(User::class ,'assigned_to' );

    }


}
