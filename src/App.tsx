import { createContext, useState } from "react";
import { NavigationMenu } from "./components/NavigationMenu";
import { BlogsSection } from "./sections/BlogsSection";
import { CategoriesMenu } from "./sections/CategoriesMenu";
import { Hero } from "./sections/Hero";

type userInfo = {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

export const UserContext = createContext<userInfo>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <NavigationMenu />
      <Hero />
      <div className="my_container">
        <CategoriesMenu />
        <BlogsSection />
      </div>
    </UserContext.Provider>
  );
}

export default App;
