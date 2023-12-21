import { useState } from "react";
import { Button } from "./Button";
import redberry_logo from "/images/redberry_logo.svg";
import { LoginModal } from "./LoginModal";

export const NavigationMenu = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <LoginModal handleModal={handleModal} showModal={showModal} />
      <header className="py-[20px] px-[76px] flex justify-between bg-white">
        <img src={redberry_logo} alt="redberry_logo" />
        <Button label={"შესვლა"} onClick={handleModal} />
      </header>
    </>
  );
};
