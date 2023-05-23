import React from 'react'
import headerImg from '../assets/img/png/header-rocket-img.png'
import smallRocket from '../assets/img/svg/small-rocket.svg'
import earthImg from '../assets/img/svg/earth-img.svg'
import cloudImg from '../assets/img/svg/cloud-img.svg'
import cloudImg2 from '../assets/img/svg/cloud-img-2.png'
import cloudImg3 from '../assets/img/svg/cloud-img-3.svg'
const Header = () => {
    return (
        <header className='flex flex-col items-center justify-center flex-grow relative'>
            <img className='absolute right-0 bottom-0' src={cloudImg2} alt="cloudImg2" />
            {/* <img className='absolute right-0 bottom-0 hidden lg:flex' src={cloudImg3} alt="cloudImg3" /> */}
            <div className="container mx-auto px-3 lg:my-10 xl:my-0 my-10">
                <img className='absolute right-0 top-[42%] w-[163px] hidden sm:flex' src={earthImg} alt="earthImg" />
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:my-10 lg:py-10 xl:py-0 xl:my-0">
                    <div className='z-20 text-center lg:text-start'>
                        <p className='text-base font-semibold ff_raleway text-[#4377F8]'>Exponentially grow your brand</p>
                        <h1 className='text-[39px] sm:text-[70px] md:text-[60px] xl:text-[70px] leading-[45px] lg:leading-[75px] xl:leading-[85px] sm:leading-[90px] font-bold ff_raleway text-white  mt-3 sm:mt-[22px]'>The fastest way to launch your new project</h1>
                        <a href="#" className='text-lg font-semibold ff_raleway text-white py-[18px] px-9 bg_blue_linear rounded-full inline-block mt-10 md:mt-[66px]'>Learn more</a>
                    </div>
                    <div className='relative mt-10'>
                        <img className='w-full mx-auto' src={headerImg} alt="headerImg" />
                        <img className='absolute top-[-30px] left-36 hidden lg:flex' src={smallRocket} alt="smallRocket" />
                        <div className="small_circle absolute top-4 right-[-90px]"></div>
                        <div className='absolute bottom-[-10%] left-10'>
                            <img className='relative' src={cloudImg} alt="cloudImg" />
                            <p className='text-base font-black absolute top-[35%] left-[20%] ff_raleway'>Launch Your Project</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header