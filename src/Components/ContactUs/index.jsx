import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
const ContactUs = () => {
    const { t } = useTranslation('contactUs');
    const { t: t2 } = useTranslation('navbar');
    const { t: t3 } = useTranslation('contact');
    const { t: t4 } = useTranslation('footer');
    return (
        <div className="container">
            <div className="contact-us-nav">
                <ul>
                    <Link className='link' to={'/'}><li className='main-page'>{t2('home')}</li></Link>
                    <span className='vertical-bar'>|</span>
                    <li className='contact'>{t2('contact')}</li>
                </ul>
            </div>
            <div className="contact-us d-flex justify-content-between">
                <div className="contact-us-left">
                    <h3>{t('write to us !')}</h3>
                    <div className="contact-form">
                        <form>
                            <div className="form-top d-flex">
                                <input type="text" placeholder={t3('first name and last name')} />
                                <input type='email' placeholder={t3('e-mail')} />
                            </div>
                            <div className="form-bottom d-flex">
                                <input type="text" placeholder={t3('company name')} />
                                <input type="text" placeholder={t3('phone')} />
                            </div>
                            <textarea className='message' placeholder={t('message')}></textarea>
                        </form>
                    </div>
                    <div className="contact-us-btn">
                        <button>{t3('send')}</button>
                    </div>
                </div>
                <div className="contact-us-right">
                    <h4 className='text-center'>{t2('contact')}</h4>
                    <p>{t4('fatali Khan Khoyski 111A, Baku Azerbaijan')}</p>
                    <div className="number d-flex gap-4">
                        <p>+994(51) 123 45 67</p>
                        <p>+994(12) 123 45 67</p>
                    </div>
                    <p>info@megatexnika.az</p>
                    <p>{t4('schedule (our working hours): Mon-Sat. 10:00 - 19:00')}</p>
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