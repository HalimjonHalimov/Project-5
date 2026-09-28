import type { Props } from "../types/productType";
import { ProductProvider } from "./product/productProvider";
import { ThemeContextProvider } from "./theme/themeContextProvider";

const AppProvider = ({ children }: Props) => {
  return (
    <ThemeContextProvider>
      <ProductProvider>{children}</ProductProvider>
    </ThemeContextProvider>
  );
};

export default AppProvider;
