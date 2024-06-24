"use client";

import {
  CustomButton,
  CustomButton_withoutAntd,
  CustomForm,
  CustomNotification,
  CustomTopModal,
  CustomTopModal_withoutAntd,
} from "@/components/index";
import CustomMiddleModal from "@/components/modal/pop-up/CustomMiddleModal";
import CustomMiddleModal_withoutantd from "@/components/modal/pop-up/customMiddleModal_withoutAntd";
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
  const [isMimicVisible, setIsMImicVisible] = useState<boolean>(false);
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
  const handleMimicModal = () => {
    setIsMImicVisible(!isMimicVisible);
    console.log("there is change");
  };
  const handleCloseMimicModal = () => {
    setIsMImicVisible(false);
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
    <main className="flex min-h-screen flex-col flex-wrap gap-2 items-center justify-between p-24">
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
      <CustomButton
        title="Show Modal mimic"
        btnType="button"
        containerStyles="bg-green-600 rounded-full text-white"
        handleClick={handleMimicModal}
      />
      <CustomMiddleModal_withoutantd
        visible={isMimicVisible}
        title="Middle Modal antd mimic"
        onClose={handleCloseMimicModal}
      >
        <p>checking middle modal with antd mimic design</p>
      </CustomMiddleModal_withoutantd>
      <CustomTopModal_withoutAntd
        visible={isMimicVisible}
        title="Middle Modal antd mimic"
        onClose={handleCloseMimicModal}
      >
        <p>checking top modal with antd mimic design</p>
      </CustomTopModal_withoutAntd>
      <CustomButton_withoutAntd
        title="Show button mimic"
        btnType="button"
        containerStyles="bg-green-600 rounded-full text-white"
        handleClick={handleMimicModal}
      />
    </main>
  );
};

export default TestPage;
