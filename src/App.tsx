import "./App.css";
import Header from "./components/feature/header";
import Hero from "./components/feature/hero";
import ProductList from "./components/feature/Product/ProductList";
import { useTheme } from "./context/theme/themeContext";

function App() {
  const { state } = useTheme();
  return (
    <main className={`shop-app ${state.theme}`}>
      <Header />
      <Hero />
      <ProductList />
    </main>
  );
}

export default App;
