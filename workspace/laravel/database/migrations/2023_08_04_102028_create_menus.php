<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMenus extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('menus', function (Blueprint $table) {
            $table->id();
            $table->string('name')->comment('菜单名称');
            $table->string('icon')->comment('图标');
            $table->string('path')->comment('路径');
            $table->string('component')->comment('组件名称');
            $table->integer('parent_id')->default(0)->comment('父级ID');
            $table->integer('permission_id')->default(0)->comment('权限ID');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('menus');
    }
}