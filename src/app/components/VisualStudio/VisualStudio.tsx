"use client";
import React, { useReducer } from "react";
// state
import { reducer, initialState } from "@/app/context/reducer";
import { Action } from "@/app/context/reducer";
// Styles
import {
  Icon,
  Container,
  Row,
  ButtonText,
  SubText,
  Heading1,
} from "@/app/components/common/CommonStyles";
import {
  Ul,
  VisualStudioApp,
  LiTablet,
  Li,
  ContainerSideMenu,
  Button,
  ContainerContent,
  ContainersSideBar,
  MobileErrorContainer,
} from "./VisualStudio.styles";
import IconList from "@/app/components/common/icons";
// Type
import { VisualStudioType } from "@/app/type/VisualStudio";
// Components
import { SideBar } from "./Contents/Sidebar";
import { SideBarOpenContent } from "./Contents/SideBarOpenContent";
import styled from "styled-components";
import { device } from "../common/MediaQuery";

const Test = styled.div`
  display: flex;
  @media ${device.Mobile} {
    display: none;
  }
`;

export const VisualStudio: React.FC<VisualStudioType> = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  type TabAction = Extract<Action, { type: "UPDATE_ACTIVETAB" }>;
  function hanldeTabChange(tabName: string): void {
    dispatch({
      type: "UPDATE_ACTIVETAB",
      newtab: tabName,
    } as TabAction);
  }
  return (
    <>
      <VisualStudioApp
        id="test"
        $resized={props.StateResize}
        $minimized={props.StateMinimize}
        className="fade-in"
      >
        <Container>
          <Row $maxHeight="auto" $maxWidth="auto">
            <Ul
              $bgcolor="#323233"
              className="border-t border-l border-r border-#a0a0a0"
            >
              <Icon
                $filter={false}
                $padding="0"
                $zindex="1"
                $maxWidth="25px"
                alt="vsicon"
                src={IconList.VSIcon}
                className="mr-10"
              />
              <LiTablet $align="center" $gap="10px">
                <ButtonText>File</ButtonText>
                <ButtonText>Edit</ButtonText>
                <ButtonText>Selection</ButtonText>
                <ButtonText>View</ButtonText>
                <ButtonText>Go</ButtonText>
                <ButtonText>Run</ButtonText>
                <ButtonText className="mr-8">Terminal</ButtonText>
                <ButtonText>Help</ButtonText>
              </LiTablet>
              <div style={{ display: "flex", alignItems: "center" }}>
                <SubText>VisualStudioCode</SubText>
              </div>

              <Li $justify="end" $gap="10px">
                <ButtonText onClick={props.MinimizeHandler}>_</ButtonText>
                <ButtonText onClick={props.ResizeHandler}>□</ButtonText>
                <ButtonText className="ml-2" onClick={props.WindowClose}>
                  x
                </ButtonText>
              </Li>
            </Ul>
          </Row>
        </Container>
        <Test className="h-full relative">
          <ContainersSideBar>
            {props.SideBarState && (
              <ContainerSideMenu $Zindex={props.Zindex}>
                <SideBar TabChange={hanldeTabChange} State={state.activeTab} />
              </ContainerSideMenu>
            )}
            <Button
              $isSidebarOpen={props.isSidebarOpen}
              onClick={props.SideBarHandler}
            >
              {props.SideBarIcon}
            </Button>
          </ContainersSideBar>

          <ContainerContent $ContentState={props.ContentState}>
            <SideBarOpenContent
              TopBarUlzindex={props.TopBarUlzindex}
              TabChange={hanldeTabChange}
              State={state.activeTab}
              TabletWidthState={props.TabletWidthState}
              TabletWidthsState={props.TabletWidthsState}
            />
          </ContainerContent>
        </Test>
        <MobileErrorContainer className="h-[calc(100%-48px)]">
          <Row
            $maxHeight="auto"
            $maxWidth="auto"
            className="flex justify-center items-center"
          >
            <Heading1>지원하지 않는 해상도 입니다.</Heading1>
          </Row>
        </MobileErrorContainer>
      </VisualStudioApp>
    </>
  );
};
