export type SideBarType = {
  State: string;
  TabChange: (tabName: string) => void;
};
export type DataType = {
  id: string;
  label: string;
  icon: React.JSX.Element;
};
