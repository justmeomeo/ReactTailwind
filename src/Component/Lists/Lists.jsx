import List1 from "../../Assets/list-1.jpg";
import List2 from "../../Assets/list-2.jpg";
import List3 from "../../Assets/list-3.jpg";
import List4 from "../../Assets/list-4.jpg";
import Heart from "../../Assets/heart.svg";
import Bed from "../../Assets/bed.svg";
import Bath from "../../Assets/bath.svg";
import Square from "../../Assets/square.svg";
import List6 from "../../Assets/content-pc-2.jpg";
import List7 from "../../Assets/list-7.jpg";
import "../../App.css";
const Lists = () => {
    return (
        <div className="bg-gradient-to-b from-[#FFFFFF]-to-[#F0EFFB]shadow-[0px_4px_200px_0px_rgba(232,249,247,0.20)] py-[48px] lg:py-[80px] lg:px-[160px]">
            <div className=" mx-[24px] lg:mt-0 lg:flex lg:items-center lg:justify-between lg:mx-0">
                <div className="">
                    <h2 className="text-[#000929] text-[32px] font-bold leading-[125%] tracking-[-0.32px] text-center lg:text-[40px] lg:leading-[140%] lg:tracking-[-0.4px] lg:text-start">
                        Based on your location
                    </h2>
                    <p className="text-[#000929] text-[16px] font-medium leading-[125%] tracking-[-0.32px] text-center opacity-70 mt-[16px] lg:leading-[160%] lg:text-start">
                        Some of our picked properties near you location.
                    </p>
                </div>
                <button className="hidden lg:w-[253px] lg:h-[56px] lg:text-[#FFFFFF] lg:text-[16px] lg:font-bold lg:leading-[150%] lg:bg-[#7065F0] lg:rounded-[8px] lg:block lg:hover:scale-105 lg:transition-all lg:duration-300">
                    Browse more properties
                </button>
            </div>
            {/* List */}
            <div className="grid grid-flow-col ml-[24px] gap-x-[15px] auto-cols-[90%] overflow-x-auto snap-x snap-mandatory snap-always no-scrollbar lg:ml-0 lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:mt-[48px] lg:gap-x-6 lg:gap-y-8 lg:grid-flow-row">
                {/* List 1 */}
                <div className=" mt-[48px] rounded-[8px] border-[2.5px] border-solid border-[#F0EFFB] overflow-x-hidden snap-start lg:mt-0 lg:hover:cursor-pointer">
                    <div className="h-full">
                        <img
                            src={List1}
                            alt=""
                            className="w-full object-cover h-[180px]"
                        />
                        <div className="py-[30px] px-[24px] bg-[#FFFFFF]">
                            <div className="flex items-center justify-between">
                                <div className="">
                                    <h2 className="text-[#7065F0] text-[24px] font-extrabold leading-[150%] tracking-[-1px]">
                                        $2,095
                                        <span className="text-[#000929] text-[16px] leading-[150%] font-normal opacity-50">
                                            /month
                                        </span>
                                    </h2>
                                </div>
                                <div className="w-[50px] h-[50px] rounded-full border-2 border-solid border-[#E8E6F9] flex items-center justify-center">
                                    <img
                                        src={Heart}
                                        alt=""
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <h2 className="text-[#000929] text-[24px] font-bold leading-[150%] tracking-[-0.24px] mt-[4px]">
                                Palm Harbor
                            </h2>
                            <p className="text-[#000929] text-[16px] leading-[150%] font-normal mt-[8px] opacity-50 ">
                                Highland Lake, FL
                            </p>
                            <div className="border-solid border-[#F0EFFB] mt-[16px] border-t-[2px] lg:flex lg:items-center lg:justify-between">
                                <div className="pt-[20px] flex items-center lg:w-full lg:flex lg:items-center lg:justify-between">
                                    <img
                                        src={Bed}
                                        alt=""
                                        className="object-cover w-[25px] h-[25px] lg:w-[20px] lg:h-[20px]"
                                    />
                                    <span className="text-[#000929] text-[14px]font-normal leading-[140%] opacity-70 ml-[8px] lg:flex lg:items-center lg:ml-0 lg:text-[14px]">
                                        3
                                        <span className="hidden lg:block lg:ml-[6px] lg:text-[14px]">
                                            Beds
                                        </span>
                                    </span>
                                    <img
                                        src={Bath}
                                        alt=""
                                        className="object-cover w-[25px] h-[25px] ml-[16px] lg:w-[20px] lg:h-[20px]"
                                    />
                                    <span className="text-[#000929] text-[14px]font-normal leading-[140%] opacity-70 ml-[8px] lg:flex lg:items-center lg:ml-0">
                                        2
                                        <span className="hidden lg:block lg:ml-[6px] lg:text-[14px]">
                                            Bathrooms
                                        </span>
                                    </span>
                                    <img
                                        src={Square}
                                        alt=""
                                        className="object-cover w-[25px] h-[25px] ml-[16px] lg:w-[20px] lg:h-[20px]"
                                    />
                                    <span className="text-[#000929] text-[14px]font-normal leading-[140%] opacity-70 ml-[8px] lg:flex lg:items-center lg:ml-0 lg:text-[14px]">
                                        5x7 m²
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* List 2 */}
                <div className="mt-[48px] rounded-[8px] border-[2.5px] border-solid border-[#F0EFFB] overflow-x-hidden snap-start lg:mt-0 lg:hover:cursor-pointer">
                    <div className="h-full">
                        <img
                            src={List7}
                            alt=""
                            className="w-full object-cover h-[180px]"
                        />
                        <div className="py-[30px] px-[24px] bg-[#FFFFFF]">
                            <div className="flex items-center justify-between">
                                <div className="">
                                    <h2 className="text-[#7065F0] text-[24px] font-extrabold leading-[150%] tracking-[-1px]">
                                        $2,700
                                        <span className="text-[#000929] text-[16px] leading-[150%] font-normal opacity-50">
                                            /month
                                        </span>
                                    </h2>
                                </div>
                                <div className="w-[50px] h-[50px] rounded-full border-2 border-solid border-[#E8E6F9] flex items-center justify-center like">
                                    <img
                                        src={Heart}
                                        alt=""
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <h2 className="text-[#000929] text-[24px] font-bold leading-[150%] tracking-[-0.24px] mt-[4px]">
                                Beverly Springfield
                            </h2>
                            <p className="text-[#000929] text-[16px] leading-[150%] font-normal mt-[8px] opacity-50 lg:mt-[15px]">
                                2821 Lake Sevilla, Palm Harbor, TX
                            </p>
                            <div className="border-solid border-[#F0EFFB] mt-[16px] border-t-[2px] lg:flex lg:items-center lg:justify-between">
                                <div className="pt-[20px] flex items-center lg:w-full lg:flex lg:items-center lg:justify-between">
                                    <img
                                        src={Bed}
                                        alt=""
                                        className="object-cover w-[25px] h-[25px] lg:w-[20px] lg:h-[20px]"
                                    />
                                    <span className="text-[#000929] text-[14px]font-normal leading-[140%] opacity-70 ml-[8px] lg:flex lg:items-center lg:ml-0 lg:text-[14px]">
                                        4
                                        <span className="hidden lg:block lg:ml-[6px] lg:text-[14px]">
                                            Beds
                                        </span>
                                    </span>
                                    <img
                                        src={Bath}
                                        alt=""
                                        className="object-cover w-[25px] h-[25px] ml-[16px] lg:w-[20px] lg:h-[20px]"
                                    />
                                    <span className="text-[#000929] text-[14px]font-normal leading-[140%] opacity-70 ml-[8px] lg:flex lg:items-center lg:ml-0">
                                        2
                                        <span className="hidden lg:block lg:ml-[6px] lg:text-[14px]">
                                            Bathrooms
                                        </span>
                                    </span>
                                    <img
                                        src={Square}
                                        alt=""
                                        className="object-cover w-[25px] h-[25px] ml-[16px] lg:w-[20px] lg:h-[20px]"
                                    />
                                    <span className="text-[#000929] text-[14px]font-normal leading-[140%] opacity-70 ml-[8px] lg:flex lg:items-center lg:ml-0 lg:text-[14px]">
                                        6x7.5 m²
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* List 3 */}
                <div className=" mt-[48px] rounded-[8px] border-[2.5px] border-solid border-[#F0EFFB] overflow-x-hidden snap-start lg:mt-0 lg:hover:cursor-pointer">
                    <div className="h-full">
                        <img
                            src={List2}
                            alt=""
                            className="w-full object-cover h-[180px]"
                        />
                        <div className="py-[30px] px-[24px] bg-[#FFFFFF]">
                            <div className="flex items-center justify-between">
                                <div className="">
                                    <h2 className="text-[#7065F0] text-[24px] font-extrabold leading-[150%] tracking-[-1px]">
                                        $4,550
                                        <span className="text-[#000929] text-[16px] leading-[150%] font-normal opacity-50">
                                            /month
                                        </span>
                                    </h2>
                                </div>
                                <div className="w-[50px] h-[50px] rounded-full border-2 border-solid border-[#E8E6F9] flex items-center justify-center like">
                                    <img
                                        src={Heart}
                                        alt=""
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <h2 className="text-[#000929] text-[24px] font-bold leading-[150%] tracking-[-0.24px] mt-[4px]">
                                Faulkner Ave
                            </h2>
                            <p className="text-[#000929] text-[16px] leading-[150%] font-normal mt-[8px] opacity-50 ">
                                909 Woodland St, Michigan, IN
                            </p>
                            <div className="border-solid border-[#F0EFFB] mt-[16px] border-t-[2px] lg:flex lg:items-center lg:justify-between">
                                <div className="pt-[20px] flex items-center lg:w-full lg:flex lg:items-center lg:justify-between">
                                    <img
                                        src={Bed}
                                        alt=""
                                        className="object-cover w-[25px] h-[25px] lg:w-[20px] lg:h-[20px]"
                                    />
                                    <span className="text-[#000929] text-[14px]font-normal leading-[140%] opacity-70 ml-[8px] lg:flex lg:items-center lg:ml-0 lg:text-[14px]">
                                        4
                                        <span className="hidden lg:block lg:ml-[6px] lg:text-[14px]">
                                            Beds
                                        </span>
                                    </span>
                                    <img
                                        src={Bath}
                                        alt=""
                                        className="object-cover w-[25px] h-[25px] ml-[16px] lg:w-[20px] lg:h-[20px]"
                                    />
                                    <span className="text-[#000929] text-[14px]font-normal leading-[140%] opacity-70 ml-[8px] lg:flex lg:items-center lg:ml-0">
                                        3
                                        <span className="hidden lg:block lg:ml-[6px] lg:text-[14px]">
                                            Bathrooms
                                        </span>
                                    </span>
                                    <img
                                        src={Square}
                                        alt=""
                                        className="object-cover w-[25px] h-[25px] ml-[16px] lg:w-[20px] lg:h-[20px]"
                                    />
                                    <span className="text-[#000929] text-[14px]font-normal leading-[140%] opacity-70 ml-[8px] lg:flex lg:items-center lg:ml-0 lg:text-[14px]">
                                        8x10 m²
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* List 4 */}
                <div className="mt-[48px] rounded-[8px] border-[2.5px] border-solid border-[#F0EFFB] overflow-x-hidden snap-start lg:mt-0 lg:hover:cursor-pointer">
                    <div className="h-full">
                        <img
                            src={List3}
                            alt=""
                            className="w-full object-cover h-[180px]"
                        />
                        <div className="py-[30px] px-[24px] bg-[#FFFFFF]">
                            <div className="flex items-center justify-between">
                                <div className="">
                                    <h2 className="text-[#7065F0] text-[24px] font-extrabold leading-[150%] tracking-[-1px]">
                                        $2,400
                                        <span className="text-[#000929] text-[16px] leading-[150%] font-normal opacity-50">
                                            /month
                                        </span>
                                    </h2>
                                </div>
                                <div className="w-[50px] h-[50px] rounded-full border-2 border-solid border-[#E8E6F9] flex items-center justify-center like">
                                    <img
                                        src={Heart}
                                        alt=""
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <h2 className="text-[#000929] text-[24px] font-bold leading-[150%] tracking-[-0.24px] mt-[4px]">
                                St. Crystal
                            </h2>
                            <p className="text-[#000929] text-[16px] leading-[150%] font-normal mt-[8px] opacity-50 ">
                                210 US Highway, Highland Lake, FL
                            </p>
                            <div className="border-solid border-[#F0EFFB] mt-[16px] border-t-[2px] lg:flex lg:items-center lg:justify-between">
                                <div className="pt-[20px] flex items-center lg:w-full lg:flex lg:items-center lg:justify-between">
                                    <img
                                        src={Bed}
                                        alt=""
                                        className="object-cover w-[25px] h-[25px] lg:w-[20px] lg:h-[20px]"
                                    />
                                    <span className="text-[#000929] text-[14px]font-normal leading-[140%] opacity-70 ml-[8px] lg:flex lg:items-center lg:ml-0 lg:text-[14px]">
                                        4
                                        <span className="hidden lg:block lg:ml-[6px] lg:text-[14px]">
                                            Beds
                                        </span>
                                    </span>
                                    <img
                                        src={Bath}
                                        alt=""
                                        className="object-cover w-[25px] h-[25px] ml-[16px] lg:w-[20px] lg:h-[20px]"
                                    />
                                    <span className="text-[#000929] text-[14px]font-normal leading-[140%] opacity-70 ml-[8px] lg:flex lg:items-center lg:ml-0">
                                        2
                                        <span className="hidden lg:block lg:ml-[6px] lg:text-[14px]">
                                            Bathrooms
                                        </span>
                                    </span>
                                    <img
                                        src={Square}
                                        alt=""
                                        className="object-cover w-[25px] h-[25px] ml-[16px] lg:w-[20px] lg:h-[20px]"
                                    />
                                    <p className="text-[#000929] text-[14px]font-normal leading-[140%] opacity-70 ml-[8px] lg:flex lg:items-center lg:ml-0 lg:text-[14px]">
                                        6x8 m²
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* List 5 */}
                <div className=" mt-[48px] rounded-[8px] border-[2.5px] border-solid border-[#F0EFFB] overflow-x-hidden snap-start lg:mt-0 lg:hover:cursor-pointer">
                    <div className="h-full">
                        <img
                            src={List4}
                            alt=""
                            className="w-full object-cover h-[180px]"
                        />
                        <div className="py-[30px] px-[24px] bg-[#FFFFFF]">
                            <div className="flex items-center justify-between">
                                <div className="">
                                    <h2 className="text-[#7065F0] text-[24px] font-extrabold leading-[150%] tracking-[-1px]">
                                        $1,500
                                        <span className="text-[#000929] text-[16px] leading-[150%] font-normal opacity-50">
                                            /month
                                        </span>
                                    </h2>
                                </div>
                                <div className="w-[50px] h-[50px] rounded-full border-2 border-solid border-[#E8E6F9] flex items-center justify-center like">
                                    <img
                                        src={Heart}
                                        alt=""
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <h2 className="text-[#000929] text-[24px] font-bold leading-[150%] tracking-[-0.24px] mt-[4px]">
                                Cove Red
                            </h2>
                            <p className="text-[#000929] text-[16px] leading-[150%] font-normal mt-[8px] opacity-50 ">
                                243 Curlew Road, Palm Harbor, TX
                            </p>
                            <div className="border-solid border-[#F0EFFB] mt-[16px] border-t-[2px] lg:flex lg:items-center lg:justify-between">
                                <div className="pt-[20px] flex items-center lg:w-full lg:flex lg:items-center lg:justify-between">
                                    <img
                                        src={Bed}
                                        alt=""
                                        className="object-cover w-[25px] h-[25px] lg:w-[20px] lg:h-[20px]"
                                    />
                                    <span className="text-[#000929] text-[14px]font-normal leading-[140%] opacity-70 ml-[8px] lg:flex lg:items-center lg:ml-0 lg:text-[14px]">
                                        2
                                        <span className="hidden lg:block lg:ml-[6px] lg:text-[14px]">
                                            Beds
                                        </span>
                                    </span>
                                    <img
                                        src={Bath}
                                        alt=""
                                        className="object-cover w-[25px] h-[25px] ml-[16px] lg:w-[20px] lg:h-[20px]"
                                    />
                                    <span className="text-[#000929] text-[14px]font-normal leading-[140%] opacity-70 ml-[8px] lg:flex lg:items-center lg:ml-0">
                                        1
                                        <span className="hidden lg:block lg:ml-[6px] lg:text-[14px]">
                                            Bathrooms
                                        </span>
                                    </span>
                                    <img
                                        src={Square}
                                        alt=""
                                        className="object-cover w-[25px] h-[25px] ml-[16px] lg:w-[20px] lg:h-[20px]"
                                    />
                                    <span className="text-[#000929] text-[14px]font-normal leading-[140%] opacity-70 ml-[8px] lg:flex lg:items-center lg:ml-0 lg:text-[14px]">
                                        5x7.5 m²
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* List 6 */}
                <div className="mt-[48px] rounded-[8px] border-[2.5px] border-solid border-[#F0EFFB] overflow-x-hidden snap-start lg:mt-0 lg:hover:cursor-pointer">
                    <div className="h-full">
                        <img
                            src={List6}
                            alt=""
                            className="w-full object-cover h-[180px]"
                        />
                        <div className="py-[30px] px-[24px] bg-[#FFFFFF]">
                            <div className="flex items-center justify-between">
                                <div className="">
                                    <h2 className="text-[#7065F0] text-[24px] font-extrabold leading-[150%] tracking-[-1px]">
                                        $1,600
                                        <span className="text-[#000929] text-[16px] leading-[150%] font-normal opacity-50">
                                            /month
                                        </span>
                                    </h2>
                                </div>
                                <div className="w-[50px] h-[50px] rounded-full border-2 border-solid border-[#E8E6F9] flex items-center justify-center like">
                                    <img
                                        src={Heart}
                                        alt=""
                                        className="object-cover "
                                    />
                                </div>
                            </div>
                            <h2 className="text-[#000929] text-[24px] font-bold leading-[150%] tracking-[-0.24px] mt-[4px]">
                                Tarpon Bay
                            </h2>
                            <p className="text-[#000929] text-[16px] leading-[150%] font-normal mt-[8px] opacity-50">
                                103 Lake Shores, Michigan, IN
                            </p>
                            <div className="border-solid border-[#F0EFFB] mt-[16px] border-t-[2px] lg:flex lg:items-center lg:justify-between">
                                <div className="pt-[20px] flex items-center lg:w-full lg:flex lg:items-center lg:justify-between">
                                    <img
                                        src={Bed}
                                        alt=""
                                        className="object-cover w-[25px] h-[25px] lg:w-[20px] lg:h-[20px]"
                                    />
                                    <span className="text-[#000929] text-[14px]font-normal leading-[140%] opacity-70 ml-[8px] lg:flex lg:items-center lg:ml-0 lg:text-[14px]">
                                        3
                                        <span className="hidden lg:block lg:ml-[6px] lg:text-[14px]">
                                            Beds
                                        </span>
                                    </span>
                                    <img
                                        src={Bath}
                                        alt=""
                                        className="object-cover w-[25px] h-[25px] ml-[16px] lg:w-[20px] lg:h-[20px]"
                                    />
                                    <span className="text-[#000929] text-[14px]font-normal leading-[140%] opacity-70 ml-[8px] lg:flex lg:items-center lg:ml-0">
                                        1
                                        <span className="hidden lg:block lg:ml-[6px] lg:text-[14px]">
                                            Bathrooms
                                        </span>
                                    </span>
                                    <img
                                        src={Square}
                                        alt=""
                                        className="object-cover w-[25px] h-[25px] ml-[16px] lg:w-[20px] lg:h-[20px]"
                                    />
                                    <span className="text-[#000929] text-[14px]font-normal leading-[140%] opacity-70 ml-[8px] lg:flex lg:items-center lg:ml-0 lg:text-[14px]">
                                        5x7 m²
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="w-[330px] h-[56px] text-[#FFFFFF] text-[16px] font-bold leading-[150%] bg-[#7065F0] mt-[48px] ml-[24px] rounded-[8px] lg:hidden ">
                Browse more properties
            </button>
        </div>
    );
};
export default Lists;
