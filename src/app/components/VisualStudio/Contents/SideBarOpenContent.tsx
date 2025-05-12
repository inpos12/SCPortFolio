import styled from "styled-components";
import { Style } from "@/app/type/style";
// Types
import { SideBarOpenContentType } from "@/app/type/SideBarOpenContent";
// Styles
import { ButtonText, Row } from "../../common/CommonStyles";
import { Ul, Li, Button } from "../VisualStudio.styles";
//Data
import { SideBarOpenContentData } from "@/app/data/data";
// Page
import { ReadmeContent } from "./Readme";
import { ProjectContent } from "./Project";
import { SkillContent } from "./Skill";
import { BoardContent } from "./Board";
import { ContactContent } from "./Contact";

type ContainerssType = Pick<Style, "$TabletWidth" | "$TabletWidths">;
const Containerss = styled.div<ContainerssType>`
  background-color: #252526;
  height: calc(100% - 45px);
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
          {props.State === "home" && <ReadmeContent />}
          {props.State === "project" && <ProjectContent />}
          {props.State === "skill" && <SkillContent />}
          {props.State === "board" && <BoardContent />}
          {props.State === "contact" && <ContactContent />}
        </Containerss>
      </Row>
    </>
  );
};
