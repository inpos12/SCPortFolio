import styled, { css } from "styled-components";
import { device } from "../common/MediaQuery";
import { Style } from "@/app/type/style";
import { transitionMinimize, transitionResize } from "./animation";
import {
  BodyText,
  ButtonText,
  Container,
  SmallText,
} from "../common/CommonStyles";

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
  | "$width"
  | "$TabletWidth"
  | "$TopBarUlzindex"
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
type ButtonStyleType = Pick<Style, "$TabletRight" | "$isSidebarOpen">;

export const Ul = styled.ul<UlStyleType>`
  position: relative;
  z-index: ${(props) => (props.$TopBarUlzindex ? 12 : 0)};
  width: ${(props) => props.$width || "100%"};
  height: ${(props) => props.$height || "100%"};
  display: flex;
  justify-content: ${(props) => props.$justify || "start"};
  align-content: ${(props) => props.$align || "flex-start"};
  padding: ${(props) => props.$padding || "10px"};
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
  max-width: 30%;
  height: 100%;
  width: 100%;
  @media ${device.Tablet} {
    z-index: 10;
    position: absolute;
  }
  @media ${device.Mobile} {
    display: none;
  }
`;

type State = {
  $Zindex: boolean | null;
};
export const ContainerSideMenu = styled.div<State>`
  max-width: 100%;
  width: 100%;
  height: 100%;
  display: flex;
  z-index: ${(props) => (props.$Zindex ? 2 : -1)};
  @media ${device.Tablet} {
    position: absolute;
  }
  @media ${device.Mobile} {
    display: none;
  }
`;

type ContainerContentType = {
  $ContentState: boolean;
};
export const ContainerContent = styled.div<ContainerContentType>`
  max-width: ${(props) => (props.$ContentState ? "calc(100% - 48px)" : "100%")};
  margin-left: ${(props) => (props.$ContentState ? "48px" : "0")};
  width: 100%;
  height: 100%;
  display: flex;
  height: 100%;
`;
export const Button = styled.button<ButtonStyleType>`
  cursor: pointer;
  display: block;
  position: absolute;
  font-size: 1.5rem;
  top: 50%;
  transform: translate(0, -50%);
  z-index: 2;
  ${(props) =>
    props.$isSidebarOpen
      ? `
  right: -48px
  `
      : `
  left:0
  
  `}
`;

export const MobileErrorContainer = styled(Container)`
  display: none;
  @media ${device.Mobile} {
    display: block;
  }
`;
