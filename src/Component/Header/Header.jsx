import logo from "../../Assets/logo.svg";
import menu from "../../Assets/menu.svg";
import ArrowDown from "../../Assets/arrow-down.svg";
const Header = () => {
    return (
        <div className="h-[72px] bg-[#fafafe] py-[24px] pl-[32px] pr-[24px] flex items-center justify-between border-b-2 border-solid border-[#F0EFFB]">
            <div className="flex items-center">
                <img
                    src={logo}
                    alt=""
                    className="w-[32px] h-[32px] object-cover"
                />
                <h3 className="text-[20px] text-[#100a55] ml-[5px] font-bold leading-[28px]">
                    Estatery
                </h3>
            </div>
            <div className="lg:hidden block">
                <img
                    src={menu}
                    alt=""
                />
            </div>
            <ul className="hidden lg:flex lg:items-center lg:text-[#000929] lg:text-[16px] lg:font-medium lg:leading-[150%]">
                <li className="lg:hover:opacity-50 transition-all duration-200">
                    <a href="a">Rent</a>
                </li>
                <li className="ml-[48px] lg:hover:opacity-50 transition-all duration-200">
                    <a href="a">Buy</a>
                </li>
                <li className="ml-[48px] lg:hover:opacity-50 transition-all duration-200">
                    <a href="a">Sell</a>
                </li>
                <li className="ml-[48px] flex items-center lg:hover:opacity-50 transition-all duration-200">
                    <a href="a">Manage Property</a>
                    <img
                        src={ArrowDown}
                        alt=""
                        className="ml-[8px] cursor-pointer"
                    />
                </li>
                <li className="ml-[48px] flex items-center lg:hover:opacity-50 transition-all duration-200">
                    <a href="a">Resources</a>
                    <img
                        src={ArrowDown}
                        alt=""
                        className="ml-[8px] cursor-pointer"
                    />
                </li>
            </ul>
            <div className="hidden lg:flex lg:items-center">
                <button className="py-[10px] px-[24px] border-2 border-solid border-[#E0DEF7] rounded-[8px] text-[#000929] text-[16px] font-bold leading-[150%] mr-[16px] ">
                    Login
                </button>
                <button className="py-[10px] px-[24px] bg-[#7065F0] rounded-[8px] text-[#FFFFFF] text-[16px] font-bold leading-[150%] mr-[16px]">
                    Sign up
                </button>
            </div>
        </div>
    );
};
export default Header;
