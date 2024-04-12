import Logo from "../../Assets/logo.svg";
import Fb from "../../Assets/fb.svg";
import Insta from "../../Assets/insta.svg";
import Twitter from "../../Assets/twitter.svg";
import Linkedin from "../../Assets/linkedin.svg";
const Footer = () => {
    return (
        <div className="bg-[#FFFFFF]">
            <div className="py-[48px] px-[24px] lg:pt-[80px] lg:pr-[215px] lg:pl-[160px] lg:pb-[48px] lg:flex lg:items-start">
                <div className="flex items-center">
                    <img
                        src={Logo}
                        alt=""
                        className="object-cover"
                    />
                    <h2 className="text-[#0E0854] text-[24px] font-bold leading-[28px] ml-[4px]">
                        Estatery
                    </h2>
                </div>
                {/* Footer mobile */}
                <div className="mt-[48px] grid grid-cols-2 gap-x-4 lg:hidden">
                    <div className="grid grid-cols-1 gap-y-[32px] ">
                        <div className="">
                            <h3 className="text-[#000929] text-[14px] font-bold leading-[140%]">
                                SELLA HOME
                            </h3>
                            <ul className="text-[#000929] opacity-70 text-[14px] font-medium leading-[32px] mt-[16px]">
                                <li>
                                    <a href="a">Request an offer</a>
                                </li>
                                <li>
                                    <a href="a">Pricing</a>
                                </li>
                                <li>
                                    <a href="a">Reviews</a>
                                </li>
                                <li>
                                    <a href="a">Stories</a>
                                </li>
                            </ul>
                        </div>
                        <div className="">
                            <h3 className="text-[#000929] text-[14px] font-bold leading-[140%]">
                                BUY A HOME
                            </h3>
                            <ul className="text-[#000929] opacity-70 text-[14px] font-medium leading-[32px] mt-[16px]">
                                <li>
                                    <a href="a">Buy</a>
                                </li>
                                <li>
                                    <a href="a">Finance</a>
                                </li>
                            </ul>
                        </div>
                        <div className="">
                            <h3 className="text-[#000929] text-[14px] font-bold leading-[140%]">
                                BUY, RENT AND SELL
                            </h3>
                            <ul className="text-[#000929] opacity-70 text-[14px] font-medium leading-[32px] mt-[16px]">
                                <li>
                                    <a href="a">Buy & sell properties</a>
                                </li>
                                <li>
                                    <a href="a">Rent Home</a>
                                </li>
                                <li>
                                    <a href="a">Builder trade-up</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-y-[32px]">
                        <div className="">
                            <h3 className="text-[#000929] text-[14px] font-bold leading-[140%]">
                                TERMS & PRIVACY
                            </h3>
                            <ul className="text-[#000929] opacity-70 text-[14px] font-medium leading-[32px] mt-[16px]">
                                <li>
                                    <a href="a">Trust & Safety</a>
                                </li>
                                <li>
                                    <a href="a">Terms of Service</a>
                                </li>
                                <li>
                                    <a href="a">Privacy Policy</a>
                                </li>
                            </ul>
                        </div>
                        <div className="">
                            <h3 className="text-[#000929] text-[14px] font-bold leading-[140%]">
                                ABOUT
                            </h3>
                            <ul className="text-[#000929] opacity-70 text-[14px] font-medium leading-[32px] mt-[16px]">
                                <li>
                                    <a href="a">Company</a>
                                </li>
                                <li>
                                    <a href="a">How it works</a>
                                </li>
                                <li>
                                    <a href="a">Contact</a>
                                </li>
                                <li>
                                    <a href="a">Investors</a>
                                </li>
                            </ul>
                        </div>
                        <div className="">
                            <h3 className="text-[#000929] text-[14px] font-bold leading-[140%]">
                                RESOURCES
                            </h3>
                            <ul className="text-[#000929] opacity-70 text-[14px] font-medium leading-[32px] mt-[16px]">
                                <li>
                                    <a href="a">Blog</a>
                                </li>
                                <li>
                                    <a href="a">Guides</a>
                                </li>
                                <li>
                                    <a href="a">FAQ</a>
                                </li>
                                <li>
                                    <a href="a">Help Center</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Footer pc */}
                <div className="hidden lg:grid lg:grid-cols-3 lg:gap-x-[88px] lg:ml-[147px]">
                    <div className="grid grid-cols-1 gap-y-[48px] w-[200px] ">
                        <div className="">
                            <h3 className="lg:text-[#000929] lg:text-[16px] lg:font-bold lg:leading-[150%]">
                                SELLA HOME
                            </h3>
                            <ul className="lg:text-[#000929] lg:opacity-70 lg:text-[16px] lg:font-medium lg:leading-[38px] lg:mt-[16px]">
                                <li className="hover:text-[gray] transition-all duration-200">
                                    <a href="a">Request an offer</a>
                                </li>
                                <li className="hover:text-[gray] transition-all duration-200">
                                    <a href="a">Pricing</a>
                                </li>
                                <li className="hover:text-[gray] transition-all duration-200">
                                    <a href="a">Reviews</a>
                                </li>
                                <li className="hover:text-[gray] transition-all duration-200">
                                    <a href="a">Stories</a>
                                </li>
                            </ul>
                        </div>
                        <div className="">
                            <h3 className="lg:text-[#000929] lg:text-[16px] lg:font-bold lg:leading-[150%]">
                                BUY A HOME
                            </h3>
                            <ul className="lg:text-[#000929] lg:opacity-70 lg:text-[16px] lg:font-medium lg:leading-[38px] lg:mt-[16px]">
                                <li className="hover:text-[gray] transition-all duration-200">
                                    <a href="a">Buy</a>
                                </li>
                                <li className="hover:text-[gray] transition-all duration-200">
                                    <a href="a">Finance</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-y-[48px] w-[200px]">
                        <div className="">
                            <h3 className="lg:text-[#000929] lg:text-[16px] lg:font-bold lg:leading-[150%]">
                                TERMS & PRIVACY
                            </h3>
                            <ul className="lg:text-[#000929] lg:opacity-70 lg:text-[16px] lg:font-medium lg:leading-[38px] lg:mt-[16px]">
                                <li className="hover:text-[gray] transition-all duration-200">
                                    <a href="a">Trust & Safety</a>
                                </li>
                                <li className="hover:text-[gray] transition-all duration-200">
                                    <a href="a">Terms of Service</a>
                                </li>
                                <li className="hover:text-[gray] transition-all duration-200">
                                    <a href="a">Privacy Policy</a>
                                </li>
                            </ul>
                        </div>
                        <div className="">
                            <h3 className="lg:text-[#000929] lg:text-[16px] lg:font-bold lg:leading-[150%]">
                                BUY, RENT AND SELL
                            </h3>
                            <ul className="lg:text-[#000929] lg:opacity-70 lg:text-[16px] lg:font-medium lg:leading-[38px] lg:mt-[16px]">
                                <li className="hover:text-[gray] transition-all duration-200">
                                    <a href="a">Buy & sell properties</a>
                                </li>
                                <li className="hover:text-[gray] transition-all duration-200">
                                    <a href="a">Rent Home</a>
                                </li>
                                <li className="hover:text-[gray] transition-all duration-200">
                                    <a href="a">Builder trade-up</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-y-[48px] w-[200px]">
                        <div className="">
                            <h3 className="lg:text-[#000929] lg:text-[16px] lg:font-bold lg:leading-[150%]">
                                ABOUT
                            </h3>
                            <ul className="lg:text-[#000929] lg:opacity-70 lg:text-[16px] lg:font-medium lg:leading-[38px] lg:mt-[16px]">
                                <li className="hover:text-[gray] transition-all duration-200">
                                    <a href="a">Company</a>
                                </li>
                                <li className="hover:text-[gray] transition-all duration-200">
                                    <a href="a">How it works</a>
                                </li>
                                <li className="hover:text-[gray] transition-all duration-200">
                                    <a href="a">Contact</a>
                                </li>
                                <li className="hover:text-[gray] transition-all duration-200">
                                    <a href="a">Investors</a>
                                </li>
                            </ul>
                        </div>
                        <div className="">
                            <h3 className="lg:text-[#000929] lg:text-[16px] lg:font-bold lg:leading-[150%]">
                                RESOURCES
                            </h3>
                            <ul className="lg:text-[#000929] lg:opacity-70 lg:text-[16px] lg:font-medium lg:leading-[38px] lg:mt-[16px]">
                                <li className="hover:text-[gray] transition-all duration-200">
                                    <a href="a">Blog</a>
                                </li>
                                <li className="hover:text-[gray] transition-all duration-200">
                                    <a href="a">Guides</a>
                                </li>
                                <li className="hover:text-[gray] transition-all duration-200">
                                    <a href="a">FAQ</a>
                                </li>
                                <li className="hover:text-[gray] transition-all duration-200">
                                    <a href="a">Help Center</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t-[2px] border-solid border-[#E8E6F9]">
                <div className="pt-[32px] px-[24px] pb-[48px] flex flex-col items-center lg:flex lg:flex-row lg:items-center lg:justify-between lg:py-[32px] lg:px-[160px]">
                    <p className="text-[#000929] text-[16px] font-medium leading-[160%] opacity-50 text-center">
                        ©2021 Estatery. All rights reserved
                    </p>
                    <div className="mt-[24px] flex items-center lg:mt-0">
                        <a href="https://www.facebook.com/khanh.vinh.395669?locale=vi_VN">
                            <img
                                src={Fb}
                                alt=""
                                className="opacity-50"
                            />
                        </a>
                        <a href="https://www.instagram.com/v_nguyen04/">
                            <img
                                src={Insta}
                                alt=""
                                className="ml-[40px] opacity-50"
                            />
                        </a>
                        <img
                            src={Twitter}
                            alt=""
                            className="ml-[40px] opacity-50"
                        />
                        <img
                            src={Linkedin}
                            alt=""
                            className="ml-[40px] opacity-50"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer;
