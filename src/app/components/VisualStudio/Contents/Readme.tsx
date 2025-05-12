import React from "react";
import { ContentRow, CodeBox } from "./ContentStyle/ContentesStyles";
import {
  Hr,
  Heading1,
  Heading2,
  SubText,
  CodeText,
} from "../../common/CommonStyles";
import Image from "next/image";
import { CodeBlock } from "../../common/CodeBlock";
import { Developer } from "./Readme/data";
export const ReadmeContent: React.FC = () => {
  return (
    <>
      <ContentRow $maxHeight="auto" $maxWidth="auto" className="fade-in">
        <Image
          src="https://user-images.githubusercontent.com/80824750/208554558-490845c9-959a-4823-9003-350ec4d221bf.png"
          width={400}
          height={400}
          alt="Image description"
          style={{ width: "auto", height: "auto" }}
        />
        <Heading1 className="mt-10 mb-20">Seung Chan&apos;s Portfolio</Heading1>
        <Hr />
        <Heading2 className="mb-20">AboutMe</Heading2>
        <SubText
          $GrayColor={true}
          style={{ lineHeight: "30px" }}
          className="mb-20"
        >
          프론트엔드 개발자로서 HTML, CSS, JavaScript, jQuery, React , Next.js를
          활용하여 웹 사이트를 효율적이고 사용자 친화적으로 구현해왔습니다.
          <br /> 독학을 통해 웹 페이지 구조와 스타일링, 동적인 사용자
          인터페이스, 컴포넌트 기반의 애플리케이션 설계에 대한 기술을
          익혔습니다.
          <br /> 개인 프로젝트와 실습을 통해 문제 해결 능력과 실무 감각을
          길렀으며, 지속적인 학습과 실험을 통해 웹 개발에 대한 깊은 이해를
          쌓았습니다. <br /> 제 포트폴리오를 통해 기술적 역량을 확인해 주시기
          바랍니다. 함께 일할 기회를 주시면 열정과 책임감으로 최선을
          다하겠습니다. 감사합니다.
        </SubText>
        <CodeBox>
          <CodeBlock data={Developer} />
        </CodeBox>
        <Hr />
      </ContentRow>
    </>
  );
};
