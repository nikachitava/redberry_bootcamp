import redberry_logo from "/images/redberry_logo.svg";
import go_back_arrow from "/images/go_back_arrow.svg";
import upload_img from "/images/upload_img.svg";
import { Link } from "react-router-dom";

export const AddBlogPage = () => {
  return (
    <div>
      <header className="flex justify-center items-center py-[28px]">
        <Link to={"/"}>
          <img src={redberry_logo} alt="redberry_logo" />
        </Link>
      </header>
      <main className="flex gap-[240px] px-[76px] leading-10 pb-[110px]">
        <Link to={"/"}>
          <img src={go_back_arrow} alt="go_back_arrow" />
        </Link>

        <form>
          <h1 className="text-[32px] font-bold text-[#1A1A1F] mb-[40px]">
            ბლოგის დამატება
          </h1>
          <div className="flex flex-col gap-[24px]">
            <label>ატვირთეთ ფოტო</label>
            <div className="relative overflow-hidden w-[600px] flex flex-col justify-center items-center py-[48px] bg-[#F4F3FF] border-dashed border border-[#85858D]">
              <div>
                <img src={upload_img} alt="upload_img" />
              </div>
              <label>
                ჩააგდეთ ფაილი აქ ან{" "}
                <span className="underline font-bold">აირჩიეთ ფაილი</span>
              </label>
              <input
                className="w-[100%] h-[100%] absolute right-3 opacity-0 cursor-pointer"
                type="file"
                accept=".jpg, .jpeg, .png"
              />
            </div>
            <div className="flex  gap-[24px] items-start">
              <div className="w-[288px] flex flex-col">
                <label>ავტორი *</label>
                <input
                  className="w-[100%] h-[44px] bg-[#FCFCFD] pl-[16px] py-[12px] outline-none rounded-xl border-[#E4E3EB] border-[1px]"
                  type="text"
                  placeholder="შეიყვანეთ ავტორი"
                />
                <div className="flex flex-col text-[12px] text-[#85858D]">
                  <span>* მინიმუმ 4 სიმბოლო</span>
                  <span>* მინიმუმ 2 სიტყვა</span>
                  <span>* მხოლოდ ქართული სიმბოლოები</span>
                </div>
              </div>
              <div className="w-[288px] flex flex-col">
                <label>სათაური *</label>
                <input
                  className="w-[100%] h-[44px] bg-[#FCFCFD] pl-[16px] py-[12px] outline-none rounded-xl border-[#E4E3EB] border-[1px]"
                  type="text"
                  placeholder="შეიყვანეთ სათაური"
                />
                <span className="text-[12px] text-[#85858D]">
                  მინიმუმ 2 სიმბოლო
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <label>აღწერა *</label>
              <textarea
                className="h-[134px] pl-[16px] pt-[12px] outline-none border-[#E4E3EB] resize-none"
                placeholder="ჩაწერეთ აღწერა"
              ></textarea>
              <span className="text-[12px] text-[#85858D]">
                მინიმუმ 2 სიმბოლო
              </span>
            </div>
            <div className="flex  gap-[24px] items-start">
              <div className="w-[288px] flex flex-col">
                <label>ავტორი *</label>
                <input className="h-[44px]" type="date" />
              </div>
              <div className="w-[288px] flex flex-col">
                <label>კატეგორია *</label>
              </div>
            </div>
            <div className="flex flex-col">
              <label>ელ-ფოსტა *</label>

              <input
                className="w-[50%] h-[44px] bg-[#FCFCFD] px-[16px] py-[12px] outline-none rounded-xl border-[#E4E3EB] border-[1px]"
                type="text"
                placeholder="Example@redberry.ge"
              />
            </div>
            <button className="text-right mt-[40px]">გამოქვეყნება</button>
          </div>
        </form>
      </main>
      <br />
    </div>
  );
};

// <label>კატეგორია *</label>
//           <select className="h-[44px] bg-[#FCFCFD] pl-[16px] py-[12px] outline-none rounded-xl border-[#E4E3EB] border-[1px]">
//             <option>1</option>
//             <option>2</option>
//             <option>3</option>
//             <option>4</option>
//             <option>5</option>
//           </select>
