import { BlogCard } from "../components/BlogCard";

export const BlogsSection = () => {
  return (
    <div className="grid grid-cols-3 gap-y-[56px] gap-x-[32px] justify-betwee">
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  );
};
