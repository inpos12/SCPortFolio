import React from "react";
import styled from "styled-components";
import {
  CodeBox,
  ContentRow,
  SendButton,
} from "../ContentStyle/ContentesStyles";
import { DetailOwnProps } from "@/app/type/ApiData";

import IconList from "@/app/components/common/icons";
import {
  Hr,
  Icon,
  Row,
  SmallText,
  SubText,
} from "@/app/components/common/CommonStyles";
const FullBackground = styled(ContentRow)`
  position: absolute;
  z-index: 1000;
  top: 0;
  left: 0;
  background-color: rgba(30, 30, 30, 0.5);
`;
const ModalBox = styled(CodeBox)`
  position: absolute;
  background-color: #3c3c3c;
  border: 1px solid #6a6a6a;
  max-width: 500px;
  width: 100%;
  top: 33%;
  left: 33%;
  transform: translate(-25% -25%);
  padding: 0;
`;
export const DetailList: React.FC<DetailOwnProps> = (props) => {
  return (
    <>
      {props.item.map((item, index) => (
        <FullBackground $maxHeight="auto" $maxWidth="auto" key={index}>
          <ModalBox>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                padding: "10px 8px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Icon
                  $filter={true}
                  $padding="0"
                  $zindex="1"
                  $maxWidth="20px"
                  src={IconList.FileIcon}
                  alt="fileicon"
                />
                <SubText className="ml-15">{item.title}</SubText>
              </div>
              <div>
                <SubText
                  onClick={() => {
                    props.button(false);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  x
                </SubText>
              </div>
            </div>
            <CodeBox
              style={{
                padding: "10px 8px ",
                borderTop: "1px solid #6a6a6a",
                borderBottom: "1px solid #6a6a6a",
                borderRadius: "0",
                margin: "0",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <SubText>{item.title}</SubText>
              <SmallText $GrayColor={true} className="mb-10" as="h4">
                by {item.name}
              </SmallText>
              <Hr />
              <p>{item.detail}</p>
            </CodeBox>
            <Row
              $maxHeight="auto"
              $maxWidth="auto"
              style={{ textAlign: "right", padding: "10px 8px" }}
            >
              <SendButton
                onClick={() => {
                  props.button(false);
                }}
              >
                Close
              </SendButton>
            </Row>
          </ModalBox>
        </FullBackground>
      ))}
    </>
  );
};
