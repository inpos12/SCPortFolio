import React from "react";
import { CodeBox } from "../ContentStyle/ContentesStyles";
import { SkillType } from "@/app/model/model";
import styled from "styled-components";
import { BodyText, Heading2 } from "@/app/components/common/CommonStyles";
const ProgressBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
const ProgressP = styled(BodyText)`
  max-width: 15%;
  width: 100%;
`;
const Progress = styled.progress`
  transition: all 1.2s ease-in-out;
  width: 100%;
  &::-webkit-progress-bar {
    border-radius: 15px;
    background-color: #3c3c3c;
  }

  &::-webkit-progress-value {
    border-radius: 15px;
    background-color: #007acc; /* 진행 상태의 색상 */
  }
`;
export const SkillProgressList: React.FC<{ data: SkillType[] }> = (props) => {
  return (
    <>
      {props.data.map((category, index) => (
        <CodeBox key={index}>
          <Heading2 className="mb-10">{category.name}</Heading2>
          {category.item.map((item, index) => (
            <ProgressBox className="item" key={index}>
              <ProgressP>{item.languages}</ProgressP>
              <Progress value={item.value} max="100" />
            </ProgressBox>
          ))}
        </CodeBox>
      ))}
    </>
  );
};
