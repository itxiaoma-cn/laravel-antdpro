import { ModalForm } from '@ant-design/pro-components';
import BasicForm from './BasicForm';
import { Form } from 'antd';

interface Props {
  open: boolean;
  onOpenChange: (visible: boolean) => void;
  onFinish: (formData: any) => Promise<void>;
}

const Create: React.FC<Props> = (props) => {
  const [form] = Form.useForm();
  const { open, onOpenChange, onFinish } = props;
  return (
    <ModalForm
      form={form}
      title="新增角色"
      width="50%"
      open={open}
      onOpenChange={onOpenChange}
      modalProps={{
        destroyOnClose: true,
        maskClosable: false,
      }}
      onFinish={onFinish}
    >
      <BasicForm form={form} />
    </ModalForm>
  );
};

export default Create;
