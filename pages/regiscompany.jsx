import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Header from '../components/header'

const Regiscompany = () => {
    return (
        <div>
            <Header status="Company Register" />
            <Navbar />
            <div className='h-[81px]'></div>
            <div className='bottom-0 absolute w-full'>
                <Footer />
            </div>
        </div>
    )
}

export default Regiscompany