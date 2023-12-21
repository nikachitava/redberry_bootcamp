import "./App.css";
import { NavigationMenu } from "./components/NavigationMenu";
import { BlogsSection } from "./sections/BlogsSection";
import { CategoriesMenu } from "./sections/CategoriesMenu";
import { Hero } from "./sections/Hero";

function App() {
  return (
    <>
      <NavigationMenu />
      <Hero />
      <div className="my_container">
        <CategoriesMenu />
        <BlogsSection />
      </div>
    </>
  );
}

export default App;
