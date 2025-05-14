import styled from "styled-components";
import Image from "next/image";
import { CommonStylesType } from "@/app/model/model";

import { GrayColor, GrayColorType } from "@/app/styles/mixins";
import BackgroundImage from "@/app/image/바탕화면.jpg";

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
export const BackgroundImageSrc = styled.div`
  min-height: 100vh;
  background-image: url(${BackgroundImage.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const GrayText = styled.p`
  color: #b0b0b0;
`;

export const BaseText = styled.p<GrayColorType>`
  ${GrayColor}
`;
// 기본 본문 텍스트 p
export const BodyText = styled(BaseText)`
  font-size: 1rem; /* 16px */
`;

export const CodeText = styled(BaseText).attrs({ as: "pre" })`
  font-size: 0.8125rem;
  white-space: pre-wrap;
`;
// 설명 또는 부제목 p
export const SubText = styled(BaseText)`
  font-size: 0.875rem; /* 14px */
`;

// 작은 부가 텍스트 span
export const SmallText = styled(BaseText).attrs({ as: "span" })`
  font-size: 0.75rem; /* 12px */
`;

// 버튼용 텍스트 (기본값 14px) span
export const ButtonText = styled(BaseText).attrs({ as: "span" })`
  font-size: 0.875rem; /* 14px */
  font-weight: 500;
`;

// H1 제목
export const Heading1 = styled(BaseText).attrs({ as: "h1" })`
  font-size: 2rem; /* 32px */
  font-weight: bold;
`;

// H2 제목
export const Heading2 = styled(BaseText).attrs({ as: "h2" })`
  font-size: 1.5rem; /* 24px */
  font-weight: bold;
`;

// H3 제목
export const Heading3 = styled(BaseText).attrs({ as: "h3" })`
  font-size: 1.25rem; /* 20px */
  font-weight: bold;
`;
