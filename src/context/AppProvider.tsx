import type { Props } from "../types/productType";
import { ThemeContextProvider } from "./theme/themeContextProvider";

const AppProvider = ({ children }: Props) => {
  return <ThemeContextProvider>{children}</ThemeContextProvider>;
};

export default AppProvider;
