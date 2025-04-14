"use client";
import React, { useReducer } from "react";
// state
import { reducer, initialState } from "@/app/context/reducer";
import { Action } from "@/app/context/reducer";
// Styles
import {
  Icon,
  Container,
  GrayText,
  Row,
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
} from "./VisualStudio.styles";
import IconList from "../common/icon";
// Type
import { VisualStudioType } from "@/app/type/VisualStudio";
// Components
import { SideBar } from "./Contents/Sidebar";
import { SideBarOpenContent } from "./Contents/SideBarOpenContent";

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
            <Ul $bgcolor="#323233">
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
                <GrayText>File</GrayText>
                <GrayText>Edit</GrayText>
                <GrayText>Selection</GrayText>
                <GrayText>View</GrayText>
                <GrayText>Go</GrayText>
                <GrayText>Run</GrayText>
                <GrayText className="mr-8">Terminal</GrayText>
                <GrayText>Help</GrayText>
              </LiTablet>
              <GrayText>VisualStudioCode</GrayText>
              <Li $justify="end" $gap="10px">
                <GrayText onClick={props.MinimizeHandler}>_</GrayText>
                <GrayText onClick={props.ResizeHandler}>□</GrayText>
                <GrayText className="ml-2" onClick={props.WindowClose}>
                  x
                </GrayText>
              </Li>
            </Ul>
          </Row>
        </Container>
        <ContainersSideBar>
          <ContainerSideMenu>
            {props.SideBarState && (
              <SideBar TabChange={hanldeTabChange} State={state.activeTab} />
            )}
            <Button
              $TabletRight={props.SideBarState}
              onClick={props.SideBarHandler}
            >
              X
            </Button>
          </ContainerSideMenu>

          <ContainerContent>
            <SideBarOpenContent
              TabChange={hanldeTabChange}
              State={state.activeTab}
              TabletWidthState={props.TabletWidthState}
              TabletWidthsState={props.TabletWidthsState}
            />
          </ContainerContent>
        </ContainersSideBar>
      </VisualStudioApp>
    </>
  );
};
