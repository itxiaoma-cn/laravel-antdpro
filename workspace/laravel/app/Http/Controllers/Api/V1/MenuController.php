<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Menu;
use App\Models\User;
use App\Models\UserRole;
use Illuminate\Http\Request;

class MenuController extends Controller
{
    public function fetch()
    {
        $user = auth('api')->user();
        $permissionIds = [];
        if (isset($user)) {
            $permissionIds = UserRole::getPermissionIds($user->id);
        }
        $menus = Menu::getTree($permissionIds);
        return $this->success(['data' => $menus->toArray()]);
    }

    public function index(Request $request)
    {
        $departmens = Menu::with('parent')
            ->with('permission')
            ->paginate($request->pageSize, ['*'], 'page', $request->current);
        $data = $this->paginate($departmens);
        return $this->success($data);
    }
}