import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
const ContactUs = () => {
    return (
        <div className="container">
            <div className="contact-us-nav">
                <ul>
                    <Link className='link' to={'/'}><li className='main-page'>Ana səhifə</li></Link>
                    <span className='vertical-bar'>|</span>
                    <li className='contact'>Əlaqə</li>
                </ul>
            </div>
            <div className="contact-us d-flex justify-content-between">
                <div className="contact-us-left">
                    <h3>Bizə yazın !</h3>
                    <div className="contact-form">
                        <form>
                            <div className="form-top d-flex">
                                <input type="text" placeholder='Ad, Soyad*' />
                                <input type='email' placeholder='E-mail*' />
                            </div>
                            <div className="form-bottom d-flex">
                                <input type="text" placeholder='Şirkətin adı' />
                                <input type="text" placeholder='Telefon*' />
                            </div>
                            <textarea className='message' placeholder='Mesaj*'></textarea>
                        </form>
                    </div>
                    <div className="contact-us-btn">
                        <button>Göndər</button>
                    </div>
                </div>
                <div className="contact-us-right">
                    <h4 className='text-center'>Əlaqə</h4>
                    <p>Fətəli Xan Xoyski 111A, Bakı Azərbaycan</p>
                    <div className="number d-flex gap-4">
                        <p>+994(51) 123 45 67</p>
                        <p>+994(12) 123 45 67</p>
                    </div>
                    <p>info@megatexnika.az</p>
                    <p>Qrafik (iş saatlarımız): B.e - Ş. 10:00 - 19:00</p>
                    <div className="contact-us-social">
                        <ul>
                            <li>
                                <Link to={"#"}>
                                    <img src="./src/assets/img/Group(1).svg" alt="Instagram" />
                                </Link>
                            </li>
                            <li>
                                <Link to={"#"}>
                                    <img src="./src/assets/img/Group.svg" alt="Facebook" />
                                </Link>
                            </li>
                            <li>
                                <Link to={"#"}>
                                    <img src="./src/assets/img/Vector.svg" alt="Twitter" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs