"use client";
import React, { MouseEventHandler } from "react";
import styled from "styled-components";
import IconList from "./common/icon";
import Image from "next/image";
import { useEffect, useState } from "react";

const Section = styled.section`
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  backdrop-filter: blur(50px);
  border-top: 0.5px solid gray;
  justify-content: space-between;
`;
const Ul = styled.ul`
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5px 5px;
  width: 100%;
`;
const Li = styled.li`
  display: flex;
  align-items: center;
`;
export const IconWrapper = styled.div`
  padding: 10px;
  border-radius: 10px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const Icon = styled(Image)`
  position: relative;
  width: 20px;
  height: 20px;
`;

const Search = styled.div`
  max-width: 300px;

  background-color: #d9d9d9;
  border-radius: 30px;
  display: flex;
  padding: 5px 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
const Input = styled.input`
  background-color: transparent;
  color: white;
  margin-left: 12px;
  width: 100%;

  &:focus {
    outline: none;
  }
`;
interface OwnProps {
  state: { windowopen: boolean };
  MinimizeHandler: (e: React.MouseEvent<HTMLElement>) => void;
}

export const Layout: React.FC<OwnProps> = (props) => {
  const [ampm, setAmpm] = useState<string | undefined>();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const updateDate = () => {
      setTime(new Date());
    };

    const intervalId = setInterval(updateDate, 10000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const hours = time.getHours();
    setAmpm(hours >= 12 ? "오후" : "오전");
  }, [time]);

  const year = time.getFullYear();
  const month = String(time.getMonth() + 1).padStart(2, "0");
  const day = String(time.getDate()).padStart(2, "0");
  const hours = String(time.getHours()).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");

  return (
    <Section>
      <Ul>
        <Li>&nbsp;</Li>
        <Li>
          <IconWrapper className="mr-1">
            <Icon alt="WindowIcon" src={IconList.WindowIcon}></Icon>
          </IconWrapper>
          <Search className="mr-1">
            <Icon alt="SearchIcon" src={IconList.SearchIcon} />
            <Input placeholder="검색" />
          </Search>
          {!props.state.windowopen && (
            <IconWrapper onClick={props.MinimizeHandler}>
              <Icon alt="windowicon" src={IconList.VSIcon}></Icon>
            </IconWrapper>
          )}
        </Li>
        <Li style={{ flexDirection: "column" }}>
          <p>
            {ampm} {hours}:{minutes}
          </p>
          <p>
            {year}-{month}-{day}
          </p>
        </Li>
      </Ul>
    </Section>
  );
};
