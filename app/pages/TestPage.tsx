"use client";

import {
  CustomButton,
  CustomForm,
  CustomNotification,
  CustomTopModal,
} from "@/components/index";
import CustomMiddleModal from "@/components/modal/CustomMiddleModal";
import { CustomNotificationProps } from "@/types";
import { Input } from "antd";
import React, { useEffect, useState } from "react";

const inputFields = [
  {
    label: "Email",
    name: "email",
    rules: [{ required: true, message: "Please input your email!" }],
    component: <Input />,
  },
  {
    label: "Password",
    name: "password",
    rules: [{ required: true, message: "Please input your password!" }],
    component: <Input.Password />,
  },
];
const TestPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isMiddleVisible, setIsMiddleVisible] = useState<boolean>(false);
  const [notificationData, setNotificationData] =
    useState<CustomNotificationProps | null>(null);

  const handleModalVisible = () => {
    setIsVisible(!isVisible);
  };
  const handleMiddleModalVisible = () => {
    setIsMiddleVisible(!isMiddleVisible);
  };
  const handleCloseModal = () => {
    setIsVisible(false);
  };
  const handleCloseMiddleModal = () => {
    setIsMiddleVisible(false);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://mocki.io/v1/e0b41f2f-3a93-4f1b-807b-3c3c92b30805"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        console.log("Fetched data:", data);
        setNotificationData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);
  console.log("first", notificationData);
  const handleSubmit = () => {};
  const handleUpdate = () => {};

  return (
    <div className="flex flex-col flex-wrap gap-2">
      <CustomButton
        title="Show Modal"
        btnType="button"
        containerStyles="bg-green-600 rounded-full text-white"
        handleClick={handleModalVisible}
      />
      <CustomTopModal
        visible={isVisible}
        onClose={handleCloseModal}
        title="Testing Custom Modal"
      >
        <p>This is your modal content.</p>
      </CustomTopModal>
      <CustomButton
        title="Show Middle Modal"
        btnType="button"
        containerStyles="bg-gray-600 rounded-full text-white"
        handleClick={handleMiddleModalVisible}
      />
      <CustomMiddleModal
        visible={isMiddleVisible}
        title="Middle Modal"
        onClose={handleCloseMiddleModal}
      >
        <p>children</p>
      </CustomMiddleModal>
      {notificationData && (
        <CustomNotification notificationData={notificationData} />
      )}
      <CustomForm inputFields={inputFields} onFinish={handleSubmit} />
      <CustomForm
        inputFields={inputFields}
        onFinish={handleUpdate}
        isUpdating
      />
      <customMiddleModal_withoutantd />
    </div>
  );
};

export default TestPage;
