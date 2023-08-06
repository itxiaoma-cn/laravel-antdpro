<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'path',
        'component',
        'parent_id',
        'permission_id',
    ];

    public function routes()
    {
        return $this->hasMany(Menu::class, 'parent_id');
    }

    public function parent()
    {
        return $this->belongsTo(Menu::class, 'parent_id');
    }

    public function children()
    {
        return $this->hasMany(Menu::class, 'parent_id');
    }

    public function permission()
    {
        return $this->belongsTo(Permission::class, 'permission_id');
    }

    public static function getTree(array $permissionIds)
    {
        $permissionIds = $permissionIds ?? [0];
        return self::where('parent_id', 0)
            ->whereIn('permission_id', $permissionIds)
            ->with([
                'routes' => function ($query) use ($permissionIds) {
                    $query->whereIn('permission_id', $permissionIds);
                    $query->select('path', 'name', 'component', 'parent_id');
                }
            ])
            ->select('id', 'path', 'name', 'component')
            ->get();
    }
}