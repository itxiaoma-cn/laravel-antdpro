// @ts-ignore
/* eslint-disable */
import { MenuDataItem } from '@ant-design/pro-components';
import { request } from '@umijs/max';

interface menuResponse {
  success: boolean;
  data: MenuDataItem[];
}

/** 获取当前的用户 GET /api/currentUser */
export async function currentUser(options?: { [key: string]: any }) {
  return request<API.CurrentUser>('/users/profile', {
    method: 'GET',
    ...(options || {}),
  });
}

export async function fetchMenuData() {
  return request<menuResponse>('/menus/fetch', {
    method: 'GET',
  });
}

/** 退出登录接口 POST /api/login/outLogin */
export async function outLogin(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/login/outLogin', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 登录接口 POST /api/login/account */
export async function login(body: API.LoginParams, options?: { [key: string]: any }) {
  return request<API.LoginResult>('/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function refreshToken(body: API.refreshParams, options?: { [key: string]: any }) {
  return request<API.RefreshResult>(`/users/refresh`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/notices */
export async function getNotices(options?: { [key: string]: any }) {
  return request<API.NoticeIconList>('/api/notices', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取规则列表 GET /api/rule */
export async function queryList(
  url: string,
  params?: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  },
  sort?: { [key: string]: any },
  filter?: { [key: string]: any },
) {
  return request<API.DataList>(url, {
    method: 'GET',
    params: {
      ...params,
      sorter: sort,
      ...filter,
    },
  });
}

export async function addItem(url: string, options?: { [key: string]: any }) {
  return request<API.ListItem>(url, {
    method: 'POST',
    data: {
      ...(options || {}),
    },
  });
}

/** 新建规则 PUT /api/rule */
export async function updateItem(url: string, options?: { [key: string]: any }) {
  return request<API.ListItem>(url, {
    method: 'PUT',
    data: {
      ...(options || {}),
    },
  });
}

/** 删除规则 DELETE /api/rule */
export async function removeItem(url: string, options?: { [key: string]: any }) {
  return request<Record<string, any>>(url, {
    method: 'DELETE',
    data: {
      ...(options || {}),
    },
  });
}