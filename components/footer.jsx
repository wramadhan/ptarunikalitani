import React from 'react'

const Footer = () => {
    return (
        <div className='w-full text-white xs:h-[314px] bg-primary xsmax:py-10 xsx:py-10 mdmd:py-[60px] mdmd:px-12 px-4'>
            <div className='mdmd:flex justify-between'>
                <div className='mdmdmax:justify-center mdmdmax:w-full mdmdmax:flex'>
                    <div className='flex w-[126px]'>
                        <div className="w-[41px] mx-auto rounded-tl-lg pl-2 pt-2 bottom-0 h-[41px] bg-gradient-to-r from-bglogo to-bglogo2">
                            <div className="w-full bottom-0 h-full bg-cover bg-[url('../images/logo.svg')]"></div>
                        </div>
                        <div>
                            <h1 className='font-bold'>Carbon</h1>
                            <h1 className='text-white'>Exchange</h1>
                        </div>
                    </div>
                </div>
                <div className='overflow-x-auto'>
                    <div className='flex w-full mdmdmax:mt-6 justify-between'>
                        <div className='mr-[45px]'>
                            <h1 className='font-bold text-xl'>About</h1>
                            <h2 className='mt-4'>CarbonXchange</h2>
                        </div>
                        <div className='mr-[45px]'>
                            <h1 className='font-bold text-xl'>Marketplace</h1>
                            <h2 className='mt-4'>Carbon Marketplace</h2>
                        </div>
                        <div className='mr-[45px]'>
                            <h1 className='font-bold text-xl'>News</h1>
                            <h2 className='mt-4'>Berita Terkini</h2>
                        </div>
                        <div className=''>
                            <h1 className='font-bold text-xl'>Informasi Lainnya</h1>
                            <h2 className='mt-4'>Syarat dan Ketentuan</h2>
                            <h2 className='mt-4'>Kebijakan dan Privasi</h2>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className='text-center w-full mt-10 mdmd:mt-[60px]'>© 2022 PT.Bank Rakyat Indonesia (Persero) Tbk. | All Rights Reserved.</h1>
        </div>
    )
}

export default Footer