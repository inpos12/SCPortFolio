import { css } from "styled-components";

export type GrayColorType = {
  $GrayColor?: boolean;
};

export const GrayColor = css<GrayColorType>`
  color: ${(props) => (props.$GrayColor ? "#b0b0b0" : "#ffffff")};
`;
