import React, { useState } from 'react'
import Navbar from '../components/navbar'
import Searchbar from '../components/searchbar'
import Image from 'next/image'
import Nogravity from "../images/nogravity.png"
import Image7 from "../images/image7.png"
import Verra from "../images/verra.png"
import Card1 from "../images/card1.png"
import Card2 from "../images/card2.png"
import Card3 from "../images/card3.png"
import Card4 from "../images/card4.png"
import Card from '../components/card'
import Pagination from '@mui/material/Pagination';
import Pagebutton from '../components/pagebutton'
import Footer from '../components/footer'
import Refreshpage from '../components/refreshpage'

const Homepage = () => {
    const [burger, setBurger] = useState(false)
    const [datas, setDatas] = useState([
        { title: "Primary Rainforest REDD+ Project", author: 'Holoscene', tons: 500, max: 760, min: 80, plus: 120, desc: "80 Billion Tons Left", full: "/ 120 Billion Tons", img: Image7, issuer: "Gold Standard", expired: "9 Jun 2023", photo: Card1 },
        { title: "Coast Restoration Project", author: "Sixty Two", tons: 370, max: 400, min: 3.83, plus: 10, desc: "3,83 Billion Tons Left", full: "/ 10 Billion Tons", img: Verra, issuer: "Verra Carbon Standard", expired: "13 Mar 2023", photo: Card2 },
        { title: "Wayne Foundation Conservation Projekt", author: "0.5 Under", tons: 325, max: 800, min: 20, plus: 120, desc: "20 Million Tons Left", full: "/ 120 Billion Tons", img: Image7, issuer: "Gold Standard", expired: "9 Jun 2023", photo: Card3 },
        { title: "Evergreen River Restoration Project", author: "Evergreen", tons: 280, max: 300, min: 80, plus: 84, desc: "80 Billion Tons Left", full: "/ 84 Billion Tons", img: Image7, issuer: "Gold Standard", expired: "9 Jun 2023", photo: Card4 },
        { title: "Coast Restoration Project", author: "Sixty Two", tons: 370, max: 400, desc: "3,83 Billion Tons Left", full: "/ 10 Billion Tons", img: Verra, issuer: "Verra Carbon Standard", expired: "13 Mar 2023", photo: Card2, min: 3.83, plus: 10 },
        { title: "Evergreen River Restoration Project", author: "Evergreen", tons: 280, max: 300, desc: "80 Billion Tons Left", full: "/ 84 Billion Tons", img: Image7, issuer: "Gold Standard", expired: "9 Jun 2023", photo: Card4, min: 80, plus: 84 },
        { title: "Primary Rainforest REDD+ Project", author: 'Holoscene', tons: 500, max: 760, desc: "80 Billion Tons Left", full: "/ 120 Billion Tons", img: Image7, issuer: "Gold Standard", expired: "9 Jun 2023", photo: Card1, min: 80, plus: 120 },
        { title: "Wayne Foundation Conservation Projekt", author: "0.5 Under", tons: 325, max: 800, desc: "20 Million Tons Left", full: "/ 120 Billion Tons", img: Image7, issuer: "Gold Standard", expired: "9 Jun 2023", photo: Card3, min: 20, plus: 120 },
        { title: "Evergreen River Restoration Project", author: "Evergreen", tons: 280, max: 300, desc: "80 Billion Tons Left", full: "/ 84 Billion Tons", img: Image7, issuer: "Gold Standard", expired: "9 Jun 2023", photo: Card4, min: 80, plus: 84 },
        { title: "Primary Rainforest REDD+ Project", author: 'Holoscene', tons: 500, max: 760, desc: "80 Billion Tons Left", full: "/ 120 Billion Tons", img: Image7, issuer: "Gold Standard", expired: "9 Jun 2023", photo: Card1, min: 80, plus: 120 },
        { title: "Coast Restoration Project", author: "Sixty Two", tons: 370, max: 400, desc: "3,83 Billion Tons Left", full: "/ 10 Billion Tons", img: Verra, issuer: "Verra Carbon Standard", expired: "13 Mar 2023", photo: Card2, min: 3.83, plus: 10 },
        { title: "Wayne Foundation Conservation Projekt", author: "0.5 Under", tons: 325, max: 800, desc: "20 Million Tons Left", full: "/ 120 Billion Tons", img: Image7, issuer: "Gold Standard", expired: "9 Jun 2023", photo: Card3, min: 20, plus: 120 },
    ])

    return (
        <div>
            <Navbar burger={burger} klik={() => setBurger(!burger)} />
            <Searchbar />
            <Refreshpage />
            <Card datas={datas} />
            <Pagebutton />
            <Footer />
        </div >
    )
}

export default Homepage