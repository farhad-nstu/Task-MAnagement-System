<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Task;

class Project extends Model
{
    public function tasks()
    {
        return $this->hasMany(Task::class);
    }
}
