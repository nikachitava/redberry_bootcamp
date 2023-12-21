import { useEffect, useState } from "react";
import axios from "axios";
import { ICategoryButtonProps } from "../assets/Interfaces/ICategoryButtonProps";
import { CategoryButton } from "../components/CategoryButton";

export const CategoriesMenu = () => {
  const [categories, setCategories] = useState<ICategoryButtonProps[]>([]);

  useEffect(() => {
    const token = import.meta.env.APP_API_TOKEN;

    const fetchCategoriesData = async () => {
      try {
        const response = await axios.get(
          "https://api.blog.redberryinternship.ge/api/categories",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setCategories(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    };

    fetchCategoriesData();
  }, []);

  return (
    <div className="my-[64px]">
      <ul className="flex justify-center gap-[24px]">
        {categories.map((category) => (
          <li className="cursor-pointer">
            <CategoryButton
              key={category.id}
              background_color={category.background_color}
              text_color={category.text_color}
              title={category.title}
              id={category.id}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
