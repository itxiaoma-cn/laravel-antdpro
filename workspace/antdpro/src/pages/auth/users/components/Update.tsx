import React from 'react';
import BasicForm from './BasicForm';
import { ModalForm } from '@ant-design/pro-components';
import { Form, Input } from 'antd';

export type FormValueType = Partial<API.ListItem>;

export type UpdateFormProps = {
  onCancel: (visible: boolean) => void;
  onSubmit: (values: FormValueType) => Promise<void>;
  updateModalOpen: boolean;
  values: {
    roles?: { id: number }[]
  } & Partial<API.ListItem>;
};

const UpdateForm: React.FC<UpdateFormProps> = (props) => {
  const { updateModalOpen, onCancel, onSubmit, values } = props
  return (
    <ModalForm
      title="修改员工"
      width="70%"
      modalProps={{
        destroyOnClose: true,
        maskClosable: false
      }}
      open={updateModalOpen}
      onOpenChange={onCancel}
      onFinish={onSubmit}
      initialValues={{ ...values, roleIds: values.roles?.map(role => role.id) }}
    >
      <BasicForm />
      <Form.Item name="id" label={false}>
        <Input type="hidden" />
      </Form.Item>
    </ModalForm>
  );
};

export default UpdateForm;
