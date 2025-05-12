import styled from "styled-components";
import { BodyText, Row, SmallText } from "../../../common/CommonStyles";
import { Style } from "@/app/type/style";

type InputType = Pick<Style, "$height"> & { name: string; placeholder: string };

//  컨텐츠부분분
export const CodeBox = styled.div<{ as?: React.ElementType }>`
  background-color: #2a2a2a;
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 30px;
  border: 1px solid #3c3c3c;
  flex-wrap: wrap;
`;

export const PreGrayText = styled.pre`
  font-size: 13px;
  color: #b0b0b0;
  white-space: pre-wrap;
`;
export const ContentRow = styled(Row)`
  overflow-y: scroll;
  padding: 10px;
  &::-webkit-scrollbar {
    width: 8px; /* 스크롤바의 너비 */
  }

  &::-webkit-scrollbar-thumb {
    background-color: gray; /* 스크롤바의 색상 */
    border-radius: 10px; /* 스크롤바의 모서리 둥글게 */
  }
  &::-webkit-scrollbar-track-piece {
    background-color: #3c3c3c;
  }
  &::-webkit-scrollbar-button {
    background-color: #3c3c3c;
  }
`;
export const SendButton = styled(BodyText).attrs({ as: "button" })`
  cursor: pointer;
  padding: 5px 10px;
  background-color: #007acc;
  font-size: 13px;
  border-radius: 6px;
`;

export const Input = styled.input<InputType>`
  font-size: 0.75rem;
  width: 100%;
  height: ${(props) => props.$height || "auto"}; // $height가 없으면 'auto' 사용
  padding: 5px 10px;
  resize: none;
  margin-bottom: 10px;
  background-color: #3c3c3c;
  border: 1px solid #6a6a6a;
  border-radius: 10px;
  &:focus {
    outline: none;
    border: 1px solid #007acc;
  }
  &::-webkit-scrollbar {
    width: 8px; /* 스크롤바의 너비 */
  }

  &::-webkit-scrollbar-thumb {
    background-color: gray; /* 스크롤바의 색상 */
    border-radius: 10px; /* 스크롤바의 모서리 둥글게 */
  }
  &::-webkit-scrollbar-track-piece {
    background-color: #323233;
  }
  &::-webkit-scrollbar-button {
    background-color: #323233;
  }
`;
