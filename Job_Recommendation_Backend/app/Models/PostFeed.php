<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PostFeed extends Model
{
    use HasFactory;
    protected $table = 'post_feed';
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
