import React from 'react'
import Navbar from '../Navbar';
import Hero from '../Hero';
import HeaderTop from '../HeaderTop';
const Header = () => {
    return (
        <header>
            <HeaderTop />
            <Navbar />
            <Hero />
        </header>

    )
}

export default Header