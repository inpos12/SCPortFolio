import styled, { css } from "styled-components";
import { device } from "../common/MediaQuery";
import { Style } from "@/app/type/style";
import { transitionMinimize, transitionResize } from "./animation";

// type //

type UlStyleType = Pick<
  Style,
  | "$height"
  | "$justify"
  | "$align"
  | "$padding"
  | "$bgcolor"
  | "$flexCol"
  | "$gap"
>;

type LiStyleType = Pick<
  Style,
  | "$width"
  | "$display"
  | "$flexCol"
  | "$align"
  | "$justify"
  | "$gap"
  | "$mt"
  | "$mb"
>;
type VisualStudioAppStyleType = Pick<Style, "$minimized" | "$resized">;
type ButtonStyleType = Pick<Style, "$TabletRight">;

export const Ul = styled.ul<UlStyleType>`
  width: 100%;
  height: ${(props) => props.$height || "100%"};
  display: flex;
  justify-content: ${(props) => props.$justify || "start"};
  align-content: ${(props) => props.$align || "flex-start"};
  padding: ${(props) => props.$padding || "10px"};
  border: 1px solid white;
  background-color: ${(props) => props.$bgcolor || "none"};
  flex-direction: ${(props) => (props.$flexCol ? "column" : "row")};
  gap: ${(props) => props.$gap || "0"};
`;
export const Li = styled.li<LiStyleType>`
  cursor: pointer;

  width: ${(props) => props.$width || "100%"};
  display: ${(props) => (props.$display ? "none" : "flex")};
  flex-direction: ${(props) => (props.$flexCol ? "column" : "row")};
  align-items: ${(props) => props.$align || "flex-start"};
  justify-content: ${(props) => props.$justify || "start"};
  gap: ${(props) => props.$gap || "0"};
  margin-top: ${(props) => props.$mt || "0"};
  margin-bottom: ${(props) => props.$mb || "0"};
`;

export const LiTablet = styled(Li)`
  @media ${device.Tablet} {
    display: none;
  }
`;

export const VisualStudioApp = styled.div<VisualStudioAppStyleType>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: calc(100vh - 42px);
  background-color: rgba(128, 128, 128, 0.5);
  transform: translate(0, 0);
  animation: ${(props) => {
    if (props.$minimized === false) {
      return css`
        ${transitionMinimize} 0.3s ease-in-out forwards;
      `;
    } else if (props.$resized === true) {
      return css`
        ${transitionResize} 0.3s ease-in-out forwards;
      `;
    } else if (props.$resized === false) {
      return css`
        ${transitionResize} 0.3s ease-in-out reverse forwards;
      `;
    }
  }};
  z-index: 10;
`;

export const ContainersSideBar = styled.div`
  position: relative;
  display: flex;
  height: calc(100% - 48px);
  width: 100%;
`;

export const ContainerSideMenu = styled.div`
  @media ${device.Tablet} {
    position: absolute;
  }
  @media ${device.Mobile} {
    display: none;
  }
  width: 30%;
  height: 100%;
  display: flex;
  z-index: 2;
`;
export const ContainerContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  height: 100%;
`;
export const Button = styled.button<ButtonStyleType>`
  display: block;
  position: absolute;
  background-color: red;
  right: ${(props) => (props.$TabletRight === true ? "0" : "auto")};
  top: 50%;
  transform: translate(0, -50%);
  z-index: 2;
  @media ${device.DeskTop} {
    right: ${(props) => (props.$TabletRight === true ? "77%" : "auto")};
  }
`;
