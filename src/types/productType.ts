import type { ReactNode } from "react";

export interface IProductType {
    id: number,
    name: string,
    price: number,
    category: string
}

export interface Props {
    children: ReactNode;
}
export interface IInitialState  {
    theme: string;
};
export interface ActionType  {
    type: "TOGGLE_THEME";
};