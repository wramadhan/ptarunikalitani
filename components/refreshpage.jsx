import { Icon } from '@iconify/react';

const Refreshpage = () => {
    return (
        <div className='w-full px-4 mdlg:px-12 mt-10 flex justify-between'>
            <div className='flex'>
                <button className='shadow-md active:shadow-inner shadow-black/20 active:shadow-black/40 w-8 h-8 bg-white rounded-lg'>
                    <Icon className="mx-auto" icon="ic:round-refresh" color="#777" width="15" height="15" inline={true} />
                </button>
                <div className='flex justify-center flex-col ml-4'>
                    <h2 className='text-[#666666] text-sm'>Updated 2min ago</h2>
                </div>
            </div>
            <h2 className='text-sm font-semibold'>1.000 items</h2>
        </div>
    )
}

export default Refreshpage