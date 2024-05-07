"use client";

import { CustomButton, CustomNotification, CustomTopModal } from "@/components";
import CustomMiddleModal from "@/components/modal/CustomMiddleModal";
import { CustomNotificationProps } from "@/types";
import React, { useEffect, useRef, useState } from "react";

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

  return (
    <div>
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
    </div>
  );
};

export default TestPage;
