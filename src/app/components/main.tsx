"use client";
import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { IconWrapper } from "./layout";
import IconList from "./common/icon";
import { Style } from "../type/style";

type IconType = Pick<Style, "$zindex" | "$maxWidth" | "$padding" | "$filter">;
const Container = styled.div`
  width: 100%;
`;

const Icon = styled(Image)<IconType>`
  max-width: ${(props) => props.$maxWidth || "auto"};
  width: 100%;
  height: 100%;
  z-index: ${(props) => props.$zindex || "1"};
  padding: ${(props) => props.$padding || "0"};
  filter: ${(props) =>
    props.$filter === "none"
      ? "none"
      : "invert(99%) sepia(67%) saturate(0%) hue-rotate(324deg) brightness(117%) contrast(100%)"};
`;
const IconRow = styled(IconWrapper)`
  max-width: 150px;
  width: 100%;
  display: grid;
  place-items: center;
  text-align: center;
`;

type OwnProps = {
  VscOpen: () => void;
};
export const Main: React.FC<OwnProps> = (props) => {
  return (
    <>
      <Container>
        <IconRow onClick={props.VscOpen}>
          <Icon
            $zindex="-1"
            $maxWidth="50px"
            alt="VSicon"
            src={IconList.VSIcon}
            $filter="none"
          />
          <h1 className="mt-2">Visual Studio Code</h1>
        </IconRow>
      </Container>
    </>
  );
};
