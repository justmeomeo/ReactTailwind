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

const Data = [
    {
        image: List1,
        price: "$2,095",
        iconHeart: Heart,
        name: "Palm Harbor",
        address: "Highland Lake, FL",
        bed: Bed,
        totalBed: "3",
        bath: Bath,
        toltalBath: "2",
        square: Square,
        totalSquare: " 5x7 m²",
    },
    {
        image: List7,
        price: "$2,700",
        iconHeart: Heart,
        name: "Beverly Springfield",
        address: "2821 Lake Sevilla, Palm Harbor, TX",
        bed: Bed,
        totalBed: "4",
        bath: Bath,
        toltalBath: "2",
        square: Square,
        totalSquare: "6x7.5 m²",
    },
    {
        image: List2,
        price: "$4,550",
        iconHeart: Heart,
        name: "Faulkner Ave",
        address: "909 Woodland St, Michigan, IN",
        bed: Bed,
        totalBed: "4",
        bath: Bath,
        toltalBath: "3",
        square: Square,
        totalSquare: "8x10 m²",
    },
    {
        image: List3,
        price: "$2,400",
        iconHeart: Heart,
        name: "St. Crystal",
        address: "210 US Highway, Highland Lake, FL",
        bed: Bed,
        totalBed: "4",
        bath: Bath,
        toltalBath: "2",
        square: Square,
        totalSquare: "6x8 m²",
    },
    {
        image: List4,
        price: "$1,500",
        iconHeart: Heart,
        name: "Cove Red",
        address: "243 Curlew Road, Palm Harbor, TX",
        bed: Bed,
        totalBed: "2",
        bath: Bath,
        toltalBath: "1",
        square: Square,
        totalSquare: "5x7.5 m²",
    },
    {
        image: List6,
        price: "$1,600",
        iconHeart: Heart,
        name: "Tarpon Bay",
        address: "103 Lake Shores, Michigan, IN",
        bed: Bed,
        totalBed: "3",
        bath: Bath,
        toltalBath: "1",
        square: Square,
        totalSquare: "5x7 m²",
    },
];
const Like = (e) => {
    const heart = e.currentTarget;
    heart.classList.toggle("bg-[#BC7FCD]");
};
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
                {Data.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className=" mt-[48px] rounded-[8px] border-[2.5px] border-solid border-[#F0EFFB] overflow-x-hidden snap-start lg:mt-0 lg:hover:cursor-pointer"
                        >
                            <div className="h-full">
                                <img
                                    src={item.image}
                                    alt=""
                                    className="w-full object-cover h-[180px]"
                                />
                                <div className="py-[30px] px-[24px] bg-[#FFFFFF]">
                                    <div className="flex items-center justify-between">
                                        <div className="">
                                            <h2 className="text-[#7065F0] text-[24px] font-extrabold leading-[150%] tracking-[-1px]">
                                                {item.price}
                                                <span className="text-[#000929] text-[16px] leading-[150%] font-normal opacity-50">
                                                    /month
                                                </span>
                                            </h2>
                                        </div>
                                        <div
                                            onClick={Like}
                                            className="w-[50px] h-[50px] rounded-full border-2 border-solid border-[#E8E6F9] flex items-center justify-center heart"
                                        >
                                            <img
                                                src={item.iconHeart}
                                                alt=""
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                    <h2 className="text-[#000929] text-[24px] font-bold leading-[150%] tracking-[-0.24px] mt-[4px]">
                                        {item.name}
                                    </h2>
                                    <p className="text-[#000929] text-[16px] leading-[150%] font-normal mt-[8px] opacity-50 ">
                                        {item.address}
                                    </p>
                                    <div className="border-solid border-[#F0EFFB] mt-[16px] border-t-[2px] lg:flex lg:items-center lg:justify-between">
                                        <div className="pt-[20px] flex items-center lg:w-full lg:flex lg:items-center lg:justify-between">
                                            <img
                                                src={item.bed}
                                                alt=""
                                                className="object-cover w-[25px] h-[25px] lg:w-[20px] lg:h-[20px]"
                                            />
                                            <span className="text-[#000929] text-[14px]font-normal leading-[140%] opacity-70 ml-[8px] lg:flex lg:items-center lg:ml-0 lg:text-[14px]">
                                                {item.totalBed}
                                                <span className="hidden lg:block lg:ml-[6px] lg:text-[14px]">
                                                    Beds
                                                </span>
                                            </span>
                                            <img
                                                src={item.bath}
                                                alt=""
                                                className="object-cover w-[25px] h-[25px] ml-[16px] lg:w-[20px] lg:h-[20px]"
                                            />
                                            <span className="text-[#000929] text-[14px]font-normal leading-[140%] opacity-70 ml-[8px] lg:flex lg:items-center lg:ml-0">
                                                {item.toltalBath}
                                                <span className="hidden lg:block lg:ml-[6px] lg:text-[14px]">
                                                    Bathrooms
                                                </span>
                                            </span>
                                            <img
                                                src={item.square}
                                                alt=""
                                                className="object-cover w-[25px] h-[25px] ml-[16px] lg:w-[20px] lg:h-[20px]"
                                            />
                                            <span className="text-[#000929] text-[14px]font-normal leading-[140%] opacity-70 ml-[8px] lg:flex lg:items-center lg:ml-0 lg:text-[14px]">
                                                {item.totalSquare}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <button className="w-[330px] h-[56px] text-[#FFFFFF] text-[16px] font-bold leading-[150%] bg-[#7065F0] mt-[48px] ml-[24px] rounded-[8px] lg:hidden ">
                Browse more properties
            </button>
        </div>
    );
};
export default Lists;
