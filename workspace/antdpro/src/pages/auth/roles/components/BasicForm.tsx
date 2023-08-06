import React, { useState } from 'react';
import type { Key } from 'react';
import { ProForm, ProFormText } from '@ant-design/pro-components';
import { Form, FormInstance, Tree } from 'antd';
import useQueryList from '@/hooks/useQueryList';

interface Props {
  form: FormInstance<any>;
  permissions?: { id: number }[];
}

const BasicForm: React.FC<Props> = (props) => {
  const { form, permissions } = props;
  const [expandedKeys, setExpandedKeys] = useState<Key[]>([]);
  const [checkedKeys, setCheckedKeys] = useState<Key[] | { checked: Key[]; halfChecked: Key[] }>(
    permissions?.map((permission) => permission.id) ?? [],
  );
  const [selectedKeys, setSelectedKeys] = useState<Key[]>([]);
  const [autoExpandParent, setAutoExpandParent] = useState<boolean>(true);

  const { items: permission_groups } = useQueryList('/permissions/groups');

  const onExpand = (expandedKeysValue: Key[]) => {
    // if not set autoExpandParent to false, if children expanded, parent can not collapse.
    // or, you can remove all expanded children keys.
    setExpandedKeys(expandedKeysValue);
    setAutoExpandParent(true);
  };

  const onCheck = (checkedKeysValue: Key[] | { checked: Key[]; halfChecked: Key[] }, e: any) => {
    setCheckedKeys(checkedKeysValue);
    const permission_ids = [];
    if (Array.isArray(checkedKeysValue)) {
      for (const key of checkedKeysValue) {
        permission_ids.push(key)
      }
    }
    if (Array.isArray(e.halfCheckedKeys)) {
      for (const key of e.halfCheckedKeys) {
        permission_ids.push(key)
      }
    }
    console.log('permission_ids', permission_ids)
    form.setFieldsValue({
      'permission_ids': permission_ids,
    });
  };

  const onSelect = (selectedKeysValue: Key[], info: any) => {
    console.log('onSelect', info);
    setSelectedKeys(selectedKeysValue);
  };

  return (
    <>
      <ProForm.Group>
        <ProFormText
          rules={[{ required: true, message: '请输入' }]}
          width="md"
          label="名称"
          name="name"
        />
      </ProForm.Group>
      <ProForm.Group>
        <Form.Item name="permission_ids">
          <div>
            <div>选择权限</div>
            <Tree
              checkable
              defaultExpandAll={true}
              onExpand={onExpand}
              expandedKeys={expandedKeys}
              autoExpandParent={autoExpandParent}
              onCheck={onCheck}
              checkedKeys={checkedKeys}
              onSelect={onSelect}
              selectedKeys={selectedKeys}
              treeData={permission_groups}
            />
          </div>
        </Form.Item>
      </ProForm.Group>
    </>
  );
};

export default BasicForm;
