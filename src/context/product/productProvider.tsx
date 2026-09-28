import { useEffect, useReducer } from "react";
import type {
  IProductType,
  ProductActionType,
  ProductState,
  Props,
} from "../../types/productType";
import { ProductContext } from "./productContext";
import { FetchingData } from "../../services/fetchingData";

const initialState: ProductState = {
  products: [],
  cart: [],
  loading: false,
  error: null,
};

const reducer = (
  state: ProductState,
  action: ProductActionType,
): ProductState => {
  switch (action.type) {
    case "GET_PRODUCT": {
      return { ...state, products: action.payload };
    }
    case "ADD_CART": {
      const product = state.products.find((item) => item.id === action.payload);
      if (!product) {
        return state;
      }
      const isIncludedCart = state.cart.some(
        (item) => item.id === action.payload,
      );
      if (isIncludedCart) {
        const updatedCart = state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
        return { ...state, cart: updatedCart };
      }
      const cartProduct = { ...product, quantity: 1 };
      return { ...state, cart: [...state.cart, cartProduct] };
    }
    case "REMOVE_CART": {
      const isIncludedCart = state.cart.some(
        (item) => item.id === action.payload,
      );
      if (!isIncludedCart) {
        return state;
      }
      const updatedCart = state.cart
        .map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity >= 1);

      return { ...state, cart: updatedCart };
    }
    case "SET_LOADING": {
      return { ...state, loading: !state.loading };
    }
    case "SET_ERROR": {
      return { ...state, error: action.payload };
    }
    default:
      return state;
  }
};

export const ProductProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const getProduct = async () => {
      dispatch({ type: "SET_LOADING" });
      try {
        const data = await FetchingData<IProductType[]>(
          "https://jsonfakery.com/products/random/20",
        );
        dispatch({ type: "GET_PRODUCT", payload: data });
      } catch (error) {
        if (error instanceof Error) {
          dispatch({ type: "SET_ERROR", payload: error });
        }
      } finally {
        dispatch({ type: "SET_LOADING" });
      }
    };
    getProduct();
  }, []);

  return (
    <ProductContext value={{ state, dispatch }}>{children}</ProductContext>
  );
};
