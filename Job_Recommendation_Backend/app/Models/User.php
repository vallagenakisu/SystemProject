<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable , HasApiTokens;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'country',
        'profile_image',
    ];

    public function postfeed()
    {
        return $this->hasMany(PostFeed::class);
    }

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }
    public function taskAssignedBy()
    {
        return $this->hasMany(Task::class ,'assigned_by' );
    }
    public function taskAssignedTor()
    {
        return $this->hasMany(Task::class ,'assigned_to' );
    }

    public function projects()
    {
        return $this->belongsToMany(Project::class)
            ->withPivot('status')
            ->withPivot('role')
            ->withTimestamps();
    }
    public function sentRequests()
    {
        return $this->hasMany(SendRequest::class, 'sender_id');
    }

    public function receivedRequests()
    {
        return $this->hasMany(SendRequest::class, 'recipient_id');
    }

    
}
