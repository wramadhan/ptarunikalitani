import Image from 'next/image';
import Nogravity from "../images/nogravity.png"

const Card = ({ datas }) => {
    return (
        <div className='flex mdlg:px-3 flex-wrap justify-evenly'>
            {datas.map((item, index) => {
                return (
                    <div key={index} className="mx-6 mb-6">
                        <div className='w-[318px] h-[500px] px-4 py-[35px]'>
                            <div className='bg-white shadow-lg w-[318px] h-[500px] px-4 py-[25px]'>
                                <Image src={item.photo} alt="card image" className="w-[286px] h-[160px]" />
                                <h1 className='font-bold text-2xl'>{item.title}</h1>
                                <div className='flex mt-2'>
                                    <div className="[24px] h-[24px] mr-2">
                                        <Image src={Nogravity} alt="card image" className="" />
                                    </div>
                                    <h1 className='text-[#848484] font-semibold '>{item.author}</h1>
                                </div>
                                <div className='flex mt-[18px]'>
                                    <h2 className='font-bold text-[28px] text-secondary'>${item.tons} - ${item.max}</h2>
                                    <div className='flex justify-center flex-col'>
                                        <h2 className='font-normal text-[#777777] text-xs'>/ Tons</h2>
                                    </div>
                                </div>
                                <div className='bg-[#D3D4D4] h-3 w-full rounded-full'>
                                    <div className="bg-secondary h-full rounded-full" style={{ width: item.min * 100 / item.plus + '%' }}></div>
                                </div>
                                <div className='flex justify-between w-full mt-1.5'>
                                    <h2 className='font-sm font-bold'>{item.desc}</h2>
                                    <h3 className='font-xs text-[#777777]'>{item.full}</h3>
                                </div>
                                <div className='w-full mt-[18px] h-0.5 bg-[#EAEBEB]'></div>
                                <div className='flex mt-[18px] justify-between'>
                                    <h2 className='font-medium text-lg text-[#777777]'>Issuer</h2>
                                    <div className='flex'>
                                        <div className='w-6 mr-2 h-6 grid content-center p-[0.5px] rounded-full border-[1px] border-[#EAEBEB]'>
                                            <Image src={item.img} alt="G Logo" />
                                        </div>
                                        <h2 className='font-semibold font-sm'>{item.issuer}</h2>
                                    </div>
                                </div>
                                <div className='flex mt-1 justify-between'>
                                    <h2 className='font-medium text-lg text-[#777777]'>Expired</h2>
                                    <h2 className='font-semibold font-sm'>{item.expired}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Card