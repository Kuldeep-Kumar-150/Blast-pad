import React, { useRef } from 'react'
import Slider from 'react-slick'
import { recentslider } from './js/RecentTokens'

const RecentTokens = () => {
    const myslider = useRef()
    // console.log(myslider)
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
                                            <p className='text-base font-semibold ff_raleway text-white'>{rslider.totalValue}</p>
                                        </div>
                                        <div className="flex items-center justify-between mt-4">
                                            <p className='text-base font-medium ff_raleway text-white text-opacity-90 underline'>{rslider.stakeToken}</p>
                                            <p className='text-base font-medium ff_raleway text-white text-opacity-90 underline'>{rslider.claimDrop}</p>
                                        </div>
                                        <a href="#" className='bg-gradient-to-r from-[#070380] to-[#4478F9] block py-3 text-center rounded-full border border-[#2D2B95] text-white ff_raleway font-medium text-base mt-8'>{rslider.btn}</a>
                                    </div>
                                </div>

                            )
                        })}
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default RecentTokens