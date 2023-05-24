import React, { useRef, useState } from 'react'
import Slider from 'react-slick'
import { recentslider } from './js/RecentTokens'
import bitcoin from "../assets/img/svg/bitcoin.svg";
import modalRocket from "../assets/img/svg/modal-rocket.svg";
const RecentTokens = () => {
    const [modal, setModal] = useState(false);
    const myslider = useRef()
    var mySlider = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 1600,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 1600,
                },
            },
        ],
    };
    return (
        <section className='flex flex-col items-center justify-center flex-grow'>
            <div className="container mx-auto px-3 relative">

                <h5 className='text-[30px] sm:text-[40px] font-semibold ff_raleway text-white text-center mt-10 sm:mt-20 xl:mt-0'>All Recent Tokens</h5>
                <div className="relative">
                    <button onClick={() => myslider.current.slickPrev()} className="h-12 flex max-[1260px]:hidden absolute w-[52px] 2xl:-left-24 -left-14  top-[50%] translate-y-[-50%] bg-[#0B0A34] rounded-[6px] border border-[#2F2D50]  items-center justify-center">
                        <svg
                            width="14"
                            height="24"
                            viewBox="0 0 14 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M13.8588 3.42857L5.28739 12L13.8588 20.5714L12.1445 24L0.144531 12L12.1445 -2.38419e-07L13.8588 3.42857Z"
                                fill="white"
                            />
                        </svg>
                    </button>
                    <button onClick={() => myslider.current.slickNext()}
                        className="h-12 flex max-[1260px]:hidden absolute 2xl:-right-24 -right-14  top-[50%] translate-y-[-50%] w-[52px] bg-[#0B0A34] rounded-[6px] border border-[#2F2D50]  items-center justify-center"
                    >
                        <svg
                            width="14"
                            height="24"
                            viewBox="0 0 14 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0.141183 3.42857L8.71261 12L0.141183 20.5714L1.85547 24L13.8555 12L1.85547 0L0.141183 3.42857Z"
                                fill="white"
                            />
                        </svg>
                    </button>
                    <Slider {...mySlider} ref={myslider} className=' mt-8 sm:mt-10 md:mt-14'>
                        {recentslider.map((rslider) => {
                            return (
                                <div className="px-3">
                                    <div className="px-[19px] py-6 border border-[#242246] bg-[#0F0933] rounded-2xl">
                                        <div className="flex items-center">
                                            <div className="h-[70px] w-[70px] flex items-center justify-center rounded-[10px] bg-[#29234A]">
                                                <img src={rslider.img} alt="" />
                                            </div>
                                            <div className='ms-4'>
                                                <p className='text-white text-[20px] font-bold ff_raleway'>{rslider.headingName}</p>
                                                <p className='text-white ff_raleway font-normal text-sm text-opacity-70'>{rslider.btc}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between mt-8">
                                            <p className='text-base font-normal ff_raleway text-opacity-90 text-white'>{rslider.total}</p>
                                            <p className='text-base font-semibold ff_raleway text-white font_feature'>{rslider.totalValue}</p>
                                        </div>
                                        <div className="flex items-center justify-between mt-4">
                                            <p className='text-base font-medium ff_raleway text-white text-opacity-80 underline'>{rslider.stakeToken}</p>
                                            <p className='text-base font-medium ff_raleway text-white text-opacity-80 underline'>{rslider.claimDrop}</p>
                                        </div>
                                        <button onClick={() => setModal(true)} className='bg-gradient-to-r from-[#070380] to-[#4478F9] w-full py-3 text-center rounded-full border border-[#2D2B95] text-white ff_raleway font-medium text-base mt-8'>{rslider.btn}</button>
                                    </div>
                                </div>

                            )
                        })}
                    </Slider>
                    {/*******--MODAL--*******/}
                    <div
                        className={
                            modal === true
                                ? "scale-100 ease-in-out duration-500 z-50 absolute sm:fixed top-[-60%] sm:top-[50%] left-[50%] translate-x-[-50%] sm:translate-y-[-50%] w-[95%] xl:w-[970px]"
                                : "w-[95%] xl:w-[970px] scale-0 ease-in-out duration-500 z-50 rounded-[15px] absolute sm:fixed top-30 sm:top-[50%] left-[50%] translate-x-[-50%] sm:translate-y-[-50%]"}>
                        <div className="bg-[#515C76] border border-[#747D91] rounded-[15px]">
                            <div className="grid grid-cols-1 lg:grid-cols-2 py-3 lg:pt-20 px-3 lg:px-10 lg:pb-10">
                                <div className="flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center">
                                            <img className="w-[50px]" src={bitcoin} alt="bitcoin" />
                                            <div className="ms-4">
                                                <p className="text-base font-bold ff_raleway text-white">
                                                    Bitcoin
                                                </p>
                                                <p className="text-[14px] font-normal ff_raleway text-white text-opacity-70">
                                                    $BTC
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center mt-6">
                                            <img
                                                className="w-[50px]"
                                                src={modalRocket}
                                                alt="modalRocket"
                                            />
                                            <div className="ms-4">
                                                <p className="text-[17px] font-medium ff_inter text-white">
                                                    BlastPad.io
                                                </p>
                                                <div className="lg:flex">
                                                    <p className="text-[12px] font-normal ff_raleway text-[#CACED5]">
                                                        www.Blastpad.com
                                                    </p>
                                                    <p className="text-[12px] font-normal ff_raleway text-[#CACED5] lg:ms-[50px]">
                                                        xyz@example.com
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-base font-bold ff_raleway text-white mt-[18px]">
                                            Project Information
                                        </p>
                                        <p className="text-white text-base font-normal  ff_raleway #CACED5 mt-4">
                                            Lorem ipsum dolor sit amet consectetur. Odio hac malesuada
                                            semper turpis leo pellentesque ac. In porttitor donec
                                            neque varius eget pretium fusce magna iaculis. Eu magnis
                                            aliquam vitae fermentum orci ultrices. Gravida a orci
                                            auctor varius lacus suspendisse pulvinar scelerisque.
                                            Elementum sed egestas quis consectetur non arcu felis
                                            pharetra ultrices. Feugiat euismod gravida odio pretium
                                            netus..felis pharetra ultrices. Feugiat euismod gravida
                                            odio pretium netus..
                                        </p>
                                    </div>
                                    <div className="flex gap-4 mt-5 lg:mt-10">
                                        <div className="h-[36px] w-[36px] border rounded-full flex justify-center items-center cursor-pointer social_icons relative">
                                            <svg
                                                width="17"
                                                height="17"
                                                viewBox="0 0 17 13"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M16.0944 1.95846C15.5377 2.20512 14.9397 2.37179 14.311 2.44712C14.9597 2.05899 15.445 1.4481 15.6764 0.728458C15.0669 1.09045 14.3999 1.34525 13.7044 1.48179C13.2366 0.982368 12.6171 0.651342 11.9419 0.540108C11.2668 0.428873 10.5738 0.543653 9.97052 0.866627C9.36728 1.1896 8.88755 1.7027 8.6058 2.32626C8.32405 2.94982 8.25605 3.64896 8.41236 4.31512C7.17749 4.25312 5.96945 3.93216 4.86665 3.37306C3.76385 2.81397 2.79093 2.02923 2.01103 1.06979C1.74436 1.52979 1.59103 2.06312 1.59103 2.63112C1.59073 3.14245 1.71665 3.64595 1.95762 4.09695C2.19858 4.54794 2.54714 4.93248 2.97236 5.21646C2.47922 5.20077 1.99695 5.06751 1.5657 4.82779V4.86779C1.56565 5.58495 1.81372 6.28004 2.26782 6.83512C2.72192 7.3902 3.35408 7.77108 4.05703 7.91313C3.59955 8.03693 3.11992 8.05517 2.65436 7.96646C2.8527 8.58353 3.23903 9.12314 3.75928 9.50974C4.27952 9.89634 4.90764 10.1106 5.5557 10.1225C4.45559 10.9861 3.09696 11.4545 1.69836 11.4525C1.45062 11.4525 1.20308 11.4381 0.957031 11.4091C2.37668 12.3219 4.02926 12.8063 5.71703 12.8045C11.4304 12.8045 14.5537 8.07246 14.5537 3.96846C14.5537 3.83512 14.5504 3.70046 14.5444 3.56712C15.1519 3.12777 15.6763 2.58372 16.093 1.96046L16.0944 1.95846Z"
                                                    fill="white"
                                                />
                                            </svg>
                                        </div>
                                        <div className="h-[36px] w-[36px] border rounded-full flex justify-center items-center cursor-pointer social_icons relative">
                                            <svg
                                                width="15"
                                                height="14"
                                                viewBox="0 0 15 14"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M7.00202 4.66567C5.71668 4.66567 4.66774 5.71463 4.66774 7C4.66774 8.28537 5.71668 9.33433 7.00202 9.33433C8.28737 9.33433 9.33631 8.28537 9.33631 7C9.33631 5.71463 8.28737 4.66567 7.00202 4.66567ZM14.0031 7C14.0031 6.03335 14.0119 5.07545 13.9576 4.11055C13.9033 2.98979 13.6476 1.99512 12.8281 1.17556C12.0068 0.35426 11.0139 0.100338 9.89317 0.0460516C8.92654 -0.00823506 7.96866 0.000520879 7.00378 0.000520879C6.03714 0.000520879 5.07926 -0.00823506 4.11438 0.0460516C2.99364 0.100338 1.99899 0.356011 1.17945 1.17556C0.35816 1.99687 0.104243 2.98979 0.049957 4.11055C-0.00432866 5.0772 0.00442712 6.0351 0.00442712 7C0.00442712 7.9649 -0.00432866 8.92455 0.049957 9.88945C0.104243 11.0102 0.359911 12.0049 1.17945 12.8244C2.00074 13.6457 2.99364 13.8997 4.11438 13.9539C5.08101 14.0082 6.03889 13.9995 7.00378 13.9995C7.97041 13.9995 8.92829 14.0082 9.89317 13.9539C11.0139 13.8997 12.0086 13.644 12.8281 12.8244C13.6494 12.0031 13.9033 11.0102 13.9576 9.88945C14.0136 8.92455 14.0031 7.96665 14.0031 7ZM7.00202 10.5917C5.01447 10.5917 3.41041 8.98759 3.41041 7C3.41041 5.01241 5.01447 3.40832 7.00202 3.40832C8.98958 3.40832 10.5936 5.01241 10.5936 7C10.5936 8.98759 8.98958 10.5917 7.00202 10.5917ZM10.7407 4.10004C10.2767 4.10004 9.90193 3.72529 9.90193 3.26122C9.90193 2.79716 10.2767 2.42241 10.7407 2.42241C11.2048 2.42241 11.5795 2.79716 11.5795 3.26122C11.5797 3.37142 11.5581 3.48056 11.516 3.58239C11.4739 3.68422 11.4121 3.77675 11.3342 3.85467C11.2562 3.93258 11.1637 3.99437 11.0619 4.03647C10.9601 4.07858 10.8509 4.10018 10.7407 4.10004Z"
                                                    fill="white"
                                                />
                                            </svg>
                                        </div>
                                        <div className="h-[36px] w-[36px] border rounded-full flex justify-center items-center cursor-pointer social_icons relative">
                                            <svg
                                                width="17"
                                                height="13"
                                                viewBox="0 0 17 13"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M13.877 1.66205C12.857 1.20205 11.7637 0.862048 10.6204 0.668715C10.6102 0.66676 10.5996 0.66802 10.5902 0.67232C10.5808 0.67662 10.5729 0.683747 10.5677 0.692715C10.4277 0.938715 10.2717 1.25938 10.1624 1.51271C8.94975 1.33154 7.71696 1.33154 6.50435 1.51271C6.38257 1.23196 6.24525 0.958198 6.09302 0.692715C6.08786 0.683637 6.08005 0.676348 6.07064 0.671822C6.06123 0.667295 6.05067 0.665746 6.04035 0.667381C4.89769 0.860715 3.80435 1.20071 2.78369 1.66138C2.7749 1.66506 2.76746 1.67135 2.76235 1.67938C0.687685 4.72938 0.119018 7.70405 0.398352 10.6414C0.399129 10.6486 0.401362 10.6555 0.404915 10.6618C0.408468 10.6681 0.413266 10.6737 0.419018 10.678C1.62995 11.5597 2.98058 12.2313 4.41435 12.6647C4.42435 12.6678 4.43504 12.6678 4.44503 12.6647C4.45502 12.6616 4.46384 12.6556 4.47035 12.6474C4.77835 12.234 5.05302 11.7974 5.28769 11.3387C5.30169 11.312 5.28835 11.28 5.26035 11.2694C4.82969 11.1072 4.41241 10.9115 4.01235 10.684C4.00516 10.6799 3.99911 10.6741 3.99472 10.6671C3.99034 10.6601 3.98777 10.6521 3.98724 10.6438C3.98671 10.6356 3.98824 10.6273 3.99169 10.6198C3.99515 10.6123 4.00041 10.6057 4.00702 10.6007C4.09102 10.5387 4.17502 10.474 4.25502 10.4094C4.26222 10.4036 4.27089 10.3999 4.28007 10.3987C4.28926 10.3975 4.29858 10.3989 4.30702 10.4027C6.92502 11.5787 9.76035 11.5787 12.3477 10.4027C12.3561 10.3987 12.3656 10.3971 12.3749 10.3982C12.3842 10.3992 12.393 10.4029 12.4004 10.4087C12.4804 10.474 12.5637 10.5387 12.6484 10.6007C12.655 10.6056 12.6604 10.6121 12.6639 10.6195C12.6675 10.627 12.6692 10.6352 12.6688 10.6435C12.6684 10.6517 12.6659 10.6597 12.6617 10.6668C12.6574 10.6739 12.6515 10.6798 12.6444 10.684C12.2457 10.9134 11.831 11.1074 11.3957 11.2687C11.389 11.2711 11.3829 11.275 11.3778 11.2799C11.3727 11.2849 11.3688 11.2909 11.3662 11.2975C11.3636 11.3042 11.3624 11.3113 11.3628 11.3184C11.3632 11.3255 11.3651 11.3324 11.3684 11.3387C11.6084 11.7967 11.883 12.2327 12.185 12.6467C12.1913 12.6552 12.2 12.6616 12.2101 12.6649C12.2201 12.6682 12.2309 12.6684 12.241 12.6654C13.6773 12.2331 15.0301 11.5612 16.2424 10.678C16.2483 10.6739 16.2532 10.6686 16.2569 10.6624C16.2606 10.6561 16.2629 10.6492 16.2637 10.642C16.597 7.24605 15.705 4.29538 13.8977 1.68071C13.8933 1.67222 13.8859 1.66559 13.877 1.66205ZM5.67902 8.85271C4.89102 8.85271 4.24102 8.14005 4.24102 7.26605C4.24102 6.39138 4.87835 5.67938 5.67902 5.67938C6.48569 5.67938 7.12969 6.39738 7.11702 7.26605C7.11702 8.14071 6.47969 8.85271 5.67902 8.85271ZM10.9957 8.85271C10.207 8.85271 9.55769 8.14005 9.55769 7.26605C9.55769 6.39138 10.1944 5.67938 10.9957 5.67938C11.8024 5.67938 12.4464 6.39738 12.4337 7.26605C12.4337 8.14071 11.803 8.85271 10.9957 8.85271Z"
                                                    fill="white"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:ps-10 mt-6 lg:mt-0">
                                    <form className="flex flex-col justify-between">
                                        <div>
                                            <h3 className="text-2xl font-semibold ff_raleway text-white mb-6">
                                                Have a Query?
                                            </h3>
                                            <label
                                                className="text-base font-normal ff_raleway text-white text-opacity-80"
                                                htmlFor="name"
                                            >
                                                Name <br />
                                                <input
                                                    className="w-full mt-[10px] text-base font-normal ff_raleway text-[#CBCFDA] outline-none py-[18px] px-4 rounded bg-[#505F83] border-[1.27px] border-[#626F8F]"
                                                    id="name"
                                                    placeholder="Enter name"
                                                    type="text"
                                                />
                                            </label>
                                            <label
                                                className="text-base block mt-4 font-normal ff_raleway text-white text-opacity-80"
                                                htmlFor="email"
                                            >
                                                Email Address <br />
                                                <input
                                                    className="w-full mt-[10px] text-base font-normal ff_raleway text-[#CBCFDA] outline-none py-[18px] px-4 rounded bg-[#505F83] border-[1.27px] border-[#626F8F]"
                                                    id="email"
                                                    placeholder="nickraja@example.com"
                                                    type="text"
                                                />
                                            </label>
                                            <label
                                                className="text-base block mt-4 font-normal ff_raleway text-white text-opacity-80"
                                                htmlFor="message"
                                            >
                                                Message
                                                <textarea
                                                    className="w-full mt-[10px] resize-none hide_scroll_bar min-h-[106px] outline-none p-[18px] bg-[#505F83]  text-base font-normal ff_raleway rounded border-[1.27px] border-[#626F8F] text-[#CBCFDA]"
                                                    id="message"
                                                    placeholder="Lorem ipsum dolor sit amet consectetur. Purus a vestibulum nisl eget mattis leo. Turpis ut aenean ante ut consectetur iaculis leo. Malesuada."
                                                ></textarea>
                                            </label>
                                        </div>
                                        <div>
                                            <a
                                                onClick={() => setModal(false)}
                                                className="bg_blue_linear py-[10px] px-[36px] inline-block rounded-full text-[18px] font-semibold text-white ff_raleway mt-[20px]"
                                                href="#"
                                            >
                                                Sumit
                                            </a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RecentTokens