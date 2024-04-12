import House from "../../Assets/content.png";
import Video from "../../Assets/video.svg";
import Home from "../../Assets/home.svg";
import ArrowRight from "../../Assets/arrow-right.svg";
const Content = () => {
    return (
        <div className=" py-[48px] px-[24px] bg-[#FFFFFF] lg:py-[100px] lg:px-[160px] lg:flex lg:items-center lg:justify-between">
            <div className="h-[460px] bg-[#dedcf7] rounded-lg relative z-0 lg:w-[544px] lg:h-[600px]">
                <img
                    src={House}
                    alt=""
                    className="object-cover w-full h-full rounded-lg "
                />
                <div className="w-[97%] h-[80px] py-[12px] px-[24px] bg-[#FFFFFF] rounded-lg border border-[#E0DEF7] flex items-center justify-between absolute top-[7%] right-[6%] z-100 shadow-[0px_0px_50px_0px_rgba(112,101,240,0.20)] lg:right-[254px] lg:top-[32px] lg:w-[410px] lg:h-[112px] lg:flex lg:items-center lg:justify-normal">
                    <div className="w-[48px] h-[48px] rounded-full bg-[#D9D6F5] flex items-center justify-center lg:w-[64px] lg:h-[64px]">
                        <img
                            src={Video}
                            alt=""
                            className="
                            lg:w-[32px] lg:h-[32px]"
                        />
                    </div>
                    <div className="lg:ml-[24px]">
                        <h3 className="text-[#100A55] text-[18px] font-bold leading-[26px] tracking-[-0.09px] lg:text-[20px] lg:leading-[32px] lg:tracking-[-0.1px]">
                            Virtual home tour
                        </h3>
                        <p className="text-[#4D5461] text-[14px] font-normal leading-[19px] lg:text-[16px] lg:leading-[160%]">
                            We provide you with virtual tour
                        </p>
                    </div>
                </div>
                <div className="absolute top-[90%] left-[7%] w-[85%] lg:right-[70px]">
                    <div className="w-full h-[80px] bg-[#FFFFFF] rounded-lg border border-[#E0DEF7] py-[16px] px-[24px] relative shadow-[0px_0px_50px_0px_rgba(112,101,240,0.20)]  lg:h-[112px] lg:flex lg:items-center lg:w-[462px]">
                        <div className="">
                            <h3 className="text-[#100A55] text-[18px] font-bold leading-[26px] tracking-[-0.09px] lg:text-[20px] lg:leading-[160%] lg:tracking-[-0.1px]">
                                Find the best deal
                            </h3>
                            <p className="text-[#4D5461] text-[14px] font-normal leadding-[19.6px] lg:text-[16px] lg:leading-[160%]">
                                Browse thousands of properties
                            </p>
                        </div>
                        <div className="absolute w-[48px] h-[48px] rounded-full bg-[#7065F0] flex items-center justify-center right-[24px] bottom-[60px] lg:w-[64px] lg:h-[64px] lg:top-[-50%] lg:right-[32px] lg:translate-y-[30%]">
                            <img
                                src={Home}
                                alt=""
                                className="object-cover lg:w-[32px] lg:h-[32px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className=" bg-[#ffffff] mt-[76px] lg:mt-0">
                <div className="h-[64px] border-[1.5px] border-solid border-[#DEDEF7]  rounded-[8px] p-2 flex items-center justify-between bg-[rgba(239, 239, 251, 0.30)] lg:w-[334px] lg:h-[64px] lg:justify-s">
                    <h3 className="h-[48px] w-[151px] flex items-center justify-center text-[#7065F0] text-[18px] font-bold leading-[24px] tracking-[-0.5px]  rounded-[6px] border-2 boder-solid border-[rgba(14, 8, 84, 0.04)] shadow-[0px_3px_40px_0px_rgba(14,8,84,0.05)] lg:hover:cursor-pointer">
                        Fortenants
                    </h3>
                    <h3 className="text-center text-[18px] font-medium leading-[24px] tracking-[-0.5px] h-[24px] text-[#6C727F] mr-[23px] lg:hover:text-[#7065F0] lg:hover:font-bold lg:hover:border-2  lg:hover:boder-solid lg:hover:border-[rgba(14, 8, 84, 0.04)] lg:hover:shadow-[0px_3px_40px_0px_rgba(14,8,84,0.05)] lg:h-[48px] lg:w-[151px] lg:flex lg:items-center lg:justify-center lg:rounded-[6px] lg:mr-0 lg:transition-all lg:duration-200 lg:hover:cursor-pointer">
                        For landlords
                    </h3>
                </div>
                <h2 className="text-[32px] text-center font-bold leading-[40px]tracking-[-0.32px] mt-[32px] lg:w-[444px] lg:text-start lg:text-[40px] lg:leading-[140%] lg:tracking-[-0.4px]">
                    We make it easy for tenants and landlords.
                </h2>
                <p className="text-center text-[16px] text-[#6C727F] leading-[160%] mt-[24px] font-medium lg:text-start lg:w-[444px]">
                    Whether it’s selling your current home, getting financing,
                    or buying a new home, we make it easy and efficient. The
                    best part? you’ll save a bunch of money and time with our
                    services.
                </p>
                <button className="h-[48px] bg-[#7065F0] text-[#FFFFFF] text-[16px] font-bold leading-[150%] mt-[32px] w-[100%] flex items-center rounded-[8px] justify-center lg:py-[12px] lg:px-[24px] lg:w-[200px] lg:hover:scale-105 lg:transition-all lg:duration-300">
                    <span>See more</span>
                    <img
                        src={ArrowRight}
                        alt=""
                        className="ml-[8px]"
                    />
                </button>
            </div>
        </div>
    );
};
export default Content;
