import React, { useEffect, useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Aos from 'aos';
import 'aos/dist/aos.css';
const ContactUs = () => {
  
    const { t } = useTranslation('contactUs');
    const { t: t2 } = useTranslation('navbar');
    const { t: t3 } = useTranslation('contact');
    const { t: t4 } = useTranslation('footer');
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        companyName: '',
        phone: '',
        message: ''
    });
    const [formErrors, setFormErrors] = useState({});
    const [showThankYouMessage, setShowThankYouMessage] = useState(false);

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setIsFormSubmitted(true);
            setShowThankYouMessage(true);
            setFormData({
                fullName: '',
                email: '',
                companyName: '',
                phone: '',
                message: ''
            });
            setFormErrors({});
            setTimeout(() => {
                setShowThankYouMessage(false);
            }, 5000);
        }

    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (value !== '') {
            setFormErrors({ ...formErrors, [name]: '' });
        } else if (!formErrors[name]) {
            setFormErrors({ ...formErrors, [name]: t3(`please enter your ${name}`) });
        }
    };
    const validateForm = () => {
        let errors = {};
        let isValid = true;
        if (!formData.fullName) {
            errors.fullName = t3('please enter your full name');
            isValid = false;
        }

        if (!formData.email) {
            errors.email = t3('please enter your email');
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = t3('please enter your email');
            isValid = false;
        }
        if (!formData.companyName) {
            errors.companyName = t3('please enter your company name');
            isValid = false;
        }
        if (!formData.phone) {
            errors.phone = t3('please enter your phone number');
            isValid = false;
        }
        if (!formData.message) {
            errors.message = t3('please enter your message');
            isValid = false;
        }

        setFormErrors(errors);
        return isValid;
    };
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
                <div className="contact-us-left" data-aos="fade-right">
                    <h3>{t('write to us !')}</h3>
                    <div className="contact-form">
                        <form onSubmit={handleSubmit}>
                            {formErrors.fullName && <p className="error-message error-name">{formErrors.fullName}</p>}
                            <div className="form-top d-flex">
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder={t3('first name and last name')}
                                    value={formData.fullName}
                                    onChange={handleChange}
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder={t3('email')}
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {formErrors.email && <p className="error-message error-email">{formErrors.email}</p>}
                            </div>
                            {formErrors.companyName && <p className="error-message error-company">{formErrors.companyName}</p>}
                            <div className="form-bottom d-flex">
                                <input
                                    type="text"
                                    name="companyName"
                                    placeholder={t3('company name')}
                                    value={formData.companyName}
                                    onChange={handleChange}
                                />
                                <input
                                    type="text"
                                    name="phone"
                                    placeholder={t3('phone')}
                                    value={formData.phone}
                                    onChange={handleChange}
                                    pattern="[0-9]{10}"
                                />
                                {formErrors.phone && <p className="error-message error-phone">{formErrors.phone}</p>}
                            </div>
                            <textarea
                                className='message'
                                name="message"
                                placeholder={t('message')}
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                            {formErrors.message && <p className="error-message error-msg">{formErrors.message}</p>}
                            {showThankYouMessage && (
                                <p style={{ color: 'green' }}>{t3('thank you for your message!')}</p>
                            )}
                            <div className="contact-us-btn">
                                <button type="submit">{t3('send')}</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="contact-us-right" data-aos="fade-left">
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
    );
};

export default ContactUs;
