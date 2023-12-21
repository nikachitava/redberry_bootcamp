import "./App.css";
import { NavigationMenu } from "./components/NavigationMenu";
import { CategoriesMenu } from "./sections/CategoriesMenu";
import { Hero } from "./sections/Hero";

function App() {
  return (
    <>
      <NavigationMenu />
      <Hero />
      <div className="my_container">
        <CategoriesMenu />
      </div>
    </>
  );
}

export default App;
