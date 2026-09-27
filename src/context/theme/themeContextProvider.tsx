import { ThemeContext } from "./themeContext";
import type { ActionType, IInitialState, Props } from "../../types/productType";
import { useReducer } from "react";



const initialState: IInitialState = {
  theme: "light",
};

const reducer = (state: IInitialState, action: ActionType) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {theme: state.theme === "light" ? "dark" : "light" };

    default:
      return state;
  }
};

export const ThemeContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
