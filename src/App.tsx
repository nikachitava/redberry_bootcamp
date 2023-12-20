import "./App.css";
import { NavigationMenu } from "./components/NavigationMenu";
import { CategoriesMenu } from "./sections/CategoriesMenu";
import { Hero } from "./sections/Hero";

function App() {
  return (
    <>
      <NavigationMenu />
      <Hero />
      <CategoriesMenu />
    </>
  );
}

export default App;
