"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";
import { IconWrapper } from "./layout";
import IconList from "@/app/components/common/icons";
import { Style } from "../type/style";
import { BackgroundImageSrc, Heading2 } from "./common/CommonStyles";
import { AnimatePresence, motion, useAnimation } from "motion/react";

type IconType = Pick<Style, "$zindex" | "$maxWidth" | "$padding" | "$filter">;
const Container = styled(BackgroundImageSrc)`
  position: absolute;
  width: 100%;
`;

const Icon = styled(Image)<IconType>`
  max-width: ${(props) => props.$maxWidth || "auto"};
  width: 100%;
  height: 100%;
  z-index: ${(props) => props.$zindex || "1"};
  padding: ${(props) => props.$padding || "0"};
  filter: ${(props) =>
    props.$filter === "none"
      ? "none"
      : "invert(99%) sepia(67%) saturate(0%) hue-rotate(324deg) brightness(117%) contrast(100%)"};
`;
const IconRow = styled(IconWrapper)`
  padding: 0;
  margin: 30px;
  max-width: 180px;
  width: 100%;
  display: grid;
  place-items: center;
  text-align: center;
`;

type OwnProps = {
  VscOpen: (e: React.MouseEvent<Element>) => void;
};
export const Main: React.FC<OwnProps> = (props) => {
  const controls = useAnimation();

  useEffect(() => {
    async function sequence() {
      await controls.start({
        x: 0,
        rotate: 0,
        transition: { duration: 1, ease: "easeInOut", delay: 0.3 },
      }); // 아래로
    }
    sequence();
  }, [controls]);

  return (
    <AnimatePresence>
      <Container>
        <IconRow onClick={props.VscOpen} style={{ cursor: "pointer" }}>
          <motion.div
            // initial={{ opacity: 0, scale: 0.95 }}
            // animate={{ opacity: 1, scale: 1 }}
            initial={{ x: 100, rotate: 360 }}
            animate={controls}
            // transition={{ duration: 1.2 }}
          >
            <Icon
              $zindex="1"
              $maxWidth="120px"
              alt="VSicon"
              src={IconList.VSIcon}
              $filter="none"
            />
          </motion.div>
          <Heading2 className="mt-2">Visual Studio Code</Heading2>
        </IconRow>
      </Container>
    </AnimatePresence>
  );
};
