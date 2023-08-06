<?php

namespace App\Http\Controllers;

use Dingo\Api\Routing\Helpers;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    use Helpers;

    public function success(array $data)
    {
        return $this->response->array(['success' => true] + $data);
    }

    public function fail(array $data)
    {
        return $this->response->array(['success' => false] + $data);
    }


    public function paginate($items)
    {
        return [
            'data' => $items->items(),
            'total' => $items->total(),
            'current' => $items->currentPage(),
            'pageSize' => $items->perPage(),
        ];
    }
}