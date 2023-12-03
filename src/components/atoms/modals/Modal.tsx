import React from "react";
import { Modal, ModalProps } from "antd";

interface IMyProps extends ModalProps {
  visible?: boolean;
}

const MyModal: React.FC<IMyProps> = ({
  visible,
  title,
  okText,
  cancelText,
  onOk,
  onCancel,
  closable,
  closeIcon,
  footer,
  width,
  centered,
  afterClose,
  okType,
  confirmLoading,
  okButtonProps,
  children,
}) => {
  return (
    <Modal
      open={visible}
      title={title}
      okText={okText}
      cancelText={cancelText}
      onOk={onOk}
      onCancel={onCancel}
      closable={closable}
      closeIcon={closeIcon}
      footer={footer}
      width={width}
      centered={centered}
      afterClose={afterClose}
      okType={okType}
      confirmLoading={confirmLoading}
      okButtonProps={okButtonProps}
      style={{
        fontSize: "1em",
      }}
    >
      {children}
    </Modal>
  );
};

export default MyModal;
