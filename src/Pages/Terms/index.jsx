import React from 'react'
import HeaderTop from '../../Components/HeaderTop'
import Navbar from '../../Components/Navbar'
import TermsContent from '../../Components/TermsContent'
import TermsFaq from '../../Components/TermsFaq'
import Footer from '../../Components/Footer'

const Terms = () => {
    return (
        <>
            <HeaderTop />
            <Navbar />
            <TermsContent/>
            <TermsFaq/>
            <Footer/>
        </>
    )
}

export default Terms