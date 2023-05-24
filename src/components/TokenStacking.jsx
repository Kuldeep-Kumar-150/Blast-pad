import React from 'react'
import StakeYourTokens from './StakeYourTokens'
import OurActive from './OurActive'
import MyNav from './MyNav'
import BlaspadBonesSection from './BlaspadBonesSection'
import MyFooter from './MyFooter'
const TokenStacking = () => {
    return (
        <div>
            <div className='header_img_2 xl:flex xl:flex-col xl:min-h-[100vh]'>
                <MyNav />
                <OurActive />
            </div>
            <BlaspadBonesSection />
            <StakeYourTokens />
            <MyFooter />
        </div>
    )
}

export default TokenStacking