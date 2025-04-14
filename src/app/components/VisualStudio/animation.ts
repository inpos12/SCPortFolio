import { keyframes } from "styled-components";

export const transitionResize = keyframes`
0% {
  width: 100vw;
  height: calc(100vh - 42px);
  top: 0;
  left: 0;
  transform: translate(0%, -0%);

}
100% {
  width: 80vw;
  height: calc(80vh - 42px);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
}
`;

export const transitionMinimize = keyframes`
    0% {
  width: 100vw;
  height: calc(100vh - 42px);
  top: 0;
  left: 0;
  transform: translate(0%, 0%);
}
  100%{
    display: none;
    width: 0vw;
    height: 0vh;
    top: 100%;
    left: 0;
  }`;
