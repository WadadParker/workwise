"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const page = () => {
  const [step, setStep] = useState(0);
  const router = useRouter();

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const StepOne = () => {
    return (
      <section>
        <section className=" pt-[20px] pr-[94px] pl-[95px] flex flex-col items-start gap-[30px] ">
          <div className=" flex items-start gap-[35px]  ">
            <div className="flex flex-col gap-[30px] items-start ">
              <div className="flex flex-col items-start gap-[28px] ">
                <div className="flex flex-col items-start gap-[11px] ">
                  <div className="  flex items-start gap-[30px] ">
                    <p className=" font-normal text-[20px] leading-[30.02px] text-[#5A5A5A] ">
                      {" "}
                      1/2{" "}
                    </p>
                    <p className=" font-normal text-[20px] leading-[30.02px] text-[#5A5A5A] ">
                      Hire Freelancer
                    </p>
                  </div>

                  <h1 className="w-[342px] font-normal text-[48px] leading-[57.06px] text-[#000000] ">
                    Let`s start with a strong tittle.
                  </h1>
                </div>
                <div>
                  <p className=" font-normal text-[20px] leading-[30.02px] text-[#000000] ">
                    This helps your job post stand out to the right candidates.
                    It`s the first thing they`ll see, so make it count!
                  </p>
                </div>
              </div>
            </div>
            {/* right part  */}
            <div className=" mt-auto w-[350px] flex flex-col items-start gap-[11px] ">
              <p>Write a title for your job post</p>
              <input
                type="text"
                className=" w-full rounded-[6px] border border-solid border-[#000000] "
              />
            </div>
          </div>

          <div className="  ml-auto ">
            <p>Example titles</p>
            <div className=" pl-3 ">
              <ul>
                <li>
                  Build responsive WordPress site with booking/payment
                  functionality
                </li>
                <li>
                  Graphic designer needed to design ad creative for multiple
                  campaigns
                </li>
                <li>Facebook ad specialist needed for product launch</li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    );
  };

  const StepTwo = () => {
    return (
      <section>
        <section className=" pt-[20px] pr-[94px] pl-[95px] flex flex-col items-start gap-[30px] ">
          <div className=" flex items-start gap-[35px]  ">
            <div className="flex flex-col gap-[30px] items-start ">
              <div className="flex flex-col items-start gap-[28px] ">
                <div className="flex flex-col items-start gap-[11px] ">
                  <div className="  flex items-start gap-[30px] ">
                    <p className=" font-normal text-[20px] leading-[30.02px] text-[#5A5A5A] ">
                      {" "}
                      2/2{" "}
                    </p>
                    <p className=" font-normal text-[20px] leading-[30.02px] text-[#5A5A5A] ">
                      Hire Freelancer
                    </p>
                  </div>

                  <h1 className="w-[342px] font-normal text-[48px] leading-[57.06px] text-[#000000] ">
                    Let`s start with a strong tittle.
                  </h1>
                </div>
                <div>
                  <p className=" font-normal text-[20px] leading-[30.02px] text-[#000000] ">
                    This helps your job post stand out to the right candidates.
                    It`s the first thing they`ll see, so make it count!
                  </p>
                </div>
              </div>
            </div>
            {/* right part  */}
            <div className=" mt-auto w-[350px] flex flex-col items-start gap-[11px] ">
              <p>Write a title for your job post</p>
              <input
                type="text"
                className=" w-full rounded-[6px] border border-solid border-[#000000] "
              />
            </div>
          </div>

          <div className="  ml-auto ">
            <p>Example titles</p>
            <div className=" pl-3 ">
              <ul>
                <li>
                  Build responsive WordPress site with booking/payment
                  functionality
                </li>
                <li>
                  Graphic designer needed to design ad creative for multiple
                  campaigns
                </li>
                <li>Facebook ad specialist needed for product launch</li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    );
  };

  return (
    <div>
      {step === 0 && <StepOne />}
      {step === 1 && <StepTwo />}

      <div className="flex items-start justify-between w-full px-[40px]">
        <button
          className="rounded-[13px] bg-[#000000] font-medium text-[32px] leading-[48.03px] text-[#FFFFFF] px-[55px]"
          onClick={handleBack}
          disabled={step === 0}
        >
          Back
        </button>
        {step < 1 ? (
          <button
            className="rounded-[13px] bg-[#50BFA5] font-medium text-[32px] leading-[48.03px] text-[#FFFFFF] px-[55px]"
            onClick={handleNext}
          >
            Next
          </button>
        ) : (
          <button
            className="rounded-[13px] bg-[#50BFA5] font-medium text-[32px] leading-[48.03px] text-[#FFFFFF] px-[55px]"
            onClick={() => router.push("/projects")}
          >
            Finish
          </button>
        )}
      </div>
    </div>
  );
};

export default page;
