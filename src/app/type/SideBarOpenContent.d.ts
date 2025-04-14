export type SideBarOpenContentType = {
  TabChange: (tabName: string) => void;
  State: string;
  TabletWidthState: boolean | null;
  TabletWidthsState: boolean | null;
};
