import { MouseEventHandler } from "react";

export type MenuItem = {
  key: string;
  icon?: React.ReactNode;
  label: string;
  children?: MenuItem[];
};

export type CustomSidebarProps = {
  items: MenuItem[];
  collapsedWidth?: number;
  expandedWidth?: number;
  defaultSelectedKeys?: string[];
  defaultOpenKeys?: string[];
  theme?: "light" | "dark";
  onMenuClick: (key: string) => void;
};
