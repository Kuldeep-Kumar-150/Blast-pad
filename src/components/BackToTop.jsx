import React, { useState } from 'react'
import backToTop from '../assets/img/svg/back-to-top-.svg'


const BackToTop = () => {
    const [first, setfirst] = useState(true);
    const onTop = () => {
        document.documentElement.scrollTop = 0;
    };
    window.addEventListener("scroll", () => {
        if (document.documentElement.scrollTop > 200) {
            setfirst(false)
        }
        else {
            setfirst(true)
        }
    });
    return (
        <section>
            <div className="container mx-auto px-3">
                <div className='z-30'>
                    <img onClick={() => onTop()} className={first ? "hidden h-12 cursor-pointer bottom-5 right-5 z-20 fixed back_totop_animation" : "flex h-12 cursor-pointer bottom-5 right-5 z-20 fixed back_totop_animation"} src={backToTop} alt="image" />
                </div>
            </div>
        </section >
    )
}
export default BackToTop