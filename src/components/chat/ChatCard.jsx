function ChatCard({ username }) {
  return (
    <section className=" w-full pt-[18px] pl-[10px] pb-[10px] pr-[70px]  flex flex-row  gap-[14px] ">
      <div className=" w-[50px] h-[50px] rounded-full bg-gray-600 "></div>
      <p className=" flex-1 w-full font-medium text-[24px] leading-[36px] text-[#000000] capitalize ">
        {username}
      </p>
    </section>
  );
}

export default ChatCard;
