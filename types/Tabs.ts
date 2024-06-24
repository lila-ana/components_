export interface TabPaneProps {
  tab: React.ReactNode;
  tabKey: string;
  children: React.ReactNode;
}

export interface CustomTabsProps {
  defaultActiveKey: string;
  onChange?: (activeKey: string) => void;
  children: React.ReactNode;
  activeTabClassName?: string;
  inactiveTabClassName?: string;
}
