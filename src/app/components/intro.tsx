"use client";
import { useEffect, useReducer, useState } from "react";
import styled from "styled-components";
import { initialState, reducer } from "../context/reducer";
import { Style } from "../model/model";

type IntroH1Type = Pick<Style, "$visible">;

const IntroContainer = styled.div`
  position: absolute;
  z-index: 1000;
  min-width: 100vw;
  min-height: 100vh;
  backdrop-filter: blur(25px);
`;

const IntroH1 = styled.h1<IntroH1Type>`
  font-size: 2rem;
  transition: all 1s ease-in-out;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -40%);
  opacity: ${(props) => (props.$visible ? "1" : "0.01")};
`;

export function Intro() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showGuide, setShowGuide] = useState(false);

  useEffect(() => {
    setShowTitle(true);
    setTimeout(() => {
      setShowTitle(false);
    }, 2000);
    setTimeout(() => {
      setShowSubtitle(true);
    }, 3000);
    setTimeout(() => {
      setShowSubtitle(false);
    }, 5000);
    setTimeout(() => {
      setShowGuide(true);
    }, 6000);
    setTimeout(() => {
      setShowGuide(false);
    }, 8000);

    setTimeout(() => {
      dispatch({ type: "UPDATE_INTRO" });
    }, 9500);
  }, []);

  return (
    <>
      {state.intro && (
        <IntroContainer>
          <IntroH1 $visible={showTitle}>안녕하세요</IntroH1>
          <IntroH1 $visible={showSubtitle}>
            프론트엔드 개발자 이승찬 입니다.
          </IntroH1>
          <IntroH1 $visible={showGuide}>
            화면에있는 VisualStudio 아이콘을 클릭해주세요
          </IntroH1>
        </IntroContainer>
      )}
    </>
  );
}
