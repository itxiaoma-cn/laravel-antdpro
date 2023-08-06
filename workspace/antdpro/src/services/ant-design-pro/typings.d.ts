// @ts-ignore
/* eslint-disable */

declare namespace API {
  type CurrentUser = {
    id?: number;
    name?: string;
    avatar?: string;
    isAdmin?: boolean;
    roles?: any;
  };

  type LoginResult = {
    refreshToken?: string;
    success?: boolean;
    token?: string;
  };

  type RefreshResult = {
    refreshToken: string;
    success: boolean;
    token: string;
  };

  type PageParams = {
    current?: number;
    pageSize?: number;
  };

  type ListItem = {
    id?: number;
    name?: string;
    createdAt?: string;
    updatedAt?: string;
  };

  interface UserListItem extends ListItem {
    isAdmin?: boolean;
    username?: string;
    status?: string;
  }

  type DataList = {
    data?: ListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type FakeCaptcha = {
    code?: number;
    status?: string;
  };

  type LoginParams = {
    email?: string;
    password?: string;
  };

  type refreshParams = {
    refreshToken: string;
  };

  type ErrorResponse = {
    /** 业务约定的错误码 */
    errorCode: string;
    /** 业务上的错误信息 */
    errorMessage?: string;
    /** 业务上的请求是否成功 */
    success?: boolean;
  };

  type NoticeIconList = {
    data?: NoticeIconItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type NoticeIconItemType = 'notification' | 'message' | 'event';

  type NoticeIconItem = {
    id?: string;
    extra?: string;
    key?: string;
    read?: boolean;
    avatar?: string;
    title?: string;
    status?: string;
    datetime?: string;
    description?: string;
    type?: NoticeIconItemType;
  };
}
