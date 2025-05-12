"use client";
import React from "react";
import { useEffect, useReducer, useState } from "react";
import { Intro } from "./components/intro";
import { Main } from "./components/main";
import { VisualStudio } from "./components/VisualStudio/VisualStudio";
import { initialState, reducer } from "./context/reducer";
import { Layout } from "./components/layout";

type StateType = {
  width: boolean | null;
  widths: boolean | null;
  zindex: boolean | null;
};

const Home = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [SideBar, setSideBar] = useState(true);
  const [tabletState, setTabletState] = useState<StateType>({
    width: null,
    widths: null,
    zindex: null,
  });
  const [ContentState, setContentState] = useState(true);

  function VscOpen(e: React.MouseEvent) {
    e.preventDefault();
    if (state.windowopen) {
      dispatch({
        type: "UPDATE_OPEN",
      });
    } else {
      return;
    }
  }
  function CLose(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    if (!state.windowopen) {
      dispatch({
        type: "UPDATE_OPEN",
      });
    } else {
      return;
    }
  }
  function MinimizeHandler(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    dispatch({
      type: "UPDATE_MINIMIZE",
    });
  }
  function ResizeHandler(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    dispatch({
      type: "UPDATE_RESIZE",
    });
  }

  useEffect(() => {
    if (state.resize === false && SideBar === false) {
      setTabletState({ width: false, widths: null, zindex: false });
      console.log("1");
    } else if (state.resize === false && SideBar === true) {
      setTabletState({ width: true, widths: null, zindex: true });
      console.log("2");
    } else if (state.resize === true && SideBar === false) {
      setTabletState({ width: null, widths: false, zindex: false });
      console.log("3");
    } else if (state.resize === true && SideBar === true) {
      setTabletState({ width: null, widths: true, zindex: true });
      console.log("4");
    }
  }, [state.resize, SideBar]);
  function SideBarHandler(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    setSideBar((prev) => !prev);
    setContentState((prev) => !prev);
  }

  return (
    <>
      <Intro />
      <Main VscOpen={VscOpen} />
      {!state.windowopen && (
        <VisualStudio
          isSidebarOpen={SideBar}
          SideBarIcon={SideBar ? ">" : "<"}
          TopBarUlzindex={!SideBar}
          WindowClose={CLose}
          StateResize={state.resize}
          ResizeHandler={ResizeHandler}
          StateMinimize={state.minimize}
          MinimizeHandler={MinimizeHandler}
          SideBarState={SideBar}
          SideBarHandler={SideBarHandler}
          TabletWidthState={tabletState.width}
          TabletWidthsState={tabletState.widths}
          Zindex={tabletState.zindex}
          ContentState={ContentState}
        />
      )}
      <Layout state={state} MinimizeHandler={MinimizeHandler} />
    </>
  );
};

export default Home;
