import { useForm, SubmitHandler } from "react-hook-form";
import close from "/images/close.svg";
import succesful_login from "/images/succes.svg";
import warning from "/images/warning.svg";
import axios from "axios";
import { useState } from "react";

interface ILoginModalProps {
  handleModal: () => void;
  showModal: boolean;
}

type Input = {
  email: string;
};

export const LoginModal: React.FC<ILoginModalProps> = ({
  handleModal,
  showModal,
}) => {
  const [succes, setSucces] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<Input>();
  const onSubmit: SubmitHandler<Input> = async (data) => {
    try {
      clearErrors("email");
      const token = import.meta.env.APP_API_TOKEN;

      const response = await axios.post(
        "https://api.blog.redberryinternship.ge/api/login",
        {
          email: data.email,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 204) {
        setSucces(true);
      }
    } catch (error) {
      setError("email", {
        type: "manual",
        message: "ელ-ფოსტა არ მოიძებნა",
      });
    }
  };

  return (
    <div
      className={`${
        showModal ? "fixed inset-0 bg-black bg-opacity-[.5]" : null
      }`}
    >
      <div
        className={`${
          showModal ? "block" : "hidden"
        } w-[480px] bg-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-[16px] py-[40px] rounded-[12px]`}
      >
        <img
          className="ml-auto cursor-pointer"
          src={close}
          alt="close"
          onClick={handleModal}
        />

        {succes ? (
          <div className="flex flex-col">
            <img className="m-auto" src={succesful_login} alt="succes" />
            <h1 className="text-center text-[#1A1A1F] font-bold text-[20px] leading-7 mb-[48px]">
              წარმატებული ავტორიზაცია
            </h1>
            <button
              className="bg-[#5D37F3] py-[10px] text-white rounded-[8px] text-[14px] leading-5 font-medium"
              onClick={handleModal}
            >
              კარგი
            </button>
          </div>
        ) : (
          <>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
              <h1 className="text-center text-[#1A1A1F] font-bold text-[24px] leading-8 mb-[24px]">
                შესვლა
              </h1>
              <label className="text-[#1a1a1F] text-[14px] leading-5">
                ელ-ფოსტა
              </label>
              <input
                className={`${
                  errors.email
                    ? "border-[#EA1919] bg-[#faf2f3]"
                    : "focus:border-[#5D37F3]"
                } mt-[8px] px-[16px] py-[12px] outline-none border-[1.5px] rounded-[12px]`}
                type="text"
                placeholder="example@redberry.ge"
                {...register("email", {
                  required: "სავალდებულოა",
                  pattern: {
                    value: /@redberry\.ge$/,
                    message: "უნდა მთავრდებოდეს @redberry.ge-თ",
                  },
                })}
              />
              {errors.email && (
                <div className="flex gap-[8px] mt-[8px]">
                  <img src={warning} alt="warning" />
                  <p className="text-[#EA1919] text-[12px] leading-5 font-normal">
                    {errors.email.message}
                  </p>
                </div>
              )}
              <button className="bg-[#5D37F3] mt-[24px] py-[10px] text-white rounded-[8px] text-[14px] leading-5 font-medium">
                შესვლა
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
