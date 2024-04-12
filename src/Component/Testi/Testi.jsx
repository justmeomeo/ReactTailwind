import Round from "../../Assets/roundimage.svg";
import Progress from "../../Assets/progressround.svg";
import Customer from "../../Assets/customer.png";
const Testi = () => {
    return (
        <div className="bg-gradient-to-b from-[#F0EFFB] from-0% to-[rgba(255,255,255,0.00] to-100% shadow-[0px_4px_200px_0px_rgba(232, 249, 247, 0.20)] px-[24px] lg:flex lg:flex-col lg:items-center lg:px-0 lg:pb-[100px] pt-[64px]">
            <div className="">
                <h2 className="text-[#000929] text-[32px] font-bold leading-[125%]tracking-[-0.32px] text-center">
                    Testimonials
                </h2>
                <p className="text-[#000929] text-[16px] font-normal leading-[160%] opacity-70 text-center mt-[16px]">
                    See what our property managers, landlords, and tenants have
                    to say
                </p>
            </div>
            <div className="mt-[48px] lg:w-[736px] lg:mt-[64px]">
                <p className="text-[#000929] text-[20px] font-medium leading-[160%] tracking-[-0.1px] text-center">
                    “Estatery is the platform I go to on almost a daily basis
                    for 2nd home and vacation condo shopping, or to just look at
                    dream homes in new areas. Thanks for fun home shopping and
                    comparative analyzing, Estatery!”
                </p>
            </div>
            <div className="mt-[32px]">
                <h5 className="text-[#000929] text-[16px] font-bold leading-[150%] text-center">
                    Mira Culos,
                    <span className="text-[#6C727F] font-normal">Renter</span>
                </h5>
            </div>
            <div className="mt-[48px] flex items-center px-[35px] justify-between lg:px-0">
                <div className="relatetive flex items-center justify-center ">
                    <img
                        src={Round}
                        alt=""
                        className="object-cover w-full h-full"
                    />
                    <div className="absolute translate-x-[5%] ">
                        <img
                            src={Progress}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <img
                        src={Customer}
                        alt=""
                        className="absolute"
                    />
                </div>
                <div className="rounded-full lg:ml-[32px]">
                    <img
                        src={Customer}
                        alt=""
                    />
                </div>
                <div className="rounded-full lg:ml-[32px]">
                    <img
                        src={Customer}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};
export default Testi;
