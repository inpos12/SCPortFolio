import React from "react";
import styled from "styled-components";
import { ContentRow, CodeBox, PreGrayText } from "./ContentesStyles";
import { Hr, GrayText } from "../../common/CommonStyles";
import { SkillType } from "@/app/model/model";
const ProgressBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
const ProgressP = styled(GrayText)`
  max-width: 10%;
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
export const SkillContent: React.FC = () => {
  const languages: SkillType[] = [
    {
      name: "Languages",
      item: [
        {
          languages: "HTML",
          value: "95",
        },
        {
          languages: "CSS",
          value: "90",
        },
        {
          languages: "JavaScript",
          value: "75",
        },
        {
          languages: "TypeScript",
          value: "25",
        },
      ],
    },
  ];
  const frontend: SkillType[] = [
    {
      name: "Frontend",
      item: [
        {
          languages: "React",
          value: "80",
        },
        {
          languages: "Next.js",
          value: "65",
        },
        {
          languages: "Tailwind CSS",
          value: "60",
        },
      ],
    },
  ];
  const backend: SkillType[] = [
    {
      name: "Backend",
      item: [
        {
          languages: "Express",
          value: "30",
        },
        {
          languages: "MongoDB",
          value: "40",
        },
        {
          languages: "Oracle",
          value: "40",
        },
      ],
    },
  ];
  const tools: SkillType[] = [
    {
      name: "Tools",
      item: [
        {
          languages: "Git",
          value: "80",
        },
      ],
    },
  ];
  const allSkills = [...languages, ...frontend, ...backend, ...tools];

  return (
    <>
      <ContentRow $maxHeight="auto" $maxWidth="auto" className="fade-in">
        <h1 className="mt-10 mb-20">Skills</h1>
        <Hr />
        <CodeBox>
          <PreGrayText>
            {`// skills.js
    const skills = {
      "languages": [
        "JavaScript",
        "HTML",
        "CSS",
      ],
      "frontend": [
        "React",
        "Next.js",
        "Tailwind CSS",
      ],
      "backend": [
        "Express",
        "MongoDB",
        "Oracle"
      ],
      "tools": [
        "Git",
      ]
    };
    `}
          </PreGrayText>
        </CodeBox>
        <Hr />
        {allSkills.map((category, index) => (
          <CodeBox key={index}>
            <h2 className="mb-10">{category.name}</h2>
            {category.item.map((items, index) => (
              <ProgressBox className="item" key={index}>
                <ProgressP>{items.languages}</ProgressP>
                <Progress value={items.value} max="100" />
              </ProgressBox>
            ))}
          </CodeBox>
        ))}
      </ContentRow>
    </>
  );
};
