<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SendRequest extends Model
{
    protected $table = 'requests';

        protected $fillable = [
            'sender_id',
            'recipient_id',
            'project_id', 
            'status'
        ];
    
        public function sender()
        {
            return $this->belongsTo(User::class, 'sender_id');
        }
    
        public function recipient()
        {
            return $this->belongsTo(User::class, 'recipient_id');
        }
    
        public function project()
        {
            return $this->belongsTo(Project::class);
        }
    
    
}
