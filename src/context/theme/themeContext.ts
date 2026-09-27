import { createContext, type Dispatch } from "react";
import type { ActionType, ThemeType,  } from "../../types/productType";
import { useContextGuard } from "../useContextGuard";

interface ThemeContextValue {
    state: ThemeType
    dispatch: Dispatch<ActionType>
}

export const ThemeContext = createContext<ThemeContextValue | null>(null)

export const useTheme = () => {
    return useContextGuard(ThemeContext, "use Theme Context")
}