"use client";

import React, { useState } from "react";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import CustomSidebar from "@/components/sidebar/customSidebar";

const Dashboard: React.FC = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>("1");

  const menuItems = [
    { key: "1", icon: <PieChartOutlined />, label: "Dashboard" },
    { key: "2", icon: <DesktopOutlined />, label: "Overview" },
    {
      key: "sub1",
      label: "Products",
      icon: <AppstoreOutlined />,
      children: [
        { key: "5", label: "All Products" },
        { key: "6", label: "Add Product" },
        { key: "7", label: "Categories" },
      ],
    },
    {
      key: "sub2",
      label: "Settings",
      icon: <ContainerOutlined />,
      children: [
        { key: "8", label: "Account Settings" },
        { key: "9", label: "Preferences" },
      ],
    },
  ];

  const handleMenuClick = (key: string) => {
    setSelectedMenuItem(key);
  };
  console.log(selectedMenuItem, "selectedMenuItem");
  return (
    <div className="flex h-screen">
      <CustomSidebar
        items={menuItems}
        defaultSelectedKeys={[selectedMenuItem]}
        onMenuClick={handleMenuClick}
        collapsedWidth={16}
        expandedWidth={64}
        theme="dark"
      />

      <main className="flex-1 bg-gray-100 p-6">
        {selectedMenuItem === "1" && (
          <>
            <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
            <p className="mt-2 text-gray-600">Welcome to your dashboard!</p>
          </>
        )}
        {selectedMenuItem === "2" && (
          <>
            <h1 className="text-2xl font-bold text-gray-800">Overview</h1>
            <p className="mt-2 text-gray-600">This is the overview page.</p>
          </>
        )}
        {/* Add more conditions for other menu items */}
        {selectedMenuItem === "5" && (
          <>
            <h1 className="text-2xl font-bold text-gray-800">All Products</h1>
            <p className="mt-2 text-gray-600">View all products here.</p>
          </>
        )}
        {/* Add conditions for other sub-menu items */}
      </main>
    </div>
  );
};

export default Dashboard;
