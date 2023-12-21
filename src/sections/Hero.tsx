import heropage_bg from "/images/heropage_bg.svg";

export const Hero = () => {
  return (
    <div className="py-[20px] px-[76px] flex justify-between items-center">
      <h1 className="text-[64px] text-[#1A1A1F] font-bold">ბლოგი</h1>
      <img src={heropage_bg} alt="heropage_bg" />
    </div>
  );
};
