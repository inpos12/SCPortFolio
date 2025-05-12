import React from "react";
import styled from "styled-components";
import {
  ContentRow,
  CodeBox,
  PreGrayText,
} from "./ContentStyle/ContentesStyles";
import { Hr, GrayText, Heading1 } from "../../common/CommonStyles";
import { SkillType } from "@/app/model/model";
import { CodeBlock } from "../../common/CodeBlock";
import { allSkills, backend, frontend, languages, tools } from "./Skill/data";
import { SkillProgressList } from "./Skill/SkillProgressList";

export const SkillContent: React.FC = () => {
  return (
    <>
      <ContentRow $maxHeight="auto" $maxWidth="auto" className="fade-in">
        <Heading1 className="mt-10 mb-20">Skills</Heading1>
        <Hr />
        {/* <CodeBox>
          <CodeBlock data={allSkills} />
        </CodeBox> */}
        <SkillProgressList data={languages} />
        <SkillProgressList data={frontend} />
        <SkillProgressList data={backend} />
        <SkillProgressList data={tools} />
      </ContentRow>
    </>
  );
};
