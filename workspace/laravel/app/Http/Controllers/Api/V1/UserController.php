<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\UserIndexRequest;
use App\Http\Requests\Api\UserLoginRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['init', 'login']]);
    }

    public function index(Request $request)
    {
        $query = User::with('department')->with('roles');
        if ($request->has('name')) {
            $query->where('name', 'like', '%' . $request->input('name') . '%');
        }
        if ($request->has('email')) {
            $query->where('email', 'like', '%' . $request->input('email') . '%');
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
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'gender' => $request->gender,
            'department_id' => $request->department_id,
            'status' => $request->status
        ]);
        if ($user) {
            $user->roles()->sync($request->roleIds);
        }
        return $this->success(['message' => "注册成功"]);
    }

    public function update($id, Request $request)
    {
        $user = User::find($id);
        $data = [
            'name' => $request->name,
            'email' => $request->email,
            'gender' => $request->gender,
            'department_id' => $request->department_id,
            'status' => $request->status
        ];
        if ($request->password) {
            $data['password'] = Hash::make($request->password);
        }
        $user->update($data);
        if ($user) {
            $user->roles()->sync($request->roleIds);
        }
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

    public function login(UserLoginRequest $request)
    {
        $UserInfo = $request->only(['email', 'password']);
        if (!$token = auth('api')->attempt($UserInfo)) {
            return $this->fail(["message" => "账号或者密码错误"]);
        }
        //获取用户信息
        // $user = $this->userinfo();
        // $key = "user::info::" . $user->original->id;
        //Redis缓存用户信息3600秒
        // Redis::set($key, serialize($user->original), "EX", 3600);

        return $this->respondWithToken($token);
    }

    public function userinfo()
    {
        $user = auth('api')->user()->toArray();
        $user['roles'] = [];
        return $this->success($user);
    }

    public function refresh()
    {
        return $this->respondWithToken(auth('api')->refresh());
    }

    protected function respondWithToken($token)
    {
        return $this->success([
            'message' => '登录成功',
            'token' => $token,
        ]);
    }
}