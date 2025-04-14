interface State {
  resize: boolean;
  activeTab: string;
  dropdown: boolean;
  windowclose: boolean;
  windowopen: boolean;
  minimize: boolean;
  Visible: boolean;
  intro: boolean;
}

export type Action =
  | { type: "UPDATE_ACTIVETAB"; newtab: string }
  | { type: "UPDATE_RESIZE" }
  | { type: "UPDATE_DROPDOWN" }
  | { type: "UPDATE_CLOSE" }
  | { type: "UPDATE_OPEN" }
  | { type: "UPDATE_MINIMIZE" }
  | { type: "UPDATE_INTRO" };

// reducer.js
export const initialState: State = {
  resize: true,
  activeTab: "home",
  dropdown: true,
  windowclose: false,
  windowopen: true,
  minimize: true,
  Visible: false,
  intro: true,
};
export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "UPDATE_ACTIVETAB":
      return { ...state, activeTab: action.newtab };
    case "UPDATE_RESIZE":
      return { ...state, resize: !state.resize };
    case "UPDATE_DROPDOWN":
      return { ...state, dropdown: !state.dropdown };
    case "UPDATE_CLOSE":
      return { ...state, windowclose: !state.windowclose };
    case "UPDATE_OPEN":
      return { ...state, windowopen: !state.windowopen };
    case "UPDATE_MINIMIZE":
      return { ...state, minimize: !state.minimize };
    case "UPDATE_INTRO":
      return { ...state, intro: !state.intro };
    default:
      return state;
  }
};
