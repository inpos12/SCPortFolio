import { useReducer } from "react";
import { SideBarType } from "@/app/type/SideBar";
import { reducer, initialState } from "@/app/context/reducer";
import { ButtonText, Icon, SubText } from "../../common/CommonStyles";
import IconList from "@/app/components/common/icons";
import { Row } from "../../common/CommonStyles";
import { Ul, Li } from "../VisualStudio.styles";
import { filetree } from "@/app/data/data";
import Link from "next/link";
export const SideBar: React.FC<SideBarType> = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function setDropDownHandler() {
    dispatch({
      type: "UPDATE_DROPDOWN",
    });
  }

  return (
    <>
      <Row
        $maxHeight="auto"
        $maxWidth="auto"
        style={{ minWidth: "60px", maxWidth: "80px" }}
      >
        <Ul
          $flexCol="column"
          $justify="space-between"
          $bgcolor="#333333"
          className="border border-#a0a0a0"
        >
          <Li $flexCol="column" $align="center" $gap="20px">
            <Icon
              $filter={true}
              $padding="0"
              $zindex="1"
              $maxWidth="40px"
              alt="fileicon"
              src={IconList.FileIcon}
              onClick={() => {
                props.TabChange(filetree[0].id);
              }}
            />
            <Icon
              $filter={true}
              $padding="0"
              $zindex="1"
              $maxWidth="40px"
              alt="searchicon"
              src={IconList.SearchIcon}
            />
            <Link
              target="blank"
              href="https://github.com/inpos12"
              style={{ maxWidth: "40px", width: "100%" }}
            >
              <Icon
                $filter={true}
                $padding="0"
                $zindex="1"
                $maxWidth="40px"
                alt="github"
                src={IconList.Github}
              />
            </Link>
          </Li>
          <Li $flexCol="column" $align="center">
            <Icon
              $filter={true}
              $padding="0"
              $zindex="1"
              $maxWidth="40px"
              alt="settingicon"
              src={IconList.SettingIcon}
            />
          </Li>
        </Ul>
      </Row>
      <Row $maxHeight="auto" $maxWidth="100%">
        <Ul
          $flexCol="column"
          $gap="3px"
          $TabletWidth={true}
          className="border-b border-t border-r border-#a0a0a0 "
          $bgcolor="#252526;"
          style={{ width: "calc(100% + 48px)" }}
        >
          <Li $mb="5px">
            <SubText>EXPLORER</SubText>
          </Li>
          <Li $align="center" onClick={setDropDownHandler}>
            <Icon
              $filter={true}
              $padding="0"
              $zindex="1"
              alt="right"
              src={IconList.Right}
              $maxWidth="16px"
              style={{
                transform: state.dropdown === true ? "rotate(90deg)" : "",
              }}
            />
            <ButtonText style={{ fontSize: "12px" }}>MY_PORTFOLIO</ButtonText>
          </Li>
          {filetree.map(
            (file, index) =>
              state.dropdown && (
                <Li
                  key={index}
                  onClick={() => {
                    props.TabChange(file.id);
                  }}
                  className={`flex pl-30 py-1 hover:bg-[#37373d] ${
                    props.State === file.id && "bg-[#37373d]"
                  }`}
                  style={{ borderRadius: "3px" }}
                >
                  {file.icon}
                  <ButtonText className="w-full ml-7">{file.label}</ButtonText>
                </Li>
              )
          )}
        </Ul>
      </Row>
    </>
  );
};
