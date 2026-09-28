import { createContext, type Dispatch } from "react";
import type { ProductActionType, ProductState } from "../../types/productType";
import { useContextGuard } from "../useContextGuard";

type IProductContext = {
    state: ProductState
    dispatch: Dispatch<ProductActionType>
}


export const ProductContext = createContext<IProductContext | null>(null)

export const useProduct = () => {
    return useContextGuard(ProductContext, "use Product Context")
}