import close from "/images/close.svg";

interface ILoginModalProps {
  handleModal: () => void;
  showModal: boolean;
}

export const LoginModal: React.FC<ILoginModalProps> = ({
  handleModal,
  showModal,
}) => {
  return (
    <div
      className={`${
        showModal ? "fixed inset-0 bg-black bg-opacity-[.4]" : null
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
        <h1 className="text-center text-[#1A1A1F] font-bold text-[24px] leading-8">
          შესვლა
        </h1>
        <form className="flex flex-col">
          <label className="text-[#1a1a1F] text-[14px] leading-5">
            ელ-ფოსტა
          </label>
          <input
            className="mt-[8px] mb-[24px] px-[16px] py-[12px] outline-none border-[1.5px] focus:border-[#5D37F3] rounded-[12px]"
            type="text"
            placeholder="example@redberry.ge"
          />
          <button className="bg-[#5D37F3] py-[10px] text-white rounded-[8px] text-[14px] leading-5 font-medium">
            შესვლა
          </button>
        </form>
      </div>
    </div>
  );
};
