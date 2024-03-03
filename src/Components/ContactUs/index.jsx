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
            // Formun gönderim işlemleri burada gerçekleştirilebilir

            // Form gönderildikten sonra form alanlarını temizle
            setFormData({
                fullName: '',
                email: '',
                companyName: '',
                phone: '',
                message: ''
            });

            // Form hatalarını sıfırla
            setFormErrors({});

            // Teşekkür mesajını birkaç saniye sonra kapat
            setTimeout(() => {
                setShowThankYouMessage(false);
            }, 5000); 
        }
        
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        // Form verisini güncelle
        setFormData({ ...formData, [name]: value });
    
        // İlgili hatayı kaldır veya göster
        if (value.trim() !== '') {
            setFormErrors({ ...formErrors, [name]: '' });
        } else if (!formErrors[name]) {
            setFormErrors({ ...formErrors, [name]: t3(`Please enter your ${name}`) });
        }
    };
    
    
    

    const validateForm = () => {
        let errors = {};
        let isValid = true;

        if (!formData.fullName.trim()) {
            errors.fullName = t3('Please enter your full name');
            isValid = false;
        }

        if (!formData.email.trim()) {
            errors.email = t3('Please enter your email');
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = t3('Please enter your email');
            isValid = false;
        }

        if (!formData.companyName.trim()) {
            errors.companyName = t3('Please enter your company name');
            isValid = false;
        }

        if (!formData.phone.trim()) {
            errors.phone = t3('Please enter your phone number');
            isValid = false;
        }

        if (!formData.message.trim()) {
            errors.message = t('Please enter your message');
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
                            <div className="form-top d-flex">
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder={t3('first name and last name')}
                                    value={formData.fullName}
                                    onChange={handleChange}
                                />
                               
                                {formErrors.fullName && <p className="error-message">{formErrors.fullName}</p>}
                                <input
                                    type="email"
                                    name="email"
                                    placeholder={t3('Email')}
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {formErrors.email && <p className="error-message">{formErrors.email}</p>}
                            </div>

                            <div className="form-bottom d-flex">
                                <input
                                    type="text"
                                    name="companyName"
                                    placeholder={t3('Company Name')}
                                    value={formData.companyName}
                                    onChange={handleChange}
                                />
                                {formErrors.companyName && <p className="error-message">{formErrors.companyName}</p>}
                                <input
                                    type="text"
                                    name="phone"
                                    placeholder={t3('Phone')}
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                                {formErrors.phone && <p className="error-message">{formErrors.phone}</p>}
                            </div>
                            <textarea
                                className='message'
                                name="message"
                                placeholder={t('Message')}
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                            {formErrors.message && <p className="error-message">{formErrors.message}</p>}
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
