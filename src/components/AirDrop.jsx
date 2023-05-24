import React from 'react'
import MyNav from './MyNav'
import AirDropSlider from './AirDropSlider'
import ChooseTheAir from './ChooseTheAir'
import MyFooter from './MyFooter'

const AirDrop = () => {
    return (
        <>
            <div className='flex flex-col xl:min-h-[100vh] airdrop_bg_img'>
                <MyNav />
                <AirDropSlider />
            </div>
            <ChooseTheAir />
            <MyFooter />
        </>
    )
}

export default AirDrop