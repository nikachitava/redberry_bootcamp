import { BlogCard } from "../components/BlogCard";
import { CategoryButton } from "../components/CategoryButton";
import blog_img from "/images/blog_img.svg";

export const BlogsSection = () => {
  const openClickedBlog = () => {
    console.log("blod clicked");
  };

  const categoryButtons = [
    <CategoryButton
      key={1}
      background_color={"#00FF00"}
      text_color={"#000000"}
      title={"React"}
      id={1}
    />,
    <CategoryButton
      key={2}
      background_color={"#FF0000"}
      text_color={"#FFFFFF"}
      title={"UI/UX"}
      id={2}
    />,
    <CategoryButton
      key={3}
      background_color={"#0000FF"}
      text_color={"#FFFFFF"}
      title={"JavaScript"}
      id={3}
    />,
  ];

  return (
    <div className="grid grid-cols-3 gap-y-[56px] gap-x-[32px]">
      <BlogCard
        blog_image={blog_img}
        author={"ნიკა ჭითავა"}
        release_date={"23.12.2003"}
        title={"მოსმენა ყველს უფრო გემრიელს ხდის?"}
        categories={categoryButtons}
        description={
          "6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური სიზუსტისთვის, ეს პროცესი..."
        }
        readMore={openClickedBlog}
      />
      <BlogCard
        blog_image={blog_img}
        author={"ნიკა ჭითავა"}
        release_date={"23.12.2003"}
        title={"მოსმენა ყველს უფრო გემრიელს ხდის?"}
        categories={categoryButtons}
        description={
          "6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური სიზუსტისთვის, ეს პროცესი..."
        }
        readMore={openClickedBlog}
      />
      <BlogCard
        blog_image={blog_img}
        author={"ნიკა ჭითავა"}
        release_date={"23.12.2003"}
        title={"მოსმენა ყველს უფრო გემრიელს ხდის?"}
        categories={categoryButtons}
        description={
          "6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური სიზუსტისთვის, ეს პროცესი..."
        }
        readMore={openClickedBlog}
      />
      <BlogCard
        blog_image={blog_img}
        author={"ნიკა ჭითავა"}
        release_date={"23.12.2003"}
        title={"მოსმენა ყველს უფრო გემრიელს ხდის?"}
        categories={categoryButtons}
        description={
          "6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური სიზუსტისთვის, ეს პროცესი..."
        }
        readMore={openClickedBlog}
      />
      <BlogCard
        blog_image={blog_img}
        author={"ნიკა ჭითავა"}
        release_date={"23.12.2003"}
        title={"მოსმენა ყველს უფრო გემრიელს ხდის?"}
        categories={categoryButtons}
        description={
          "6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური სიზუსტისთვის, ეს პროცესი..."
        }
        readMore={openClickedBlog}
      />
    </div>
  );
};
