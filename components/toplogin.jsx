import React from 'react'

const Toplogin = ({ title, desc }) => {
    return (
        <>
            <div className="w-[41px] mx-auto rounded-tl-lg pl-2 pt-2 bottom-0 h-[41px] bg-gradient-to-r from-bglogo to-bglogo2">
                <div className="w-full bottom-0 h-full bg-cover bg-[url('../images/logo.svg')]"></div>
            </div>
            <h1 className="mt-6 font-bold text-3xl text-center">{title}</h1>

            <p className="text-base text-center mt-3 text-[#848484]">
                {desc}
            </p>
        </>
    )
}

export default Toplogin