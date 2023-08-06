/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
const checkPermission = (currentUser: API.CurrentUser, name: string) => {
  return (
    currentUser &&
    currentUser.roles.some(
      (role: any) => role.permissions && !!role.permissions.find((item: any) => item.name === name),
    )
  );
};

export default function access(initialState: { currentUser?: API.CurrentUser } | undefined) {
  const { currentUser } = initialState ?? {};
  return {
    canAdmin: currentUser && currentUser.isAdmin,
    canUpdateRole: currentUser && (currentUser.isAdmin || checkPermission(currentUser, '修改角色')),
    canCreateRole: currentUser && (currentUser.isAdmin || checkPermission(currentUser, '新增角色')),
    canCreateUser: currentUser && (currentUser.isAdmin || checkPermission(currentUser, '新增员工')),
    canUpdateUser: currentUser && (currentUser.isAdmin || checkPermission(currentUser, '修改员工')),
    canDeleteUser: currentUser && (currentUser.isAdmin || checkPermission(currentUser, '删除员工')),
  };
}