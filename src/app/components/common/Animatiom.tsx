"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ContentRow } from "../VisualStudio/Contents/ContentStyle/ContentesStyles";

// State 값에 따른 컴포넌트 매핑

interface AnimatedSectionProps {
  ContentComponent: React.ComponentType;
}

const MotionContentRow = motion.create(ContentRow);
export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  ContentComponent,
}) => {
  return (
    <AnimatePresence mode="wait">
      <MotionContentRow
        $maxHeight="auto"
        $maxWidth="auto"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
      >
        <ContentComponent />
      </MotionContentRow>
    </AnimatePresence>
  );
};
