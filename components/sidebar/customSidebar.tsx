"use client";

import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { CustomSidebarProps, MenuItem } from "@/types/menu.types";

const CustomSidebar: React.FC<CustomSidebarProps> = ({
  items,
  collapsedWidth = 20,
  expandedWidth = 64,
  defaultSelectedKeys = ["1"],
  defaultOpenKeys = ["sub1"],
  theme = "dark",
  onMenuClick,
}) => {
  const [collapsed, setCollapsed] = useState(false);
  const [openKeys, setOpenKeys] = useState<string[]>(defaultOpenKeys);
  const [selectedKeys, setSelectedKeys] =
    useState<string[]>(defaultSelectedKeys);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const handleMenuClick = (key: string) => {
    setSelectedKeys([key]);
    if (onMenuClick) {
      onMenuClick(key);
    }
  };

  const handleSubMenuClick = (key: string) => {
    if (openKeys.includes(key)) {
      setOpenKeys(openKeys.filter((k) => k !== key));
    } else {
      setOpenKeys([...openKeys, key]);
    }
  };

  const renderMenuItems = (items: MenuItem[]) => {
    return items.map((item) => {
      if (item.children) {
        return (
          <div key={item.key}>
            <div
              className={`flex items-center p-4 cursor-pointer ${
                theme === "dark" ? "bg-gray-800" : "bg-gray-200"
              } ${
                openKeys.includes(item?.key)
                  ? "bg-gray-700"
                  : "hover:bg-gray-300"
              }`}
              onClick={() => handleSubMenuClick(item?.key)}
            >
              {item.icon}
              {!collapsed && <span className="ml-4">{item?.label}</span>}
            </div>
            <div
              className={`pl-8 ${
                openKeys.includes(item?.key) ? "block" : "hidden"
              }`}
            >
              {renderMenuItems(item?.children)}
            </div>
          </div>
        );
      }
      return (
        <div
          key={item.key}
          className={`flex items-center p-4 cursor-pointer ${
            theme === "dark" ? "bg-gray-800" : "bg-gray-200"
          } ${
            selectedKeys.includes(item?.key)
              ? "bg-gray-700"
              : "hover:bg-gray-300"
          }`}
          onClick={() => handleMenuClick(item?.key)}
        >
          {item.icon}
          {!collapsed && <span className="ml-4">{item?.label}</span>}
        </div>
      );
    });
  };

  return (
    <div
      className={`text-white h-screen ${
        theme === "dark" ? "bg-gray-800" : "bg-white"
      } ${
        collapsed ? `w-${collapsedWidth}` : `w-${expandedWidth}`
      } transition-width duration-300`}
    >
      <button
        type="button"
        onClick={toggleCollapsed}
        className={`p-4 focus:outline-none ${
          theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-300"
        } transition-colors duration-300`}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </button>
      <div>{renderMenuItems(items)}</div>
    </div>
  );
};

export default CustomSidebar;
