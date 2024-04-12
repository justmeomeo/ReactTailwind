const Form = () => {
    return (
        <div className="py-[48px] px-[24px] bg-[#100A55]">
            <div className="lg:flex lg:flex-col lg:items-center">
                <h2 className="text-[#7065F0] text-[24px] font-bold leading-[150%] tracking-[-0.24px] text-center">
                    No Spam Promise
                </h2>
                <h3 className="mt-[8px] text-[#FFFFFF] text-[32px] font-bold leading-[125%] tracking-[-0.32px] text-center">
                    Are you a landlord?
                </h3>
                <p className="text-[#D3D5DA] text-[16px] font-normal text-center leading-[160%] mt-[16px]">
                    Discover ways to increase your home's value and get listed.
                    No Spam.
                </p>
                <div className="lg:flex lg:items-center lg:justify-center lg:w-[543px] lg:h-[80px] lg:relative lg:mt-[32px]">
                    <input
                        type="text"
                        placeholder="Enter your email address"
                        id="email"
                        className="mt-[48px] py-[15px] px-[24px] w-full h-full rounded-[8px] shadow-[0px_0px-30px_0px_rgba(117, 112, 255, 0.08)] lg:mt-0 outline-none"
                    />
                    <button
                        id="submit"
                        className="w-full flex items-center justify-center px-[40px] py-[12px] text-[#FFFF] text-[16px] font-bold leading-[150%] bg-[#7065F0] rounded-[8px] mt-[16px] lg:absolute lg:mt-0 lg:w-[140px] lg:right-[16px] lg:hover:scale-105 transition-all duration-300"
                    >
                        Submit
                    </button>
                </div>
                <p className="text-[#9EA3AE] text-[14px] font-normal leading-[140%] mt-[24px] text-center">
                    Join <span className="text-[#FFFFFF]">10,000+</span> other
                    landlords in our estatery community.
                </p>
            </div>
        </div>
    );
};
export default Form;
