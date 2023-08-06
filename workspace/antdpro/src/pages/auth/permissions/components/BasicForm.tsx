import useQueryList from '@/hooks/useQueryList';
import {
  ProForm,
  ProFormText,
  ProFormTreeSelect,
} from '@ant-design/pro-components';

interface Props {
  newRecord?: boolean;
}

const BasicForm: React.FC<Props> = () => {
  const { items: permissionTrees } = useQueryList('/permissions/trees');
  return (
    <>
      <ProForm.Group>
        <ProFormText
          rules={[{ required: true, message: '请输入权限名称' }]}
          width="md"
          label="名称"
          name="name"
        />
        <ProFormTreeSelect
          name="parent_id"
          placeholder="请选择"
          allowClear
          label="父级权限"
          width="md"
          secondary
          fieldProps={{
            showArrow: false,
            filterTreeNode: true,
            showSearch: true,
            treeDefaultExpandAll: true,
            dropdownMatchSelectWidth: false,
            autoClearSearchValue: true,
            treeNodeFilterProp: 'title',
            fieldNames: {
              label: 'title',
            },
            treeData: permissionTrees,
          }}
          rules={[{ required: true, message: '请选择' }]}
        />
      </ProForm.Group>
    </>
  );
};

export default BasicForm;
