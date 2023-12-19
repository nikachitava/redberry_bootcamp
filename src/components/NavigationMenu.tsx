import { Button } from "./Button";
import redberry_logo from "/images/redberry_logo.svg";

export const NavigationMenu = () => {
  return (
    <header className="py-[20px] px-[76px] flex justify-between bg-white">
      <img src={redberry_logo} alt="redberry_logo" />
      <Button label={"შესვლა"} onClick={() => {}} />
    </header>
  );
};
