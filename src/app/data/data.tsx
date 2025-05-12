import { Icon } from "../components/common/CommonStyles";
import { ProjectType } from "../type/project";
import IconList from "../components/common/icon";

type SideTabType = {
  id: string;
  label: string;
  icon: React.JSX.Element;
};

export const filetree: SideTabType[] = [
  {
    id: "home",
    label: "README.md",
    icon: (
      <Icon
        $filter={true}
        $padding="0"
        $zindex="1"
        alt="fileicon"
        $maxWidth="15px"
        src={IconList.FileIcon}
      />
    ),
  },
  {
    id: "project",
    label: "Project.js",
    icon: (
      <Icon
        $filter={true}
        $padding="0"
        $zindex="1"
        alt="fileicon"
        $maxWidth="15px"
        src={IconList.FileIcon}
      />
    ),
  },

  {
    id: "skill",
    label: "Skill.js",
    icon: (
      <Icon
        $filter={true}
        $padding="0"
        $zindex="1"
        alt="fileicon"
        $maxWidth="15px"
        src={IconList.FileIcon}
      />
    ),
  },
  {
    id: "board",
    label: "Board.js",
    icon: (
      <Icon
        $filter={true}
        $padding="0"
        $zindex="1"
        alt="fileicon"
        $maxWidth="15px"
        src={IconList.FileIcon}
      />
    ),
  },
  {
    id: "contact",
    label: "Contact.js",
    icon: (
      <Icon
        $filter={true}
        $padding="0"
        $zindex="1"
        alt="fileicon"
        $maxWidth="15px"
        src={IconList.FileIcon}
      />
    ),
  },
];

export const SideBarOpenContentData: SideTabType[] = [
  {
    id: "home",
    label: "README.md",
    icon: (
      <Icon
        className="mr-10"
        src={IconList.FileIcon}
        alt="fileicon"
        $maxWidth="15px"
        $filter={true}
        $padding="0"
        $zindex="1"
      />
    ),
  },
  {
    id: "project",
    label: "Project.js",
    icon: (
      <Icon
        className="mr-10"
        src={IconList.FileIcon}
        alt="fileicon"
        $maxWidth="15px"
        $filter={true}
        $padding="0"
        $zindex="1"
      />
    ),
  },
  {
    id: "skill",
    label: "Skill.js",
    icon: (
      <Icon
        className="mr-10"
        src={IconList.FileIcon}
        alt="fileicon"
        $maxWidth="15px"
        $filter={true}
        $padding="0"
        $zindex="1"
      />
    ),
  },
  {
    id: "board",
    label: "Board.js",
    icon: (
      <Icon
        className="mr-10"
        src={IconList.FileIcon}
        alt="fileicon"
        $maxWidth="15px"
        $filter={true}
        $padding="0"
        $zindex="1"
      />
    ),
  },
  {
    id: "contact",
    label: "Contact.js",
    icon: (
      <Icon
        className="mr-10"
        src={IconList.FileIcon}
        alt="fileicon"
        $maxWidth="15px"
        $filter={true}
        $padding="0"
        $zindex="1"
      />
    ),
  },
];

