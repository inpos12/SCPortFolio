export type VisualStudioType = {
  StateResize: boolean;
  StateMinimize: boolean;
  MinimizeHandler: React.MouseEventHandler<HTMLElement>;
  ResizeHandler: React.MouseEventHandler<HTMLElement>;
  WindowClose: React.MouseEventHandler<HTMLElement>;
  SideBarHandler: MouseEventHandler<HTMLElement>;
  SideBarState: boolean;
  TabletWidthState: boolean | null;
  TabletWidthsState: boolean | null;
};
