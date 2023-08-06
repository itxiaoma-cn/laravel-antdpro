import { ModalForm } from "@ant-design/pro-components";
import BasicForm from "./BasicForm";

interface Props {
  open: boolean;
  onOpenChange: (visible: boolean) => void;
  onFinish: (formData: any) => Promise<void>;
}

const Create: React.FC<Props> = (props) => {
  const { open, onOpenChange, onFinish } = props
  return (
    <ModalForm
      title="新增部门"
      width="50%"
      open={open}
      onOpenChange={onOpenChange}
      modalProps={{
        destroyOnClose: true,
        maskClosable: false
      }}
      onFinish={onFinish}
    >
      <BasicForm newRecord />
    </ModalForm>
  )
}

export default Create