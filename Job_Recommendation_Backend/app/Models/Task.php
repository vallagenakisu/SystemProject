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
        'title',
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
    
//      App\Models\Task::create([
//      'id' => 1,
//      'title' => 'Write documentation',
//      'description' => 'Prepare API documentation for the project.',
//      'due_date' => '2024-01-10',
//      'status' => 0,
//      'assigned_to' => 1,
//      'assigned_by' => 1,

// ]);

// INSERT INTO `task` (`id`, `task`, `description`, `due_date`, `status`, `created_at`, `updated_at`, `assigned_to`, `assigned_by`) VALUES ('2', 'Habijabi', 'Habijabi kortesi', '2025-01-08', '0', '2025-01-29 03:36:55', '2025-01-23 03:36:55', '1', '1');
}
