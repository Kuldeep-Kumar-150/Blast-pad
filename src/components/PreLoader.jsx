import React from 'react'
import pageLogo from '../assets/img/svg/page_logo.svg'
const PreLoader = () => {
    setTimeout(() => {
        document.querySelector(".preloader").style.display = "none"
        document.body.classList.remove("overflow-hidden")
    }, 2500);
    return (
        <section>
            <div className="container mx-auto px-3">
                <div className="min-h-[100vh] preloader z-50 flex items-center justify-center fixed bg-black w-full left-0 top-0">
                    <div className="flex items-center">
                        <img className='preloader_animation' src={pageLogo} alt="pageLogo" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PreLoader