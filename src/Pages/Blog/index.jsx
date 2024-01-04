import React from 'react'
import HeaderTop from '../../Components/HeaderTop'
import Navbar from '../../Components/Navbar'
import BlogNews from '../../Components/BlogNews'
import BlogNewsCard from '../../Components/BlogNewsCard'
import Footer from '../../Components/Footer'

const Blog = () => {
    return (
        <>
            <HeaderTop />
            <Navbar />
            <BlogNews/>
            <BlogNewsCard/>
            <Footer/>
        </>
    )
}

export default Blog