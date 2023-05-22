import React from 'react'
import proTon from '../assets/img/png/proton.png'
import earthImg2 from '../assets/img/svg/circle-img.svg'
const BlockChain = () => {
    return (
        <section className='relative my-20 sm:mt-40'>
            <div className="container mx-auto px-3 relative">
                <img className='absolute left-0 top-[-100px]' src={earthImg2} alt="earthImg2" />
                <div className="flex flex-col lg:grid lg:grid-cols-2 items-center">
                    <div>
                        <img className='w-[80%] mx-auto lg:mx-0' src={proTon} alt="proTon" />
                    </div>
                    <div className='card_bg relative text-center lg:text-start'>
                        <h2 className='text-white text-[30px] mt-5 sm:mt-10 sm:text-[40px] font-bold ff_raleway leading-[46px]'>Building On The Proton Blockchain</h2>
                        <p className='text-white text-base font-normal ff_raleway text-opacity-70 mt-4'>Proton is a blockchain platform that was designed to offer fast, scalable, and secure peer-to-peer transactions. It is built on top of the EOSIO software, which is known for its high transaction throughput and low latency.</p>
                        <p className='text-white text-base font-normal ff_raleway text-opacity-70 mt-4'>Proton is specifically designed to cater to the needs of businesses and enterprises, providing them with a blockchain infrastructure that is capable of handling large volumes of transactions without compromising on speed or security. It aims to provide a seamless experience for users, allowing them to transact quickly and efficiently, without the need for intermediaries.</p>
                    </div>
                </div>
            </div>
            <div className="bg-[#4377F8] h-[256px] w-[256px] blur-[175px] absolute right-0 top-[50%] translate-y-[-50%]"></div>
        </section>
    )
}

export default BlockChain