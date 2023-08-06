<?php

namespace App\Http\Requests\Api;

class UserLoginRequest extends BaseRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'email' => 'required|email',
            'password' => 'required|alpha_dash|min:6',
        ];
    }
}