import starImg from "../../../public/assets/Star.png";
import superRatingImg from "../../../public/assets/superRatingImg.png";

function Reviews({clientName,rating,ratingCount,reviewedOn,review,price,superRating,superRatingCount}) {
 


  return (
    <section className="flex flex-col items-start gap-[26px]  w-full pt-[15px] pl-[15px] pb-[32px] border border-solid border-b-[#AEAEAE] ">
      <div className="  flex flex-col items-start gap-[2px] ">
        <h1 className=" font-medium text-[24px] leading-[36px] text-[#50BFA5] ">
          {clientName}
        </h1>
        <div className="flex flex-col gap-3 ">
          <div className=" flex items-start  ">
            <div className=" flex items-center justify-center gap-[11px] ">
              {Array.from({ length: rating }, (_, index) => {
                return <img key={index} src={starImg.src} alt="/star-review" />;
              })}
              <p className="  font-normal text-[16px] leading-[24px] ">
                {ratingCount}
              </p>
              <div className="h-[21px]  w-[0.5px] bg-[#000000]  "></div>
            </div>
            <div className=" pl-[23px] ">
              <p className=" font-normal text-[14px] leading-[21px] text-[#2E2E2E] ">
                {reviewedOn}
              </p>
            </div>
          </div>

          {superRating && (
            <div className="flex flex-row gap-[11px] ">
              <div className=" flex items-center justify-center gap-[11px] ">
                {Array.from({ length: superRatingCount }, (_, index) => {
                  return (
                    <img
                      key={index}
                      src={superRatingImg.src}
                      alt="/star-review"
                    />
                  );
                })}
                <p className="  font-normal text-[16px] leading-[24px] ">
                  {superRating}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <p className=" text-[20px] leading-[30px] font-normal text-[#000000] ">
        {review}
      </p>

      <p className="text-[20px] leading-[30px] font-normal text-[#000000]">
        ${price}
      </p>
    </section>
  );
}

export default Reviews;
