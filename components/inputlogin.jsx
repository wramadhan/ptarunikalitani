import React from 'react'

const Inputlogin = ({ label, placeholder, type, wrong, handleFill }) => {
    return (
        <div className="flex flex-col">
            <h2 className="mt-8 mx-auto  w-full hp:w-[432px] text-start text-base font-semibold">
                {label}
            </h2>
            {wrong ? (<input
                onChange={handleFill}
                type={type}
                className="px-3 mt-2 focus:font-semibold mx-auto w-full hp:w-[432px] border-[#E84040] border-[1px] py-4 rounded-lg"
                placeholder={placeholder}
            />) : (<input onChange={handleFill}
                type={type} className="px-3 mt-2 focus:font-semibold mx-auto w-full hp:w-[432px] border-[#D3D4D4] py-4 border-[1px] rounded-lg"
                placeholder={placeholder}
            />)}
        </div>
    )
}

export default Inputlogin