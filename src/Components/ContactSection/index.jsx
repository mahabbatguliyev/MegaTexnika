import React from 'react'
import './style.css'
const ContactSection = () => {
    return (
        <section id='contact'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-3">
                        <div className="contact-text">
                            <h5>Bizimlə əlaqə saxla!</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
                            <form>
                                <div className="form-top d-flex">
                                    <input type="text" placeholder='Ad, soyad' />
                                    <input type="text" placeholder='Şirkətin adı' />
                                </div>
                                <div className="form-bottom d-flex">
                                    <input type="text" placeholder='E-mail' />
                                    <input type="text" placeholder='Telefon' />
                                </div>
                            </form>
                            <button>Göndər</button>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-9">
                        <div className="contact-img">
                            <img src="./src/assets/img/image 22.svg" alt="Contact img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection