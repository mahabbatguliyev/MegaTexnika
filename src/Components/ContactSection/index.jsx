import React from 'react'
import './style.css'
import { useTranslation } from 'react-i18next'
const ContactSection = () => {
    const {t}=useTranslation('contact');
    const {t:t2}=useTranslation('hero')
    return (
        <section id='contact'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-3">
                        <div className="contact-text">
                            <h5>{t('contact us !')}</h5>
                            <p>{t2("lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled")}</p>
                            <form>
                                <div className="form-top d-flex">
                                    <input type="text" placeholder={t('first name and last name')} />
                                    <input type="text" placeholder={t('company name')} />
                                </div>
                                <div className="form-bottom d-flex">
                                    <input type="text" placeholder={t('e-mail')} />
                                    <input type="text" placeholder={t('phone')} />
                                </div>
                            </form>
                            <button>{t('send')}</button>
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