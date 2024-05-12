import { useRouter } from 'next/navigation'

function FreelanceModal() {
  const router = useRouter();
  return (
    <section className=" absolute top-[30px]   flex flex-col gap-[45px] pt-[49px] pb-[115px] px-[90px] rounded-[48px] bg-[#FFFFFF] z-30 border border-purple-500 ">
      <h1 className="font-medium text-[32px] leading-[37px] text-center text-[#000000] ">
        Join as a freelancer or client
      </h1>
      <div className="flex  gap-[106px] ">
        <div className="bg-[#FFFFFF] rounded-[11px] w-[212px] h-[136px] border border-solid border-[#000000] shadow-md flex items-center justify-center hover:border-[#dda3e7] hover:shadow-lg cursor-pointer ">
          <h1 className=" text-[#000000] font-medium text-[20px] leading-[23.44px] text-center " onClick={()=>router.push("/signup/freelance")}>
          I’m a freelancer looking for work.
          </h1>
        </div>
        <div className="bg-[#FFFFFF] rounded-[11px] w-[212px] h-[136px] border border-solid border-[#000000] hover:border-[#e5b3ee] hover:shadow-lg shadow-md flex items-center justify-center cursor-pointer ">
          <h1 className=" text-[#000000] font-medium text-[20px] leading-[23.44px] text-center px-3  ">
          I’m a client hiring for a projrct.
          </h1>
        </div>
      </div>
    </section>
  );
}

export default FreelanceModal;
