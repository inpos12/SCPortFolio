import { MouseEventHandler } from "react";

export type CommonStylesType = {
  $maxWidth: string;
  $maxHeight: string;
  $zindex: string;
  $padding: string;
  $filter: boolean;
};

export type Style = {
  $maxWidth?: string;
  $width?: string;
  $display?: string;
  $maxHeight?: string;
  $height?: string;
  $zindex?: string;
  $padding?: string;
  $filter?: string;
  $justify?: string;
  $align?: string;
  $bgcolor?: string;
  $flexCol?: string;
  $gap?: string;
  $mt?: string;
  $mb?: string;
  $visible?: boolean;
  $minimized: string | boolean;
  $resized: boolean;
  $TabletRight: boolean | string;
  $TabletWidth: boolean | null;
  $TabletWidths: boolean | null;
};

export type Data = {
  _id: object;
  title: string;
  name: string;
};
export interface Item {
  title: string;
  name: string;
  detail: string;
}
export interface DetailOwnProps {
  ltem: Item[];
  button: (state: boolean) => void;
}
export interface DetailContentOwnProps {
  item: Item[];
  button: (state: boolean) => void;
}

export type ProjectType = {
  id: string;
  name: string;
  description: string;
  tectnologies: string[];
  github: string;
  demo: string;
};

type Skill = {
  languages: string;
  value: string;
};
export type SkillType = {
  name: string;
  item: Skill[];
};

// VisualStudio Type

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
export type SideBarType = {
  State: string;
  TabChange: (tabName: string) => void;
};

// SideBarType

export type DataType = {
  id: string;
  label: string;
  icon: React.JSX.Element;
};

export type SideBarOpenContentType = {
  TabChange: (tabName: string) => void;
  State: string;
  TabletWidthState: boolean | null;
  TabletWidthsState: boolean | null;
};
