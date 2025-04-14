import React from "react";
import styled from "styled-components";
import { Icon, GrayText, Hr } from "../../common/CommonStyles";
import { ContentRow, PreGrayText, CodeBox } from "./ContentesStyles";
import IconList from "../../common/icon";
import Link from "next/link";
import { ProjectType } from "@/app/type/project";
const Skills = styled.span`
  padding: 5px;
  background-color: #3c3c3c;
  font-weight: 100;

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
const LinksP = styled.p`
  margin-left: 5px;
  color: #007acc;
`;
const Icons = styled(Icon)`
  filter: invert(27%) sepia(49%) saturate(5257%) hue-rotate(188deg)
    brightness(97%) contrast(103%);
`;
export const ProjectContent: React.FC = () => {
  const Reactprojects: ProjectType[] = [
    {
      id: "1",
      name: "PHARMACY SHOP",
      description:
        "React와 Firebase를 사용하여 구조를 설계하고 백엔드를 구현했습니다.",
      tectnologies: ["React", "CSS", "JavaScript", "Firebase"],
      github: "https://github.com/inpos12/shop",
      demo: "https://inpos12.github.io/shop/",
    },
    {
      id: "2",
      name: "BNBNetWorks",
      description:
        "React Router를 활용해 SPA 구조를 구현하고, styled-components로 컴포넌트를 재사용했습니다.",
      tectnologies: [
        "React",
        "CSS",
        "JavaScript",
        "React Router",
        "styled-components",
        "KaKao Maps Api",
      ],
      github: "https://github.com/inpos12/shop",
      demo: "https://inpos12.github.io/shop/",
    },
    {
      id: "3",
      name: "JYPortFolio",
      description:
        "React Router를 활용해 SPA 구조를 구현하고, styled-components로 컴포넌트를 재사용했습니다.",
      tectnologies: [
        "React.js",
        "CSS",
        "JavaScript",
        "React Router",
        "styled.components",
      ],
      github: "https://github.com/inpos12/jyportfolio",
      demo: "https://inpos12.github.io/jyportfolio/",
    },
  ];
  const NextjsProjects: ProjectType[] = [
    {
      id: "1",
      name: "수경왕만두",
      description:
        "MongoDB를 사용하여 백엔드를 구축하고 Toss 결제 시스템을 추가하였습니다.",
      tectnologies: [
        "Next.js",
        "React",
        "JavaScript",
        "CSS",
        "MongoDB",
        "axios",
        "bcryptjs",
        "jsonwebtoken",
        "jwt-decode",
        "Toss Payments API",
      ],
      github: "https://github.com/inpos12/mando",
      demo: "https://sugyeong-wang.vercel.app/",
    },
  ];
  return (
    <>
      <ContentRow $maxHeight="auto" $maxWidth="auto" className="fade-in">
        <h1 className="mt-10 mb-20">ProjectContent</h1>
        <Hr />
        <CodeBox>
          <PreGrayText>
            {`// React.json
        [
          {
            "id": 1,
            "name": "PHARMACY SHOP",
            "description": "결제 기능은 구현되지 않은 풀스택 전자상거래 플랫폼 예시입니다.",
            "technologies": [
              "React",
              "CSS",
              "JavaScript",
              "Firebase"
            ],
            "github": "https://github.com/inpos12/shop",
            "demo": "https://inpos12.github.io/shop/"
          },
          {
            "id": 2,
            "name": "BNBNetWorks",
            "description": "BNB 네트워크 자사 사이트를  React 기반 웹 애플리케이션 예시 입니다.",
            "technologies": [
              "React",
              "CSS",
              "JavaScript",
              "React Router",
              "styled-components",
              "KaKao Map        ],
            "github": "https://github.com/inpos12/bnbnetworkreact",
            "demo": "https://inpos12.github.io/bnbnetworkreact/"
          },
          {
            "id": 3,
            "name": "JYPortFolio",
            "description": "무대 조명 전문가의 포트폴리오로, 다양한 무대 조명 디자인과 기술 작업을 소개하는 예시입니다.",
            "technologies": [
              "React.js",
              "CSS",
              "JavaScript",
              "React Router",
              "styled.components"
            ],
            "github": "https://github.com/yourusername/weather",
            "demo": "https://weather-demo.vercel.app"
          }
        ]`}
          </PreGrayText>
        </CodeBox>
        {Reactprojects.map((project, index) => (
          <CodeBox key={index} className="mb-20">
            <h2>{project.name}</h2>
            <GrayText className="mb-10" as="h3">
              {project.description}
            </GrayText>
            {project.tectnologies.map((item, indexs) => (
              <Skills key={indexs}>{item}</Skills>
            ))}
            <div className="mt-10" style={{ display: "flex" }}>
              <Links target="blank" type="blank" href={project.github}>
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
        <CodeBox>
          <PreGrayText>
            {`// Next.js.json
        [
          {
            "id": 1,
            "name": "수경왕만두,
            "description": "Toss Open API를 활용한 테스트 결제 시스템을 추가한 풀스택 플랫폼 사이트 예시입니다.",
            "technologies": [
              "Next.js",
              "React",
              "JavaScript",
              "CSS",
              "MongoDB",
              "axios",
              "bcryptjs",
              "jsonwebtoken",
              "jwt-decode",
              "Toss Payments API"
            ],
            "github": "https://github.com/inpos12/mando",
            "demo": "https://sugyeong-wang.vercel.app/"
          }
        ]`}
          </PreGrayText>
        </CodeBox>
        {NextjsProjects.map((project, index) => (
          <CodeBox className="mb-20" key={index}>
            <h2>{project.name}</h2>
            <GrayText className="mb-10" as="h3">
              {project.description}
            </GrayText>
            {project.tectnologies.map((item, indexs) => (
              <Skills key={indexs}>{item}</Skills>
            ))}
            <div className="mt-10" style={{ display: "flex" }}>
              <Links target="blank" href={project.github}>
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
      </ContentRow>
    </>
  );
};
