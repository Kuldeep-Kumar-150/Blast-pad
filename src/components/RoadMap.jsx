import React from 'react'
import rocketImg from '../assets/img/svg/timeline_rocket.svg'
import roadMapCloud from '../assets/img/png/roadmap-cloud.png'
const RoadMap = () => {

    return (
        <section className='roadmap_bg_img relative pb-5 lg:pb-40 overflow-hidden'>
            <div className="container mx-auto px-3 relative">
                <h4 className='text-white text-[30px] md:text-[40px] font-bold ff_raleway text-center lg:mt-28 mb-8 sm:mb-12'>Launch Your Project</h4>
                <img className='sticky hidden lg:flex left-[50%] translate-x-[-51%] z-30 top-[-10px] w-44 h-44' src={rocketImg} alt="rocketImg" />
                <div className="timeline_line relative">
                    <div className="p-[21px] ms-16 lg:ms-0 lg:w-[32%] text-white timeline_cards rounded-[15px] left_timeline_box relative">
                        <h5 className='text-[20px] font-bold ff_raleway'>Token</h5>
                        <p className='text-base font-normal ff_raleway text-[#B4B9C8] mt-[10px]'>A token is a sequence of characters that represents a unit of meaning or syntax in a programming language.</p>
                        <a className='px-4 connect_wallet_btn py-2 inline-block bg_blue_linear rounded-full mt-6' href="#">Read more</a>
                    </div>
                    <div className="p-[21px] ms-16 mt-7 lg:mt-0 lg:w-[32%] text-white timeline_cards rounded-[15px] lg:ms-auto right_timeline_box relative">
                        <h5 className='text-[20px] font-bold ff_raleway'>Airdrop</h5>
                        <p className='text-base font-normal ff_raleway text-[#B4B9C8] mt-[10px]'>Airdrops are a marketing strategy used by cryptocurrency projects to distribute tokens to a large number of people.</p>
                        <a className='px-4 connect_wallet_btn py-2 inline-block bg_blue_linear rounded-full mt-6' href="#">Read more</a>
                    </div>
                    <div className="p-[21px] hidden lg:block ms-16 mt-7 lg:mt-0 lg:ms-0 lg:w-[32%] text-white timeline_cards rounded-[15px] left_timeline_box relative">
                        <h5 className='text-[20px] font-bold ff_raleway'>Staking</h5>
                        <p className='text-base font-normal ff_raleway text-[#B4B9C8] mt-[10px]'>Staking is a process by which users hold cryptocurrency in a wallet to support the operations of a blockchain network.</p>
                        <a className='px-4 connect_wallet_btn py-2 inline-block bg_blue_linear rounded-full mt-6' href="#">Read more</a>
                    </div>
                </div>
                <div className="p-[21px] lg:hidden ms-16 mt-7 lg:mt-0 lg:ms-0 lg:w-[32%] text-white timeline_cards rounded-[15px] left_timeline_box relative">
                    <h5 className='text-[20px] font-bold ff_raleway'>Staking</h5>
                    <p className='text-base font-normal ff_raleway text-[#B4B9C8] mt-[10px]'>Staking is a process by which users hold cryptocurrency in a wallet to support the operations of a blockchain network.</p>
                    <a className='px-4 connect_wallet_btn py-2 inline-block bg_blue_linear rounded-full mt-6' href="#">Read more</a>
                </div>
                <img className=' absolute bottom-[-35%] left-0' src={roadMapCloud} alt="roadMapCloud" />
            </div>
        </section>
    )
}

export default RoadMap