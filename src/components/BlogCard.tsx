import { CategoryButton } from "./CategoryButton";
import blog_img from "/images/blog_img.svg";
import arrow from "/images/arrow.svg";

export const BlogCard = () => {
  return (
    <div className="w-[408px]">
      <div className="mb-[24px]">
        <img src={blog_img} alt="blog_img" />
      </div>
      <div className="">
        <p className="text-[#1A1A1F] text-[12px] leading-5 font-medium mb-[8px]">
          ნია გოგსაძე
        </p>
        <p className="text-[#85858D] text-[12px] leading-4 font-normal mb-[16px]">
          02.11.2023
        </p>
        <h4 className="text-[#1A1A1F] text-[20px] leading-7 font-medium mb-[16px]">
          EOMM-ის მრჩეველთა საბჭოს ნინო ეგაძე შეუერთდა
        </h4>
        <div className="flex gap-[16px] mb-[16px]">
          <CategoryButton
            background_color={"#ff0000"}
            text_color={"#ffffff"}
            title={"UI/UX"}
            id={0}
          />
          <CategoryButton
            background_color={"#ff0000"}
            text_color={"#ffffff"}
            title={"UI/UX"}
            id={0}
          />
          <CategoryButton
            background_color={"#ff0000"}
            text_color={"#ffffff"}
            title={"UI/UX"}
            id={0}
          />
        </div>
        <p className="text-[#404049] text-[16px] leading-7 font-normal mb-[16px]">
          6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური
          სიზუსტისთვის, ეს პროცესი...
        </p>
        <div className="flex gap-1 items-center text-[#5D37F3] text-[14px] leading-5 font-medium cursor-pointer">
          სრულად ნახვა
          <img src={arrow} alt="arrow" />
        </div>
      </div>
    </div>
  );
};
