import { BiSearchAlt2 } from "react-icons/bi";
import { Icon } from '@iconify/react';

const Searchbar = () => {
    return (
        <div className="pt-[81px]">
            <div className='shadow-md mdlgmax:py-4 mdlg:h-[100px] flex flex-col justify-center px-4 mdlg:px-12'>
                <div className='mdlg:flex justify-between'>
                    <div className="flex flex-col justify-center">
                        <h2 className="text-[28px] mdlgmax:text-center font-semibold">All Project</h2>
                    </div>
                    <div className="flex justify-between w-full mdlgmax:my-3 mdlg:w-[432px] bg-white rounded-xl border-[#E6E8EC] border-2 px-4 h-[52px]">
                        <input type='text' placeholder='search project' className="w-full focus:font-bold bg-none" />
                        <div className="flex flex-col justify-center">
                            <BiSearchAlt2 className="text-right text-xl" />
                        </div>
                    </div>
                    <div className="flex justify-between w-full mdlg:w-[232px]">
                        <div className="flex justify-between w-full mdlg:w-[156px] bg-white rounded-xl text-[#777777] border-[#E6E8EC] border-2 px-4 h-[52px]">
                            <select className='w-full'>
                                <option value="highest price" >Sort By</option>
                                <option value="highest price" >Highest Price</option>
                                <option value="lower price" >Lower Price</option>
                                <option value="az" >A - Z</option>
                                <option value="za" >Z - A</option>
                            </select>
                        </div>
                        <button className="flex justify-between w-[52px] bg-white rounded-xl border-[#E6E8EC] border-2 h-[52px]">
                            <Icon icon="gg:sort-az" className="text-[#777777] w-[30px] mx-auto h-[50px]" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Searchbar