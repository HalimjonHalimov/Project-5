import type { ReactNode } from "react";

export interface IProductType {
    id: number,
    name: string,
    price: number,
    category: string
}

export type Props =  {
    children: ReactNode;
}
export type ThemeType = "light" | "dark"
export type ActionType = | { type: "TOGGLE_THEME" }