<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $attributes = [
        'no_of_employees' => 0,
        'completion' => 0,
    ];
    
    protected $fillable = [
        "name",
        "description",
        "created_by"        
    ];
    
    public function users()
    {
        return $this->belongsToMany(User::class)
            ->withPivot('status')
            ->withPivot('role')
            ->withTimestamps();
    }
    public function requests()
    {
        return $this->hasMany(SendRequest::class);
    }


}
