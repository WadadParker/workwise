import Reviews from "./Reviews"; 
async function WorkHistory() {

  return (
    <section className=" w-full  flex flex-col items-start gap-5 mb-[15px] ">
      <h1 className="pl-[32px] font-medium text-[32px] leading-[48px] text-[#000000] ">
        Work History
      </h1>
      <div className="  flex w-full items-start justify-between ">
        <div className="  w-[49%] flex flex-col items-start font-medium text-[24px] leading-[36px] text-[#50BFA5] ">
          <p className="pl-[32px]">Completed jobs (205)</p>
          <div className="w-full h-[3px] bg-[#50BFA5] "></div>
        </div>
        <div className="w-[49%] flex flex-col items-start font-medium text-[24px] leading-[36px] text-[#FFC100]  ">
          <p>In progress (138)</p>
          <div className="w-full h-[3px] bg-[#FFC100] "></div>
        </div>
      </div>


      <Reviews
        clientName="XYZ Ltd."
        rating="5"
        ratingCount="5.0"
        reviewedOn="March 5, 2024 - March 15, 2024"
        review="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        price="250.00"
      />
      <Reviews
        clientName="Wazix Ltd."
        rating="5"
        ratingCount="5.0"
        superRatingCount="5"
        superRating="5.0"
        reviewedOn="January 5, 2024 - January 15, 2024"
        review="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        price="250.00"
      />
    </section>
  );
}

export default WorkHistory;
