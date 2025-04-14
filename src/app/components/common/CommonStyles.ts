import styled from "styled-components";
import Image from "next/image";
import { CommonStylesType } from "@/app/model/model";

type RowType = Pick<CommonStylesType, "$maxWidth" | "$maxHeight">;
type IconType = Pick<
  CommonStylesType,
  "$maxWidth" | "$zindex" | "$padding" | "$filter"
>;

export const Container = styled.div`
  width: 100%;
`;
export const Row = styled.div<RowType>`
  max-width: ${(props) => props.$maxWidth || "auto"};
  max-height: ${(props) => props.$maxHeight || "auto"};
  width: 100%;
  height: 100%;
`;

export const Icon = styled(Image)<IconType>`
  max-width: ${(props) => props.$maxWidth || "auto"};
  width: 100%;
  height: 100%;
  z-index: ${(props) => props.$zindex || "1"};
  padding: ${(props) => props.$padding || "0"};
  filter: ${(props) =>
    props.$filter
      ? "invert(99%) sepia(67%) saturate(0%) hue-rotate(324deg) brightness(117%) contrast(100%)"
      : "none"};
`;
export const Hr = styled.hr`
  width: 100%;
  color: red;
  color: #333;
  overflow: visible;
  text-align: center;
  height: 1px;
  margin-bottom: 20px;
`;

export const GrayText = styled.p`
  color: #b0b0b0;
`;
