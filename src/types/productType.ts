import type { ReactNode } from "react";

export type IProductType = {
    id: string,
    product_category_id: string,
    name: string,
    price: number
    image: string
    description: string
    manufacturer: string
    created_at: string
    updated_at: string
    product_category: {
        id: string
        name: string
        created_at: string
        updated_at: string
    }
}
export type CartProduct = IProductType & {
    quantity: number
}

export type ProductState = {
    products: IProductType[];
    cart: CartProduct[];
    loading: boolean;
    error: Error | null;
};
export type ProductActionType =
    | { type: "GET_PRODUCT", payload: IProductType[] }
    | { type: "ADD_CART"; payload: string }
    | { type: "REMOVE_CART"; payload: string }
    | { type: "SET_LOADING" }
    | { type: "SET_ERROR", payload: Error | null };

export type Props = {
    children: ReactNode;
}
export type ThemeType = "light" | "dark"
export type ActionType = | { type: "TOGGLE_THEME" }