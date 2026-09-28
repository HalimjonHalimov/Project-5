import { ThemeContext } from "./themeContext";
import type { ActionType, Props, ThemeType } from "../../types/productType";
import { useReducer } from "react";

const initialState: ThemeType = "light";

const reducer = (state: ThemeType, action: ActionType): ThemeType => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return state === "light" ? "dark" : "light";

    default:
      return state;
  }
};

export const ThemeContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
