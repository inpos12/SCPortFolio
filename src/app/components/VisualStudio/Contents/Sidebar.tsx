import { useReducer } from "react";
import { SideBarType, DataType } from "@/app/type/SideBar";
import { reducer, initialState } from "@/app/context/reducer";
import { Icon } from "../../common/CommonStyles";
import IconList from "../../common/icon";
import { Row, GrayText } from "../../common/CommonStyles";
import { Ul, Li } from "../VisualStudio.styles";
import { filetree } from "@/app/data/data";
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
        <Ul $flexCol="column" $justify="space-between" $bgcolor="#333333">
          <Li $flexCol="column" $align="center" $gap="20px">
            <Icon
              $filter={true}
              $padding="0"
              $zindex="1"
              $maxWidth="40px"
              alt="fileicon"
              src={IconList.FileIcon}
            />
            <Icon
              $filter={true}
              $padding="0"
              $zindex="1"
              $maxWidth="40px"
              alt="searchicon"
              src={IconList.SearchIcon}
            />
            <Icon
              $filter={true}
              $padding="0"
              $zindex="1"
              $maxWidth="40px"
              alt="github"
              src={IconList.Github}
            />
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
      <Row $maxHeight="auto" $maxWidth="100%" className="bg-[#252526]">
        <Ul $flexCol="column" $gap="3px">
          <Li $mb="5px">
            <h3>EXPLORER</h3>
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
            <GrayText style={{ fontSize: "12px" }}>MY_PORTFOLIO</GrayText>
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
                  <GrayText className="w-full ml-7">{file.label}</GrayText>
                </Li>
              )
          )}
        </Ul>
      </Row>
    </>
  );
};
