import { CustomModalProps } from "@/types";
import { Modal } from "antd";

const CustomTopModal: React.FC<CustomModalProps> = ({
  visible,
  onClose,
  onOk,
  title,
  children,
}) => {
  return (
    <Modal
      open={visible}
      onCancel={onClose}
      onOk={onOk}
      title={title}
      footer={null}
    >
      {children}
    </Modal>
  );
};

export default CustomTopModal;
