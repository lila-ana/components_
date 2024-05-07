import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface CustomModalProps {
  visible: boolean;
  onClose: () => void;
  onOk?: () => void;
  title: React.ReactNode;
  children: React.ReactNode;
}

export interface CustomNotificationProps {
  type: "success" | "info" | "warning" | "error";
  message: string;
  description?: string;
  duration?: number;
  placement?: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
}
