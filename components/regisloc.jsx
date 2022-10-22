import { MdGpsFixed } from "react-icons/md";

const Regisloc = () => {
    return (
        <div className="flex flex-col">
            <h2 className="mt-8 mx-auto w-full hp:w-[432px] text-start text-base font-semibold">
                Address
            </h2>
            <div className="flex justify-between px-3 mt-2 mx-auto w-full hp:w-[432px] border-[#D3D4D4] py-4 border-[1px] rounded-lg">
                <div><span className="font-bold">Bassura City,</span> Jatinegara,
                    Jakarta Timur</div><MdGpsFixed className='text-secondary text-xl mt-[1px]' />
            </div>
            <div className="w-full hp:w-[432px] mx-auto mt-1.5">
                <h2 className="text-[#929393]">Helper Text</h2>
            </div>
        </div>
    )
}

export default Regisloc