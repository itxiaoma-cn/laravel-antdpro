<?php
use Dingo\Api\Routing\Router;

$api = app(Router::class);
$api->version('v1', [
    "middleware" => [],
    "namespace" => "App\Http\Controllers\Api\V1"
], function ($api) {
    // 初始化admin
    // $api->post('init', 'UserController@store')->name("user.init");

    // 用户
    $api->group(['prefix' => 'users'], function ($api) {
        //登录
        $api->post('login', 'UserController@login')->name("user.login");
        //用户信息
        $api->get('profile', 'UserController@userinfo')->name("user.profile");
        // 刷新token
        $api->post('refresh', 'UserController@refresh')->name("user.refresh");
        //RESTFUL
        $api->get('/', 'UserController@index')->name("user.index");
        $api->post('/', 'UserController@store')->name("user.store");
        $api->put('/{id}', 'UserController@update')->name("user.update");
        $api->delete('/', 'UserController@destory')->name("user.destory");
    });
    // 角色
    $api->group(['prefix' => 'roles', 'middleware' => 'auth:api'], function ($api) {
        $api->get('trees', 'RoleController@trees')->name("role.trees");
        $api->get('/', 'RoleController@index')->name("role.index");
        $api->post('/', 'RoleController@store')->name("role.store");
        $api->put('/{id}', 'RoleController@update')->name("role.update");
        // $api->delete('/', 'UserController@destory')->name("user.destory");
    });
    // 权限
    $api->group(['prefix' => 'permissions', 'middleware' => 'auth:api'], function ($api) {
        $api->get('trees', 'PermissionController@trees')->name("permission.trees");
        $api->get('groups', 'PermissionController@groups')->name("permission.groups");
        $api->get('/', 'PermissionController@index')->name("permission.index");
        $api->post('/', 'PermissionController@store')->name("permission.store");
        $api->put('/{id}', 'PermissionController@update')->name("permission.update");
        // $api->delete('/', 'UserController@destory')->name("user.destory");
    });
    // 菜单
    $api->group(['prefix' => 'menus'], function ($api) {
        $api->get('fetch', 'MenuController@fetch')->name("menu.fetch");
        $api->get('/', 'MenuController@index')->name("menu.index");
        $api->post('/', 'MenuController@store')->name("menu.store");
        $api->put('/{id}', 'MenuController@update')->name("menu.update");
    });
    //公司
    $api->group(['prefix' => 'company', 'middleware' => 'auth:api'], function ($api) {
        $api->get('departments', 'DepartmentController@index')->name("department.index");
        $api->post('departments', 'DepartmentController@store')->name("department.store");
        $api->put('departments/{id}', 'DepartmentController@update')->name("department.update");
        $api->delete('departments', 'DepartmentController@destory')->name("department.destory");
    });
});
?>