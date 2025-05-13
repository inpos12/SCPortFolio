import React from "react";
import { ProjectType } from "@/app/type/project";
import { CodeBox } from "../ContentStyle/ContentesStyles";
import {
  Heading2,
  Heading3,
  Icon,
  SubText,
} from "@/app/components/common/CommonStyles";
import styled from "styled-components";
import IconList from "@/app/components/common/icons";
import Link from "next/link";
const Skills = styled(SubText)`
  padding: 5px;
  background-color: #3c3c3c;
  font-weight: 100;
  white-space: nowrap;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
const Links = styled(Link)`
  display: flex;

  &:not(:first-child) {
    margin-left: 10px;
  }
`;
const LinksP = styled(SubText)`
  margin-left: 5px;
  color: #007acc;
`;
const Icons = styled(Icon)`
  filter: invert(27%) sepia(49%) saturate(5257%) hue-rotate(188deg)
    brightness(97%) contrast(103%);
`;

type ProjectListType = {
  data: ProjectType[];
  showGithub?: boolean;
};

export const ProjectList: React.FC<ProjectListType> = ({
  data,
  showGithub = true,
}) => {
  return (
    <>
      {data.map((project, index) => (
        <CodeBox key={index}>
          <Heading3>{project.name}</Heading3>
          <SubText className="mb-5" $GrayColor={true}>
            {project.description}
          </SubText>
          <div className="flex flex-wrap">
            {project.tectnologies.map((item, indexs) => (
              <Skills className="mb-5" key={indexs}>
                {item}
              </Skills>
            ))}
          </div>
          <div className="mb-10" style={{ display: "flex" }}>
            {showGithub && (
              <Links target="blank" type="blank" href={project.github || "#"}>
                <Icons
                  $filter={false}
                  $padding="0"
                  $zindex="1"
                  alt="Repository"
                  $maxWidth="15px"
                  src={IconList.Github}
                />
                <LinksP>Repository</LinksP>
              </Links>
            )}

            <Links target="blank" href={project.demo}>
              <Icons
                $filter={false}
                $padding="0"
                $zindex="1"
                alt="demo"
                $maxWidth="15px"
                src={IconList.Internet}
              />
              <LinksP>Live Demo</LinksP>
            </Links>
          </div>
        </CodeBox>
      ))}
    </>
  );
};
