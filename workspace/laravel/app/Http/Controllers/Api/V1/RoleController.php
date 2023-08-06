<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Role;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    public function index(Request $request)
    {
        $query = Role::with([
            'permissions' => function ($query) {
                $query->where('level', 2);
            }
        ]);
        if ($request->has('name')) {
            $query->where('name', 'like', '%' . $request->input('name') . '%');
        }
        $menus = $query->orderByDesc('id')
            ->paginate($request->pageSize, ['*'], 'page', $request->current);
        $data = $this->paginate($menus);
        return $this->success($data);
    }

    /**
     * 创建用户
     */
    public function store(Request $request)
    {
        $role = Role::create([
            'name' => $request->name,
        ]);
        if ($role) {
            $role->permissions()->sync($request->permission_ids);
        }
        return $this->success(['message' => "添加成功"]);
    }

    public function update($id, Request $request)
    {
        $role = Role::find($id);
        $role->update([
            'name' => $request->name,
        ]);
        $role->permissions()->sync($request->permission_ids);
        return $this->success(['message' => "更新成功"]);
    }

    public function destory(Request $request)
    {
        $ids = array_diff($request->ids, [1]);
        $res = User::whereIn('id', $ids)->delete();
        if (!$res) {
            return $this->fail(['message' => "删除失败"]);
        }
        return $this->success(['message' => "删除成功"]);
    }
}