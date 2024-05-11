function WorkHistory() {
  return (
    <section className=" w-full pl-[32px] flex flex-col items-start gap-5 mb-[15px] ">
      <h1>Work History</h1>
      <div className="flex w-full items-start justify-between ">
        <div className="w-[49%] flex flex-col items-start font-medium text-[24px] leading-[36px] text-[#50BFA5] ">
          <p>Completed jobs (205)</p>
          <div className="w-full h-[3px] bg-[#50BFA5] "></div>
        </div>
        <div className="w-[49%] flex flex-col items-start font-medium text-[24px] leading-[36px] text-[#FFC100]  ">
          <p>In progress (138)</p>
          <div className="w-full h-[3px] bg-[#FFC100] "></div>
        </div>
      </div>
    </section>
  );
}

export default WorkHistory;
