import arrow from "/images/arrow.svg";
import { IBlogCard } from "../assets/Interfaces/IBlogCard";

export const BlogCard: React.FC<IBlogCard> = ({
  blog_image,
  author,
  release_date,
  title,
  categories,
  description,
  readMore,
}) => {
  return (
    <div className="w-[408px] flex flex-col">
      <img className="mb-[24px]" src={blog_image} alt="blog_img" />

      <div className="flex flex-col gap-4">
        <div>
          <p className="text-[#1A1A1F] text-[12px] leading-5 font-medium mb-[8px]">
            {author}
          </p>
          <p className="text-[#85858D] text-[12px] leading-4 font-normal">
            {release_date}
          </p>
        </div>
        <h4 className="text-[#1A1A1F] text-[20px] leading-7 font-medium">
          {title}
        </h4>
        <div className="flex flex-wrap gap-[16px] mb-[16px]">{categories}</div>
        <p className="text-[#404049] text-[16px] leading-7 font-normal">
          {description}
        </p>
        <div
          className="flex gap-1 items-center text-[#5D37F3] text-[14px] leading-5 font-medium cursor-pointer"
          onClick={readMore}
        >
          სრულად ნახვა
          <img src={arrow} alt="arrow" />
        </div>
      </div>
    </div>
  );
};
