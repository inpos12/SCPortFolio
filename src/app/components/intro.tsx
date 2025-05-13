"use client";

import styled from "styled-components";
import { Style } from "../model/model";
import Test from "@/app/image/windowLoginProfile.png";
import Image from "next/image";
import Animation from "@/app/image/LoadingAnimation.json";
import Lottie from "lottie-react";
import { AnimatePresence, motion } from "framer-motion";
type IntroH1Type = Pick<Style, "$visible">;

const IntroContainer = styled.div`
  position: absolute;
  z-index: 1000;
  min-width: 100vw;
  min-height: 100vh;
  backdrop-filter: blur(25px);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const LoadingRow = styled.div`
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
const Intro = ({ setIntro, LoginButtonHandler, isLoginLoading }: Props) => {
  return (
    <>
      <AnimatePresence>
        {setIntro && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
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
    </>
  );
};
export default Intro;
