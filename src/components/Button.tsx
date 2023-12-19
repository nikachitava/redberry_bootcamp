interface IButtonProps {
  label: string;
  onClick: () => void;
}

export const Button: React.FC<IButtonProps> = ({ label, onClick }) => {
  return (
    <div
      className="bg-[#5D37F3] text-white py-[10px] px-[20px] rounded-lg cursor-pointer"
      onClick={onClick}
    >
      <p className="font-FiraGO">{label}</p>
    </div>
  );
};
