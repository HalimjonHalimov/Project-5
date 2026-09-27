import { createContext, type Dispatch } from "react";
import type { ActionType, IInitialState } from "../../types/productType";
import { useContextGuard } from "./useContextGuard";

interface ThemeContextValue {
    state: IInitialState
    dispatch: Dispatch<ActionType>
}

export const ThemeContext = createContext<ThemeContextValue | null>(null)

export const useTheme = () => {
    return useContextGuard(ThemeContext, "use Theme Context")
}