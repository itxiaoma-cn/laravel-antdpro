<?php

namespace App\Http\Requests\Api;

class UserIndexRequest extends BaseRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'current' => 'integer|min:1',
            'pageSize' => 'integer',
        ];
    }
}