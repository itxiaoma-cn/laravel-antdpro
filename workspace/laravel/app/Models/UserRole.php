<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserRole extends Model
{
    use HasFactory;

    public static function getPermissionIds($userId)
    {
        $roleIds = self::where('user_id', $userId)->pluck('role_id')->toArray();
        if (in_array(1, $roleIds)) {
            return Permission::pluck('id')->toArray();
        }
        $ids = RolePermission::whereIn('role_id', $roleIds)
            ->pluck('permission_id')
            ->filter(function ($value) {
                return !is_null($value);
            });
        return $ids->toArray();
    }
}