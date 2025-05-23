"use client";
import React from "react";
import styled from "styled-components";
import { Style } from "../model/model";
import Test from "@/app/image/windowLoginProfile.png";
import Image from "next/image";
import Animation from "@/app/image/LoadingAnimation.json";
import Lottie from "lottie-react";
import { AnimatePresence, motion } from "framer-motion";
import BackgroundImage from "@/app/image/바탕화면.jpg";

type IntroH1Type = Pick<Style, "$visible">;

const IntroContainer = styled.div`
  position: absolute;
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  &::before {
    content: "";
    position: absolute;
    filter: blur(25px);
    min-width: 100vw;
    min-height: 100vh;
    background-image: url(${BackgroundImage.src});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
export const LoadingRow = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  max-height: 100%;
  max-height: 100%;
  align-items: center;
  height: 300px;
`;

const SigninButton = styled.button`
  padding: 5px 10px;
  background-color: white;
  color: gray;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  width: 250px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

const IntroH1 = styled.h1<IntroH1Type>`
  font-size: 2rem;
`;

type Props = {
  setIntro: boolean;
  LoginButtonHandler: () => void;
  isLoginLoading: boolean;
};
export const Intro: React.FC<Props> = ({
  setIntro,
  LoginButtonHandler,
  isLoginLoading,
}) => {
  return (
    <AnimatePresence>
      {setIntro && (
        <motion.div
          className="test"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <IntroContainer>
            <LoadingRow>
              <Image width={180} src={Test} alt="Profile" />
              <IntroH1>이승찬</IntroH1>
              {isLoginLoading && (
                <Lottie
                  animationData={Animation}
                  loop={true}
                  style={{ width: "100px", height: "auto" }}
                />
              )}
              <SigninButton onClick={LoginButtonHandler}>로그인</SigninButton>
            </LoadingRow>
          </IntroContainer>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
