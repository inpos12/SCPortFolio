import React from "react";
import { Hr, Heading1, Heading2 } from "../../common/CommonStyles";
import { ContentRow, CodeBox } from "./ContentStyle/ContentesStyles";
import { CodeBlock } from "../../common/CodeBlock";
import {
  HTMLProject,
  HTMLProjects,
  NextjsProjects,
  Reactprojects,
} from "./Project/data";
import { ProjectList } from "./Project/ProjectList";

export const ProjectContent: React.FC = () => {
  return (
    <>
      <ContentRow $maxHeight="auto" $maxWidth="auto">
        <Heading1 className="mt-10 mb-20">ProjectContent</Heading1>
        <Hr />
        <Heading2 className="m-10">React</Heading2>
        {/* <CodeBox>
          <CodeBlock data={HTMLProjects} />
        </CodeBox> */}
        <ProjectList data={Reactprojects} />
        <Heading2 className="m-10">Next.js</Heading2>
        {/* <CodeBox>
          <CodeBlock data={HTMLProjects} />
        </CodeBox> */}
        <ProjectList data={NextjsProjects} />
        <Heading2 className="m-10">HTML</Heading2>
        {/* <CodeBox>
          <CodeBlock data={HTMLProjects} />
        </CodeBox> */}
        <ProjectList data={HTMLProject} showGithub={false} />
        <ProjectList data={HTMLProjects} />
      </ContentRow>
    </>
  );
};
