import React from 'react'
import rocketImg from '../assets/img/svg/timeline_rocket.svg'
const RoadMap = () => {
    return (
        <section className='roadmap_bg_img'>
            <div className="container mx-auto px-3">
                <h4 className='text-white text-[40px] font-bold ff_raleway text-center mt-32'>Launch Your Project</h4>
                <div className="timeline_line relative">
                    <img className='mx-auto z-50' src={rocketImg} alt="rocketImg" />
                    <div className="p-[21px] w-[32%] text-white timeline_cards rounded-[15px] left_timeline_box relative">
                        <h5 className='text-[20px] font-bold ff_raleway'>Token</h5>
                        <p className='text-base font-normal ff_raleway text-[#B4B9C8] mt-[10px]'>A token is a sequence of characters that represents a unit of meaning or syntax in a programming language.</p>
                        <a className='px-4 py-2 inline-block bg_blue_linear rounded-full mt-6' href="#">Read more</a>
                    </div>
                    <div className="p-[21px] w-[32%] text-white timeline_cards rounded-[15px] ms-auto right_timeline_box relative">
                        <h5 className='text-[20px] font-bold ff_raleway'>Airdrop</h5>
                        <p className='text-base font-normal ff_raleway text-[#B4B9C8] mt-[10px]'>Airdrops are a marketing strategy used by cryptocurrency projects to distribute tokens to a large number of people.</p>
                        <a className='px-4 py-2 inline-block bg_blue_linear rounded-full mt-6' href="#">Read more</a>
                    </div>
                    <div className="p-[21px] w-[32%] text-white timeline_cards rounded-[15px] left_timeline_box relative">
                        <h5 className='text-[20px] font-bold ff_raleway'>Staking</h5>
                        <p className='text-base font-normal ff_raleway text-[#B4B9C8] mt-[10px]'>Staking is a process by which users hold cryptocurrency in a wallet to support the operations of a blockchain network.</p>
                        <a className='px-4 py-2 inline-block bg_blue_linear rounded-full mt-6' href="#">Read more</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RoadMap