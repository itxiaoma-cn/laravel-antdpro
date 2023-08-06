import {
  ProForm,
  ProFormText,
} from '@ant-design/pro-components';

interface Props {
  newRecord?: boolean;
}

const BasicForm: React.FC<Props> = () => {
  return (
    <>
      <ProForm.Group>
        <ProFormText
          rules={[{ required: true, message: '请输入部门名称' }]}
          width="md"
          label="名称"
          name="name"
        />
      </ProForm.Group>
    </>
  );
};

export default BasicForm;
