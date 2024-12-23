<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class post_feed extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'postContent',
        'postImage',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
