import { CustomModalProps } from "@/types";
import { Modal } from "antd";

const CustomMiddleModal: React.FC<CustomModalProps> = ({
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
      centered
      title={title}
      onOk={onOk}
      footer={null}
    >
      {children}
    </Modal>
  );
};

export default CustomMiddleModal;
