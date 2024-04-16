import iconSearch from "../../Assets/search.svg";
import ContentPcFirst from "../../Assets/content-pc.jpg";
import ContentPcSecond from "../../Assets/content-pc-2.jpg";
import Bed from "../../Assets/bed.svg";
import Bath from "../../Assets/bath.svg";
import Square from "../../Assets/square.svg";
const Data = [
    {
        image: ContentPcFirst,
        bed: Bed,
        bath: Bath,
        square: Square,
        totalBed: "4",
        totalBath: "2",
        totalSquare: "6x7.5 m²",
        price: "$2,700",
        name: "Beverly Springfield",
        address: "2821 Lake Sevilla, Palm Harbor, TX",
    },
    {
        image: ContentPcSecond,
        bed: Bed,
        bath: Bath,
        square: Square,
        totalBed: "4",
        totalBath: "2",
        totalSquare: "6x8 m²",
        price: "$1,600",
        name: "Tarpon Bay",
        address: "Palm Harbor, TX",
    },
];
const Search = () => {
    return (
        <div className="bg-[#f7f7fd] py-[48px] px-[24px] lg:px-[160px] lg:py-[72px]">
            <div className="lg:flex items-center justify-between">
                <div className="lg:flex flex-col items-start">
                    <h2 className="text-[#000929] text-[40px] text-center leading-[44px] font-bold tracking-[-0.4px] lg:w-[554px] lg:text-start">
                        Buy, rent, or sell your property easily
                    </h2>
                    <p className="text-[#000929] text-center text-[20px] font-medium leading-[32px] tracking-[-0.1px] mt-[32px] lg:w-[448px] lg:text-start">
                        A great platform to buy, sell, or even rent your
                        properties without any commisions.
                    </p>
                    <div className="lg:flex lg:flex-col-reverse">
                        <div className="bg-[#FFFFFF] h-[136px] rounded-lg mt-[48px] lg:mt-[56px]">
                            <div className="flex items-center justify-between h-[56px]">
                                <a
                                    href="das"
                                    className="inline-block w-[115px] text-center text-[#000929] text-[18px] font-medium leading-[26px] tracking-[-0.09px]"
                                >
                                    Rent
                                </a>
                                <a
                                    href="das"
                                    className="inline-block w-[107px] text-center text-[#000929] text-[18px] font-medium leading-[26px] tracking-[-0.09px]"
                                >
                                    Buy
                                </a>
                                <a
                                    href="das"
                                    className="inline-block w-[105px] text-center text-[#000929] text-[18px] font-medium leading-[26px] tracking-[-0.09px]"
                                >
                                    Sell
                                </a>
                            </div>
                            <div className="p-[16px] h-[80px] flex items-center justify-between">
                                <input
                                    type="text"
                                    placeholder="Search location"
                                    className="placholder-[#6C727F] py-[10px] pl-[10px] pr-[20px] outline-none lg:focus:border-2 border-solid rounded-[8px] border-[#9199a8]"
                                />
                                <div className="min-w-[48px] min-h-[48px] rounded-[8px] bg-[#7065F0] relative lg:hover:cursor-pointer">
                                    <img
                                        src={iconSearch}
                                        alt=""
                                        className="object-cover absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-[297px] h-[68px] mt-[48px] flex items-center justify-between">
                            <div className="w-[81px] h-[68px] pl-[26px] border-l-[3px] border-solid border-[#E0DEF7] flex flex-col justify-center">
                                <span className="text-[#7065F0] text-[32px] font-bold leading-[40px] tracking-[-0.32px]">
                                    50k+
                                </span>
                                <span className="text-[#6C727F] text-[16px] font-normal leading-[24px] mt-[4px]">
                                    renters
                                </span>
                            </div>
                            <div className="w-[109px] h-[68px] pl-[26px] border-l-[3px] border-solid border-[#E0DEF7] flex flex-col justify-center">
                                <span className="text-[#7065F0] text-[32px] font-bold leading-[40px] tracking-[-0.32px]">
                                    10k+
                                </span>
                                <span className="text-[#6C727F] text-[16px] font-normal leading-[24px] mt-[4px]">
                                    properties
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                {Data.map((item, index) => {
                    return (
                        <div className="hidden lg:block">
                            <div className="h-[416px] w-[300px] border-[1.5px] border-solid border-[#F0EFFB] rounded-[8px] overflow-hidden">
                                <img
                                    src={item.image}
                                    alt=""
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
                                    </div>
                                    <h2 className="text-[#000929] text-[24px] font-bold leading-[150%] tracking-[-0.24px] mt-[4px]">
                                        {item.name}
                                    </h2>
                                    <span className="text-[#000929] text-[16px] leading-[150%] font-normal mt-[8px] opacity-50">
                                        {item.address}
                                    </span>
                                    <div className="border-solid border-[#F0EFFB] mt-[16px] border-t-[2px]">
                                        <div className="pt-[16px] flex items-center">
                                            <img
                                                src={item.bed}
                                                alt=""
                                                className="object-cover w-[25px] h-[25px]"
                                            />
                                            <span className="text-[#000929] text-[14px]font-normal leading-[140%] opacity-70 ml-[8px]">
                                                {item.totalBed}
                                            </span>
                                            <img
                                                src={item.bath}
                                                alt=""
                                                className="object-cover w-[25px] h-[25px] ml-[16px]"
                                            />
                                            <span className="text-[#000929] text-[14px]font-normal leading-[140%] opacity-70 ml-[8px]">
                                                {item.totalBath}
                                            </span>
                                            <img
                                                src={item.square}
                                                alt=""
                                                className="object-cover w-[25px] h-[25px] ml-[16px]"
                                            />
                                            <span className="text-[#000929] text-[14px]font-normal leading-[140%] opacity-70 ml-[8px]">
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
        </div>
    );
};
export default Search;
