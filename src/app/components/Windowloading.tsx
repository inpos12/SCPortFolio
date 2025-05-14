"use client";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Lottie from "lottie-react";
import animation from "@/app/image/LoadingAnimation.json";
import IconList from "@/app/components/common/icons";

const LoadingContainer = styled.div`
  position: absolute;
  min-width: 100vw;
  min-height: 100vh;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LoadingRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 300px;
  max-height: 100%;
  max-height: 100%;
  align-items: center;
`;

export const WindowLoadingScreen: React.FC = () => {
  return (
    <>
      <LoadingContainer>
        <LoadingRow>
          <Image
            height={100}
            width={100}
            alt="WindowLogo"
            src={IconList.WindowIcon}
          />
          <Lottie
            style={{ width: "100px", height: "auto" }}
            animationData={animation}
            loop={true}
          />
        </LoadingRow>
      </LoadingContainer>
    </>
  );
};
