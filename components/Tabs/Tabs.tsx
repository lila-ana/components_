import { CustomTabsProps, TabPaneProps } from "@/types/Tabs";
import React, { useState } from "react";

const TabPane: React.FC<TabPaneProps> = ({ children }) => {
  return <div>{children}</div>;
};

const CustomTabs: React.FC<CustomTabsProps> & {
  TabPane: React.FC<TabPaneProps>;
} = ({
  defaultActiveKey,
  onChange,
  children,
  activeTabClassName,
  inactiveTabClassName,
}) => {
  const [activeKey, setActiveKey] = useState(defaultActiveKey);
  console.log(defaultActiveKey, activeKey, "defaultActiveKey");

  const handleTabClick = (tabKey: string) => {
    console.log(`Switching to tab: ${tabKey}`);
    setActiveKey(tabKey);
    if (onChange) {
      onChange(tabKey);
    }
  };

  return (
    <div>
      <div className="flex border-b border-gray-200">
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            const { tab, tabKey } = child.props;
            const isActive = tabKey === activeKey;
            const buttonClassName = isActive
              ? `px-4 py-2 focus:outline-none ${activeTabClassName || "border-b-2 border-blue-500 text-blue-500"}`
              : `px-4 py-2 focus:outline-none ${inactiveTabClassName || "text-gray-500"}`;

            return (
              <button
                key={tabKey}
                className={buttonClassName}
                // className={`px-4 py-2 focus:outline-none ${isActive ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"}`}
                onClick={() => handleTabClick(tabKey)}
              >
                {tab}
              </button>
            );
          }
          return null;
        })}
      </div>
      <div className="mt-4">
        {React.Children.map(children, (child) => {
          //   console.log(`Rendering tab: ${child.props.tabKey}`);

          if (React.isValidElement(child) && child.props.tabKey === activeKey) {
            return <div key={child.props.tabKey}>{child.props.children}</div>;
          }
          return null;
        })}
      </div>
    </div>
  );
};

CustomTabs.TabPane = TabPane;

export default CustomTabs;
