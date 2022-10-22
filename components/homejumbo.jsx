import { useState } from 'react';
import Image from 'next/image';
import Jhony from "../images/jhony.png";
import Bonbon from "../images/bonbon.png";
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
//GiHamburgerMenu

const Homejumbo = () => {
    const [menubar, setMenuBar] = useState(false)
    return (
        <div className='h-auto md:h-[496px] flex flex-col justify-between bg-primary text-white px-12 pt-6'>
            <div className='flex justify-between'>
                <div className='flex justify-between w-[126px]'>
                    <div className="w-[41px] mx-auto rounded-tl-lg pl-2 pt-2 bottom-0 h-[41px] bg-gradient-to-r from-bglogo to-bglogo2">
                        <div className="w-full bottom-0 h-full bg-cover bg-[url('../images/logo.svg')]"></div>
                    </div>
                    <h2><span className='font-bold'>Carbon</span><br />Exchange</h2>
                </div>
                <div className='mdmax:hidden flex mt-3'>
                    <button className='active:text-white/50 active:border-b-[1px] hover:border-b-[1px]'>Marketplace</button>
                    <button className='ml-10 active:text-white/50 active:border-b-[1px] hover:border-b-[1px]'>About</button>
                    <button className='ml-10 active:text-white/50 active:border-b-[1px] hover:border-b-[1px]'>News</button>
                    <button className='border-[#E6E8EC] border-2 hover:text-black/50 hover:shadow-sm active:shadow-inner active:shadow-black hover:shadow-[#23262F]/60 flex justify-between p-1 font-bold rounded-full ml-10 w-[125px] h-[43px] bg-white text-[#23262F]'><div className='grid content-center h-full text-sm'><Image src={Jhony} width='32' alt='jhon doe' /></div><div className='grid content-center h-full text-sm'>Jhon Doe</div><IoIosArrowDown className='grid content-center h-full ' /></button>
                </div>
                <GiHamburgerMenu className='md:hidden text-3xl mt-2 text-white' />
            </div>
            <div className='h-[378px] mdmax:hidden flex justify-between text-[35pt] '>
                <Image src={Bonbon} className=" w-auto" alt='jhon doe' />
                <div className='w-[650px] flex flex-col justify-center'>
                    <p className='text-white leading-relaxed'>Enabling a <span className='font-bold'>new, sustainable</span> Carbon Economy.</p>
                </div>
            </div>
            <p className='w-full mdmax:bg-white/40  text-[35pt] text-center md:hidden text-white leading-relaxed'>Enabling a <span className='font-bold'>new, sustainable</span> Carbon Economy.</p>
        </div>
    )
}

export default Homejumbo