import { ICategoryButtonProps } from "../assets/Interfaces/ICategoryButtonProps";

export const CategoryButton: React.FC<ICategoryButtonProps> = ({
  background_color,
  text_color,
  title,
  id,
}) => {
  return (
    <div key={id} className={`text-[${text_color}] px-[16px] py-[8px]`}>
      {title}
    </div>
  );
};
