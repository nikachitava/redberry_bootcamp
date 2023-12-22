import { useContext, useEffect, useState } from "react";
import { Button } from "./Button";
import redberry_logo from "/images/redberry_logo.svg";
import { LoginModal } from "./LoginModal";
import { UserContext } from "../App";
import { Link } from "react-router-dom";

export const NavigationMenu = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const context = useContext(UserContext);
  const addBlog = () => {
    console.log("clicked to add blog");
  };

  useEffect(() => {
    const storedLoginStatus = sessionStorage.getItem("isLoggedIn");
    if (storedLoginStatus) {
      context.setIsLoggedIn(JSON.parse(storedLoginStatus));
    }
  }, []);

  return (
    <>
      <LoginModal handleModal={handleModal} showModal={showModal} />
      <header className="py-[20px] px-[76px] flex justify-between bg-white">
        <img src={redberry_logo} alt="redberry_logo" />
        {context.isLoggedIn ? (
          <Link to="/addblog">
            <Button label="ბლოგის დამატება" onClick={addBlog} />
          </Link>
        ) : (
          <Button label={"შესვლა"} onClick={handleModal} />
        )}
      </header>
    </>
  );
};
