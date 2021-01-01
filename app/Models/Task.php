<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Project;

class Task extends Model
{
    public function project()
    {
        return $this->belongsTo(Project::class);
    }
}
