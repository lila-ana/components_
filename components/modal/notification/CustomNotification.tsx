"use client";
import { notification } from "antd";
import React, { useEffect, useRef } from "react";
import {
  CheckCircleOutlined,
  InfoCircleOutlined,
  ExclamationCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import { CustomNotificationProps } from "@/types";

const CustomNotification: React.FC<{
  notificationData: CustomNotificationProps;
}> = ({ notificationData }) => {
  console.log("notificationDatassaddssad", notificationData);

  useEffect(() => {
    if (notificationData) {
      console.log("notificationDatanotificationData", notificationData);

      const { type, message, description, duration, placement } =
        notificationData;
      switch (type) {
        case "success":
          notification.success({
            message,
            description,
            duration,
            placement,
            icon: <CheckCircleOutlined style={{ color: "#52c41a" }} />,
          });
          break;
        case "info":
          notification.info({
            message,
            description,
            duration,
            placement,
            icon: <InfoCircleOutlined style={{ color: "#1890ff" }} />,
          });
          break;
        case "warning":
          notification.warning({
            message,
            description,
            duration,
            placement,
            icon: <ExclamationCircleOutlined style={{ color: "#faad14" }} />,
          });
          break;
        case "error":
          notification.error({
            message,
            description,
            duration,
            placement,
            icon: <CloseCircleOutlined style={{ color: "#f5222d" }} />,
          });
          break;
        default:
          break;
      }
    }
  }, [notificationData]);

  return null;
};

export default CustomNotification;
