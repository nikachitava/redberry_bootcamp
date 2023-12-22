import { NavigationMenu } from "../components/NavigationMenu";
import { BlogsSection } from "../sections/BlogsSection";
import { CategoriesMenu } from "../sections/CategoriesMenu";
import { Hero } from "../sections/Hero";

export const HomePage = () => {
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
};
