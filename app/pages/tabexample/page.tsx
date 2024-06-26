"use client";

import CustomTabs from "@/components/Tabs/CustomTabs";
import DarkModeSwitch from "@/contexts/themeContext";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-lg">
        <CustomTabs
          defaultActiveKey="1"
          activeTabClassName="border-b-2 border-blue-500 text-blue-500"
          inactiveTabClassName="text-blue-300"
        >
          <CustomTabs.TabPane tab="Tab 1" tabKey="1">
            <div className="p-4 bg-white border border-gray-200 rounded shadow dark:bg-[#ffff00]">
              Content of Tab 1
            </div>
          </CustomTabs.TabPane>
          <CustomTabs.TabPane tab="Tab 2" tabKey="2">
            <div className="p-4 bg-white border border-gray-200 rounded shadow">
              Content of Tab 2
            </div>
          </CustomTabs.TabPane>
          <CustomTabs.TabPane tab="Tab 3" tabKey="3">
            <div className="p-4 bg-white border border-gray-200 rounded shadow">
              Content of Tab 3
            </div>
          </CustomTabs.TabPane>
        </CustomTabs>
        <DarkModeSwitch />
      </div>
    </div>
  );
};

export default App;
