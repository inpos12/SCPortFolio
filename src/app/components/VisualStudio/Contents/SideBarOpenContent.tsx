import styled from "styled-components";
import { Style } from "@/app/type/style";
// Types
import { SideBarOpenContentType } from "@/app/type/SideBarOpenContent";
// Styles
import { ButtonText, Row } from "../../common/CommonStyles";
import { Ul, Li } from "../VisualStudio.styles";
//Data
import { SideBarOpenContentData } from "@/app/data/data";
// Page
import { ReadmeContent } from "./Readme";
import { ProjectContent } from "./Project";
import { SkillContent } from "./Skill";
import { BoardContent } from "./Board";
import { ContactContent } from "./Contact";
import { AnimatedSection } from "../../common/Animatiom";
type ContainerssType = Pick<Style, "$TabletWidth" | "$TabletWidths">;
const Containerss = styled.div<ContainerssType>`
  overflow-y: scroll;
  background-color: #252526;
  height: calc(100% - 41px);
  width: ${(props) => {
    if (props.$TabletWidth === true) {
      return "100%";
    } else if (props.$TabletWidth === false) {
      return "100vw";
    } else if (props.$TabletWidths === true) {
      return "100%";
    } else {
      return "95vw";
    }
  }};
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

export const SideBarOpenContent: React.FC<SideBarOpenContentType> = (props) => {
  return (
    <>
      <Row $maxHeight="auto" $maxWidth="100%">
        <Ul
          $height="auto"
          $bgcolor="#252526"
          $padding="0"
          className="border border-customGray"
          $TopBarUlzindex={props.TopBarUlzindex}
        >
          {SideBarOpenContentData.map((file, index) => (
            <Li
              onClick={() => {
                props.TabChange(file.id);
              }}
              className={`py-10 pl-10 pr-20 border-r border-#a0a0a0 hover:bg-[#2a2a2a]
                      ${props.State === file.id && "bg-[#37373d]"}`}
              $align="center"
              $width="auto"
              key={index}
            >
              {file.icon}
              <ButtonText>{file.label}</ButtonText>
            </Li>
          ))}
        </Ul>

        <Containerss
          $TabletWidth={props.TabletWidthState}
          $TabletWidths={props.TabletWidthsState}
          className="border border-my-color"
        >
          {props.State === "home" && (
            <AnimatedSection ContentComponent={ReadmeContent} />
          )}

          {props.State === "project" && (
            <AnimatedSection ContentComponent={ProjectContent} />
          )}

          {props.State === "skill" && (
            <AnimatedSection ContentComponent={SkillContent} />
          )}
          {props.State === "board" && (
            <AnimatedSection ContentComponent={BoardContent} />
          )}
          {props.State === "contact" && (
            <AnimatedSection ContentComponent={ContactContent} />
          )}
        </Containerss>
      </Row>
    </>
  );
};
