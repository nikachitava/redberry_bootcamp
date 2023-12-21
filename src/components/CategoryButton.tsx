import { ICategoryButtonProps } from "../assets/Interfaces/ICategoryButtonProps";

export const CategoryButton: React.FC<ICategoryButtonProps> = ({
  background_color,
  text_color,
  title,
  id,
}) => {
  return (
    <div
      key={id}
      style={{ backgroundColor: background_color, color: text_color }}
      className="px-[16px] py-[8px] rounded-[30px] text-[12px] font-medium whitespace-nowrap"
    >
      {title}
    </div>
  );
};
