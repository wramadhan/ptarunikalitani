import Image from 'next/image';
import Jhony from "../images/jhony.png";
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ burger, klik }) => {
    return (
        <div className='w-full fixed bg-white z-50'>
            <div className='shadow-md h-[81px] flex flex-col justify-center px-4 mdlg:px-12'>
                <div className='flex justify-between'>
                    <div className='flex justify-between w-auto'>
                        <div className="w-[41px] mx-auto rounded-tl-lg pl-2 pt-2 bottom-0 h-[41px] bg-gradient-to-r from-bglogo to-bglogo2">
                            <div className="w-full bottom-0 h-full bg-cover bg-[url('../images/logo.svg')]"></div>
                        </div>
                        <button className='font-bold ml-3'>Marketplace</button>
                        <div className='hpmax:hidden w-0.5 mx-8 h-full bg-[#E6E8EC]'></div>
                        <button className='text-sm hover:text-black/70 font-bold hpmax:hidden'>Project List</button>
                        <button className='hpmax:hidden text-sm ml-8 hover:text-black/70'>How it works</button>
                    </div>
                    <div className='mdlgmax:hidden flex'>
                        <button className='ml-10 text-white active:text-white/50 active:border-b-[1px] hover:border-b-[1px] px-[33px] font-light hover:shadow-inner hover:shadow-white active:shadow-black bg-secondary rounded-full'>Create New Project</button>
                        <button className='border-[#E6E8EC] border-2 hover:text-black/50 hover:shadow-sm active:shadow-inner active:shadow-black hover:shadow-[#23262F]/60 flex justify-between p-1 font-bold rounded-full ml-10 w-[140px] h-[43px] bg-white text-[#23262F]'><div className='grid content-center h-full text-sm'><Image src={Jhony} width='32' alt='jhon doe' /></div><div className='grid content-center h-full text-sm'>Jhon Doe</div><IoIosArrowDown className='grid content-center h-full mr-2' /></button>
                    </div>
                    <button onClick={klik} className='flex active:rotate-90 flex-col mdlg:hidden justify-center'>
                        <GiHamburgerMenu className='active:rotate-180 text-3xl' />
                    </button>
                </div>
            </div>
            {burger ? (<div className='mdlg:hidden w-full'>
                <div className='flex flex-col h-full py-4 bg-primary/20 shadow-inner shadow-black'>
                    <div className='mx-auto text-center'>
                        <button className='mb-4 text-sm hover:text-black/70 font-bold hover:border-b-2 hp:hidden'>Project List</button>
                    </div>
                    <div className='mx-auto text-center'>
                        <button className='text-sm hover:text-black/70 hover:border-b-2 hp:hidden'>How it works</button>
                    </div>
                    <div className='mdlg:hidden mx-auto my-4'>
                        <button className='text-white active:text-white/50 active:border-b-[1px] hover:border-b-[1px] px-[15px] font-light hover:shadow-inner hover:shadow-white active:shadow-black bg-secondary rounded-full'>Create New Project</button>
                    </div>
                    <div className='mdlg:hidden mx-auto'>
                        <button className='border-[#E6E8EC] border-2 hover:text-black/50 hover:shadow-sm active:shadow-inner active:shadow-black hover:shadow-[#23262F]/60 flex justify-between p-1 font-bold rounded-full  w-[140px] h-[43px] bg-white text-[#23262F]'><div className='grid content-center h-full text-sm'><Image src={Jhony} width='32' alt='jhon doe' /></div><div className='grid content-center h-full text-sm'>Jhon Doe</div><IoIosArrowDown className='grid content-center h-full mr-2' /></button>
                    </div>
                </div>
            </div>) : <></>}

        </div>
    )
}

export default Navbar