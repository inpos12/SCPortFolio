export const breakpoints = {
  Mobile: "659px",
  Tablet: "768px",
  TabletMax: "1280px",
  Desktop: "1281px",
};
export const device = {
  //작은모바일사이즈
  Mobile: `(max-width:${breakpoints.Mobile})`,
  //아이패드,갤탭 세로모드
  Tablet: `(max-width:${breakpoints.TabletMax})`,
  // 데스크탑탑
  DeskTop: `(min-width: ${breakpoints.Desktop}) `,
};
