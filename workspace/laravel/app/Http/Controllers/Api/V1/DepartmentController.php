<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Department;
use Illuminate\Http\Request;

class DepartmentController extends Controller
{
    public function index(Request $request)
    {
        $departmens = Department::paginate($request->pageSize, ['*'], 'page', $request->current);
        $data = $this->paginate($departmens);
        return $this->success($data);
    }

    public function store(Request $request)
    {
        Department::create([
            'name' => $request->name,
        ]);
        return $this->success(['message' => "添加成功"]);
    }

    public function update($id, Request $request)
    {
        $department = Department::find($id);
        $department->update([
            'name' => $request->name
        ]);
        return $this->success(['message' => "更新成功"]);
    }

    public function destory(Request $request)
    {
        $res = Department::whereIn('id', $request->ids)->delete();
        if (!$res) {
            return $this->fail(['message' => "删除失败"]);
        }
        return $this->success(['message' => "删除成功"]);
    }
}