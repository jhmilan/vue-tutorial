<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Status extends Model
{
    /**
     * The related user to this model.
     *
     * @return Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class)
            ->select(['id', 'name']);
    }
}
