<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Permission;
use Illuminate\Http\Request;

class PermissionController extends Controller
{
    public function trees()
    {
        $departmens = Permission::where('level', 0)->get();
        $data = [];
        foreach ($departmens as $department) {
            $temp = [];
            foreach ($department->children as $children) {
                $temp[] = [
                    'title' => $children['name'],
                    'value' => $children['id'],
                ];
            }
            $data[] = [
                'title' => $department['name'],
                'value' => $department['id'],
                'children' => $temp,
            ];
        }
        return $this->success(['data' => $data]);
    }

    public function groups()
    {
        $departmens = Permission::where('level', 0)->get();
        $data = [];
        foreach ($departmens as $department) {
            $temp1 = [];
            foreach ($department->children as $children) {
                $temp2 = [];
                foreach ($children['children'] as $cc) {
                    $temp2[] = [
                        'title' => $cc['name'],
                        'key' => $cc['id'],
                    ];
                }
                $temp1[] = [
                    'title' => $children['name'],
                    'key' => $children['id'],
                    'children' => $temp2,
                ];
            }
            $data[] = [
                'title' => $department['name'],
                'key' => $department['id'],
                'children' => $temp1,
            ];
        }
        return $this->success(['data' => $data]);
    }


    public function index(Request $request)
    {
        $departmens = Permission::with('parent')
            ->paginate($request->pageSize, ['*'], 'page', $request->current);
        $data = $this->paginate($departmens);
        return $this->success($data);
    }

    public function store(Request $request)
    {
        if (!$request->parent_id) {
            $level = 0;
        } else {
            $parent = Permission::find($request->parent_id);
            $level = $parent->level + 1;
        }
        Permission::create([
            'name' => $request->name,
            'parent_id' => $request->parent_id,
            'level' => $level,
        ]);
        return $this->success(['message' => "添加成功"]);
    }

    public function update($id, Request $request)
    {
        $department = Permission::find($id);
        if (!$request->parent_id) {
            $level = 0;
        } else {
            $parent = Permission::find($request->parent_id);
            $level = $parent->level + 1;
        }
        $department->update([
            'name' => $request->name,
            'parent_id' => $request->parent_id,
            'level' => $level,
        ]);
        return $this->success(['message' => "更新成功"]);
    }
}