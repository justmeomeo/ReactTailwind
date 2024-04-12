import IconRate from "../../Assets/icon-rate.svg";
import IconChildRate from "../../Assets/icon-child-rate.svg";
import IconRightRate from "../../Assets/icon-right-rate.svg";
import IconSell from "../../Assets/icon-sell.svg";
import IconSearch from "../../Assets/icon-child-sell.svg";
import IconDollar from "../../Assets/icon-dollar.svg";
import IconChecked from "../../Assets/icon-check.svg";
import ImageBenefit from "../../Assets/BenefitImage.png";
import ImageBenefitPc from "../../Assets/BenefitImagePc.png";
const Benefits = () => {
    return (
        <div className="py-[48px] px-[27px] lg:py-[80px] lg:px-[160px]">
            <div className=" bg-[#F7F7FD] rounded-[8px] border-[1.5px] border-solid border-[#E0DEF7] overflow-hidden lg:flex lg:py-[64px] lg:px-[64px]">
                <div className="lg:flex lg:flex-col">
                    <h2 className="text-[#100A55] text-[32px] font-bold leading-[125%] tracking-[-0.32px] px-[32px] pt-[32px] lg:text-[40px] lg:leading-[140%] lg:tracking-[-0.4px] lg:px-0 lg:pt-0">
                        The new way to find your new home
                    </h2>
                    <p className="text-[#6C727F] mt-[16px] text-[16px] font-medium pl-[32px] pr-[19px] leading-[160%] lg:px-0 lg:pt-0">
                        Find your dream place to live in with more than 10k+
                        properties listed.
                    </p>
                    <div className="mt-[48px] pl-[32px] pr-[30px] lg:flex lg:items-center lg:justify-between lg:px-0">
                        {/* Benefit 1 */}
                        <div className="flex items-center lg:flex-col ">
                            {/* Icon 1 */}
                            <div className="w-[60px] h-[60px] rounded-full bg-[#f7f7fd] border-[3px] border-solid border-[#E0DEF7] relative lg:w-[64px] lg:h-[64px]">
                                <div className="w-[50px] h-[50px] rounded-full bg-[#E0DEF7] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center justify-center lg:w-[56px] lg:h-[56px]">
                                    <div className="relative">
                                        <img
                                            src={IconRate}
                                            alt=""
                                        />
                                    </div>
                                    <img
                                        src={IconChildRate}
                                        alt=""
                                        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
                                    />
                                </div>
                                <div className="w-[22px] h-[22px] rounded-full bg-[#7065F0] absolute bottom-[-7%] right-[-5%]    flex items-center justify-center">
                                    <img
                                        src={IconRightRate}
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col justify-center ml-[24px] lg:mt-[16px] lg:ml-0 lg:flex lg:flex-col lg:items-center lg:justify-center">
                                <h3 className="text-[#000929] text-[24px] font-bold leading-[150%] tracking-[-0.24px]">
                                    7.4%
                                </h3>
                                <p className="text-[#6C727F] text-[12px] font-normal leading-[135%] mt-[4px]">
                                    Property Return Rate
                                </p>
                            </div>
                        </div>
                        {/* Benefit 2 */}
                        <div className="flex items-center mt-[24px]  lg:flex-col lg:mt-0 ">
                            {/* Icon 2 */}
                            <div className="w-[60px] h-[60px] rounded-full bg-[#f7f7fd] border-[3px] border-solid border-[#E0DEF7] relative lg:w-[64px] lg:h-[64px]">
                                <div className="w-[50px] h-[50px] rounded-full bg-[#E0DEF7] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center justify-center lg:w-[56px] lg:h-[56px]">
                                    <div className="relative">
                                        <img
                                            src={IconSell}
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="w-[22px] h-[22px] rounded-full bg-[#7065F0] absolute bottom-[-7%] right-[-5%]   flex items-center justify-center">
                                    <img
                                        src={IconSearch}
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col justify-center ml-[24px] lg:mt-[16px] lg:ml-0 lg:flex lg:flex-col lg:items-center lg:justify-center">
                                <h3 className="text-[#000929] text-[24px] font-bold leading-[150%] tracking-[-0.24px]">
                                    3,856
                                </h3>
                                <p className="text-[#6C727F] text-[12px] font-normal leading-[135%] mt-[4px]">
                                    Property in Sell & Rent
                                </p>
                            </div>
                        </div>
                        {/* Benefit 3 */}
                        <div className="flex items-center mt-[24px]  lg:flex-col lg:mt-0 ">
                            {/* Icon 3 */}
                            <div className="w-[60px] h-[60px] rounded-full bg-[#f7f7fd] border-[3px] border-solid border-[#E0DEF7] relative lg:w-[64px] lg:h-[64px]">
                                <div className="w-[50px] h-[50px] rounded-full bg-[#E0DEF7] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center justify-center lg:w-[56px] lg:h-[56px]">
                                    <div className="relative">
                                        <img
                                            src={IconDollar}
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="w-[22px] h-[22px] rounded-full bg-[#7065F0] absolute bottom-[-7%] right-[-5%]  flex items-center justify-center">
                                    <img
                                        src={IconChecked}
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col justify-center ml-[24px] lg:mt-[16px] lg:ml-0 lg:flex lg:flex-col lg:items-center lg:justify-center">
                                <h3 className="text-[#000929] text-[24px] font-bold leading-[150%] tracking-[-0.24px]">
                                    2,540
                                </h3>
                                <p className="text-[#6C727F] text-[12px] font-normal leading-[135%] mt-[4px]">
                                    Daily Completed Transactions
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Image benefit */}
                <div className="mt-[77px] lg:mt-0 ">
                    <img
                        src={ImageBenefit}
                        alt=""
                        className="object-cover lg:hidden"
                    />
                    <img
                        src={ImageBenefitPc}
                        alt=""
                        className="object-cover hidden lg:block"
                    />
                </div>
            </div>
        </div>
    );
};
export default Benefits;
