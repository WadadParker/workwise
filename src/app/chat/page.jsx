import React from "react";
import ChatCard from "../../components/chat/ChatCard";

//icons
import { MdOutlineLocalPhone } from "react-icons/md";
import { FaVideo } from "react-icons/fa6";
import { PiDotsThreeOutlineVertical } from "react-icons/pi";
import { FaRegSmile } from "react-icons/fa";
import { MdAttachFile } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import send from "../../../public/assets/send.png";

function Chat() {
  return (
    <section className="w-[318px] flex flex-col gap-[11px] items-start pl-[126px] pr-[94px] pb-[10px] ">
      <div className=" flex  ">
        {/* users tab  */}
        <div className=" border border-solid border-[#000000] rounded-tl-[9px] rounded-bl-[9px] flex flex-col items-start   ">
          <div className=" pb-[5px] pt-[8px] pl-[10px]  ">
            <h1 className=" font-medium text-[24px] leading-[36.03px] text-[#000000] ">
              Chats
            </h1>
          </div>
          <hr className="w-full  h-[2px] bg-[#D3D3D3] " />
          <div className="w-full flex flex-col ">
            <div className="w-full">
              <ChatCard username="chirag " />
              <hr className="w-full  h-[2px] bg-[#D3D3D3] " />
            </div>
            <div className="w-full">
              <ChatCard username="Wadad " />
              <hr className="w-full  h-[2px] bg-[#D3D3D3] " />
            </div>
            <div className="w-full">
              <ChatCard username="Manish " />
              <hr className="w-full  h-[2px] bg-[#D3D3D3] " />
            </div>
            <div className="w-full">
              <ChatCard username="Sonu " />
              <hr className="w-full  h-[2px] bg-[#D3D3D3] " />
            </div>
          </div>
        </div>
        {/* messages  */}
        <div className=" rounded-tr-[9px] rounded-br-[9px] w-[742px] flex flex-col items-start justify-start border border-solid border-[#000000] pb-[7px] ">
          <div className=" w-full   ">
            <div className=" flex items-center justify-between pr-[22.83px] ">
              <ChatCard username="chirag " />
              <div className="  flex items-center justify-center gap-[34px] ">
                <MdOutlineLocalPhone size={30} />
                <FaVideo size={30} />
                <PiDotsThreeOutlineVertical size={30} />
              </div>
            </div>
            <hr className="w-full  h-[2px] bg-[#D3D3D3] " />
          </div>
          <div className=" w-full mt-[48px] h-[220px] ">
            <Li text="Hi, Bucky" isLoggedInUser={true} />
            <Li text="Hello, Captain" isLoggedInUser={false} />
            <Li text="Gear Up" isLoggedInUser={true} />
          </div>

          <div className=" w-full flex  flex-col gap-3 ">
            <div className="w-[98%] m-auto pl-[8px] pr-[9px] relative border border-solid border-[#000000] rounded-[38px]  ">
              <input
                type="text"
                className=" pl-[28px]  py-2  w-full border-none outline-none "
                placeholder="Type your message"
              />
              <img
                src={send.src}
                alt="/send"
                className="absolute top-[3px] right-[9px] "
              />
            </div>
            <div className="  flex items-start  gap-[19px] pl-[27px] ">
              <FaRegSmile size={25} />
              <MdAttachFile className="rotate-90 " size={34} />
              <SlCalender size={23} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Li = ({ text, isLoggedInUser }) => (
  <div
    className={` ${
      isLoggedInUser ? "ml-auto pr-[22px] pl-3 mr-2 " : " pl-[21px] pr-2 ml-3 "
    } w-fit border border-solid border-[#000000]  bg-[#FFFFFF] relative mb-[16.5px] rounded-sm `}
  >
    <div
      style={{
        clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
      }}
      className={`   ${
        isLoggedInUser
          ? "rotate-[62deg] -right-[11px]"
          : "-rotate-[62deg]  -left-[11px] "
      }   w-[25px] h-[25px]  shadow-md border border-solid bg-[#a0a0a0] absolute -top-[7.4px]  -z-10`}
    ></div>
    <p className="  font-normal text-[20px] leading-[30px] text-[#000000] ">
      {" "}
      {text}{" "}
    </p>
  </div>
);

export default Chat;
