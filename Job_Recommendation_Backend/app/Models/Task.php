<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    protected $table = "task" ;
    protected $fillable = [
        'title',
        'assigned_by',
        'assigned_to',
        'description',
        'due_date',
        'status',
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
