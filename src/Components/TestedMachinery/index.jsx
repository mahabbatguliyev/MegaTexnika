import React from 'react'
import './style.css'
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
const TestedMachinery = () => {
    const loacation = useLocation();
    const isMachineryPage = loacation.pathname === '/'
    return (
        <section id='tested-machinery'>
            <div className="container">
                <div className="machinery-wrapper d-flex">
                    <div className="tm-left">
                        <img src="./src/assets/img/image 7.svg" alt="Tested machinery img" />
                    </div>
                    <div className="tm-right-content">
                        <div className="tm-right text-center">
                            <img src="./src/assets/img/image 6.svg" alt="Tested machinery img" />
                            <div className="tm-content text-center">
                                <h3>Mega Texnika-da sınaqdan keçirilmiş texnikalar</h3>
                                {isMachineryPage ?
                                    <>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the <br /> industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type <br />and scrambled</p>
                                        <div className="tm-right-btn">
                                            <Link to={"/haqqımızda"}><button>Haqqımızda</button></Link>
                                        </div>
                                    </>
                                    : <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TestedMachinery