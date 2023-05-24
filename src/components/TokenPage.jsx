import React from 'react'
import RecentTokens from './RecentTokens'
import MyNav from './MyNav'

const TokenPage = () => {
    return (
        <>
            <div className='create_token_bg_img flex flex-col xl:min-h-[100vh]'>
                <MyNav />
                <RecentTokens />
            </div>

        </>
    )
}

export default TokenPage