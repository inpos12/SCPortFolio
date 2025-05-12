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
  $isSidebarOpen: boolean;
  $filter: string;
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
  $TabletRight?: boolean | string;
  $TabletWidth?: boolean | null;
  $TabletWidths?: boolean | null;
  $TopBarUlzindex?: boolean;
};
